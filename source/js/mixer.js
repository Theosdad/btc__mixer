const addButton = document.getElementById('add__address');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider__value');
const sliderRandomizer = document.getElementById('slider__randomizer');

let deleteButtons = document.querySelectorAll('.delete-button');
let editButtons = document.querySelectorAll('.edit-button');
let i = 1;

const createNode = function (tagName, className, text) {
    const node = document.createElement(tagName);
    node.classList.add(className);
    if (text) {
        node.textContent = text;
    }
    return node;
};

const createInput = function () {
    const inputItem = createNode('div', 'mixer__input');

    const addressLabel = createNode('label', 'address-label', 'Destination BTC Address');
    addressLabel.setAttribute("for", `address-${i + 1}`);
    inputItem.appendChild(addressLabel);

    const addressInput = createNode('input', 'address-input');
    addressInput.type = 'text';
    addressInput.placeholder = `Enter recipient address №${i + 1}`;
    addressInput.id = `address-${i + 1}`;
    addressInput.name = `address-${i + 1}`;
    addressInput.setAttribute("required", "required");
    inputItem.appendChild(addressInput);

    const percentageLabel = createNode('label', 'percentage-label', 'Percentage value, %');
    percentageLabel.setAttribute("for", `percentage-${i + 1}`);
    inputItem.appendChild(percentageLabel);

    const percentageInput = createNode('input', 'percentage-input');
    percentageInput.type = 'number';
    percentageInput.max = '100.00';
    percentageInput.id = `percentage-${i + 1}`;
    percentageInput.name = `percentage-${i + 1}`;
    percentageInput.setAttribute("pattern", "\\d{1,2}\\.\\d{1,2}");
    percentageInput.setAttribute("readonly", "readonly");
    percentageInput.setAttribute("required", "required");
    inputItem.appendChild(percentageInput);

    const editButton = createNode('button', 'edit-button');
    editButton.type = 'button';
    editButton.id = `edit-${i + 1}`;
    inputItem.appendChild(editButton);

    const deleteButton = createNode('button', 'delete-button');
    deleteButton.type = 'button';
    deleteButton.id = `delete-${i + 1}`;
    inputItem.appendChild(deleteButton);

    return inputItem;
};

const attachEvent = function () {
    deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.removeEventListener('click', deleteButtonClick);
        button.addEventListener('click', deleteButtonClick);
    });

    editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
        button.removeEventListener('click', editButtonClick);
        button.addEventListener('click', editButtonClick);
    });
};

const deleteButtonClick = function (event) {
    const parentElement = event.target.parentNode;
    parentElement.remove();
    i--;
    const percentageInputs = document.querySelectorAll('.percentage-input');
    percentageInputs.forEach(input => {
        input.setAttribute("value", (100.00 / i).toFixed(2));
    });
};

const editButtonClick = function (event) {
    const button = event.target;
    const input = button.previousElementSibling;
    input.removeAttribute("readonly");
    input.focus();
};

addButton.addEventListener('click', () => {
    if (i <= 4 && addButton) {
        const inputList = document.querySelector('.mixer__form-wrapper');
        const input = createInput();
        inputList.appendChild(input);
        i++;
        const percentageInputs = document.querySelectorAll('.percentage-input');
        percentageInputs.forEach(input => {
            input.setAttribute("value", (100.00 / i).toFixed(2));
        });
        attachEvent();
    } else {
        addButton.setAttribute("disabled", "disabled");
        addButton.textContent = "Maximum count of addresses";
    }
});

slider.addEventListener('change', () => {
    sliderValue.value = `${slider.value} %`;
});

sliderValue.addEventListener('change', () => {
    slider.value = parseFloat(sliderValue.value);
    const sliderNote = document.querySelector('.slider__note');
    if (sliderValue.value <= 2) {
        sliderNote.textContent = 'Slowly';
        sliderNote.style.color = 'red';
    } else if (sliderValue.value <= 3.9) {
        sliderNote.textContent = 'Normal';
        sliderNote.style.color = 'yellow';
    } else {
        sliderNote.textContent = 'Fast';
        sliderNote.style.color = 'green';
    }
});

const getRandomNumber = () => {
    const min = 0.700;
    const max = 4.700;
    const randomNumber = Math.random() * (max - min) + min;
    return randomNumber.toFixed(3);
}

sliderRandomizer.addEventListener('click', () => {
    sliderValue.value = `${getRandomNumber()} %`;
    slider.value = parseInt(sliderValue.value);
});

