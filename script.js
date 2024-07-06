document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1
    });
  
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  