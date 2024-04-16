function errorMessage(e){
    e.preventDefault()
    console.log(e)
    const validEmail = document.getElementById("email").value;
    const error = "Please enter a valid email address"
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(validEmail, isValidEmail.test(validEmail))
    if (isValidEmail.test(validEmail)) {
        document.querySelector(".error").style.display = "none";
        document.getElementById("email").classList.remove("errorColor")
         window.location.assign("./success.html")
    }else{
        document.querySelector(".error").style.display = "block";
        document.getElementById("email").classList.add("errorColor")
     
        
    }
    

}  


document.querySelector("form").addEventListener("submit", errorMessage)