(function () {
  const root = document.documentElement;

  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Restore saved theme on load
  const saved = localStorage.getItem("theme") ?? preferred;
  root.dataset.theme = saved;

  // Function to toggle theme
  function toggleTheme() {
    const current = root.dataset.theme ?? preferred;

    if (current === "dark") {
      root.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    } else if (current === "light") {
      root.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
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
