/*
//⦁	Faça um algoritmo que leia o espaço percorrido por um automóvel (em metros), o tempo gasto para percorrê-lo (em segundos), e escreva a velocidade utilizada (V=S/T).

function calcularValocidade(espaco,tempo) {
    let velocidade = espaco/tempo
    return velocidade
}

let espaco
do {
    espaco = parseFloat(prompt('Qual o espaço percorrido (em metros): '))
} while (isNaN(espaco));

let tempo
do {
    tempo = parseFloat(prompt('qual o tempo para percorrer (em segundos): '))
} while (isNaN(tempo));

let velocidade = calcularValocidade()

console.log(`A velocidade percorrida é de : ${velocidade} M/s.`)
*/

/*
//⦁	Calcule o peso ideal de uma pessoa, baseado em sua altura (h). Sabendo:
//⦁	Para homens: peso ideal = (72.7 * h) - 58
//⦁	Para mulheres: peso ideal = (62.1 * h) – 44.7

function calculo(parametro, altura, numero) {
    let pesoIdeal = (parametro * altura) - numero
    return pesoIdeal
}

let genero
let altura
let parametro
let numero
let descricaoSexo
do {
    genero = prompt('Qual o Gênero? (Digite "M" para masculino e "F" para feminino')
    genero = genero.toLowerCase()
} while (genero != 'm' && genero != 'f');


do {
    altura = parseFloat(prompt('Qual a altura? '))
} while (isNaN(altura));

if (genero == 'm') {
    parametro = 72.7
    numero = 58
    descricaoSexo = 'O homem'
} else {
    parametro = 62.1
    numero = 44.7
    descricaoSexo = 'A mulher'
}

let resultado = calculo(parametro, altura, numero)

console.log(`${descricaoSexo}, com ${altura} metros de altura tem o peso ideal: ${resultado} Kg.`)

*/


/*
//⦁	Faça um algoritmo que leia o nome e a idade de uma nadador e escreva a categoria a qual pertence de acordo com a tabela abaixo:
//cat         idade
//Infantil A     5 -  7
//Infantil B     8 - 10
//Juvenil  A    11 - 13
//Juvenil  B    14 - 17
//Senior       Maior 18

const nome = prompt('Qual o nome do nadador: ')
const idade = prompt('Qual a idade do nadador: ')

if (idade >= 18) {
    document.write(`O nadador ${nome} que tem ${idade} anos e pertence a categoria Sênior`)
} else if (idade < 18 && idade >= 14) {
    document.write(`O nadador ${nome} que tem ${idade} anos e pertence a categoria Juvenil B`)
} else if (idade < 14 && idade >= 11) {
    document.write(`O nadador ${nome} que tem ${idade} anos e pertence a categoria Juvenil A`)
} else if(idade < 11 && idade >= 8) {
    document.write(`O nadador ${nome} que tem ${idade} anos e pertence a categoria Infantil B`)
} else if(idade < 8 && idade >= 5) {
    document.write(`O nadador ${nome} que tem ${idade} anos e pertence a categoria Infantil A`)
}else {
    document.write(`As categorias são válidas para pessoas acima de 5 anos. por favor digite uma idade válida.`)
}
*/





/*
//⦁	Faça um algoritmo que calcule a soma dos 10 primeiros números inteiros e escreva o valor da soma.
let soma = 0
for (let i = 1; i <= 10; i++) {
    soma += i

}
console.log('A soma dos 10 primeiros inteiros é :'+soma)
*/

/*
//⦁	Faça um algoritmo que leia um conjunto de números até que seja digitado o valor 999. No final escreva a soma e a média dos números lidos.

let numero = 0
let soma = 0
let cont = 0
let media

do {

    if (!isNaN(numero)) {
        soma += numero
        cont++
    }

    numero = parseInt(prompt('Qual o número: '))

} while (numero != 999);

media = soma/cont

console.log(`Total da soma foi: ${soma}, foram digitados ${cont} numeros e a média é: ${media}`)
*/

