const toggleBtn = document.getElementById("nav-toggle");
const navList = document.querySelector(".main-nav");

toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});
