<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Portfolio Website HTML CSS</title>
   <link rel="stylesheet" href="./gos.css">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<style>
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      scroll-behavior: smooth;
      font-family: "Poppins", sans-serif;
   }

   :root {
      --bg-color: #1d1e23;
      --bg-footer-color: #27282d;
      --main-color: #a6bbcc;
      --text-color: #fff;

      --h1-font: 4.6rem;
      --h2-font: 3.7rem;
      --p-font: 1rem;
   }

   .light-theme {
      --bg-color: #a6bbcc;
      --main-color: #1d1e23;
      --text-color: black;
      --bg-footer-color: #bed0df;
   }


   body {
      background-color: var(--bg-color);
      color: var(--text-color);
   }

   header {
      position: fixed;
      width: 100%;
      top: 0;
      right: 0;
      z-index: 1000;
      padding: 38px 19%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition: all .7s;
   }

   .logo {
      display: flex;
      align-items: center;
      color: var(--text-color);
      font-size: 28px;
      font-weight: 600;
      border: 0;
   }

   .navbar {
      display: flex;
   }

   .navbar a {
      margin: 0 25px;
      padding: 4px;
      color: var(--text-color);
      font-size: var(--p-font);
      font-weight: 400;
      border-bottom: 2px solid transparent;
      transition: all .7s;
   }

   .navbar a:hover {
      border-bottom: 2px solid var(--main-color);
      color: var(--main-color);
   }

   #menu-icon {
      font-size: 34px;
      cursor: pointer;
      z-index: 1001;
      display: none;

   }


   /* Add your existing CSS here */

   section {
      padding: 40px 19% 30px;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.4s ease-out;
   }

   section.reveal {
      opacity: 1;
      transform: translateY(0);
   }

   .home {
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 35px;


   }

   .home-img {
      height: 460px;
      width: 400px;
      object-fit: contain;

   }

   .home-img img {
      width: 100%;
      height: auto;
      border-radius: 5%;
   }

   .home-text {
      padding: top 60px;
   }

   .home-text h5 {
      font-size: 20px;
      font-weight: 500;
   }

   .home-text h1 {
      margin: 15px 0;
      font-size: var(--h1-font);
      color: var(--main-color);
      line-height: 1.1;
      font-weight: 800;

   }

   .social {
      margin-bottom: 30px;

   }

   .social a:first-child {
      font-size: var(--p-font);
      color: var(--text-color);
   }

   .social i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      background: var(--bg-color);
      color: var(--main-color);
      border-radius: 50%;
      margin-right: 15px;
      transition: all .7s;
   }

   .social i:hover {
      box-shadow: 0 0 30px var(--main-color);
   }

   .button a {
      display: inline-block;
      padding: 10px 22px;
      background: var(--main-color);
      color: var(--bg-color);
      font-size: 14px;
      font-weight: 600;
      border: 1px solid transparent;
      border-radius: 8px;
      transition: all .7s;
   }

   .button a:hover {
      box-shadow: 0 0 20px var(--main-color);
   }

   .button a.btn2 {
      background: transparent;
      border: 1px solid var(--main-color);
      color: var(--main-color);
      margin-left: 20px;
   }

   .button i {
      margin-right: 7px;

   }

   header.sticky {
      background: var(--bg-footer-color);
      padding: 10px 19%;
   }

   .h-main {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      margin-bottom: 20px;

   }

   .h-text h2 {
      font-size: var(--h2-font);
      color: var(--main-color);
      font-weight: 700;
   }

   .h-button a {
      display: inline-block;
      font-size: 18px;
      color: var(--text-color);
      transition: all .7s;

   }

   .h-button i {
      margin-left: 6px;

   }

   .h-button a:hover {
      transform: translateY(-5px);
      color: var(--main-color);

   }

   .center p {
      font-size: var(--p-font);
      padding: 0 120px;
      line-height: 32px;
   }

   .about-content {

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-items: center;
      text-align: center;
      gap: 2rem;
      margin-top: 4rem;
   }

   .box h3 {
      font-size: 27px;
      font-weight: 600;
      margin-bottom: 5px;

   }

   .box a {
      border-bottom: 2px solid var(--main-color);
      color: var(--main-color);
      font-size: 14px;
   }

   .work-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, auto));
      align-items: center;
      gap: 2rem;
      margin-top: 4rem;

   }

   .row img {
      height: auto;
      width: 100%;
      border-radius: 12px;
      margin-bottom: 1.4rem;

   }

   .row {
      background: var(--bg-footer-color);
      border-radius: 12px;
      border: 1px solid transparent;
      padding: 15px 20px;
      transition: all .5s ease;

   }

   .main-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
   }

   .row h5 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 5px;
   }

   .row h4 {
      font-size: 17px;
      font-weight: 600;

   }

   .row i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      font-size: 20px;
      border-radius: 50%;
      background: var(--main-color);
      color: var(--bg-color);
   }

   .row:hover {
      border: 1px solid var(--main-color);
      transform: translateY(-3px) scale(1.02);
      cursor: pointer;

   }

   .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4.3rem;
   }

   .contact-form form {
      position: relative;
      width: 600px;
   }

   form input,
   form textarea {
      width: 100%;
      padding: 20px;
      border: none;
      outline: none;
      background: var(--bg-footer-color);
      color: var(--text-color);
      margin-bottom: 20px;
      border-radius: 10px;

   }

   form input::placeholder,
   form textarea::placeholder {
      color: #fcfc;
      font-size: 15px;
   }

   form textarea {
      resize: none;
   }

   form .send-btn {
      display: inline-block;
      padding: 11px 25px;
      background: var(--main-color);
      border: 2px solid var(--main-color);
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      transition: all .6s;
      width: 30%;
   }

   form .send-btn:hover {
      background: transparent;
      color: var(--main-color);
      box-shadow: 0 0 20px var(--main-color);
      cursor: pointer;

   }

   .end-content {
      padding: 20px 19%;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
   }

   .copytight p {
      font-size: 14px;
      font-weight: 400;
      color: var(--text-color);
   }

   .scroll-top i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--main-color);
      color: var(--bg-color);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 27px;
   }

   .title {
      font-family: sans-serif;
      color: #dc2d5e;
      text-align: center;
   }

   .tabContainer {
      width: 100%;
      height: 400px;
   }

   .tabContainer .buttonContainer {
      height: 15%;
   }

   .tabContainer .buttonContainer button {
      width: 25%;
      height: 100%;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 10px;
      font-family: sans-serif;
      font-size: 18px;
      background-color: #eee;
   }

   .tabContainer .buttonContainer button:hover {
      background-color: #d7d4d4;
   }

   .tabContainer .tabPanel {
      height: 85%;
      background-color: gray;
      color: white;
      text-align: center;
      padding-top: 105px;
      box-sizing: border-box;
      font-family: sans-serif;
      font-size: 22px;
      display: none;
   }


   .slider {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
   }

   .slider .slides {
      display: flex;
   }

   .slider .slides img {
      width: 100%;
      height: 500px;
      object-fit: cover;
   }

   .slider button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 20px;
   }

   .slider .prevBtn {
      left: 0;
   }

   .slider .nextBtn {
      right: 0;
   }


   .popup {
      width: 400px;
      background: #fff;
      border-radius: 6px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.1);
      text-align: center;
      padding: 0 30px 30px;
      color: #333;
      visibility: hidden;
      transition: transform 0.4s, top 0.4s;
   }

   .open-popup {
      visibility: visible;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
   }

   .popup img {
      width: 100px;
      margin-top: -50px;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
   }

   .popup h2 {
      font-size: 38px;
      font-weight: 500;
      margin: 30px 0 10px;
   }

   .popup button {
      width: 100%;
      margin-top: 50px;
      padding: 10px 0;
      background: var(--main-color);
      color: #fff;
      border: 0;
      outline: none;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
   }

   .footer {
      height: 300px;
      background-color: var(--bg-footer-color);
      width: 100%;
      margin-bottom: 21px;
   }

   .footer-content {
      width: 100%;
      height: 100%;
   }

   .footer-left {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
   }

   .footer-left .social a {
      font-weight: 600;
      font-size: 20px;
      margin-right: 10px;
   }

   .footer-content h3 {
      font-size: 50px;
   }

   @media (max-width: 1650px) {
      header {
         padding: 14px 8%;
      }

      header.sticky {
         padding: 9px 8%;
      }

      section {
         padding: 50px 8% 50px;
      }

      .end-content {
         padding: 15px 8%;

      }

   }

   @media (max-width: 1220px) {
      header {
         padding: 12px 4%;
      }

      header.sticky {
         padding: 9px 4%;
      }

      section {
         padding: 50px 4% 50px;
      }

      .end-content {
         padding: 15px 4%;
      }

      .home {
         height: 85vh;
      }

   }

   @media (max-width: 1100px) {
      :root {
         --h1-font: 5.2rem;
         --h2-font: 3.1rem;
         --p-font: 15px;
      }
   }

   @media (max-width: 1050px) {
      .home-img {
         margin: 0 auto;
         height: 350px;
         width: 350px;
      }

      .home {
         height: auto;
         display: flex;
         flex-wrap: wrap;
         gap: 50px;
      }
   }

   @media (max-width: 740px) {
      .center p {
         padding: 0;
      }
   }

   @media (max-width: 600px) {
      #menu-icon {
         display: block;
      }

      :root {
         --h1-font: 3.8rem;
         --h2-font: 2.5rem;
         --p-font: 14px;
      }

      .navbar {
         position: absolute;
         top: 100%;
         right: -100%;
         width: 270px;
         height: 100vh;
         display: flex;
         flex-direction: column;
         background: #25262d;
         padding: 20px 10px;
         gap: 0.6rem;
         text-align: left;
         transition: all .7s;
      }

      .navbar a {
         font-size: 20px;
         font-weight: 500;
      }

      .navbar.open {
         right: 0;
      }

      form .send-btn {
         width: 50%;
      }

   }
