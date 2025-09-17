// 1. Par ou Ímpar
let numParOuImpar = 10;
let resultado1 = '';
if (numParOuImpar % 2 === 0) {
    resultado1 = 'Par';
} else {
    resultado1 = 'Ímpar';
}
console.log(`1. Par ou Ímpar: ${resultado1}`);


// 2. Maior de dois números
let numero1 = 5;
let numero2 = 10;
let resultado2 = '';
if (numero1 > numero2) {
    resultado2 = `${numero1} é maior que ${numero2}`;
} else if (numero2 > numero1) {
    resultado2 = `${numero2} é maior que ${numero1}`;
} else {
    resultado2 = 'Os dois números são iguais';
}
console.log(`2. Maior de dois números: ${resultado2}`);


// 3. Positivo, negativo ou zero
let numClassificado = -3;
let resultado3 = '';
if (numClassificado > 0) {
    resultado3 = 'Positivo';
} else if (numClassificado < 0) {
    resultado3 = 'Negativo';
} else {
    resultado3 = 'Zero';
}
console.log(`3. Positivo, negativo ou zero: ${resultado3}`);


// 4. Idade para dirigir
let idadeDirigir = 17;
let resultado4 = '';
if (idadeDirigir >= 18) {
    resultado4 = 'Pode dirigir';
} else {
    resultado4 = 'Não pode dirigir';
}
console.log(`4. Idade para dirigir: ${resultado4}`);


// 5. Média escolar
let notaA = 7;
let notaB = 6;
let notaC = 8;
let mediaNotas = (notaA + notaB + notaC) / 3;
let resultado5 = '';
if (mediaNotas >= 7) {
    resultado5 = 'Aprovado';
} else {
    resultado5 = 'Reprovado';
}
console.log(`5. Média escolar: ${resultado5}`);


// 6. Categoria de idade
let idadeCat = 15;
let resultado6 = '';
if (idadeCat < 12) {
    resultado6 = 'Criança';
} else if (idadeCat >= 12 && idadeCat <= 17) {
    resultado6 = 'Adolescente';
} else {
    resultado6 = 'Adulto';
}
console.log(`6. Categoria de idade: ${resultado6}`);


// 7. Senha de acesso
let senhaUser = '1234';
let senhaCerta = '1234';
let resultado7 = '';
if (senhaUser === senhaCerta) {
    resultado7 = 'Senha correta';
} else {
    resultado7 = 'Senha incorreta';
}
console.log(`7. Senha de acesso: ${resultado7}`);


// 8. Desconto de compras
let valorCompraOriginal = 120;
let descontoValor = 0;
if (valorCompraOriginal > 100) {
    descontoValor = valorCompraOriginal * 0.10;
}
let valorFinalCompra = valorCompraOriginal - descontoValor;
console.log(`8. Desconto de compras: O valor final com desconto é R$ ${valorFinalCompra.toFixed(2)}`);


// 9. Triângulo válido
let triLado1 = 3;
let triLado2 = 4;
let triLado3 = 5;
let resultado9 = '';
if (triLado1 + triLado2 > triLado3 && triLado1 + triLado3 > triLado2 && triLado2 + triLado3 > triLado1) {
    resultado9 = 'Formam um triângulo válido';
} else {
    resultado9 = 'Não formam um triângulo válido';
}
console.log(`9. Triângulo válido: ${resultado9}`);


// 10. Ano bissexto (simplificado)
let anoVerificar = 2024;
let resultado10 = '';
if (anoVerificar % 4 === 0) {
    resultado10 = 'Ano bissexto';
} else {
    resultado10 = 'Ano não bissexto';
}
console.log(`10. Ano bissexto: ${resultado10}`);


// 11. Maior de três números
let numA = 10, numB = 20, numC = 30;
let resultado11 = 0;
if (numA > numB && numA > numC) {
    resultado11 = numA;
} else if (numB > numC) {
    resultado11 = numB;
} else {
    resultado11 = numC;
}
console.log(`11. Maior de três números: ${resultado11}`);


