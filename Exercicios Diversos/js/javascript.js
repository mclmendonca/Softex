/*
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

matriz.forEach(row => {
    row.forEach(element => {
        console.log(element)
})
})
*/

/*
let notas = [

    [5.5, 7.9, 7.1],  //Notas de José
    [7, 3.5, 9],      //Notas de Lúcia
    [8.6, 7.3, 8.8]   //Notas de Pedro

]


let mediaAlunos = []
let mediaNotas = []
let coluna1 = 0
let coluna2 = 0
let coluna3 = 0


for (let i = 0; i < notas.length; i++) {
    let soma = 0
    let = media = 0
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j] 
        
        if (j == 0) {
            coluna1 += notas[i][j]
        } else if (j == 1) {
            coluna2 += notas[i][j]
        }else if (j == 2) {
            coluna3 += notas[i][j]
        }
    }
    media = soma/3
    mediaAlunos.push(media)
}

coluna1 = coluna1/3
mediaNotas.push(coluna1)
coluna2 = coluna2/3
mediaNotas.push(coluna2)
coluna3 = coluna3/3
mediaNotas.push(coluna3)






console.log('A média dos alunos é: '+mediaAlunos)
console.log('A média das notas é:  '+mediaNotas)

*/


let i

do {
    i = parseInt(prompt('Qual o valor 10?'))
    
    if (i != 10) {
        window.alert('O valor digitado é diferente de 10')
    }

} while (i != 10);

while (i <= 50) {
    document.write(i+'<br>')
    i++
}





