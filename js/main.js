var settingMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

function settinsMenuToggle() {
  settingMenu.classList.toggle("setting-menu-height");
}

// Dark Mode Button
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// Scroll to top
scrollBtn = document.querySelector("#up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    // scrollBtn.style.display = "block";
    scrollBtn.style.opacity = "1";
  } else {
    // scrollBtn.style.display = "none";
    scrollBtn.style.opacity = "0";
  }
};
scrollBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
