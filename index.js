
const navLink = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLink.forEach(nav => {

    const linkPage = nav.getAttribute("href");

    if (linkPage === currentPage) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }

});



const burgerMenuBtn = document.querySelector(".burger-container");
const navMenuburger = document.querySelector(".navmenu-burger");

burgerMenuBtn.addEventListener("click",()=>{
    burgerMenuBtn.classList.toggle("active")
    navMenuburger.classList.toggle("show");

});



// ABOUT FOR COUNTER UP
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix;

    let count = 0;

    const duration = 1500;
    const increment = target / (duration / 30);

    const updateCounter = () => {

        count += increment;

        if (count < target) {

            counter.textContent = Math.floor(count) + suffix;

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target + suffix;

        }
    };

    updateCounter();
};

// FOR SCROLLING ANIMATION
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {
    observer.observe(counter);
});
// ================================================//



const form = document.querySelector("form");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const sendMessageText = document.getElementById("sendMessageText");
const sendMessageLoading = document.getElementById("sendMessageLoading");

form.addEventListener("submit", function () {

    // Disable button
    sendMessageBtn.disabled = true;

    // Hide "Send Message"
    sendMessageText.classList.add("d-none");

    // Show loading animation
    sendMessageLoading.classList.remove("d-none");

});


