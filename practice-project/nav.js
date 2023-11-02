const navbar = document.querySelector(".navbar");

window.addEventListener("resize", () => {
  let WindowWidth = window.innerWidth;

  if (WindowWidth > 768) {
    navbarCollapse.classList.remove("showNavbar");
    navbar.classList.remove("showNavbar");
    if (navbarTogglerIcon.contains("fa-times")) {
      navbarTogglerIcon.remove("fa-times");
      navbarTogglerIcon.add("fa-bars");
    }
  }
});

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-nav");
let navbarTogglerIcon = navbarToggler.querySelector("i").classList;
navbarToggler.onclick = () => {
  navbarCollapse.classList.toggle("showNavbar");
  navbar.classList.toggle("showNavbar");

  if (navbarTogglerIcon.contains("fa-bars")) {
    navbarTogglerIcon.remove("fa-bars");
    navbarTogglerIcon.add("fa-times");
  } else {
    navbarTogglerIcon.remove("fa-times");
    navbarTogglerIcon.add("fa-bars");
  }
};

// todo: Update Add remove active from nav items

// const navItems = document.querySelectorAll("");
