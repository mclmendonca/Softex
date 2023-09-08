let valor1
let valor2
let operador
let resultado
let resto

do {
    valor1 = parseFloat(prompt('Qual o primeiro valor ?'))
} while (isNaN(valor1));

do {
    valor2 = parseFloat(prompt('Qual o segundo valor ?'))
} while (isNaN(valor2));

do {
    operador = parseInt(prompt('Qual o operador?\n(1) - Adição\n(2) - Subtração\n(3) - Multiplicação\n(4) - Divisão'))
} while (isNaN(operador) || operador < 1 || operador > 4);

switch (operador) {
    case 1:
        resultado = valor1 + valor2
        console.log(`O resultado da soma é: ${resultado}.`)
        break;
    case 2:
        resultado = valor1 - valor2
        console.log(`O resultado da subtração é: ${resultado}.`)
        break;
    case 3:
        resultado = valor1 * valor2
        console.log(`O resultado da multiplicação é: ${resultado}.`)
        break;
    case 4:
        resultado = valor1 / valor2
        resto = valor1 % valor2
        console.log(`O resultado da divisão é: ${resultado}.`)
        console.log(`O resultado do resto da divisão é: ${resto}.`)
        break;

    default:
        break;
}

