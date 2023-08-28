function isName(input) {
    input = input.trim()
  
    return /^[A-Za-z\s]+$/.test(input)
}

let nome
let salario
let idade
let diploma

while (true) {

    let nome = prompt("Digite o nome: ")

    if (isName(nome)) {
        console.log("\nValores inseridos:")
        console.log("Nome: "+ nome)
        break
    } else {
        console.log("Nome inválido. Digite um nome válido contendo apenas letras e espaços.")
    }
    
}

while (true) {
    salario = parseFloat(prompt("Digite o salário: "))
    if (!isNaN(salario)) {
        break
    }
    console.log("Valor inválido. Digite um número válido para o salário.")
}

while (true) {
    idade = parseInt(prompt("Digite a idade: "))
    if (!isNaN(idade)) {
        break
    }
    console.log("Valor inválido. Digite um número inteiro válido para a idade.")
}

while (true) {
    diploma = prompt("Possui diploma? (sim/não): ").toLowerCase()
    if (diploma == "sim" || diploma == "não") {
        diploma = diploma == "sim"
        break;
    }
    console.log("Responda com 'sim' ou 'não' para a presença de diploma.")
}

console.log("Salário: "+ salario)
console.log("Idade: "+ idade)
console.log("Possui diploma: "+ diploma)
