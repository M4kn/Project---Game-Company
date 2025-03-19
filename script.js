document.addEventListener("DOMContentLoaded", function () {
      // Smooth scrolling for navigation links
      const navLinks = document.querySelectorAll(".nav-links a");
    
      navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
    
          const targetId = this.getAttribute("href");
          const targetSection = document.querySelector(targetId);
    
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });
    
      // Parallax effect for hero section
      const hero = document.querySelector(".hero");
    
      window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
      });
    
      // Fade in animation for hero content
      const heroContent = document.querySelector(".hero-content");
      const heroMotto = document.querySelector(".hero-motto");
    
      // Initially set opacity to 0
      heroContent.style.opacity = "0";
      heroMotto.style.opacity = "0";
    
      // Set transitions
      heroContent.style.transition = "opacity 1.5s ease, transform 1.5s ease";
      heroMotto.style.transition = "opacity 1.5s ease, transform 1.5s ease";
    
      // Add slight transform for animation
      heroContent.style.transform = "translateY(20px)";
      heroMotto.style.transform = "translateY(20px)";
    
      // Fade in with delay
      setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    
        // Delay motto animation slightly
        setTimeout(() => {
          heroMotto.style.opacity = "1";
          heroMotto.style.transform = "translateY(0)";
        }, 500);
      }, 300);
    
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
    });
    