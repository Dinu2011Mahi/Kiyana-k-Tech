
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});


const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
});

const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        navContainer.style.padding    = "11px 30px";
        navContainer.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        navContainer.style.padding    = "";
        navContainer.style.background = "";
    }
});


const serviceSelect = document.getElementById("serviceSelect");
const contactForm   = document.getElementById("cform");

// Change text color when a service is picked
serviceSelect.addEventListener("change", function () {
    serviceSelect.classList.add("filled");
});

// Handle submit
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button[type='submit']");

    submitBtn.textContent     = "✅ Message Sent!";
    submitBtn.style.background = "#22c55e";

    setTimeout(function () {
        submitBtn.textContent     = "Send Message ✉️";
        submitBtn.style.background = "";
        contactForm.reset();
        serviceSelect.classList.remove("filled");
    }, 3000);
});