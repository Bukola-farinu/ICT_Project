const params = new URLSearchParams(window.location.search);
const user = params.get("user"); //  null if ?user= is absent
if (user) {
  document.getElementById("welcome").textContent = "Welcome, " + user + "!";
}
let bars = document.getElementById("bars");
// bars.onclick = function () {
//   let nav = document.getElementById("nav");
//   if (nav.style.display === "block") {
//     nav.style.display = "none";
//   } else {
//     nav.style.display = "block";
//   }
// }
let nav = document.getElementById("nav");
bars.addEventListener("click", function () {
  const navVisible = nav.style.display === "block";

  nav.style.display = navVisible ? "none" : "block";
  bars.style.display = navVisible ? "block" : "none";
})
nav.addEventListener("mouseleave", function () {
  nav.style.display = "none";
    bars.style.display = "block";
})