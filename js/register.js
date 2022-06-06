console.log("validation.js loaded");

function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password-repeat").value;

    if (password.length != 0) {
        if (password === confirmPassword) {
            alert("Passwords Match");
        }
        else {
            alert("Passwords Don't Match");
        }
    }
}
