// script.js
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.offer .expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const offer = this.closest('.offer');
            const detailsExtra = offer.querySelector('.details-extra');

            if (offer.classList.contains('expanded')) {
                detailsExtra.style.maxHeight = '0';
                offer.classList.remove('expanded');
            } else {
                detailsExtra.style.maxHeight = detailsExtra.scrollHeight + 'px';
                offer.classList.add('expanded');
            }
        });
    });
});