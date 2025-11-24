/* SMOOTH SCROLL */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* TYPING EFFECT */
const typingText = ["Web Developer", "Data Analyst", "Creative Designer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  const element = document.querySelector(".typing");

  if (charIndex < typingText[index].length) {
    element.textContent += typingText[index][charIndex];
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      element.textContent = "";
      charIndex = 0;
      index = (index + 1) % typingText.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();

/* DROPDOWN MENU TOGGLE */
function toggleDropdown() {
  document.querySelector(".dropdown-content").classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

/* EMAIL FUNCTIONALITY */
// Initialize EmailJS
(function() {
  emailjs.init("csc6CWnF3X3SObP1h"); // Replace with your EmailJS public key
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show sending message
    statusMessage.innerHTML = '<span style="color: #00eaff;">Sending email...</span>';
    
    // Send email using EmailJS
    emailjs.sendForm('service_wqhqhzj', 'template_7xy2ysx', this)
      .then(function() {
        statusMessage.innerHTML = '<span style="color: #00ff00;">✅ Email sent successfully!</span>';
        form.reset();
      }, function(error) {
        statusMessage.innerHTML = '<span style="color: #ff0000;">❌ Failed to send email. Please try again.</span>';
        console.log('EmailJS error:', error);
      });
  });
});

/* DARK / LIGHT MODE */
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const icon = document.getElementById("themeIcon");
  icon.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
}