</style>

<body>
   <header>
      <a href="#" class="logo" onclick="myFunction()">Dark</a>
      <ul class="navbar">
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#work">Work</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="bx bx-menu" id="menu-icon"></div>
   </header>
   <section class="home" id="home">
      <div class="home-text">
         <h5>Hello, I'm Emad,</h5>
         <h1>Full stack <br> Developer</h1>

         <div class="button">
            <a href="#" class="btn2" onclick="openPopup()">Model</a>
         </div>
      </div>
      <div class="home-img">
         <img src="https://cdn.pixabay.com/photo/2023/02/08/14/02/ai-generated-7776701_960_720.jpg" alt="">
      </div>
      <div class="popup" id="popup">
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Z887uufI1eGoh28uZFIeaapWCHnwlVCLQF2mHiUeUg&s" />
         <h2>Thank You!</h2>
         <p>Your details has been successfully submitted. Thanks!</p>
         <button type="button" onclick="closePopup()">OK</button>
      </div>
   </section>
   <section class="about" id="about">
      <div class="center">
         <div class="h-main">
            <div class="h-text">
               <h2>about</h2>
            </div>
            <div class="h-button">
               <a href="#" class="hh-btn">Read me</a>
            </div>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum odit ipsa, facere labore nemo
            earum nobis repellendus laborum vero necessitatibus perferendis molestias, sapiente est rerum dolores minus!
            Nihil, nemo.</p>
      </div>
      <div class="about-content">
         <div class="box">
            <h3>Front-End</h3>
            <a href="#">60+ Hours Experience</a>
         </div>
         <div class="box">
            <h3>Python</h3>
            <a href="#">60+ Hours Experience</a>
         </div>
         <div class="box">
            <h3>Machine Learning</h3>
            <a href="#">60+ Hours Experience</a>
         </div>
         <div class="box">
            <h3>Front-End</h3>
            <a href="#">60+ Hours Experience</a>
         </div>
      </div>
   </section>
   <section class="work" id="work">
      <div class="center">
         <div class="h-main">
            <div class="h-text">
               <h2>work</h2>
            </div>
            <div class="h-button">
               <a href="#" class="hh-btn">See all</a>
            </div>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum odit ipsa, facere labore nemo
            earum nobis repellendus laborum vero necessitatibus perferendis molestias, sapiente est rerum dolores minus!
            Nihil, nemo.</p>
      </div>
      <div class="work-content">
         <div class="row">
            <img src="https://lingkaran.co/blog/wp-content/uploads/2021/09/Banner_Portfolio-01.png" alt="">
            <div class="main-row">
               <div class="row-text">
                  <h5>HTML - CSS - JS</h5>
                  <h4>DESIGN PORTFOLIO</h4>
               </div>
               <div class="row-icon">
                  <i class="ri-github-fill"></i>
               </div>
            </div>
         </div>
         <div class="row">
            <img src="https://lingkaran.co/blog/wp-content/uploads/2021/09/Banner_Portfolio-01.png" alt="">
            <div class="main-row">
               <div class="row-text">
                  <h5>HTML - CSS - JS</h5>
                  <h4>DESIGN PORTFOLIO</h4>
               </div>
               <div class="row-icon">
                  <i class="ri-github-fill"></i>
               </div>
            </div>
         </div>
         <div class="row">
            <img src="https://lingkaran.co/blog/wp-content/uploads/2021/09/Banner_Portfolio-01.png" alt="">
            <div class="main-row">
               <div class="row-text">
                  <h5>HTML - CSS - JS</h5>
                  <h4>DESIGN PORTFOLIO</h4>
               </div>
               <div class="row-icon">
                  <i class="ri-github-fill"></i>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="contact" id="contact">
      <div class="center">
         <div class="h-main">
            <div class="h-text">
               <h2>contact</h2>
            </div>
            <div class="h-button">
               <a href="#" class="hh-btn">Ping me</a>
            </div>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum odit ipsa, facere labore nemo
            earum nobis repellendus laborum vero necessitatibus perferendis molestias, sapiente est rerum dolores minus!
            Nihil, nemo.</p>
         <div class="contact-form" id="cuntactForm">
            <form action="">
               <input type="text" id="name" placeholder="Your name" required>
               <input type="text" id="email" placeholder="Email address.." required>
               <textarea cols="30" id="message" rows="10" placeholder="Write a message here..." required></textarea>
               <input type="submit" id="contactForm" value="Send Message" class="send-btn">
            </form>
         </div>
      </div>
   </section>
   <section class="tabContainer">
      <div class="h-text">
         <h2>Tabs</h2>
      </div>
      <div class="buttonContainer">
         <button onclick="showPanel(0)">Tab 1</button>
         <button onclick="showPanel(1)">Tab 2</button>
         <button onclick="showPanel(2)">Tab 3</button>
         <button onclick="showPanel(3)">Tab 4</button>
      </div>
      <div class="tabPanel">Tab 1:Content</div>
      <div class="tabPanel">Tab 2:Content</div>
      <div class="tabPanel">Tab 3:Content</div>
      <div class="tabPanel">Tab 4:Content</div>
   </section>
   <div class="h-text" style="margin-left: 8%; margin-top: 10vh;">
      <h2>slider</h2>
   </div>

   <section class="slider">

      <div class="slides">
         <img src="https://roflzoo.com/pics/201402/oh-hai.jpg" alt="Photo 1" />
         <img
            src="https://img.freepik.com/premium-photo/squirrel-wearing-oversized-sunglasses-tiny-ai-generated_731790-18962.jpg"
            alt="Photo 2" />
         <img
            src="https://imageio.forbes.com/specials-images/imageserve/62dac39871a00c4c7fc1eca1/An-alpaca-looking-like-it-is-smoking-a-cigar--Comedy-Pets-Photo-Awards/960x0.jpg?height=711&width=711&fit=bounds"
            alt="Photo 3" />
      </div>
      <button class="prevBtn">&#60;</button>
      <button class="nextBtn">&#62;</button>
   </section>
   <section class="footer">
      <div class="footer-content">
         <div class="footer-left">
            <h3>Get in Touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero animi a optio aliquam voluptates
               ipsum.</p>
            <div class="social">
               <a href="#"></a>
               <a href="#"></i></a>
               <a href="#"></i></a>
            </div>
         </div>
         <div class="footer-right"></div>
      </div>
   </section>
   <div class="end-content">
      <a href="#home" class="scroll-top"><i class="ri-arrow-up-s-fill"></i></a>
      <div class="copytight">
         <p>© 2024 Emad . All RIGHTS RESERVED </p>
      </div>
      <div class="copytight">
         <p>DEVELOPED BY TAHMID</p>
      </div>
   </div>
   <script src="https://unpkg.com/scrollreveal"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
   <script>const firebaseConfig = {
         apiKey: "AIzaSyDFXqBPftJk9rKGgtBAp78rJwmHOVBJjH8",
         authDomain: "cuntactform.firebaseapp.com",
         databaseURL: "https://cuntactform-default-rtdb.firebaseio.com",
         projectId: "cuntactform",
         storageBucket: "cuntactform.appspot.com",
         messagingSenderId: "552818156513",
         appId: "1:552818156513:web:b20ab037ef03b0e43568a0"
      };



      firebase.initializeApp(firebaseConfig);

      // reference your database
      var contactFormDB = firebase.database().ref("cuntactForm");

      document.getElementById("cuntactForm").addEventListener("submit", submitForm);

      function submitForm(e) {
         e.preventDefault();

         var name = getElementVal("name");
         var email = getElementVal("email");
         var message = getElementVal("message");

         saveMessages(name, email, message);

         //   enable alert
         document.querySelector(".alert").style.display = "block";

         //   remove the alert
         setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
         }, 3000);
         name.value = ''
         email.value = ''
         message.value = ''

         //   reset the form
         document.getElementById("cuntactForm").reset();
      }

      const saveMessages = (name, email, message) => {
         var newContactForm = contactFormDB.push();

         newContactForm.set({
            name: name,
            email: email,
            msgContent: message,
         });
      };

      const getElementVal = (id) => {
         return document.getElementById(id).value;
      };

   </script>
   <script>const header = document.querySelector("header");

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

   </script>
</body>

</html>
