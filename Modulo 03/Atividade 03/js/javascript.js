//Considere o array [3, 7, 9, 1, 0].
//O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
//Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações,
// qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente 
//utilizando o array mencionado?

// sendo fila, o primeiro item a ser removido seria o primeiro a sr inserido. faríamos uma função que 
// desenfilaria os itens do array do primeiro inserido até o último.



function desenfileirar() {
    return fila.shift()
}

fila = [3, 7, 9, 1, 0]
    
console.log('Vou retirar o primeiro item da fila que é o :'+(fila[0]))
desenfileirar()
console.log('o array fica assim: '+fila)
    