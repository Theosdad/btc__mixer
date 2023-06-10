const accordionButtons = document.querySelectorAll('.accordion__button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.parentNode;
    const isOpen = currentItem.classList.contains('accordion__item--active');

    closeAllAccordions();

    if (!isOpen) {
      currentItem.classList.add('accordion__item--active');
    }
  });
});

function closeAllAccordions() {
  const accordionItems = document.querySelectorAll('.accordion__item');
  accordionItems.forEach(item => {
    item.classList.remove('accordion__item--active');
  });
}