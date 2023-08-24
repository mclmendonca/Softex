
function acharNumero(array,numero) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            return i            
        }
    }
    return -1
}

const ArrayNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] 
const procurado = 20

const encontrado = acharNumero(ArrayNumeros, procurado)

if (encontrado != -1) {
    document.write(`O número ${procurado} foi encontrado na posição ${encontrado}`)
} else {
    document.write(`O número ${procurado} não foi encontrado na lista`)
}




