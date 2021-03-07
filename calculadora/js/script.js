console.log("hellowold")

var inputSalario = document.querySelector("#ganho-mes")
var valueSalario = inputSalario.value

var inputHoras = document.querySelector("#horas-dia")
var valueHoras = inputHoras.value
 
var saida = document.querySelector("#resposta")

function calcularValorHora(){
    var valueSalario = inputSalario.valueAsNumber
    var valueHoras = inputHoras.valueAsNumber

    var valorHora = (valueSalario / (22*valueHoras)).toFixed(2)
    saida.textContent = "R$ " + valorHora
}
/*function calcularValorHora(){
    var valueSalario = inputSalario.value
    var valueHoras  = inputHoras.value
    saida.textContent = "R$" + Math.abs(+valueSalario/+(valueHoras*22)).toFixed(2);
}*/
