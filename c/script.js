// When the form is submitted, show a thank-you alert and reset the form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
  
  // Optional: Add more interactive JavaScript if needed
  document.addEventListener("DOMContentLoaded", function () {
    // For example, you might add further animations or interactions here
    console.log("Page loaded with smooth animations!");
  });
  