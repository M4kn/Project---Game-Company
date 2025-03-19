document.addEventListener('DOMContentLoaded', function() {
      // Smooth scrolling for navigation links
      const navLinks = document.querySelectorAll('.nav-links a');
      
      navLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              const targetSection = document.querySelector(targetId);
              
              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop - 80,
                      behavior: 'smooth'
                  });
              }
          });
      });
      
      // Parallax effect for hero section
      const hero = document.querySelector('.hero');
      
      window.addEventListener('scroll', function() {
          const scrollPosition = window.pageYOffset;
          hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
      });
      
      // Fade in animation for hero content
      const heroContent = document.querySelector('.hero-content');
      
      setTimeout(() => {
          heroContent.style.opacity = '0';
          heroContent.style.transition = 'opacity 1.5s ease';
          
          setTimeout(() => {
              heroContent.style.opacity = '1';
          }, 500);
      }, 300);
      
      // Mobile menu toggle functionality (to be implemented)
      // This would require adding a hamburger menu button in the HTML
  });
  