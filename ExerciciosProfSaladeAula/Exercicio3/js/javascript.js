
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


/*
//6. Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function inverter(number) {
    var array = number.split('')
    array.reverse()
    num = array.join('')

    return num
}

var numero = prompt('Qual o número? ')

var invertido = inverter(numero)

document.write('O Número '+numero+' invertido é: '+invertido+'.') //652.583
*/


/*
//7. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string 
//“Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).
//Obs. Ignore vogais acentuadas, para simplificar.

function contarVogais(letras) {
    var minusculas = letras.toLowerCase()
    var array = minusculas.split('')
    var num = 0

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
            num++
        }

    }

    return num

}

var palavra = prompt('Qual a palavra? ')

var contagem = contarVogais(palavra)

document.write('A palavra ' + palavra + ' tem ' + contagem + ' vogais.')

*/


/*
//8. Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
//fornecidos pelo usuário.
//Use a fórmula: M = C * (1+i)t
//Onde:
//C = Capital inicial investido
//i = Taxa de juros, em percentual
//t = Tempo do investimento, em meses
//Exiba o resultado com duas casas decimais.


function investMais(cap, txJuros, mes) {
    montante = cap*((txJuros/100)*mes)

    return montante
}


var capital = Number(prompt('Qual o Capital inicial investido: '))
var taxaJuros = parseInt(prompt('Qual o percetual da taxa de juros( % ): '))
var tempo = Number(prompt('Qual o tempo de investimento (em meses) ? '))

var resultado = investMais(capital, taxaJuros, tempo)

document.write('O retorno do investimento foi: R$ '+resultado)

*/


/*
//9. Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

function fatorarNumero(numero) {
    
    for (let i = numero; i > 1; i--){
        numero = numero * (i-1)
    }
    
  
    return numero
}

var numero = Number(prompt('Digite o número: '))

var resultado = fatorarNumero(numero)

document.write('O fatorial de '+numero+' é :'+resultado+'.')

*/

/*
//10. Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo 
//usuário.

function contarPalavras(palavra,letra) {
    var minusculas = palavra.toLowerCase()
    var array = minusculas.split('')
    contador = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] == letra) {
            contador++
        }
        
    }
    return contador
}


var palavra = prompt('Digite a palavra')
var letra = prompt('Digite qual letra você quer que contemos? ')

var resultado = contarPalavras(palavra,letra)

document.write('O número de "'+letra+'" dentro da palavra '+palavra+' é :'+resultado)
*/

/*

//11. Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.

function ePrimo(numero) {
    let sum = 0
    for (let i = numero; i > 0; i--) {
        if (numero%i==0) {
            sum++
        }
    }
    return sum
}

var numero = Number(prompt('Digite um número: '))

var resultado = ePrimo(numero)

if (resultado > 2 ) {
    document.write(numero+', esse numero não é primo')
} else {
    document.write(numero+', esse numero é primo')
}

*/

/*
const lista = []

function inserir(item, posicao = lista.length) {
    if (posicao >= 0 && posicao <= lista.length) {
        lista.splice(posicao, 0, item)
        return true
    } else {
        return false
    }
}


inserir(20, 1)
//inserir(30, 0)
inserir(50)
console.log(lista)
*/

