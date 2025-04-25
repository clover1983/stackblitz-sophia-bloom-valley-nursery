document.addEventListener("DOMContentLoaded", function () {
  function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
  }

  function setCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCartModal() {
    const cart = getCart();
    const cartModal = document.querySelector(".cart-modal-content");
    const itemsHTML = cart.map((item, i) => `<li>${i + 1}. ${item}</li>`).join("");

    cartModal.innerHTML = `
      <span class="cart-modal-close-btn" id="close-cart-modal">&times;</span>
      <h2>Your Cart</h2>
    `;

    if (cart.length === 0) {
      cartModal.innerHTML += `<p>Your cart is currently empty.</p>`;
    } else {
      const itemsHTML = cart.map((item, i) => `<li>${item}</li>`).join("");
      cartModal.innerHTML += `<ul>${itemsHTML}</ul>`;
    }

    // Add clear cart and process order button
    cartModal.innerHTML += `
      <button id="clear-cart">Clear Cart</button>
      <button id="process-order">Process Order</button>
    `;

    // Clear cart
    document.querySelector("#clear-cart").addEventListener("click", () => {
      const currentCart = getCart();
      if (currentCart.length === 0) {
        alert("No items to clear!");
      } else {
        setCart([]);
        alert("Cart cleared.");
        renderCartModal();
      }
    });

    document.querySelector("#process-order").addEventListener("click", () => {
      if (getCart().length > 0) {
        alert("Thank you for your order!");
        setCart([]);
        renderCartModal();
      } else {
        alert("Cart is empty.");
      }
    });

    document.querySelector("#close-cart-modal").addEventListener("click", () => {
      document.querySelector("#cart-modal").classList.add("hidden");
    });
  }

  // Add to Cart
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.dataset.product || "Unnamed item";
      const cart = getCart();
      cart.push(product);
      setCart(cart);
      alert(`Item added to the cart: ${product}`);
    });
  });
  const viewCartBtn = document.querySelector(".cart-button-nav button");

  // Cart modal HTML page
  const modalHTML = `
    <div id="cart-modal" class="cart-modal hidden">
      <div class="cart-modal-content">
        <span class="cart-modal-close-btn" id="close-cart-modal">&times;</span>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.querySelector("#cart-modal");
  const closeBtn = document.querySelector("#close-cart-modal");

  // Click button show cart modal
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {
      renderCartModal();
      modal.classList.remove("hidden");
    });
  }

  // Click close hide cart modal
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  // Click background hide cart modal
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

});
  