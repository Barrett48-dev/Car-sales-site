document.addEventListener("DOMContentLoaded", () => {
  // === Inventory: Live Search Filter ===
  const searchInput = document.getElementById("searchInput");
  const inventoryCards = document.querySelectorAll(".inventory-card");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      inventoryCards.forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
      });
    });
  }

  // === Inventory: Staggered Card Entry Animation ===
  if (inventoryCards.length > 0) {
    inventoryCards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      card.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;

      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 100);
    });
  }

  // === Global: Smooth Scroll for Anchor Links ===
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