// 12. Faixa etária para ingresso em evento
let idadeEvento = 25;
let resultado12 = '';
if (idadeEvento < 12) {
    resultado12 = 'Infantil';
} else if (idadeEvento <= 17) {
    resultado12 = 'Juvenil';
} else if (idadeEvento <= 59) {
    resultado12 = 'Adulto';
} else {
    resultado12 = 'Idoso';
}
console.log(`12. Faixa etária para ingresso: ${resultado12}`);


// 13. Número múltiplo de 3 e 5
let numMultiplo = 15;
let resultado13 = '';
if (numMultiplo % 3 === 0 && numMultiplo % 5 === 0) {
    resultado13 = 'Múltiplo de 3 e 5';
} else if (numMultiplo % 3 === 0) {
    resultado13 = 'Múltiplo de 3';
} else if (numMultiplo % 5 === 0) {
    resultado13 = 'Múltiplo de 5';
} else {
    resultado13 = 'Nenhum';
}
console.log(`13. Número múltiplo de 3 e 5: ${resultado13}`);


// 14. Verificação de letra maiúscula
let letraCheck = 'a';
let resultado14 = '';
if (letraCheck === letraCheck.toUpperCase()) {
    resultado14 = 'Maiúscula';
} else {
    resultado14 = 'Minúscula';
}
console.log(`14. Verificação de letra maiúscula: ${resultado14}`);


// 15. Cálculo de imposto simples
let salarioUser = 2500;
let resultado15 = '';
if (salarioUser > 2000) {
    resultado15 = `Imposto de 10%: ${salarioUser * 0.1}`;
} else {
    resultado15 = 'Isento';
}
console.log(`15. Cálculo de imposto simples: ${resultado15}`);


// 16. Verificação de senha com nível de segurança
let senhaUserNivel = '1234';
let resultado16 = '';
if (senhaUserNivel === '1234') {
    resultado16 = 'Senha fraca';
} else if (senhaUserNivel === 'abc123') {
    resultado16 = 'Senha média';
} else {
    resultado16 = 'Senha forte';
}
console.log(`16. Verificação de senha com nível: ${resultado16}`);


// 17. Número positivo, par e múltiplo de 5
let numCheck = 10;
let resultado17 = '';
if (numCheck > 0 && numCheck % 2 === 0 && numCheck % 5 === 0) {
    resultado17 = 'Positivo, par e múltiplo de 5';
} else {
    resultado17 = 'Não atende';
}
console.log(`17. Número positivo, par e múltiplo de 5: ${resultado17}`);


// 18. Cálculo de bônus por tempo de serviço
let tempoServico = 2;
let resultado18 = '';
if (tempoServico < 1) {
    resultado18 = '0%';
} else if (tempoServico <= 3) {
    resultado18 = '5%';
} else if (tempoServico <= 6) {
    resultado18 = '10%';
} else {
    resultado18 = '15%';
}
console.log(`18. Cálculo de bônus: ${resultado18}`);


// 19. Triângulo equilátero, isósceles ou escaleno
let triL1 = 3, triL2 = 3, triL3 = 4;
let resultado19 = '';
if (triL1 === triL2 && triL2 === triL3) {
    resultado19 = 'Equilátero';
} else if (triL1 === triL2 || triL2 === triL3 || triL1 === triL3) {
    resultado19 = 'Isósceles';
} else {
    resultado19 = 'Escaleno';
}
console.log(`19. Tipo de triângulo: ${resultado19}`);


// 20. Divisibilidade múltipla
let numDivCheck = 12;
let resultado20 = '';
if (numDivCheck % 2 === 0) {
    resultado20 = 'Divisível por 2';
} else if (numDivCheck % 3 === 0) {
    resultado20 = 'Divisível por 3';
} else if (numDivCheck % 4 === 0) {
    resultado20 = 'Divisível por 4';
} else {
    resultado20 = 'Nenhum';
}
console.log(`20. Verificação de divisibilidade: ${resultado20}`);


// 21. Verificação de número primo (simples)
let numPrimoCheck = 7;
let resultado21 = '';
if (
    numPrimoCheck > 1 &&
    numPrimoCheck % 2 !== 0 &&
    numPrimoCheck % 3 !== 0 &&
    numPrimoCheck % 5 !== 0 &&
    numPrimoCheck % 7 !== 0
) {
    resultado21 = 'Primo';
} else {
    resultado21 = 'Não primo';
}
console.log(`21. Verificação de número primo: ${resultado21}`);


