const textField = document.querySelector('.textField');
const addToDocument = document.querySelector('.addToDocument');

function addMessage() {
    let message = textField.value;
    newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    document.body.appendChild(newParagraph);

    textField.value = '';
    textField.focus();
}

addToDocument.addEventListener('click',addMessage);

