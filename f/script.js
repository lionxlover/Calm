// Handle FAQ toggle functionality
document.querySelectorAll(".faq-item .question").forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      // Toggle the maxHeight property to create a smooth expand/collapse effect
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
  
  // (Optional) You can include additional JS functionality here that applies across pages
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Calm Zone FAQ page loaded with smooth animations!");
  });
  