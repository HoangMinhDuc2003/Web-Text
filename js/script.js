// 1. Toggle menu bằng class
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  if (menu) {
    menu.classList.toggle("active");
  } else {
    console.log("Không tìm thấy phần tử có id='nav-menu'");
  }
}

// 2. Button về đầu trang
document.getElementById("scrollTopButton").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
