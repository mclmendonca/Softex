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



//⦁	Faça um algoritmo que leia dois conjuntos com 20 números reais cada (A e B) e monte um conjunto C, onde cada elemento de C é a subtração do elemento correspondente de A com B.




/*
⦁	Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias.

⦁	Um motorista deseja colocar no seu tanque X litros de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque. 

⦁	Crie um programa que o usuário digite dois números inteiros e positivos. Em seguida calcule Z, onde Z é: 
Z = X² + Y²

⦁	Escreva um programa que leia 3 números inteiros distintos e os imprima em ordem crescente.

⦁	Escreva um programa que lê 10 números e em seguida imprime quantos deles são iguais.


⦁	Escreva uma função que solicita o usuário digitar um número de 1 à 7. Em seguida a função imprime uma mensagem com o dia da semana de acordo o número digitado: (use Switch case).

Nas questões a seguir é obrigatório o uso do While

⦁	Como ficaria o algoritmo para calcular a media dos 50 alunos usando repetição fixa?

⦁	Escreva um algoritmo que lê 50 números inteiros e em seguida mostra a soma de todos os ímpares lidos.


⦁	Altere o algoritmo anterior para que ele considere apenas a soma dos ímpares que estejam entre 100 e 200.

⦁	Construa um algoritmo que leia um conjunto de 20 numeros inteiros e mostre qual foi o maior e o menor valor fornecido.


⦁	Como seria um programa para calcular a média de 50 alunos de uma turma?

⦁	Escreva um programa que calcula o produto de dois números lidos sem usar o operador de multiplicação (‘*’).


⦁	Construa um algoritmo que fica lendo indefinidamente números positivos. Caso o numero lido seja igual a 0 o algoritmo para de ler números e imprime a média dos números pares lidos anteriormente.

Na questão a seguir é obrigatório o uso do Do .. While

⦁	Como ficaria o algoritmo para calcular a média dos 50 alunos com teste no final usando o comando do-while?
*/

