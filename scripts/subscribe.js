// scripts/subscribe.js

document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.querySelector(".newsletter form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing.");
      subscribeForm.reset();
    });
  }
});
  