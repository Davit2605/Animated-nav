const navEl = document.querySelector(".active");
const btnEl = document.getElementById("toggle");

btnEl.addEventListener("clik", () => {
  navEl.classList.toggle("active");
});
