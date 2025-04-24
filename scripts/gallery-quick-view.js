// scripts/gallery-quick-view.js

document.addEventListener("DOMContentLoaded", function () {
    const quickViewButtons = document.querySelectorAll(".quick-view");
    const modal = document.querySelector(".product-modal");
  
    quickViewButtons.forEach(button => {
      button.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });
    
    // Close Quick View windows
    const closeQuickViewBtn = document.querySelector(".close-quick-view");
    if (closeQuickViewBtn) {
      closeQuickViewBtn.addEventListener("click", () => {
        const modal = document.querySelector(".product-modal");
        modal.style.display = "none";
      });
    }

    // Close windows left X button
    const closeModalBtn = document.querySelector(".close-modal");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        });
    }

    // Click background to close
    window.addEventListener("click", function (e) {
        const modal = document.querySelector(".product-modal");
        if (e.target.classList.contains("product-modal")) {
          modal.style.display = "none";
        }
      });
});