// 22. Verificação de paridade e sinal
let numParidadeCheck = -8;
let resultado22 = '';
if (numParidadeCheck > 0) {
    if (numParidadeCheck % 2 === 0) {
        resultado22 = 'Par positivo';
    } else {
        resultado22 = 'Ímpar positivo';
    }
} else {
    if (numParidadeCheck % 2 === 0) {
        resultado22 = 'Par negativo';
    } else {
        resultado22 = 'Ímpar negativo';
    }
}
console.log(`22. Paridade e sinal: ${resultado22}`);


// 23. Cálculo de desconto progressivo
let valorCompraProg = 150;
let resultado23 = '';
if (valorCompraProg <= 100) {
    resultado23 = 'Sem desconto';
} else if (valorCompraProg <= 200) {
    resultado23 = `5% de desconto: ${valorCompraProg * 0.05}`;
} else if (valorCompraProg <= 500) {
    resultado23 = `10% de desconto: ${valorCompraProg * 0.1}`;
} else {
    resultado23 = `15% de desconto: ${valorCompraProg * 0.15}`;
}
console.log(`23. Desconto progressivo: ${resultado23}`);


// 24. Verificação de letra vogal ou consoante
let letraCheckVogal = 'a';
let resultado24 = '';
if ('aeiou'.includes(letraCheckVogal.toLowerCase())) {
    resultado24 = 'Vogal';
} else {
    resultado24 = 'Consoante';
}
console.log(`24. Vogal ou consoante: ${resultado24}`);


// 25. Verificação de número múltiplo de dois números
let numeroMultiploCheck = 24;
let resultado25 = '';
if (numeroMultiploCheck % 4 === 0 && numeroMultiploCheck % 6 === 0) {
    resultado25 = 'Múltiplo de 4 e 6';
} else {
    resultado25 = 'Não múltiplo';
}
console.log(`25. Múltiplo de dois números: ${resultado25}`);


// 26. Cálculo de multa de velocidade
let velocidadeAtual = 85;
let resultado26 = '';
if (velocidadeAtual <= 60) {
    resultado26 = 'Sem multa';
} else if (velocidadeAtual <= 80) {
    resultado26 = 'Multa leve';
} else if (velocidadeAtual <= 100) {
    resultado26 = 'Multa média';
} else {
    resultado26 = 'Multa grave';
}
console.log(`26. Multa de velocidade: ${resultado26}`);


// 27. Verificação de ano do século
let anoVerificado = 1995;
let resultado27 = '';
if (anoVerificado >= 1901 && anoVerificado <= 2000) {
    resultado27 = 'Século XX';
} else if (anoVerificado >= 2001 && anoVerificado <= 2100) {
    resultado27 = 'Século XXI';
} else {
    resultado27 = 'Outro século';
}
console.log(`27. Ano do século: ${resultado27}`);


// 28. Classificação de nota com conceitos
let notaConceito = 8;
let resultado28 = '';
if (notaConceito >= 9) {
    resultado28 = 'Excelente';
} else if (notaConceito >= 7) {
    resultado28 = 'Bom';
} else if (notaConceito >= 5) {
    resultado28 = 'Regular';
} else {
    resultado28 = 'Insuficiente';
}
console.log(`28. Classificação de nota: ${resultado28}`);


// 29. Número positivo e divisível por 7
let numDiv7 = 14;
let resultado29 = '';
if (numDiv7 > 0 && numDiv7 % 7 === 0) {
    resultado29 = 'Positivo e divisível por 7';
} else {
    resultado29 = 'Não atende';
}
console.log(`29. Número positivo e divisível por 7: ${resultado29}`);


// 30. Verificação de idade para aposentadoria
let idadeHomemApos = 67;
let idadeMulherApos = 59;
let resultado30 = '';
if (idadeHomemApos >= 65) {
    resultado30 = 'Homem pode se aposentar';
} else if (idadeMulherApos >= 60) {
    resultado30 = 'Mulher pode se aposentar';
} else {
    resultado30 = 'Não pode se aposentar';
}
console.log(`30. Verificação aposentadoria: ${resultado30}`);
