var navLink = document.querySelector(".nav-link");
var navbar = document.querySelector(".navbar");

navLink.onclick = changeColor;

function changeColor() {
  navbar.classList.add("newBackground");
}

window.addEventListener("click", function (e) {
  if (!navbar.contains(e.target)) {
    navbar.classList.remove("newBackground");
  }
});
