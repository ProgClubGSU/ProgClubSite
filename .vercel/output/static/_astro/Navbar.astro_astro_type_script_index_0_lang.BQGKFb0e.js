class MobileNavbar {
  hamburgerBtn;
  mobileMenu;
  hamburgerLines;
  mobileLinks;
  mobileDropdownBtns;
  dropdownElements = /* @__PURE__ */ new Map();
  isOpen = false;
  logo;
  rafId = null;
  constructor() {
    this.hamburgerBtn = document.getElementById("hamburger-btn");
    this.mobileMenu = document.getElementById("mobile-menu");
    this.hamburgerLines = Array.from(document.querySelectorAll("#hamburger-btn .hamburger-line"));
    this.mobileLinks = Array.from(document.querySelectorAll(".mobile-nav-link"));
    this.mobileDropdownBtns = Array.from(document.querySelectorAll(".mobile-dropdown-btn"));
    this.logo = document.getElementById("logo");
    this.cacheDropdownElements();
    this.init();
  }
  cacheDropdownElements() {
    this.mobileDropdownBtns.forEach((btn) => {
      const target = btn.getAttribute("data-dropdown-target");
      if (target) {
        const dropdown = document.querySelector(`[data-dropdown="${target}"]`);
        const arrow = btn.querySelector(".mobile-dropdown-arrow");
        if (dropdown && arrow) {
          this.dropdownElements.set(target, { dropdown, arrow });
        }
      }
    });
  }
  init() {
    this.hamburgerBtn?.addEventListener("click", this.toggle.bind(this));
    document.addEventListener("keydown", this.handleKeydown.bind(this));
    document.addEventListener("click", this.handleOutsideClick.bind(this));
    this.mobileLinks.forEach((link) => {
      if (!link.classList.contains("mobile-dropdown-btn")) {
        link.addEventListener("click", this.close.bind(this));
      }
    });
    this.mobileDropdownBtns.forEach((btn) => {
      btn.addEventListener("click", this.toggleMobileDropdown.bind(this));
    });
    this.initLogoScrollEffect();
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (!this.mobileMenu || this.isOpen) return;
    this.isOpen = true;
    requestAnimationFrame(() => {
      if (!this.mobileMenu || !this.hamburgerBtn) return;
      this.hamburgerBtn.setAttribute("aria-expanded", "true");
      this.mobileMenu.setAttribute("aria-hidden", "false");
      this.mobileMenu.classList.remove("scale-y-0", "opacity-0", "pointer-events-none", "mobile-menu-closing");
      this.mobileMenu.classList.add("mobile-menu-opening");
      this.hamburgerBtn.classList.add("hamburger-open");
      this.mobileLinks.forEach((link) => {
        link.setAttribute("tabindex", "0");
      });
      document.body.style.overflow = "hidden";
    });
  }
  close() {
    if (!this.mobileMenu || !this.isOpen) return;
    this.isOpen = false;
    requestAnimationFrame(() => {
      if (!this.mobileMenu || !this.hamburgerBtn) return;
      this.hamburgerBtn.setAttribute("aria-expanded", "false");
      this.mobileMenu.setAttribute("aria-hidden", "true");
      this.mobileMenu.classList.remove("mobile-menu-opening");
      this.mobileMenu.classList.add("mobile-menu-closing");
      this.hamburgerBtn.classList.remove("hamburger-open");
      this.mobileLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
      });
      this.closeAllMobileDropdowns();
      document.body.style.overflow = "";
    });
  }
  toggleMobileDropdown(e) {
    const button = e.currentTarget;
    const target = button.getAttribute("data-dropdown-target");
    if (!target) return;
    const elements = this.dropdownElements.get(target);
    if (!elements) return;
    const { dropdown, arrow } = elements;
    const isOpen = dropdown.classList.contains("dropdown-open");
    requestAnimationFrame(() => {
      if (isOpen) {
        dropdown.classList.remove("dropdown-open");
        arrow.classList.remove("dropdown-arrow-rotated");
      } else {
        this.closeAllMobileDropdowns();
        dropdown.classList.add("dropdown-open");
        arrow.classList.add("dropdown-arrow-rotated");
      }
    });
  }
  closeAllMobileDropdowns() {
    this.dropdownElements.forEach(({ dropdown, arrow }) => {
      dropdown.classList.remove("dropdown-open");
      arrow.classList.remove("dropdown-arrow-rotated");
    });
  }
  handleKeydown(e) {
    if (e.key === "Escape" && this.isOpen) {
      this.close();
      this.hamburgerBtn?.focus();
    }
  }
  handleOutsideClick(e) {
    const target = e.target;
    if (this.isOpen && this.mobileMenu && !this.mobileMenu.contains(target) && !this.hamburgerBtn?.contains(target)) {
      this.close();
    }
  }
  initLogoScrollEffect() {
    let ticking = false;
    const updateLogo = () => {
      if (!this.logo) return;
      if (window.scrollY > 100) {
        this.logo.className = "pt-2 pb-1 !grid !place-items-center select-none leading-none hover:bg-white bg-black scale-100 hover:text-black text-white px-4 transition-all ease-in-out";
      } else {
        this.logo.className = "pt-2 pb-1 !grid !place-items-center select-none leading-none hover:bg-black bg-white scale-110 hover:text-white text-black px-4 transition-all ease-in-out";
      }
      ticking = false;
      this.rafId = null;
    };
    const requestLogoUpdate = () => {
      if (!ticking) {
        this.rafId = requestAnimationFrame(updateLogo);
        ticking = true;
      }
    };
    window.addEventListener("scroll", requestLogoUpdate, { passive: true });
  }
  // Cleanup method to prevent memory leaks
  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.hamburgerBtn?.removeEventListener("click", this.toggle.bind(this));
    document.removeEventListener("keydown", this.handleKeydown.bind(this));
    document.removeEventListener("click", this.handleOutsideClick.bind(this));
    this.mobileLinks.forEach((link) => {
      if (!link.classList.contains("mobile-dropdown-btn")) {
        link.removeEventListener("click", this.close.bind(this));
      }
    });
    this.mobileDropdownBtns.forEach((btn) => {
      btn.removeEventListener("click", this.toggleMobileDropdown.bind(this));
    });
    this.dropdownElements.clear();
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new MobileNavbar());
} else {
  new MobileNavbar();
}
