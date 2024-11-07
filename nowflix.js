// JavaScript for the hamburger menu
function toggleMenu() {
    alert("Hamburger menu clicked! Implement further menu options here.");
}

// Optional: Add automatic sliding for the carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(showSlide, 3000);  // Change slide every 3 seconds
