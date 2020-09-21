var navList = document.getElementById("nav-list");
var navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".dropdown-toggle");

window.onclick = (e) => {
  if (!navbar.contains(e.target)) {
    navbar.classList.remove("newBackground");
    removeAllShow();
  } else navbar.classList.add("newBackground");
};

for (const link of links) {
  link.onclick = () => {
    removeAllShow();
    link.parentElement.classList.add("show");
    link.parentElement.children[1].classList.add("show");
  };
}

const removeAllShow = () => {
  for (let i = 0; i < navList.children.length; i++) {
    navList.children[i].classList.remove("show");
    navList.children[i].children[1].classList.remove("show");
  }
};
