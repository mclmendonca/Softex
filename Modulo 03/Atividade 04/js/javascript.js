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
        if(!this.cabeca){
            return null
        }
        if (!this.cabeca.proximo) {
            const removeNo = this.cabeca
            this.cabeca = null
            return removeNo.nome
        }
        let atual = this.cabeca
        let anterior = null
        while (atual.proximo) {
            anterior = atual
            atual = atual.proximo
        }
        anterior.proximo = null;
        return atual.nome

    }

    //busca (search)
    procura(nome){
        let atual = this.cabeca
        while (atual) {
            if (atual.nome == nome) {
                return atual
            }
            atual = atual.proximo
        }
        return null
    }

    //tamanho da lista
    tamanho(){
        let contagem = 0
        let atual = this.cabeca
        while (atual) {
            contagem++
            atual = atual.proximo
        }
        return contagem
    }

    //exibir a lista
    imprimeLista(){
        

    }

}