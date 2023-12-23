/*================= menu icon navbar =================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*================= scroll sections active link =================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
      })
    }
  });

/*================= sticky navbar =================*/
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

/*================= remove menu icon navbar whe click navbar link (scroll) =================*/
  //menuIcon.classList.toggle('bx-x');
  //navbar.classList.toggle('active');
};

/*================= swiper =================*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*================= dark light mode =================*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun')
  darkModeIcon.classList.toggle('bx-moon')
  document.body.classList.toggle('dark-mode');
}

/*================= Multiple Text =================*/

document.addEventListener('DOMContentLoaded', function () {
  const firstText = document.getElementById('firstText');
  const secondText = document.getElementById('secondText');

  function toggleText() {
      firstText.style.display = (firstText.style.display === 'none' || firstText.style.display === '') ? 'block' : 'none';
      secondText.style.display = (secondText.style.display === 'none' || secondText.style.display === '') ? 'block' : 'none';
  }

  // Mostrar el primer texto de inmediato
  firstText.style.display = 'block';

  // Configurar un intervalo para cambiar entre los textos cada 3 segundos
  setInterval(toggleText, 5000);
});