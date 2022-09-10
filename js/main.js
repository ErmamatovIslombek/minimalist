let navHeader = document.querySelector(".header");
let navBtn = document.querySelector(".header__burger");


navBtn.addEventListener("click", function() {
    navHeader.classList.toggle("active")
})