/*
//1) Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um aluno;

var nota1 = prompt('Digite a primeira nota: ')
var nota2 = prompt('Digite a segunda nota: ')
var nota3 = prompt('Digite a terceira nota: ')

var media = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3

alert(media)

*/

/*
//2) Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um aluno:
//Imprima as três notas (Ex. A primeira nota foi 8, a segunda foi ....)
//Imprima a média (Ex. A média do aluno é 7)

var nota1 = prompt('Digite a primeira nota: ')
var nota2 = prompt('Digite a segunda nota: ')
var nota3 = prompt('Digite a terceira nota: ')

var media = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3

alert('A primeira nota foi '+nota1+', a segunda foi '+nota2+', a terceira foi '+nota3+'. Logo a média é: '+media+'.')

*/


//⦁	Faça um algoritmo para que solicite o nome do usuário, a nota dele em duas avaliações e imprima o nome dele junto com a média de suas notas;

var nome = prompt('Qual o seu nome? ')
var nota1 = prompt('Digite a primeira nota: ')
var nota2 = prompt('Digite a segunda nota: ')

var media = (parseInt(nota1) + parseInt(nota2)) / 2

alert('A média de '+nome+' é: '+media+', já que as notas dele foram: '+nota1+' e '+nota2+'. ')