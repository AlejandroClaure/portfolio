document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const mainSection = document.querySelector('.center');

    // Button hover effect
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Fade-in animation for the main section
    if (mainSection) {
        mainSection.style.opacity = '0';
        mainSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            mainSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            mainSection.style.opacity = '1';
            mainSection.style.transform = 'translateY(0)';
        }, 200);
    }
});