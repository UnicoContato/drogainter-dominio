// Header Show/Hide on Scroll
let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add("-translate-y-full");
    } else {
        header.classList.remove("-translate-y-full");
    }
    lastScrollY = window.scrollY;
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    root: null,
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Modal Logic
const modal = document.getElementById("privacy-modal");

function toggleModal() {
    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
}