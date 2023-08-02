
/*

//1. Escreva uma função em JavaScript que mostre na tela a mensagem “Bom dia, Mundo!!!”.

function hello() {
    document.write('Bom dia, Mundo!!!')
}

hello()

*/

/*

//2. Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

function cubo(numero) {
    var ocubo = numero**3

    return ocubo
}

var numero = Number(prompt('Qual o número? '))

var resultado = cubo(numero)

document.write('O cubo do número informado é: '+resultado)
*/

/*
//3. Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).
//Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).

function convertepCelcius(number) {

    var formula = (grausF-32)*5/9

    return formula
}

var grausF = Number(prompt('Qual a temperatura em °F'))

var emCelcius = convertepCelcius(grausF)

document.write('a temperatura de '+grausF+'°F em graus celcius é : '+emCelcius+'ºC')
*/


/*
//4. Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

function calculaTriangulo(base,altura) {

    var areaTriangulo = (base*altura)/2
    return areaTriangulo
}

var base = Number(prompt('Qual o vlor para a base? '))
var altura = Number(prompt('Qual o vlor para a altura? '))

var resultado = calculaTriangulo(base, altura)

document.write(' Área do Triângulo é: '+resultado)

*/


/*
//5. Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function areaCirculo(raio) {
    
    areacirc = pi*pi*raio
    return areacirc
}

function perimetroCirculo(raio) {
    
    perimetro = 2*pi*raio
    return perimetro
}

var pi = 3.14

var raio = Number(prompt('Qual o raio ? '))

var areaC = areaCirculo(raio)
var periC = perimetroCirculo(raio)

document.write('A área do círculo é '+areaC)
document.write('O perimetro do círculo é '+periC)

*/



//6. Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function inverter(numero) {
    var array = 
}

var numero = prompt('Qual o número? ')


//7. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna
// o número 4 (há 4 vogais nessa palavra).
//Obs. Ignore vogais acentuadas, para simplificar.



//8. Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
//Use a fórmula: M = C * (1+i)t
//Onde:
//C = Capital inicial investido
//i = Taxa de juros, em percentual
//t = Tempo do investimento, em meses
//Exiba o resultado com duas casas decimais.



//9. Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.



//10. Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.



//11. Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.

