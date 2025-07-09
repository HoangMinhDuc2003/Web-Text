document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu
  const toggleButton = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Nút cuộn lên đầu
  const scrollBtn = document.getElementById("scrollTopButton");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
