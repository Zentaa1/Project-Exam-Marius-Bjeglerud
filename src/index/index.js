import carousel from "./carousel.js";

/* Scroll Animation */

document.addEventListener("scroll", function () {
    const section1 = document.querySelector('.indexStreetDreams');
    const section2 = document.querySelector('.indexContactUs');

    const viewportHeight = window.innerHeight;
    const section1Top = section1.getBoundingClientRect().top;
    const section2Top = section2.getBoundingClientRect().top;

    if (section1Top < viewportHeight) {
        section1.style.opacity = 1;
        section1.style.transform = "translateX(0)";
    } else {
        section1.style.opacity = 0;
        section1.style.transform = "translateX(-100%)";
    }

    if (section2Top < viewportHeight) {
        section2.style.opacity = 1;
        section2.style.transform = "translateX(0)";
    } else {
        section2.style.opacity = 0;
        section2.style.transform = "translateX(100%)";
    }
});

/* Scroll To Top button */

const button = document.querySelector('.scrollToTop');
const scrollText = document.querySelector('.scrollToTopText');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }    
};


button.addEventListener('mouseenter', function() {
    scrollText.style.opacity = 1;
})

button.addEventListener('mouseleave', function() {
    scrollText.style.opacity = 0;
})

button.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

carousel();