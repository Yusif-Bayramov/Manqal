let dropdown = document.querySelector(".dropbtn");
let mydropdown = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", () => {
    mydropdown.classList.toggle("show")
    dropdown.classList.toggle("active")
});