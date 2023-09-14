//leia = require("readline-sync")

let titulo
let autor
let editora
let preco
let estoque

class Livro{
  
  constructor(nome,autor,editora,preco,estoque){
    this.nome = nome
    this.autor = autor
    this.editora = editora
    this.preco = preco
    this.estoque = estoque
  }
 

}

class ListaLivros{
  constructor(){
    this.listaLivros = []
  }

  cadastrarLivro(livro){
    this.listaLivros.push(livro)
    return console.log('\nLivro cadastrado com sucesso\n')

  }

  deletarLivro(){

  }

  alterarLivro(){

  }
}

class Loja{
  
  venderLivros(){

  }

  devolucao(){

  }

  emitirRelatorio(){

  }
  
}

var leia = require('readline-sync')

const lista = new ListaLivros()

let option
do {
console.log('\n=== Livraria ===\n')
console.log()
console.log('= ( 1 ) - Livros')
console.log('= ( 2 ) - Vender Livro')
console.log('= ( 3 ) - Devolver o livro')
console.log('= ( 4 ) - Relatório de Estoque')
console.log('= ( 0 ) - Sair')

option = parseInt(leia.question('\n= Escolha uma das opções = '))

if(option < 0 || option > 4 || isNaN(option)) {
    console.log('Opção inválida, por favor digite uma opção entre 1 e 4 ou 0 para sair.')
}

  switch (option) {
  case 1:
    let option2
    do {
      console.log('\n=== Livros ===\n')
      console.log()
      console.log('= ( 1 ) - Cadastrar Livro')
      console.log('= ( 2 ) - Deletar Livro')
      console.log('= ( 3 ) - Alterar Livro')
      console.log('= ( 0 ) - Voltar')

    
    option2 = parseInt(leia.question('\n= Escolha uma das opções = '))

    if(option2 < 0 || option2 > 3 || isNaN(option2)) {
      console.log('Opção inválida, por favor digite uma opção entre 1 e 3 ou 0 para voltar.')
    }

      switch (option2) {
        case 1:
          titulo = leia.question('Qual o Título do livro? ')
    
      do {
        autor = leia.question('Qual o Autor do livro? ')
        if(!isNaN(autor)){
          console.log('Por favor, digite um nome.')
        }
      } while (!isNaN(autor));
    
      editora = leia.question('Qual a Editora do livro? ')

      do {
        preco = leia.question('Qual o Preço do livro? ')  
        if(isNaN(preco)){
          console.log('Por favor, digite um nome.')
        }
      } while (isNan(preco));
    
      do {
        estoque = leia.question('Qual o Estoque do livro? ')
        if(isNaN(estoque)){
          console.log('Por favor, digite um nome.')
        }  
      } while (isNaN(estoque));
    
      let book = new Livro(titulo,autor,editora,preco,estoque)
      lista.cadastrarLivro(book)
          
        break;


      case 2:
        
        break;
    
      case 3:
        
        break;
      }  

    } while (option2 != 0);
    









    
  case 2:
    
    break;
  
  case 3:
    
    break;
  
  case 4:
      for (const iterator of lista.listaLivros) {
      console.log(iterator)
    }
    
    break;
    
  case 5:
    
    break;
                    

  default:
    break;
}








  

} while (option != 0)






/*
const book = new Livro('Hount of Baskervilles','Arthur Conan Doyle','Penguim', 200, 50)
const book1 = new Livro('A Study in a Red','Arthur Conan Doyle','Penguim', 150, 30)

lista.cadastrarLivro(book)
lista.cadastrarLivro(book1)

for (const iterator of lista.listaLivros) {
  console.log(iterator)
}
*/