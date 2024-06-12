const firebaseConfig = {
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