/*
//⦁	Faça um algoritmo que leia um conjunto A de 8 números inteiros e gere em um conjunto B com o mesmo tamanho, com todos os elementos do conjunto A multiplicados por 4. Apresente o conjunto B.
let conjuntoA = []
let conjuntoB = []
for (let i = 0; i < 8; i++) {
    conjuntoA[i] = parseFloat(prompt(`Qual o ${i+1}° item de 8 numeros do conjunto A: `))
    conjuntoB[i] = (conjuntoA[i]*4)
}

console.log('Com os números digitados no conjunto A, o conjunto B fica assim:')
for (let i = 0; i < 8; i++) {
    console.log(conjuntoB[i])

}
*/


/*
//⦁	Faça um algoritmo que leia dois conjuntos com 20 números reais cada (A e B) e monte um conjunto C, onde cada elemento de C é a subtração do elemento correspondente de A com B.
let conjuntoA = []
let conjuntoB = []
let conjuntoC = []

for (let i = 0; i < 20; i++) {
    conjuntoA[i] = parseInt(prompt(`Qual o ${i + 1}° item do Conjunto A que vai até 20 numeros.`))

}
window.alert('Você terminou o Conjunto A, vamos começar o Cnjunto B? ')
for (let i = 0; i < 20; i++) {
    conjuntoB[i] = parseInt(prompt(`Qual o ${i + 1}° item do Conjunto B que vai até 20 numeros.`))
    conjuntoC[i] = conjuntoA[i] - conjuntoB[i]
}

document.write('Com esses dados coletados, podemos dizer que os numeros que compõe o conjunto C são: <br>')
for (let i = 0; i < 20; i++) {
    conjuntoC[i] = (conjuntoA[i] - conjuntoB[i])
    document.write(conjuntoC[i]+'<br>')
}
*/

/*
//⦁	Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias.

const nome = prompt('Qual o seu nome: ')
const idade = parseInt(prompt('Qual a sua idade: '))

let idadeDias = idade*365

document.write(`${nome}, Voce já viveu ${idadeDias} dias.`)
*/


/*
//⦁	Um motorista deseja colocar no seu tanque X litros de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.

const PrecoLitro = parseInt(prompt('Qual o preço da gasolina? '))
const valorPago = parseInt(prompt('Qual o valor do pago no posto? '))
let litros = valorPago / PrecoLitro
document.write(`Você conseguiu abastecer ${litros} Litros com o valor pago ao posto.`)

*/


/*
//⦁	Crie um programa que o usuário digite dois números inteiros e positivos. Em seguida calcule Z, onde Z é:
//Z = X² + Y²

let inteiro1 = 0
let inteiro2 = 0
let valorZ = 0
while (inteiro1 <= 0 && inteiro2 <=0) {
    inteiro1 = parseInt(prompt('Qual o primeiro inteiro positivo? '))
    inteiro2 = parseInt(prompt('Qual o segundo inteiro positivo? '))
}

valorZ = Math.pow(inteiro1,2)+Math.pow(inteiro2,2)

document.write(`O valor de Z é: ${valorZ}`)
*/


/*
//⦁	Escreva um programa que leia 3 números inteiros distintos e os imprima em ordem crescente.

var numeros = []

for (let i = 0; i < 3; i++) {
    numeros[i] = parseInt(prompt(`Qual o ${i+1}° número: `))

}

numeros.sort((a,b) => a - b)

console.log(numeros)
*/


/*
//⦁	Escreva um programa que lê 10 números e em seguida imprime quantos deles são iguais.

let array = []
let cont = 0
for (let i = 0; i < 10; i++) {
    array[i] = parseInt(prompt(`Qual o ${i+1}° número:  `))
    if (array[i] == array[i-1]) {
        cont++
    }

}

console.log(`A quantidade de número(s) igual(ais) dentre os digitados são: ${cont}`)
*/


