const header = document.querySelector("header");

window.addEventListener("scroll", function () {
   header.classList.toggle("sticky", window.scrollY > 70);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('open');
};

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('open');
};



const sr = ScrollReveal({
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true
});

sr.reveal('.home-text', { delay: 100, origin: 'top' });
sr.reveal('.home-img', { delay: 300, origin: 'top' });
sr.reveal('.about, .services, .portfolio,.tabContainer, .contact', { delay: 150, origin: 'top' });



var tabButtons = document.querySelectorAll(
   ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
   tabButtons.forEach(function (node) {
      node.style.backgroundColor = "";
      node.style.color = "";
   });
   tabButtons[panelIndex].style.backgroundColor = colorCode;
   tabButtons[panelIndex].style.color = "#a6bbcc";
   tabPanels.forEach(function (node) {
      node.style.display = "none";
   });
   tabPanels[panelIndex].style.display = "block";
}
showPanel(0);


document.addEventListener("DOMContentLoaded", function () {
   const slides = document.querySelectorAll(".slides img");
   const prevBtn = document.querySelector(".prevBtn");
   const nextBtn = document.querySelector(".nextBtn");
   let currentSlide = 0;

   function showSlide(index) {
      slides.forEach((slide, i) => {
         if (i === index) {
            slide.style.display = "block";
         } else {
            slide.style.display = "none";
         }
      });
   }

   showSlide(currentSlide);

   prevBtn.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
   });

   nextBtn.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
   });
});


let popup = document.getElementById("popup");

function openPopup() {
   popup.classList.add("open-popup");
}
function closePopup() {
   popup.classList.remove("open-popup");
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("light-theme");
   var logo = document.querySelector('.logo');
   if (logo.innerText === 'dark') {
      logo.innerText = 'light';
   } else {
      logo.innerText = 'dark';
   }
}

