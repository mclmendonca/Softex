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

/*
//3) Faça um algoritmo para que solicite o nome do usuário, a nota dele em duas avaliações e imprima o nome dele junto com a média de suas notas;

var nome = prompt('Qual o seu nome? ')
var nota1 = prompt('Digite a primeira nota: ')
var nota2 = prompt('Digite a segunda nota: ')

var media = (parseInt(nota1) + parseInt(nota2)) / 2

alert('A média de '+nome+' é: '+media+', já que as notas dele foram: '+nota1+' e '+nota2+'. ')
*/

/*
//4) Uma empresa vai dar um aumento de salário ao seu funcionário. Faça um programa para ler o salário do funcionário e o percentual de reajuste.
//   Calcular e escrever o valor do novo salário.

var salario = parseInt(prompt('Digite o seu salário: '))
var reajuste = parseInt(prompt('Digite o percentual de Reajuste: '))

var novoSalario = salario+(salario*(reajuste/100))

alert('Seu novo salário será: R$ '+novoSalario)
*/

/*
//5) Dada as seguintes entradas: quilometragem inicial, quilometragem final, litros consumidos, preço do litro de combustível. 
//   Faça um programa que imprima o seguinte Relatório: distância percorrida, Valor total gasto e o consumo do carro (quantos quilômetros 
//   percorre com 1 litro de combustível).

var kmInicial = parseFloat(prompt('Insira aqui o KM Inicial: '))
var kmFinal = parseFloat(prompt('Insira aqui o KM final: '))
var ltrConsumido = parseFloat(prompt('Insira aqui quantos litros foram consumidos nessa viajem: '))
var prcCombustivel = parseFloat(prompt('Insira aqui o preço do litro do combustível(em Reais): R$'))

var distanciaPercorrida = kmFinal - kmInicial
var valorGasto = ltrConsumido*prcCombustivel
var consumoCarro = distanciaPercorrida/ltrConsumido

alert('Distancia percorrida é: '+distanciaPercorrida+' Km')
alert('Valor Gasto foi: R$ '+valorGasto)
alert('O Consumo do Carro foi: '+consumoCarro+' KM por litro')
*/

/*
//6. Faça um programa que leia o nome do usuário, a idade do usuário, o nome da mãe do usuário, a idade da mãe do usuário, o nome do pai do 
//usuário e a idade do pai do usuário. O programa devera imprimir na tela quantos anos a mãe e o pai do usuário tinha quando ele nasceu. A resposta 
//deve ter o formato deste exemplo: “Carlos, quando você nasceu, Dona Cecilia tinha 27 anos e Seu Paulo tinha 32 anos”.

var usuario = prompt('Digite o seu nome: ')
var idadeUsuario = parseInt(prompt('Digite a sua idade: '))
var nomeMae = prompt('Digite o nome da sua mãe: ')
var idadeMae = parseInt(prompt('Digite a idade da sua mãe: '))
var nomePai = prompt('Digite o nome do seu pai: ')
var idadePai = parseInt(prompt('Digite a idade do seu pai: '))


alert(usuario+', há '+idadeUsuario+' anos atrás a Dona '+nomeMae+' tinha '+(idadeMae-idadeUsuario)+' anos de idade e o Seu '+nomePai+' tinha '+(idadePai-idadeUsuario)+' anos.')

*/


//7. Faça um programa que leia as três notas do aluno e calcula a sua média e a sua situação (aprovado por média, prova final ou reprovado 
//   direto). A média é calculada da seguinte forma: descarta a menor nota e a média é calculada usando as duas maiores notas. A situação do aluno 
//   depende da sua média e é apresentada na tabela abaixo:

var nota1 = parseFloat(prompt('Digite a primeira nota: '))
var nota2 = parseFloat(prompt('Digite a segunda nota: '))
var nota3 = parseFloat(prompt('Digite a terceira nota: '))

