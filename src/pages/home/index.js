


function totalSum (array) {


    // let total = insertedValues.reduce((acumulador,valorAtual) => {
    //     return acumulador + valorAtual.value
    // },0)

    const entradas = insertedValues.filter((element) => element.categoryID == 1 )

    let totalEntradas = entradas.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    const saidas = insertedValues.filter((element) => element.categoryID == 2)

    let totalSaidas = saidas.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    
    let sum = document.getElementById("sum-movements")

    sum.innerText = ""
    sum.innerText = `R$${(totalEntradas - totalSaidas).toFixed(2)}`


  
}

totalSum(insertedValues)








