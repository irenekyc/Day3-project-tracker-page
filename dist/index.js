const mobileMenuBtn = document.getElementById('open-modal')
const mobileMenuBtnClass = mobileMenuBtn.classList
const closeMobileMenu = document.getElementById('close-modal')
const closeMobileMenuClass = closeMobileMenu.classList
const mobileMenu = document.getElementById('mobile-menu')
const navbar = document.querySelector('nav')

navbar.addEventListener('click', (e)=>{
    console.log(e.target.id)
    if(e.target.id === "open-modal" || e.target.id === "close-modal"){
         mobileMenuBtnClass.toggle('hide-on-click')
         closeMobileMenuClass.toggle('hide-on-click')
        return mobileMenu.classList.toggle('mobile-menu')
    }

 
})