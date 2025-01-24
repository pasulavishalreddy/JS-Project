export{login}
let login=document.getElementById("LoginForm");
login.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let emailFormValue=document.getElementById("email").value.trim();
    let passwordFormValue=document.getElementById("password").value.trim();
    let storageCrenerials=JSON.parse(localStorage.getItem("users"));
    console.log(storageCrenerials);
    const user=storageCrenerials.find(x=>{
        return x.email === emailFormValue && x.password === passwordFormValue
    })
    console.log(user);
    
    if(user){
        alert("successfully loggedin")
        location.href="../index/index.html"
    }else{
        alert("user not found")
    }
})