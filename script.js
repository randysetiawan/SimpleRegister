const registerForm = document.getElementById("registerForm")

registerForm.addEventListener("submit", register)

function register(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let phone = document.getElementById("phone").value
    let dateOfBirth = document.getElementById("dateOfBirth").value
    let address = document.getElementById("address").value
    let gender = document.getElementById("gender").value
    let profileImage = document.getElementById.files
    let termsCheckboxChecked = document.getElementById("terms").checked
    let age = document.getElementById("age").value
    let income = document.getElementById("income").value
    let color = document.getElementById("color").value

    if(registerValidator.validateLogin()) {

    } else {

    }
}

let registerValidator = (function() {

    function validateLogin() {
        
    }
})