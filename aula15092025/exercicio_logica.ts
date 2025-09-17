// 1. Cadastro simples
let nomePessoa = "Ana";
let idadePessoa = 25;
let cidadePessoa = "São Paulo";
let estudaPessoa = true;
console.log(`1. Cadastro: Nome: ${nomePessoa}, Idade: ${idadePessoa}, Cidade: ${cidadePessoa}, Estuda: ${estudaPessoa}`);


// 2. Área do retângulo
let larguraRetangulo = 5;
let alturaRetangulo = 10;
let areaRetangulo = larguraRetangulo * alturaRetangulo;
console.log(`2. Área do retângulo: ${areaRetangulo}`);


// 3. Área do círculo
let raioCirculo = 4;
let piValor = 3.14;
let areaCirculo = piValor * raioCirculo * raioCirculo;
console.log(`3. Área do círculo: ${areaCirculo}`);


// 4. Conversor de temperatura
let tempCelsius = 30;
let tempFahrenheit = tempCelsius * 1.8 + 32;
console.log(`4. Conversão: ${tempCelsius}°C equivalem a ${tempFahrenheit}°F`);


// 5. Antecessor e sucessor
let numeroBase = 10;
let antecessorNumero = numeroBase - 1;
let sucessorNumero = numeroBase + 1;
console.log(`5. Número: ${numeroBase}, Antecessor: ${antecessorNumero}, Sucessor: ${sucessorNumero}`);


// 6. Dobro e triplo
let numeroDobroTriplo = 7;
console.log(`6. Dobro: ${numeroDobroTriplo * 2}, Triplo: ${numeroDobroTriplo * 3}, Raiz quadrada: ${Math.sqrt(numeroDobroTriplo)}`);


// 7. Média de notas
let notaAluno1 = 7;
let notaAluno2 = 8;
let notaAluno3 = 6;
let mediaAluno = (notaAluno1 + notaAluno2 + notaAluno3) / 3;
console.log(`7. Média das notas: ${mediaAluno}`);


// 8. Troca de valores
let valorA = 5;
let valorB = 10;
let valorTemp = valorA;
valorA = valorB;
valorB = valorTemp;
console.log(`8. Valores trocados: a = ${valorA}, b = ${valorB}`);


// 9. Comparação de números
let compX = 12;
let compY = 15;
if (compX > compY) {
    console.log(`9. ${compX} é maior que ${compY}`);
} else if (compX < compY) {
    console.log(`9. ${compX} é menor que ${compY}`);
} else {
    console.log(`9. ${compX} e ${compY} são iguais`);
}


// 10. Idade mínima para votar
let idadeParaVotar = 17;
if (idadeParaVotar >= 16) {
    console.log("10. Pode votar");
} else {
    console.log("10. Não pode votar");
}


// 11. Par ou ímpar
let numeroParOuImpar = 21;
if (numeroParOuImpar % 2 === 0) {
    console.log(`11. ${numeroParOuImpar} é Par`);
} else {
    console.log(`11. ${numeroParOuImpar} é Ímpar`);
}


// 12. Tabuada
let numeroTabuada = 5;
console.log(`12. Tabuada do ${numeroTabuada}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}


// 13. Maior de três números
let numMaior1 = 10;
let numMaior2 = 25;
let numMaior3 = 20;
let maiorNumero = numMaior1;
if (numMaior2 > maiorNumero) {
    maiorNumero = numMaior2;
}
if (numMaior3 > maiorNumero) {
    maiorNumero = numMaior3;
}
console.log(`13. Maior número é ${maiorNumero}`);


// 14. Verificador de senha
let senhaInformada = "1234";
if (senhaInformada === "1234") {
    console.log("14. Acesso permitido");
} else {
    console.log("14. Acesso negado");
}


// 15. Soma dos primeiros N números
let nSoma = 10;
let somaNumeros = 0;
for (let i = 1; i <= nSoma; i++) {
    somaNumeros += i;
}
console.log(`15. Soma dos números de 1 até ${nSoma} é ${somaNumeros}`);


// 16. Número primo
let numeroPrimoCheck = 17;
let ehPrimo = true;
if (numeroPrimoCheck <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numeroPrimoCheck); i++) {
        if (numeroPrimoCheck % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}
if (ehPrimo) {
    console.log(`16. ${numeroPrimoCheck} é primo`);
} else {
    console.log(`16. ${numeroPrimoCheck} não é primo`);
}


// 17. Contagem regressiva
let contagemInicial = 5;
console.log("17. Contagem regressiva:");
for (let i = contagemInicial; i >= 0; i--) {
    console.log(i);
}


// 18. Fatorial
let numFatorial = 5;
let resultadoFatorial = 1;
for (let i = 1; i <= numFatorial; i++) {
    resultadoFatorial *= i;
}
console.log(`18. Fatorial de ${numFatorial} é ${resultadoFatorial}`);


// 19. Inversor de string
let palavraOriginal = "typescript";
let palavraInvertida = "";
for (let i = palavraOriginal.length - 1; i >= 0; i--) {
    palavraInvertida += palavraOriginal[i];
}
console.log(`19. Palavra invertida: ${palavraInvertida}`);


// 20. Palíndromo
let palavraParaPalindromo = "arara";
let palavraInvertidaParaPalindromo = "";
for (let i = palavraParaPalindromo.length - 1; i >= 0; i--) {
    palavraInvertidaParaPalindromo += palavraParaPalindromo[i];
}
if (palavraParaPalindromo.toLowerCase() === palavraInvertidaParaPalindromo.toLowerCase()) {
    console.log(`20. A palavra "${palavraParaPalindromo}" é um palíndromo`);
} else {
    console.log(`20. A palavra "${palavraParaPalindromo}" não é um palíndromo`);
}
