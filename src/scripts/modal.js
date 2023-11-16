let idAtual = 0
let valueTypeSelected = 0

function createModal() {

    const modalWrapper = document.createElement("section")
    const modalContainer = document.createElement("section")
    const modalHeader = document.createElement("div")
    const h3Register = document.createElement("h3")
    const btnCloseModal = document.createElement("button")
    const mainContent = document.createElement("main")
    const pCalltoAtion = document.createElement("p")
    const divValue = document.createElement("div")
    const labelValue = document.createElement("label")
    const inputValue = document.createElement("input")
    const divValueType = document.createElement("div")
    const pValueType = document.createElement("p")

    const inputEntrada = document.createElement("input")
    const labelEntrada = document.createElement("label")

    const inputSaida = document.createElement("input")
    const labelSaida = document.createElement("label")

    const divModalFooter = document.createElement("div")
    const btnCancelar = document.createElement("button")
    const btnInserir = document.createElement("button")


    modalWrapper.classList = 'modal-wrapper'
    modalContainer.classList = 'modal'
    modalHeader.classList = 'modal-header'
    h3Register.classList = 'font-title-2-bold'
    btnCloseModal.classList = 'close-modal'
    mainContent.classList = 'modal-main-content flex'
    pCalltoAtion.classList = 'font-body-regular color-grey-2'
    divValue.classList = 'input-value flex'
    labelValue.classList = 'font-text-2-medium color-grey-1'
    inputValue.classList = 'input-value input-default'
    divValueType.classList = 'value-type flex'
    pValueType.classList = 'p-value-type font-text-2-medium color-grey-1'
    labelEntrada.classList = 'btn-value-type btn-outline'
    inputEntrada.classList = 'hidden'
    inputSaida.classList = 'hidden'
    labelSaida.classList = 'btn-value-type btn-outline'
    divModalFooter.classList = 'modal-footer flex'
    btnCancelar.classList = 'btn-modal-footer btn-greylow'
    btnInserir.classList = 'btn-modal-footer btn-primary'



    h3Register.innerHTML = 'Registro de valor'


    btnCloseModal.id = 'close-modal'
    btnCloseModal.innerText = 'X'
    btnCloseModal.addEventListener('click', () => {
        modalWrapper.remove()
    })



    pCalltoAtion.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'


    inputValue.placeholder = 'R$ 00,00'
    inputValue.type = 'number'
    inputValue.id = 'input-value'
    labelValue.innerText = 'Valor'
    labelValue.for = 'input-value'
    pValueType.innerText = 'Tipo de Valor'





    inputEntrada.type = 'radio'
    inputEntrada.value = '0'
    inputEntrada.name = 'value-type'
    inputEntrada.id = 1
    labelEntrada.innerText = 'Entrada'
    labelEntrada.for = 1
    labelEntrada.id = 1

    let selected = false
    labelEntrada.addEventListener('click', ({ target }) => {

        valueTypeSelected = target.id
        target.classList.add('active')
        target.nextElementSibling.classList.remove('active')
        selected = true

    })



    inputSaida.type = 'radio'
    inputSaida.name = 'value-type'
    inputSaida.id = 2
    labelSaida.for = 2
    labelSaida.innerText = 'Saída'
    labelSaida.id = 2

    labelSaida.addEventListener('click', ({ target }) => {


        valueTypeSelected = target.id
        target.classList.add('active')
        target.previousElementSibling.classList.remove('active')
        selected = true


    })




    btnCancelar.innerText = 'Cancelar'

    btnCancelar.addEventListener('click', () => {
        const modalContainer = document.getElementById('modal-wrapper')
        modalContainer.remove()
    })


    
    btnInserir.innerText = 'Inserir valor'
    
    btnInserir.addEventListener('click', () => {
  

        if(selected ==true && inputValue.value !== ''){

            
            const newElement = {
            id: idAtual,
            value: +inputValue.value,
            categoryID: +valueTypeSelected,
        }

        insertedValues.push(newElement)

        showMoneyMovement()

        totalSum(insertedValues)

        const noValue = document.querySelector('.empty')

        noValue.classList.add('hidden')



        const modalContainer = document.getElementById('modal-wrapper')
        modalContainer.remove()

        
    }
    })
    


    modalWrapper.id = 'modal-wrapper'



    modalHeader.append(h3Register, btnCloseModal)
    divValue.append(labelValue, inputValue)
    labelEntrada.append(inputEntrada)
    labelSaida.append(inputSaida)
    divValueType.append(pValueType, labelEntrada, labelSaida)
    divModalFooter.append(btnCancelar, btnInserir)
    mainContent.append(pCalltoAtion, divValue, divValueType, divModalFooter)
    modalContainer.append(modalHeader, mainContent)
    modalWrapper.append(modalContainer)


    idAtual++

    return modalWrapper


}

function showModal() {

    const btnOpenModal = document.getElementById('open-modal')
    const mainContainer = document.getElementById('app')

    btnOpenModal.addEventListener('click', function () {
        const modal = createModal()
        mainContainer.appendChild(modal)

    })

}


showModal()

  
const btnNewValue = document.getElementById('modal-open')
const mainContainer = document.getElementById('app')


btnNewValue.addEventListener('click', () => {

    const modal = createModal()
    mainContainer.appendChild(modal)

})







/* <section id= "modal-wrapper class="modal-wrapper">
<section class="modal">

        <div class="modal-header">
        <h3 class="font-title-2-bold">Registro de valor</h3>
        <button id = "close-modal" class="close-modal">X</button>
        </div>
        
        <main class="modal-main-content flex">
        
        <p class="font-body-regular color-grey-2">Digite o valor e em seguida aperte no botão referente ao tipo do valor </p>
        
        <div class="input-value flex">

            <label class="font-text-2-medium color-grey-1" for="value">Valor</label>
            <input class="input-value input-default" type="number" placeholder="R$ 00,00">
        </div>

        <div class="value-type flex">
            <label class="font-text-2-medium color-grey-1" for="value-type">Tipo de Valor</label>

            <button class=" btn-value-type btn-outline">Entrada</button>
            <button class="btn-value-type btn-outline">Saída</button>

        </div>

        <div class="modal-footer flex">
            <button class="btn-modal-footer btn-greylow">Cancelar</button>
            <button id="insert-value" class="btn-modal-footer btn-primary">Inserir valor</button>
        </div>

    </main>
</section> */


