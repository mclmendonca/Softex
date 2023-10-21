function soma() {
    return "Não temos valores para somar"
}



function subtracao(num1,num2) {
    resultado = num1-num2
    return resultado
}

var multiplicacao = (num1,num2) => `O Resultado da multiplicação de ${num1} e ${num2} é : `+(num1*num2)

console.log(soma())
console.log(subtracao(2,1))
console.log(multiplicacao(3,2))
