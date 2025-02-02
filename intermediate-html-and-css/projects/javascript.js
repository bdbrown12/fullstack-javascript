const password = document.getElementById("password");
const confirmPasword = document.getElementById("confirm-password");

confirmPasword.addEventListener("input", () => {
    if (password.value != confirmPasword.value){
        confirmPasword.setCustomValidity("Passwords do not match!");
    } else{
        confirmPasword.setCustomValidity("");
    }
});

