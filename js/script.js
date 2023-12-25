const header = document.querySelector("header");
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");

// --------- Sticky NavBar --------- //

function stickyNavBar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavBar);

// --------- Swiper Animations --------- //

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: true,

  // direction: "vertical", // تحديد اتجاه العرض إلى الأعلى

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --------- Open Menu --------- //

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

// --------- More Work --------- //

// JavaScript لتحديد العناصر وتغيير الفئة عند الضغط على الزر
document.getElementById("more-work-btn").addEventListener("click", function () {
  // تحديد البطاقات التي تحمل الفئة hidden
  var hiddenCards = document.querySelectorAll(".hidden");

  // تغيير الفئة من hidden إلى visible
  hiddenCards.forEach(function (card) {
    card.classList.remove("hidden");
  });

  // التحقق من إذا كانت جميع البطاقات قد أظهرت
  var allCardsVisible =
    document.querySelectorAll(".card:not(.hidden)").length ===
    document.querySelectorAll(".card").length;

  // إذا كانت جميع البطاقات قد أظهرت، قم بإخفاء زر "more work"
  if (allCardsVisible) {
    document.getElementById("more-work-btn").style.display = "none";
  }
});
