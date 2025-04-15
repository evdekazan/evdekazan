document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Animasyon geçişi eklendi
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    card.addEventListener('mouseenter', () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    });
  });
});
