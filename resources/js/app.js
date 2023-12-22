const toggleButton = document.getElementById("toggle");
const asideElement = document.querySelector("aside");
const closeButton = document.getElementById("togglediv");

toggleButton.addEventListener("click", () => {
    asideElement.classList.toggle("hidden");
    toggleButton.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
    asideElement.classList.add("hidden");
    toggleButton.classList.remove("hidden");
});