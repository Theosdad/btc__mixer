const spoilerButtons = document.querySelectorAll('.spoilers__button');

spoilerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        button.nextElementSibling.classList.toggle('active')
    })
});
