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

/*
//7. Faça um programa que leia as três notas do aluno e calcula a sua média e a sua situação (aprovado por média, prova final ou reprovado 
//   direto). A média é calculada da seguinte forma: descarta a menor nota e a média é calculada usando as duas maiores notas. A situação do aluno 
//   depende da sua média e é apresentada na tabela abaixo:

var nota1 = parseFloat(prompt('Digite a primeira nota: '))
var nota2 = parseFloat(prompt('Digite a segunda nota: '))
var nota3 = parseFloat(prompt('Digite a terceira nota: '))


if (nota1>=nota2) {
    var notamedia1 = nota1
    if (nota2>=nota3) {
        var notamedia2 = nota2
    }else{
        var notamedia2 = nota3
    }
    
}else if (nota2>=nota1) {
    var notamedia1 = nota2
    if (nota1>=nota3) {
        var notamedia2 = nota1
    }else{
        var notamedia2 = nota3
    }
    
}

var media = (notamedia1+notamedia2)/2

if (media >= 7 && media<=10) {
    alert('Sua nota foi : '+media+'. Parabens! Aprovado por média.')    
} else if (media < 7 && media >= 3) {
    alert('Sua nota foi : '+media+'. Prova Final') 
} else if (media < 3 && media >=0) {
    alert('Sua nota foi : '+media+'. Reprovado Direto') 
} else{
    alert('ERRO! Reveja essas notas digitadas') 
}

document.write('as maiores notas foram '+notamedia1+' e '+notamedia2+'.')
*/

/*
//8.  Uma organização resolveu dar um aumento de salário aos seus colaboradores e lhe contratam para desenvolver o programa que calculará os 
//    reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//    Salários até R$ 280,00 (incluindo): aumento de 20%
//    Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
//    Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
//    Salários de R$ 1500,00 em diante: aumento de 5% Após o aumento ser realizado, informe na tela:
//    O percentual de aumento aplicado;
//    O valor do aumento;
//    O novo salário, após o aumento.

var salario = parseFloat(prompt('Digite o deu salário: '))
var reajuste
var aumento
var novoSalario


if (salario >= 1500) {
    reajuste = '5%'
    aumento = (salario*0.05)
    novoSalario = (salario+aumento)
    
} else if (salario < 1500 && salario >= 700) {
    reajuste = '10%'
    aumento = (salario*0.1)
    novoSalario = (salario+aumento)
    
} else if (salario < 700 && salario >= 280) {
    reajuste = '15%'
    aumento = (salario*0.15)
    novoSalario = (salario+aumento)
    
} else if (salario < 280) {
    reajuste = '20%'
    aumento = (salario*0.2)
    novoSalario = (salario+aumento)
   
}
document.write('<br>')
document.write('Você recebeu '+reajuste+' de aumento')
document.write('<br>')
document.write('<br>')
document.write('O Valor do aumento foi: R$ '+aumento+'.')
document.write('<br>')
document.write('<br>')
document.write('Logo, o seu novo salário será: R$ '+novoSalario)
*/

/*
//9⦁  Faça um programa para converter uma temperatura dada em graus Fharenheit para Graus Celcius 
//    segundo a seguinte fórmula: TC = (tf -32)*5/9.

var grausF = parseFloat(prompt('Digite a temperatura ( em graus Fharenheit (°F)): '))

var grausC = ((grausF-32)*5/9)

document.write(`${grausF}°F em graus Celsius é: ${grausC}°C`)

*/


/*
//10⦁  Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor.

var numero1 = parseFloat(prompt('Digite o primeiro número: '))
var numero2 = parseFloat(prompt('Digite o segundo número: '))

if (numero1 > numero2) {
    document.write(`O primeiro número inserido é o maior: ${numero1}`)
} else if (numero1<numero2) {
    document.write(`O segundo número inserido é o maior: ${numero2}`)
} else{
    document.write(`Os números inseridos são iguais`)
}

*/


/*
//11⦁  Faça um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que 
//     diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que	ela nasceu).

var anoNascimento = parseInt(prompt('qual o ano do nascimento: '))
var idade = (2023-anoNascimento)

if(idade >= 16 && idade <= 70) {
    document.write('Pode Votar.')
} else {
    document.write('Não pode votar.')
}

*/

/*

//14⦁  Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. 


var nota1 = parseInt(prompt('Digite a primeira nota: '))
var nota2 = parseInt(prompt('Digite a segunda nota: '))
var nota3 = parseInt(prompt('Digite a terceira nota: '))
var maiorNota
var menorNota


if (nota1>=nota2) {
    if (nota2>=nota3) {
        maiorNota = nota1
        menorNota = nota3
    }else if (nota3>=nota1) {
        maiorNota = nota3
        menorNota = nota2
    }else{
        maiorNota = nota1
        menorNota = nota2
    }
    
}else{
    if (nota1>=nota3) {
        maiorNota = nota2
        menorNota = nota3
    }else if (nota3>=nota2) {
        maiorNota = nota3
        menorNota = nota1
    }else{
        maiorNota = nota2
        menorNota = nota1
    }


}

document.write('O Maior número dos 3 informados é: '+maiorNota)
document.write('<br>')
document.write('O menor número dos 3 informados é: '+menorNota)

*/


/*

//13⦁  Faça um programa que recebe um inteiro e diga se é par ou ímpar. 

var numero = parseInt(prompt('Digite um número: '))

if (numero%2==0) {
    document.write('Esse número é PAR')
} else {
    document.write('Esse número é IMPAR')
}

*/



//14 ⦁  10. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo na linguagem C
//      que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos 
//      operadores lógicos OU (||) e E (&&).






