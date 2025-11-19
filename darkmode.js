
const toggle = document.getElementById('themeToggle');

document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark") document.body.classList.add("dark-mode");
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
