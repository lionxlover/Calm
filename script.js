document.addEventListener("DOMContentLoaded", function() {
    console.log("Calm Zone Home Page Loaded.");
    
    // Ripple effect for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        // Create span element for ripple effect
        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        // Remove any existing ripple
        const ripple = btn.getElementsByClassName('ripple')[0];
        if (ripple) ripple.remove();
        
        btn.appendChild(circle);
      });
    });
  });
