// scripts/subscribe.js

document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.querySelector(".newsletter form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault(); // 防止表单实际提交
      alert("Thank you for subscribing.");
      subscribeForm.reset(); // 可选：提交后清空输入框
    });
  }
});
  