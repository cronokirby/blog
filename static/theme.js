(function () {
  const root = document.documentElement;

  // Restore saved theme on load
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.dataset.theme = saved;
  }

  // Function to toggle theme
  function toggleTheme(button) {
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const current = root.dataset.theme ?? preferred;

    if (current === "dark") {
      root.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    } else if (current === "light") {
      root.removeAttribute("data-theme"); // back to system preference
      localStorage.removeItem("theme");
    }
  }

  // Attach to buttons with id "theme-toggle"
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.addEventListener("click", () => toggleTheme(button));
    }
  });
})();
