const buttons = document.querySelectorAll(".theme-switch button");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function setTheme(theme) {
    if (theme === "auto") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(isDark ? "dark" : "light");
    } else {
        applyTheme(theme);
    }

    localStorage.setItem("theme", theme);

    // remove active
    buttons.forEach(btn => btn.classList.remove("active"));

    // ✅ FIXED selector
    const activeBtn = document.querySelector(
        `.theme-switch button[data-theme="${theme}"]`
    );

    if (activeBtn) {
        activeBtn.classList.add("active");
    }
}

// ✅ default = DARK
let savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// system change listener
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme") === "auto") {
        setTheme("auto");
    }
});

// click handlers
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        setTheme(btn.dataset.theme);
    });
});