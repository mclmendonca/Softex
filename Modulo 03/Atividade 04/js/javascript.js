//Crie uma lista encadeada em que cada elemento representa uma pessoa.

//Ela precisa conter informações como nome, idade e referência ao filho dela.

//Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe 
//o link no campo ao lado para que outros desenvolvedores possam analisá-lo.


class No{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.proximo = null
    }
}
class ListaLigada{
    constructor(){
        this.cabeca = null
    }

    //insere no Inicio
    addPrimeiro(nome){
        const novoNo = new No(nome)
        novoNo.proximo = this.cabeca
        this.cabeca = novoNo

    }

    //Insere no fim
    addUltimo(nome){
        const novoNo = new No(nome)
        if (!this.cabeca) {
            this.cabeca = novoNo            
        } else {
            let atual = this.cabeca
            while (atual.proximo) {
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
    }

    //Remove no inicio
    removePrimeiro(){
        if (!this.cabeca) {
            return null            
        }
        const removeNo = this.cabeca
        this.cabeca = this.cabeca.proximo
        removeNo.proximo = null
        return removeNo.nome
    }
    
    //remove no fim
    removeUltimo(){

    }

    //busca (search)
    procura(){

    }

    //tamanho da lista
    tamanho(){

    }

    //exibir a lista
    imprimeLista(){

    }

}