// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    response.textContent =
        "Thank you, " + name + "! Your message was received.";

    contactForm.reset();
});

// Dynamic Year
document.getElementById("year").textContent =
    new Date().getFullYear();

