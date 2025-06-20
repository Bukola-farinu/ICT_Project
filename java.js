let userName = document.getElementById("username");
let title = document.getElementById("title");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let forgotPassword = document.getElementById("forgotPassword");
let confirmPassword = document.getElementById("confirmPassword");
let password = document.getElementById("password");
let login_email = document.getElementById("login_email");
let currentMode = "signIn"; // default mode is Sign In
let hidePassword = document.getElementById("hidePassword");
let showPassword = document.getElementById("showPassword");
let hideConfirmPassword = document.getElementById("hideConfirmPassword");
let showConfirmPassword = document.getElementById("showConfirmPassword");

signIn.onclick = function () {
  if (currentMode !== "signIn") {
    // Switch to Sign In view
    title.innerText = "Sign In";
    login_email.style.display = "none";
    forgotPassword.style.display = "block";
    confirmPassword.style.display = "none";
    signUp.style.background = "rgba(225, 225, 225, 0.342)";
    signUp.style.color = "rgb(22, 86, 99)";
    signIn.style.color = "white";
    signIn.style.background = "rgb(22, 86, 99)";

    password.value = "";
    confirmPassword.value = "";
    
    currentMode = "signIn";
    hideConfirmPassword.style.display = "none";
    showConfirmPassword.style.display = "none";
    
  } else {
    // Already in Sign In view → validate and redirect
    if (userName.value.trim() && password.value.trim()) {
      window.location.href =
      "home.html?user=" + encodeURIComponent(userName.value); // redirect
    } else {
      alert("Please fill in your email and password.");
    }
  }
};

signUp.onclick = function () {
  if (currentMode !== "signUp") {
    // Switch to Sign Up view
    title.innerText = "Sign Up";
    login_email.style.display = "block";
    forgotPassword.style.display = "none";
    confirmPassword.style.display = "block";
    signUp.style.background = "rgb(22, 86, 99)";
    signUp.style.color = "white";
    signIn.style.color = "rgb(22, 86, 99)";
    signIn.style.background = "rgba(225, 225, 225, 0.342)";

    password.value = "";
    confirmPassword.value = "";

    currentMode = "signUp";
    hideConfirmPassword.style.display = "block";
    showConfirmPassword.style.display = "block";
  } else {
    // Already in Sign Up view → validate and redirect
    if (
      userName.value.trim() &&
      login_email.value.trim() &&
      password.value.trim() &&
      confirmPassword.value.trim()
    ) {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
      } else {
        window.location.href =
          "home.html?user=" + encodeURIComponent(userName.value); // redirect
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
};

showPassword.onclick = function () {
  if (password.type === "text") {
    password.type = "password";
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "visible";
  }
};
hidePassword.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    showPassword.style.visibility = "visible";
    hidePassword.style.visibility = "hidden";
  } 
};
// Confirm Password toggle functionality
showConfirmPassword.onclick = function () {
  if (confirmPassword.type === "text") {
    confirmPassword.type = "password";
    showConfirmPassword.style.visibility = "hidden";
    hideConfirmPassword.style.visibility = "visible";
  }
};
hideConfirmPassword.onclick = function () {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    showConfirmPassword.style.visibility = "visible";
    hideConfirmPassword.style.visibility = "hidden";
  } 
};
