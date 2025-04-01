// scripts/about.js
document.addEventListener('DOMContentLoaded', function() {
    const aboutCards = document.querySelectorAll('.about-card');

    // Fade-in animation for about cards on page load
    aboutCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Staggered animation
    });
});