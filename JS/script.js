const button = document.getElementById('burger-menu-pic')
const menu = document.getElementById('nav-ul')
const links = document.querySelectorAll('.nav-link')


button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu')
})
links.forEach((elem) =>{
    elem.addEventListener('click', () =>{
        menu.classList.remove('mobile-menu')
    })
})