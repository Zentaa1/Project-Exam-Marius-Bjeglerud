const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("Active")
    navMenu.classList.toggle("Active")
    console.log('clicked');
})


document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        console.log('clicked');
    })) 