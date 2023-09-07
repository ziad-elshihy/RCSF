function NavBg() {
   let nav = document.querySelector('#nav')
   let navLink = document.querySelector('#nav-link')
   console.log(navLink)
   let scrollValue = window.scrollY
   if (scrollValue < 150) {
      nav.classList.remove('bgColor')
      navLink.classList.remove('bgColor')
   } else {
      nav.classList.add('bgColor')
      navLink.classList.add('bgColor')
   }
}
window.addEventListener('scroll' , NavBg)