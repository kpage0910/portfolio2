const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-sidebar");
const navLinks = document.querySelectorAll(".sidebar a");

// Open sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  toggleBtn.style.display = "none";
});

// Close sidebar manually
closeBtn.addEventListener("click", closeSidebar);

// Close on overlay click
overlay.addEventListener("click", closeSidebar);

// Close on any nav link click
navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

// Always cleanly close sidebar
function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  toggleBtn.style.display = "block";
}

// Optional: Reset everything if screen resizes to large

