const navEl = document.querySelector(".active");
const btnEl = document.getElementById("toggle");

btnEl.addEventListener("clic", () => {
  navEl.classList.toggle("active");
});
