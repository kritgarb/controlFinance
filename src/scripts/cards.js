

function createMoneyMovement(element){


    const liMovement = document.createElement("li")
    const pMovement = document.createElement("p")
    const divBtnsLi = document.createElement("div")
    const btnValueType = document.createElement("button")
    const btnTrash = document.createElement("button")
    const iconTrash = document.createElement("img")

    liMovement.classList = 'movement box-outline flex'
    pMovement.classList = 'movement-value font-text-2-medium'
    divBtnsLi.classList = 'buttons-li'
    btnValueType.classList = 'movement-type btn-greylow'
    btnTrash.classList = 'movement-type btn-trash'

    btnTrash.id = element.id

    
    btnTrash.addEventListener('click', ()=>{
       

        const found = insertedValues.find((element) => +element.id === +btnTrash.id) 


        let foundIndex = insertedValues.findIndex((element)=> element.id == found.id )
        insertedValues.splice(foundIndex,1)

        liMovement.remove()

        totalSum(insertedValues)


       
    })

    
    iconTrash.src = "../../assets/trashHover.svg"
    pMovement.innerText = `R$ ${element.value.toFixed(2)}`



    if(element.categoryID == 1){
        btnValueType.innerText = "Entrada"

    }

    else{
        btnValueType.innerText = "Saída"

    }


    
    btnTrash.appendChild(iconTrash)
    divBtnsLi.append(btnValueType,btnTrash)
    liMovement.append(pMovement,divBtnsLi)
    
    return liMovement
    
}




function showMoneyMovement(){
    
    
    const ulMovementsList = document.querySelector(".movements-list")

    ulMovementsList.innerText = ""

    insertedValues.forEach((element) => {
        
    const card = createMoneyMovement(element)
    
    ulMovementsList.appendChild(card)

    })
  
}

showMoneyMovement()












//    <li class="movement box-outiline flex">
//         <p class="movement-valuefont-text-2-medium">R$ 000</p>
//         <div class="buttons-li">
//             <button class="movement-type btn-greylow" >Entrada</button> 
//             <button class="btn-trash"><img class="trash-icon" src="../../assets/trash.svg" alt="remove"></button> 
//         </div>
//     </li>
          