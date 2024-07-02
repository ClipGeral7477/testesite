// script.js
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.offer .expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const offer = this.closest('.offer');
            offer.classList.toggle('expanded');
        });
    });
});