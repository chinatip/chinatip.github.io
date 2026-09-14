const root = document.documentElement;
const meta = document.querySelector('meta[name="color-scheme"]');
const systemDark = matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

/* Theme ------------------------------------------------------------------ */
// Two states: follow the system, or pin the opposite of it.
function resolvedScheme() {
  return root.dataset.theme ?? (systemDark.matches ? "dark" : "light");
}

function syncScheme() {
  root.dataset.scheme = resolvedScheme();
}

function setTheme(scheme) {
  const system = systemDark.matches ? "dark" : "light";
  if (scheme === system) {
    delete root.dataset.theme;
    meta.content = "light dark";
    localStorage.removeItem("color-scheme");
  } else {
    root.dataset.theme = scheme;
    meta.content = scheme;
    localStorage.setItem("color-scheme", scheme);
  }
  syncScheme();
}

syncScheme();
systemDark.addEventListener("change", syncScheme);

document.querySelector(".theme-toggle").addEventListener("click", (event) => {
  const next = resolvedScheme() === "dark" ? "light" : "dark";

  if (!document.startViewTransition || reducedMotion.matches) {
    setTheme(next);
    return;
  }

  const rect = event.currentTarget.getBoundingClientRect();
  root.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`);
  root.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`);
  document.startViewTransition(() => setTheme(next));
});

/* Card spotlight --------------------------------------------------------- */
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  for (const card of document.querySelectorAll(".card")) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  }
}

/* Copy email ------------------------------------------------------------- */
const copyButton = document.querySelector(".copy");
const copyStatus = document.querySelector(".copy__status");
let copyTimer;

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    copyButton.classList.add("is-copied");
    copyStatus.textContent = "Copied to clipboard";
  } catch {
    copyStatus.textContent = "Couldn’t copy. Use the link instead.";
  }
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    copyButton.classList.remove("is-copied");
    copyStatus.textContent = "";
  }, 2400);
});

/* Footer year ------------------------------------------------------------ */
document.querySelector("[data-year]").textContent = new Date().getFullYear();
