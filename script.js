// script.js
document.addEventListener("DOMContentLoaded", () => {
    const scrollContent = document.querySelector(".scroll-content");
    const clones = scrollContent.innerHTML;
    scrollContent.innerHTML += clones;
});
