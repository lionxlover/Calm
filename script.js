document.addEventListener("DOMContentLoaded", function () {
  const featureBoxes = document.querySelectorAll(".feature-box");

  function showBoxes() {
      featureBoxes.forEach((box) => {
          const boxTop = box.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (boxTop < windowHeight - 50) {
              box.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", showBoxes);
  showBoxes(); // Run on page load
});
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("nav-active");
}
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const scrollAmount = 300; // Adjust how much it scrolls per click

  // Left button scroll
  leftBtn.addEventListener("click", function () {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Right button scroll
  rightBtn.addEventListener("click", function () {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
