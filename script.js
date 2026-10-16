

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const root = document.documentElement;

// MODO CLARO Y OSCURO
function setTheme(theme) {
  root.dataset.theme = theme;

  const isDark = theme === "dark";

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀" : "☾";
  }

  if (themeLabel) {
    themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
  }

  if (themeBtn) {
    themeBtn.setAttribute(
      "aria-label",
      isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
    themeBtn.setAttribute("aria-pressed", String(isDark));
    themeBtn.title = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  }
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("netcare-theme") || "light";
} catch (error) {
  // El sitio funciona aunque el almacenamiento no esté disponible.
}

setTheme(savedTheme === "dark" ? "dark" : "light");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      localStorage.setItem("netcare-theme", nextTheme);
    } catch (error) {
      // El cambio de tema sigue funcionando.
    }
  });
}
