document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-button');

    projectButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
