
function calcularMedia(n1,n2,n3) {
    let media = (n1+n2+n3)/3
    return media    
}


nota1 = parseFloat(prompt('Qual a primeira nota: '))
nota2 = parseFloat(prompt('Qual a segunda nota: '))
nota3 = parseFloat(prompt('Qual a terceira nota: '))

resultado = calcularMedia(nota1,nota2,nota3)

console.log(`a média das notas ${nota1}, ${nota2} e ${nota3} é: ${resultado}.`)