document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".effect-role");
  
    const observerContent = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(el => observerContent.observe(el));
  });