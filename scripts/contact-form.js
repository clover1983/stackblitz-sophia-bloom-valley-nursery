document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submit action
  
        // Get form values
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const order = document.querySelector("#order").value.trim();
        const message = document.querySelector("#message").value.trim();
  
        // Simpler verify
        if (!name || !email) {
          alert("Please fill in both name and email.");
          return;
        }
  
        // Create object
        const orderData = {
          name,
          email,
          phone,
          order,
          message,
          timestamp: new Date().toISOString()
        };
  
        // Save to localStorage
        localStorage.setItem("bloom-custom-order", JSON.stringify(orderData));
  
        // Alert
        alert("Thank you for your message");
  
        // Reset
        form.reset();
      });
    }
  });
  