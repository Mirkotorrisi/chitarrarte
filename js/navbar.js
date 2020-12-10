let navList = document.getElementById("nav-list");
let navbar = document.getElementById("nav");
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
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.opacity = "1.0";
  } else {
    navbar.style.opacity = "0.0";
  }
  prevScrollpos = currentScrollPos;
  if (
    navbar.offsetTop + navbar.offsetHeight >
    document.getElementById("white-part").offsetTop
  ) {
    for (const iterator of document.getElementsByClassName("reverse")) {
      iterator.classList.add("black");
    }
  } else {
    for (const iterator of document.getElementsByClassName("reverse")) {
      iterator.classList.remove("black");
    }
  }
};
