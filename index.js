
const passWordEL = document.getElementById("password")
const passwordOutputEL = document.getElementById("password-output")


passWordEL.addEventListener("blur", function() {

 if( passWordEL.value !== "password123") {
    passwordOutputEL.textContent = "* password do not match"
    passwordOutputEL.style.display = "block"
 } else {
    passwordOutputEL.style.display = "hidden"
 }
 
});