const input = document.querySelector('#headline-input');
const button = document.querySelector('#update-button');
const ctaHeading = document.querySelector('#cta-heading');

button.addEventListener('click', () => {
    ctaHeading.textContent = input.value;
});