// FAQ Toggle Functionality
function toggleFAQ(element) {
  let answer = element.querySelector(".faq-answer");
  let icon = element.querySelector("span");

  if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.innerHTML = "➕";
  } else {
      answer.style.display = "block";
      icon.innerHTML = "➖";
  }
}

// Admin Slider Functionality
let index = 0;
const totalSlides = document.querySelectorAll(".admin-card").length;

function showSlide(index) {
  const slider = document.querySelector(".admin-container");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

// Auto-slide feature (optional)
setInterval(() => {
  nextSlide();
}, 5000); // Changes slide every 5 seconds

// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          let target = document.querySelector(this.getAttribute("href"));
          if (target) {
              target.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});

// Mobile Menu Toggle (if needed)
function toggleMenu() {
  let nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}
function showSlide(index) {
  const slider = document.querySelector(".admin-container");
  slider.style.transform = `translateX(-${index * 100}%)`;
  slider.style.width = "100%"; // Ensure full width
}

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
