document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Loading Screen
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animates only once
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Portfolio Filter Logic
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        
        if (filterValue === "all" || filterValue === itemCategory) {
          item.classList.remove("hidden");
          setTimeout(() => item.style.opacity = "1", 50); // fade in effect
        } else {
          item.style.opacity = "0";
          setTimeout(() => item.classList.add("hidden"), 300); // Wait for fade out
        }
      });
    });
  });

});
