export{signup}
  import { login } from "./login";
  console.log(login)
let signup = document.getElementById("signUp");
signup.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();
  console.log(nameValue);
  document.getElementById("emailError").textContent=""
let isValid=true;
  if (nameValue === "") {
    // alert("name is required");
    document.getElementById("nameError").textContent="name required"
    isValid=false
  } else if (nameValue.length <= 3) {
    // alert("pls enter  more than 3 char long");
    document.getElementById("nameError").textContent="pls enter  more than 3 char long"
    isValid=false
  }else{
    document.getElementById("nameError").textContent=""
    // isValid=false
  }
  const emailPattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  const checking=emailPattern.test(emailValue)
  console.log(checking);
//   g
  // vamsi123@gmail.com
//   vamsi@tcs.com
  if(emailValue === ""){
    document.getElementById("emailError").textContent="email required"
    isValid=false
    
  }else if(!emailPattern.test(emailValue)){
    document.getElementById("emailError").textContent="email not valid"
    // document.getElementById("emailError").textContent=""
    isValid=false
  }
 
  const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@]).{8,}$/
  if(passwordValue === ""){
    document.getElementById("pswdError").textContent="password required"
    isValid=false
  }else if(!passwordPattern.test(passwordValue)){
    document.getElementById("pswdError").textContent=""
    isValid=false
// Va@11111
  }
  else{
        document.getElementById("pswdError").textContent="Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
    document.getElementById("pswdError").textContent=""
  }
  if(passwordValue !== confirmPasswordValue){
    document.getElementById("CpswdError").textContent="passwords doesnot matched"
    isValid=false
  }
  if(isValid){
    name.value=""
    email.value =""
password.value =""
    confirmPassword.value =""
    const allUsers=JSON.parse(localStorage.getItem("users")) || [];
    allUsers.push({name:nameValue,email:emailValue,password:passwordValue,confirmPassword:confirmPasswordValue})
    localStorage.setItem("users",JSON.stringify(allUsers))
    location.href="../LogIn/Login.html"
  }
});

export{signup}