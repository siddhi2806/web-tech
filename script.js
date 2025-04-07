var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle Dark Mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

document
  .getElementById("darkModeToggle")
  .addEventListener("click", toggleDarkMode);

// Form Validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
  } else {
    alert("Form submitted successfully");
    form.reset();
  }
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$(document).ready(function() {
    // Show the login modal
    $('.login-container button').click(function() {
      $('#loginForm').show();
    });
  
    // Hide the login modal when the close button is clicked
    $('.close').click(function() {
      $('#loginForm').hide();
      $('#registerForm').hide();
    });
  
    // Hide the login modal when clicking outside of the modal
    $(window).click(function(event) {
      if ($(event.target).is('#loginForm')) {
        $('#loginForm').hide();
      }
      if ($(event.target).is('#registerForm')) {
        $('#registerForm').hide();
      }
    });
  
    // Show the register modal when the register link is clicked
    $('#registerLink').click(function(event) {
      event.preventDefault();
      $('#loginForm').hide();
      $('#registerForm').show();
    });
  
    // Handle form submission for register form
    $('#registerForm .modal-content').submit(function(event) {
      event.preventDefault();
      // Add your form submission logic here
      alert('Registration successful');
      $('#registerForm').hide();
      $('#loginForm').show();
    });
  
    // Handle form submission for login form
    $('#loginForm .modal-content').submit(function(event) {
      event.preventDefault();
      // Add your form submission logic here
      alert('Login successful');
      $('#loginForm').hide();
    });
  });