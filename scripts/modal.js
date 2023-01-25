const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('#button-register');
const wrapper = getElement('.modal-wrapper');
const modal = getElement('.modal');
const buttonClose = getElement('#close-modal');
const buttonCancel = getElement('#button-cancel')

const activeModal = 'show-modal';

const openModal = () => wrapper.classList.add(activeModal);
const closeModal = () => wrapper.classList.remove(activeModal);

button.addEventListener('click', openModal);

buttonClose.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal()
});

buttonCancel.addEventListener('click', closeModal);

const cardContainer = document.querySelector('.cards-all')

let arrayCard = []

const createNewValue = (array) => {
    
    const getElement = (...queries) => document.querySelector(...queries);    
    const buttonInsertValue = getElement('.button-value');

    buttonInsertValue.addEventListener('click', (event) => {
        event.preventDefault();

        const input = getElement('#input-value');
        const buttonDados = document.querySelectorAll('.buttonDados');
        const buttonDadosChecked = buttonDados[0].checked

        if (buttonDadosChecked) {
            const objeto = {
                value: input.value,
                categoryID: 1
            }
            arrayCard.push(objeto)
            cardContainer.innerHTML = ''
            percorreCards(arrayCard);          
        } 
        else {
            const objeto = {
                value: input.value,
                categoryID: 2
            }
            arrayCard.push(objeto)
            cardContainer.innerHTML = ''
            percorreCards(arrayCard); 
        }
        somandoValores(arrayCard)
});
};
createNewValue(arrayCard);