/*
//⦁	Escreva uma função que solicita o usuário digitar um número de 1 à 7. Em seguida a função imprime uma mensagem com o dia da semana de acordo o número digitado: (use Switch case).


let numero = 0
do {
    numero = parseInt(prompt('Qual número de 1 à 7: '))
} while (isNaN(numero) || numero < 1 || numero > 7);

imprimeMensagem(numero)

function imprimeMensagem(opcao) {
    switch (opcao) {
        case 1: 
            document.write(`Domingo`)
            
            break;
        case 2:
            document.write(`Segunda-Feira`)
            break;
    
        case 3:
            document.write(`Terca-Feira`)
            break;
    
        case 4:
            document.write(`Quarta-Feira`)
            break;
    
        case 5:
            document.write(`Quinta-Feira`)
            break;
    
        case 6:
        document.write(`Sexta-Feira`)
            break;
    
        case 7:
        document.write(`Sabado`)
            break;
        
        default:
            document.write(`Escolha uma entre 1 e 7`)
            break;
    }
    
}
*/

/*
//Nas questões a seguir é obrigatório o uso do While

//⦁	Como ficaria o algoritmo para calcular a media dos 50 alunos usando repetição fixa?

let nota = 0
let soma = 0
let cont = 0

while (cont < 50) {
    nota = parseInt(prompt(`Insira a ${cont+1}a nota das 50: `))
    soma += nota
    cont++
}

media = soma/cont

document.write(`A média das 50 notas digitadas são: ${media}`)

*/



/*
//⦁	Escreva um algoritmo que lê 50 números inteiros e em seguida mostra a soma de todos os ímpares lidos.

let numero = 0
let cont = 0
let soma = 0

while (cont < 50) {
    numero = parseInt(prompt(`Insira a ${cont+1}o número dos 50: `))

    if (numero%2 != 0) {
        soma += numero
    }
    cont++
}

document.write(`A soma dos ìmpares desses 50 números é: ${soma}`)

*/


/*
//⦁	Altere o algoritmo anterior para que ele considere apenas a soma dos ímpares que estejam entre 100 e 200.

let cont = 100
let soma = 0

while (cont <= 200) {
    
    if (cont%2 != 0) {
        soma += cont
    }
    cont++
}

document.write(`A soma dos ìmpares entre 100 e 200 é: ${soma}`)

*/


/*
//⦁	Construa um algoritmo que leia um conjunto de 20 numeros inteiros e mostre qual foi o maior e o menor valor fornecido.


let numeros = []
let i = 0
let maior
let menor
while (i < 20) {
    do {
        numeros[i] = parseInt(prompt(`Qual o ${i + 1}° número dos 20: `))

    } while (isNaN(numeros[i]));


    if (!maior) {
        maior = numeros[i]
    } else if (numeros[i] > maior) {
        maior = numeros[i]
    }


    if (!menor) {
        menor = numeros[i]
    } else if (menor > numeros[i]) {
        menor = numeros[i]
    }
    i++


}

document.write(`O maior número entre os 20 digitados é: ${maior}<br>`)
document.write(`O menor número entre os 20 digitados é: ${menor}<br>`)

*/


//⦁	Como seria um programa para calcular a média de 50 alunos de uma turma?

const nome = []
const nota1 = []
const nota2 = []
let media = []
let i = 0


while (i < 10) {
    nome[i] = prompt(`Digite o nome do ${i + 1}° nome dos 50 alunos: `)
    nota1[i] = parseInt(prompt(`Insira a primeira nota de ${nome[i]}: `))
    nota2[i] = parseInt(prompt(`Insira a segunda  nota de ${nome[i]}: `))
    media[i] = (nota1[i] + nota2[i]) / 2
    i++
}

i = 0

while (i < 10) {
    document.write(`Aluno: ${nome[i]}, notas: ${nota1[i]} e ${nota2[i]}. média: ${media[i]}<br>`)
    i++
}





/*
⦁	Escreva um programa que calcula o produto de dois números lidos sem usar o operador de multiplicação (‘*’).


⦁	Construa um algoritmo que fica lendo indefinidamente números positivos. Caso o numero lido seja igual a 0 o algoritmo para de ler números e imprime a média dos números pares lidos anteriormente.

Na questão a seguir é obrigatório o uso do Do .. While

⦁	Como ficaria o algoritmo para calcular a média dos 50 alunos com teste no final usando o comando do-while?
*/

