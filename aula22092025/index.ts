
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

console.log (" Vou inserir: Sport, logo o array times ficará: ")
times.push ('Sport')

for (const team of times) {
    console.log(team )
}
