// Toggle sidebar on mobile
const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-sidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  toggleBtn.style.display = "block";
});

// Close sidebar if user clicks on the dark overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  toggleBtn.style.display = "block";
});

// Close sidebar when a nav link is clicked
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    toggleBtn.style.display = "block";
  });
});
