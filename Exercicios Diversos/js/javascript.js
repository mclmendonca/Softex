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
try {
    
let media = 0
let notas = [

    [5.5, 7.9, 7.1],  //Notas de José
    [7, 3.5, 9],      //Notas de Lúcia
    [8.6, 7.3, 8.8]   //Notas de Pedro

]

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas.length; j++) {
        media = (media + notas[i][j])
       


    }

    notas.push(media)
}

console.log(notas)

} catch (error) {
    console.log(Error.message)
}

