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

      // Add reCAPTCHA Token Request
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            '6Lfdc3YrAAAAAMC96FrvqlPmgyMGOjIoqaKli9wQ', // Your site key
            { action: 'custom_contact' }
          );
          console.log("✅ reCAPTCHA token:", token); // Print token

          // Create object
          const orderData = {
            name,
            email,
            phone,
            order,
            message,
            timestamp: new Date().toISOString(),
            recaptcha_token: token
          };

          // Save to localStorage
          localStorage.setItem("bloom-custom-order", JSON.stringify(orderData));
          alert("Thank you for your message!");
          form.reset();
        } catch (err) {
          console.error("reCAPTCHA error:", err);
          alert("Failed to verify you're human. Please try again.");
        }
      });
    });
  }
});
