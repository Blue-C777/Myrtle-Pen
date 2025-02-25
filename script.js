function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll("main section").forEach(section => {
        section.classList.add("hidden");
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove("hidden");
}
// Slider Functionality
let currentIndex = 0;
const slideDuration = 5000; // 5 seconds
let slideInterval;

const images = document.querySelectorAll(".slider img");
const indicators = document.querySelectorAll(".indicator");

// Function to show a slide with fade-in effect
function showSlide(index) {
    const totalSlides = images.length;
    
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    images.forEach((img, i) => {
        img.classList.remove("active");
        indicators[i].classList.remove("active");
    });

    images[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");
}

// Function to start auto-sliding
function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, slideDuration);
}

// Function to stop auto-sliding (when user interacts)
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Previous & Next Buttons
function prevSlide() {
    stopAutoSlide();
    showSlide(currentIndex - 1);
    startAutoSlide();
}

function nextSlide() {
    stopAutoSlide();
    showSlide(currentIndex + 1);
    startAutoSlide();
}

// Indicator click functionality
indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        stopAutoSlide();
        showSlide(i);
        startAutoSlide();
    });
});

// Start the slider when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
    startAutoSlide();
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
