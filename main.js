import './style.css';
function closeMenu(e) {
    e.textContent = e.textContent.replace('close', 'menu');
    document.body.style.overflow = 'visible';
    document.querySelector('.menu-elements').style.display = 'none';
}

document.querySelector('.menu').addEventListener('click', (e)=>{

    if (e.target.textContent.search('menu') > -1)
    {
        e.target.textContent = e.target.textContent.replace('menu', 'close');
        document.body.style.overflow = 'hidden';
        document.querySelector('.menu-elements').style.display = 'flex';
    }
    else
    {
        closeMenu(e.target);
    }
})

if (window.matchMedia('(max-width: 810px)').matches)
{
    document.querySelectorAll('.nav-element > a').forEach(element => {
        element.addEventListener('click', ()=>{
            console.log(document.querySelector('.menu'));
            closeMenu(document.querySelector('.menu'));
        })
    })

}