
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_UlrcZsDh7q18mo6ttMxBHCbfeJNcRFU",
  authDomain: "js-project-16568.firebaseapp.com",
  projectId: "js-project-16568",
  storageBucket: "js-project-16568.firebasestorage.app",
  messagingSenderId: "27259777910",
  appId: "1:27259777910:web:73b00d9c0c437820f7c057",
  measurementId: "G-MZ5KCM1D28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  let signup=document.getElementById("signupbtn");
  signup.addEventListener("click",(e)=>{
    e.preventDefault()
    // let signupmodal=document.getElementById("signupModal");
    // console.log(signupmodal);
  let signupmodal=new bootstrap.Modal(document.getElementById("signupModal"));
  signupmodal.show()

  let signupbtn=document.getElementById("signup-btn");
  signupbtn.addEventListener("click",()=>{

  let Signupname=document.getElementById("signup-name").value.trim();
  let Signupemail=document.getElementById("signup-email").value.trim();
  let Signuppassword=document.getElementById("signup-password").value.trim();
  let Signupcpassword=document.getElementById("confirm-password").value.trim();

    if(Signupname==""||Signupemail==""||Signupemail==""||Signuppassword==""||Signupcpassword==""){
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter All Fields!",
      }).then(()=>{
        signupmodal.show()
      })
    }

    Swal.fire({
      title: "Sucessfully Signed!",
      icon: "success",
      draggable: true
    });

  })
      
  })

  // let login=document.getElementById("Loginbtn");
  //   login.addEventListener("click",(e)=>{
  //     e.preventDefault()
  //   let loginmodal=new bootstrap.Modal(document.getElementById("loginModal"))
  //   loginmodal.show()
  // })

 