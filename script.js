const flower = document.querySelector(".flower");

flower.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 800); // match fade animation
});
