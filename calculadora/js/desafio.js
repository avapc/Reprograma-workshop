var inputValorHora = document.querySelector("#valor-hora")

var inputHorasProjeto = document.querySelector("#horas-projeto")

var saida = document.querySelector("#resposta")

function calcular(){
    var valueValorHora = inputValorHora.valueAsNumber
    var valueHorasProjeto = inputHorasProjeto.valueAsNumber

    var resultado = valueValorHora * valueHorasProjeto
    saida.textContent = resultado
}