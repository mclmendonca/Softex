
// 1. For simples: use um for para imprimir os números de 1 a 20.

import { setCommentRange } from "typescript"

for (let i = 1; i <= 20; i++) {
    console.log(i)    
}

// 2. While simples: use um while para contar de 10 até 0 (contagem regressiva).

let numero = 10

while (numero >= 0) {
    console.log(numero)
    numero--
}

// 3. Somatório com for: calcule a soma dos números de 1 a 100.

let soma = 0
for (let index = 0; index <= 100; index++) {
    soma += index
}
console.log(soma)


// 4. Somatório com while: calcule a soma dos números pares de 1 a 50.

let num = 0
let sum = 0
while (num <=50) {
    num%2==0 ? sum += num :"";
    num++
}
console.log(sum)


// 5.Tabuada com for: peça um número e mostre sua tabuada de 1 a 10.

    import * as readlineSync from 'readline-sync';

    let tab = Number(readlineSync.question("Qual a tabuada voce vai querer? "))

    for (let t = 1; t <= 10; t++) {
        console.log(`${tab} x ${t} = ${tab*t}`)
        
    }

// 6. Criando array: crie um array com 5 nomes e mostre todos usando um for.

    let TiTeam = ['Carlos','Marcelo', 'Almir', 'Renato', 'Eduardo']

    for (const ti of TiTeam) {
        console.log(ti)
    }

// 7.Acessando elementos: dado um array de frutas, mostre a primeira e a última fruta.

let fruits = ['Manga', 'Banana', 'Tangerina']

console.log(fruits[0])
console.log(fruits[fruits.length-1])

// 8.Adicionar elementos: use .push() para adicionar um item ao final de uma lista de tarefas.

let times = ['Palmeiras','Corinthians','Santos']

console.log("Times antes da inserção: ")
for (const team of times) {
    console.log(team )
}

console.log (" Vou inserir por último: Sport, logo o array times ficará: ")
times.push ('Sport')

for (const team of times) {
    console.log(team )
}

//9. Remover elementos: use .pop() para remover o último item da lista de tarefas.

let politicos = ['João Campos','Raquel Lyra','Jarbas Vascocelos', 'Gilson Machado']

console.log("Politicos antes da remoção: ")
for (const politico of politicos) {
    console.log(politico)
}

console.log (" Vou Retirar o último politico")
politicos.pop()

for (const politico of politicos) {
    console.log(politico)
}

// 10. Remover do início: use .shift() para remover o primeiro elemento.

let cozinha = ['Faca','Peixeira','Serra de Pão', 'Tábua de Carne']

console.log("Itens da Cozinha: ")
for (const item of cozinha) {
    console.log(item)
}

console.log (`Vou remover o primeiro item: ${cozinha[0]}`)
cozinha.shift()

console.log("Itens da Cozinha: ")
for (const item of cozinha) {
    console.log(item)
}

// 11. Adicionar no início: use .unshift() para adicionar um novo elemento no começo da lista.

let carros = ['Aston Martin','BMW','Ferrari', 'Mercedes Benz']

console.log("Marcas de Carro: ")
for (const carro of carros) {
    console.log(carro)
}

const novoCarro = 'Fiat'
console.log (`Vou adicionar uma nova marca de carro no inicio: ${novoCarro}`)
carros.unshift(novoCarro)


console.log("Marcas de Carro: ")
for (const carro of carros) {
    console.log(carro)
}


// 12. Percorrer com while: percorra um array de números e mostre apenas os pares.

let escalacao = [1,2,3,4,6,5,8,10,7,9,11]

console.log("Mostrando os números: ")
for (const camisa  of escalacao) {
    console.log(camisa)
}

console.log('as camisas pares são:')

for (const camisa  of escalacao) {
    escalacao[camisa]%2 == 0 ? console.log(escalacao[camisa]):""
}


// 13. Percorrer com for: percorra um array de strings e exiba todas em letras maiúsculas.

let bonds = ['sean connery', 'george lazemby','roger moore','timonthy dalton','pierce brosnan', 'daniel craig']

console.log('Mostrando os itens do array como estão: ')
for (const bond of bonds) {
    console.log(bond)
}

console.log('Colocando tudo em maiúsculo')

let bondsMaiusculo = bonds.map(b => b.toUpperCase())

for (const bond of bondsMaiusculo) {
    console.log(bond)
}

// 14. Array de objetos: crie um array de produtos ({ nome, preco }) e mostre os nomes no console.

let livros = [{
    'titulo': 'Diamantes são Eternos',
    'preco' : 12
},{
    'titulo': 'Icebraker',
    'preco' : 15
}]

for (const livro of livros) {
    console.log(livro.titulo)
}

// 15. Filtrar array: dado um array de idades, filtre quem tem 18 anos ou mais.

let eta = [10,18,22,5,14,23,52,11,47,8,50,87]

console.log('Exibindo as idades iguais ou maiores do que 18')
for (const i of eta) {
    i >= 18 ? console.log(i):""
}
