/*
let celcius = 0
let fereinheit = 0
let kelvin = 0
const conversor = prompt('Qual conversão você deseja:\n1 - Celcius para Fereinheit\n2 - Celcius para Kelvin  \n3 - Fereinheit para Celcius  \n4 - Fereinheit para Kelvin  \n5 - Kelvin para Celcius  \n6 - Kelvin para Fereinheit  \n0 - para sair')

switch (conversor) {
    case '1': 
        celcius = parseInt(prompt('Qual o grau celcius que voce deseja converter: '))
        celciuspFerenheit(celcius)
        break;
    case '2':
         celcius = parseInt(prompt('Qual o grau celcius que voce deseja converter: '))
         celciuspKelvin(celcius)
        break;
    case '3':
        fereinheit = parseInt(prompt('Qual o grau fereinheit que voce deseja converter: '))
        fereinheitpCelcius(fereinheit)
        break;
    case '4':
        fereinheit = parseInt(prompt('Qual o grau fereinheit que voce deseja converter: '))
        fereinheitpKelvin(fereinheit)
        break;
    case '5':
        kelvin = parseInt(prompt('Qual o grau Kelvin que voce deseja converter: '))
        kelvinpCelcius(kelvin)
        break;
    case '6':
        kelvin = parseInt(prompt('Qual o grau Kelvin que voce deseja converter: '))
        kelvinpFereinheit(kelvin)
        break;
    case '0':
        document.write('até a próxima!')
        break;
        
    default:
        window.alert('Informe algumas das opções válidas (1 a 6)')
        break;
}

function celciuspFerenheit(celcius) {
    let fereinheit = ((celcius*9)/5)+32
    document.write(`${celcius} °C é : ${fereinheit} °F`)
}

function celciuspKelvin(celcius) {
    let kelvin = celcius + 273.15
    document.write(`${celcius} °C é : ${kelvin} °K`)
}

function fereinheitpCelcius(farenheit) {
    let celcius = (((farenheit-32)*5)/9)
    document.write(`${fereinheit} °F é : ${celcius} °C`)
}

function fereinheitpKelvin(farenheit) {
    let kelvin = ((((farenheit)-32)*5)/9)+273.15
    document.write(`${fereinheit} °F é : ${kelvin} °K`)
}

function kelvinpCelcius(kelvin) {
    let celcius = kelvin - 273.15
    document.write(`${kelvin} °K é : ${celcius} °C`)
}

function kelvinpFereinheit(kelvin) {
    let fereinheit = (((kelvin-273.15)*9)/5)+32
    document.write(`${kelvin} °K é : ${fereinheit} °F`)
}

*/

let numeros = []

for (let i = 0; i < 3 ; i++) {
    numeros[i] = parseInt(prompt(`Qual o ${i+1}° numero?`))    
}

numeros.sort((a,b) => a - b)

console.log(numeros)




