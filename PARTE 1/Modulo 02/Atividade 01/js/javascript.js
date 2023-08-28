//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 
//1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que 
//completou, ou completará, no ano atual (2022).

//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará
// o erro e continuará perguntando até que um valor correto seja preenchido.

function data(ano) {
    var idade = (2022 - ano)
    return idade
}

var nome = prompt('Digite o seu nome: ')
var anoNacimento = parseInt(prompt('Digite o ano de nascimento (entre 1922 e 2021): '))

while (anoNacimento < 1922 || anoNacimento > 2021 || isNaN(anoNacimento)) {
    var anoNacimento = parseInt(prompt('Você digitou um dado errado! Por favor digite o ano de nascimento válido (entre 1922 e 2021): '))
}

var idade = data(anoNacimento)

document.write('Olá '+nome+', em 2022 você completará '+idade+' anos de idade.')



