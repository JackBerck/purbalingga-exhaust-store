// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    if (header.classList.contains("absolute")) {
      header.classList.remove("absolute");
    }
    header.classList.add("navbar-fixed");
  } else {
    if (!header.classList.contains("absolute")) {
      header.classList.add("absolute");
    }
    header.classList.remove("navbar-fixed");
  }
};

// Max Words on Products Description
const paragraphs = document.querySelectorAll(".product-description");
const maxWords = 8;
document.addEventListener("DOMContentLoaded", function () {
  paragraphs.forEach((paragraph) => {
    let text = paragraph.textContent;
    let words = text.trim().split(/\s+/);

    if (words.length > maxWords) {
      let truncatedText = words.slice(0, maxWords).join(" ") + "...";
      paragraph.textContent = truncatedText;
    }
  });
});

// Profile
const profile = document.getElementById("profile-button");
const profileMenu = document.getElementById("profile-menu");
profile.addEventListener("click", function () {
  profile.classList.toggle("profile-active");
  profileMenu.classList.toggle("hidden");
});
