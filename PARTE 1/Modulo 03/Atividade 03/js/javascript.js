//Considere o array [3, 7, 9, 1, 0].
//O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
//Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações,
// qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente 
//utilizando o array mencionado?



// sendo FILA, o primeiro item a ser removido será o primeiro do Array. faríamos uma função que 
// desenfilaria os itens do array do primeiro inserido até o último.

function desenfileirar() {
    return fila.shift()
}

fila = [3, 7, 9, 1, 0]

document.write('---Desinfileirando---<br>')
document.write('Fila = ['+fila+']<br>')

while (fila.length != 0) {
    
    document.write('Vou retirar o primeiro item da fila que é o :'+(fila[0]))
    desenfileirar()
    document.write('<br>o array fica assim: ['+fila+']<br>')
    
}

document.write('------------------------<br><br>')

// sendo Pilha o primeiro item a ser removido é o último do Array. faríamos uma função para desempilhar
// os itens do Array.

function desempilhar() {
    return pilha.pop()    
}

pilha = [3, 7, 9, 1, 0]

document.write('---Desempilhando---<br>')
document.write('Fila = ['+pilha+']<br>')



while (pilha.length != 0) {
    
    document.write('Vou retirar o último item que é o :'+(pilha[pilha.length -1]))
    desempilhar()
    document.write('<br>o array fica assim: ['+pilha+']<br>')
    
}

document.write('------------------------<br><br>')


// sendo Lista podemos tirar qualquer item de qualquer ponto do array. faríamos uma função para desempilhar
// os itens do Array.


function retirar(item) {
    let indice = lista.indexOf(item)
    return lista.splice(indice,1)
}

lista = [3, 7, 9, 1, 0]

document.write('---Retirando item da lista---<br>')
document.write('Fila = ['+lista+']<br>')

while (lista.length != 0) {
    
    numero = parseInt(prompt('Qual número você quer retirar: ['+lista+']'))
    document.write('<br>Você retirou o número: '+numero)
    retirar(numero)
    document.write('<br>o array fica assim: ['+lista+']<br>')
    
}

document.write('------------------------<br><br>')

