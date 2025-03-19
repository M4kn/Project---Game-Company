document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Check if the link is to another page (contains .html)
      if (targetId.includes(".html")) {
        // Allow normal navigation to external pages
        return;
      }

      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // REMOVED: Parallax effect for hero section
  // The background image will now stay fixed and not move with scrolling

  // Fade in animation for hero and about-hero content
  const heroContent = document.querySelector(".hero-content");
  const heroMotto = document.querySelector(".hero-motto");
  const aboutContent = document.querySelector(".about-content");

  // Function to apply fade-in animation
  function applyFadeIn(element, delay) {
    if (element) {
      // Initially set opacity to 0
      element.style.opacity = "0";
      // Set transitions
      element.style.transition = "opacity 1.5s ease, transform 1.5s ease";
      // Add slight transform for animation
      element.style.transform = "translateY(20px)";

      // Fade in with delay
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    }
  }

  // Apply animations to home page elements
  if (heroContent && heroMotto) {
    applyFadeIn(heroContent, 300);

    setTimeout(() => {
      applyFadeIn(heroMotto, 0);
    }, 800);
  }

  // Apply animations to about page elements
  if (aboutContent) {
    applyFadeIn(aboutContent, 300);
  }

  // Header transparency effect on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(31, 31, 35, 0.9)";
      header.style.transition = "background-color 0.3s ease";
    } else {
      header.style.backgroundColor = "rgba(31, 31, 35, 0.5)";
    }
  });

  // Social icon hover effects
  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)";
      this.style.transition = "transform 0.3s ease, background-color 0.3s";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add fade-in animations for values and locations sections
  const valueItems = document.querySelectorAll(".value-item");
  const locationItems = document.querySelectorAll(".location-item");

  // Animate elements when they come into view
  function animateOnScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe values
    valueItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "scale(0.8)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });

    // Observe locations
    locationItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });
  }

  // Add CSS for the animation
  const style = document.createElement("style");
  style.textContent = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
    }
  `;
  document.head.appendChild(style);

  // Initialize animations
  animateOnScroll();
});
