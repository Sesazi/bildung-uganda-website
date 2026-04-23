const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const langButtons = document.querySelectorAll(".lang-btn");

if (toggleButton && nav) {
  const closeMenu = () => {
    nav.classList.remove("open");
    toggleButton.setAttribute("aria-expanded", "false");
  };

  toggleButton.addEventListener("click", () => {
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!nav.contains(target) && !toggleButton.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const translatableElements = document.querySelectorAll("[data-en]");
const placeholderElements = document.querySelectorAll("[data-en-placeholder]");
const titleElement = document.querySelector("title[data-en]");
const descriptionMeta = document.querySelector('meta[name="description"][data-en]');

const applyLanguage = (lang) => {
  translatableElements.forEach((element) => {
    if (!element.dataset.de) {
      element.dataset.de = element.innerHTML;
    }
    element.innerHTML = lang === "en" ? element.dataset.en : element.dataset.de;
  });

  placeholderElements.forEach((element) => {
    if (!element.dataset.dePlaceholder) {
      element.dataset.dePlaceholder = element.getAttribute("placeholder") || "";
    }
    element.setAttribute(
      "placeholder",
      lang === "en" ? element.dataset.enPlaceholder : element.dataset.dePlaceholder
    );
  });

  if (titleElement) {
    if (!titleElement.dataset.de) titleElement.dataset.de = titleElement.textContent || "";
    titleElement.textContent = lang === "en" ? titleElement.dataset.en : titleElement.dataset.de;
  }

  if (descriptionMeta) {
    if (!descriptionMeta.dataset.de) {
      descriptionMeta.dataset.de = descriptionMeta.getAttribute("content") || "";
    }
    descriptionMeta.setAttribute(
      "content",
      lang === "en" ? descriptionMeta.dataset.en : descriptionMeta.dataset.de
    );
  }

  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "de");
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("siteLang", lang);
};

if (langButtons.length > 0) {
  const storedLang = localStorage.getItem("siteLang");
  const initialLang = storedLang === "en" ? "en" : "de";
  applyLanguage(initialLang);

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang === "en" ? "en" : "de");
    });
  });
}
