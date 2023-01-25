// Percorre meu array e cria template
const percorreCards = (array) => {
    const cardContainer = document.querySelector('.cards-all')
    cardContainer.innerHTML = ''
    array.forEach((element) => {
        criandoTamplate(element)
        cardContainer.appendChild(criandoTamplate(element))
    });
    somandoValores(arrayCard)
};
percorreCards(arrayCard);

// Criando meu template
function criandoTamplate(elemento) {
    let valor = elemento.value
    let categoria = elemento.categoryID

    const li = document.createElement('li')
    li.classList.add('values-card')

    const div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('display-flex')
    div.classList.add('justify-space-between')
    div.classList.add('align-items-center')

    const valueCard = document.createElement('p')
    valueCard.innerText = `R$ ${valor}`

    const spanCategory = document.createElement('span')
    spanCategory.classList.add('margin-left-60')
    spanCategory.id = "button-category"
    spanCategory.innerText = categoria
    if (categoria === 1) {
        spanCategory.innerText = 'Entrada'
    } else {
        spanCategory.innerText = 'Saída'
    }

    const buttonTrash = document.createElement('button')
    buttonTrash.classList.add('button-trash')
    buttonTrash.id = 'button-trash'
    spanCategory.type = button

    buttonTrash.addEventListener("click", (event) => {
        arrayCard.splice(arrayCard.indexOf(elemento), 1)
        percorreCards(arrayCard)
    });

    div.append(valueCard, spanCategory, buttonTrash)
    li.appendChild(div)

    return li
};

// Criando meu filtro
function meuFiltro(array) {
    const buttonFilter = document.querySelectorAll('.button-filter');

    const cardContainer = document.querySelector('.cards-all');

    buttonFilter.forEach((element) => {
        element.addEventListener('click', () => {
            cardContainer.innerHTML = ''
            const categoria = element.innerText
            if (categoria == 'Todos') {
                percorreCards(arrayCard);
                somandoValores(arrayCard);

            } else if (categoria == 'Entradas') {
                const categoriaEntrada = arrayCard.filter((element) => element.categoryID === 1);
                percorreCards(categoriaEntrada);
                somandoValores(categoriaEntrada);

            } else {
                const categoriaSaida = arrayCard.filter((element) => element.categoryID === 2);
                percorreCards(categoriaSaida);
                somandoValores(categoriaSaida);
            }
        });
    })
};
meuFiltro(arrayCard, valuesCategory);

// Somando meus valores
function somandoValores(array) {
    const valorTotal = document.querySelector(".totalCards");
    const somar = array.reduce((previousValue, currentValue) => {
        if (currentValue.categoryID === 1) {

            return previousValue + parseFloat(currentValue.value)

        } else {
            return previousValue - currentValue.value
        }
    }, 0);
    valorTotal.innerText = ''
    valorTotal.innerText = somar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
somandoValores(arrayCard);






