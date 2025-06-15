let userName = document.getElementById("username");
let title = document.getElementById("title");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let forgotPassword = document.getElementById("forgotPassword");
let confirmPassword = document.getElementById("confirmPassword");
let password = document.getElementById("password");
let login_email = document.getElementById("login_email");
let currentMode = "signIn"; // default mode is Sign In

signIn.onclick = function () {
  if (currentMode !== "signIn") {
    // Switch to Sign In view
    title.innerText = "Sign In";
    userName.style.display = "none";
    forgotPassword.style.display = "block";
    confirmPassword.style.display = "none";
    signUp.style.background = "rgba(225, 225, 225, 0.342)";
    signUp.style.color = "#3c00a0";
    signIn.style.color = "white";
    signIn.style.background = "#3c00a0";

    password.value = "";
    confirmPassword.value = "";

    currentMode = "signIn";
  } else {
    // Already in Sign In view → validate and redirect
    if (login_email.value.trim() && password.value.trim()) {
      window.location.href = "home.html?user=" + encodeURIComponent(userName.value); // redirect
    } else {
      alert("Please fill in your email and password.");
    }
  }
};

signUp.onclick = function () {
  if (currentMode !== "signUp") {
    // Switch to Sign Up view
    title.innerText = "Sign Up";
    userName.style.display = "block";
    forgotPassword.style.display = "none";
    confirmPassword.style.display = "block";
    signUp.style.background = "#3c00a0";
    signUp.style.color = "white";
    signIn.style.color = "#3c00a0";
    signIn.style.background = "rgba(225, 225, 225, 0.342)";

    password.value = "";
    confirmPassword.value = "";

    currentMode = "signUp";
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
        window.location.href = "home.html?user=" + encodeURIComponent(userName.value); // redirect
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
};