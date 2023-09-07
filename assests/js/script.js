function NavBg() {
   let nav = document.querySelector('#nav')
   let navLink = document.querySelectorAll('#nav-link')
   let scrollValue = window.scrollY
   navLink.forEach(link => {
   if (scrollValue < 100) {
      nav.classList.remove('bgColor')
      link.classList.remove('bgColor')
   } else {
      nav.classList.add('bgColor')
      link.classList.add('bgColor')
      ;
   }})
}
window.addEventListener('scroll' , NavBg)