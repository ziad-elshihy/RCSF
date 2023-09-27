export default function NavBg() {
   let icons = document.querySelectorAll('.icon')
   let header = document.querySelector('.header')
   let navLink = document.querySelectorAll('.main-link')
   let scrollValue = window.scrollY
   icons.forEach(icon => {
      if (scrollValue < 100) {
         icon.classList.remove('bgColor')
      } else {
         icon.classList.add('bgColor')
      }
   });
   navLink.forEach(link => {
      if (scrollValue < 100) {
         header.classList.remove('bgColor')
         link.classList.remove('bgColor')
      } else {
         header.classList.add('bgColor')
         link.classList.add('bgColor')
      }
   })
}
window.addEventListener('scroll', NavBg)