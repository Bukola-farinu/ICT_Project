const params = new URLSearchParams(window.location.search);
const user = params.get("user"); //  null if ?user= is absent
if (user) {
  document.getElementById("welcome").textContent = "Welcome, " + user + "!";
}
