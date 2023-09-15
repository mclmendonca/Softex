//Programa Livraria
// essas variáveis eu vou utilizar para gravar os itens quando chegar a hora do cadastro.
let titulo
let autor
let editora
let preco
let estoque

//Classe livro onde eu vou criar com o contrutor o objeto livro.
class Livro{
  
  constructor(nome,autor,editora,preco,estoque){
    this.nome = nome
    this.autor = autor
    this.editora = editora
    this.preco = preco
    this.estoque = estoque
  }
 

}

//classe onde eu crio um array para colocar todos os livros cadastrados. coloquei também os métodos cadastrar livro,
//deletar livro e alterar livro.

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


//criei a classe de loja para colocar os métodos onde faremos as ações da loja efetivamente
//ou seja movimentar o estoque vendendo livros, devolvendo eles e emitir um relatório onde 
//eu vou listar o que existe dentro do array listsLivros
class Loja{
  
  venderLivros(){

  }

  devolucao(){

  }

  emitirRelatorio(){

  }
  
}

//colocando na variável leia algo que vai ajudar a conseguirmos ler aquilo que o cliente responde na tela.
var leia = require('readline-sync')

//estanciando a lista de livros 
const lista = new ListaLivros()


//aqui começa o código que aparece no console. Começo com um DoWhile gigante para amarrar que o sistema não saia de jeito 
//nenhum a não ser que o cara digite o "0" que é sair. dentro dele eu vou colocar switchCases para navegar entre os sobmenus
//da aplicação até chegar no objetivo que o usuário quer dentro do sistema. tudo isso o usuario vai digitando os numeros das
//opções disponíveis.
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

  switch (option) {
  case 1:
    // se o cliente digitar 1 no primeiro menu, vamos jogar ele para um segundo menu, como 
    //se fosse um segundo nível de menu onde ele vai escolher mais especificamente o que ele quer fazer.
    let option2
    do {
      console.log('\n=== Livros ===\n')
      console.log()
      console.log('= ( 1 ) - Cadastrar Livro')
      console.log('= ( 2 ) - Deletar Livro')
      console.log('= ( 3 ) - Alterar Livro')
      console.log('= ( 0 ) - Voltar')

    
    option2 = parseInt(leia.question('\n= Escolha uma das opções = '))



      switch (option2) {
        case 1:
          // se o cliente digitar 1 no segundo menu vamos iniciar prontamente o cadastro do livro. 
          //usuario vai responder a medida que o sistema pergunta a ele: precisamos pensar sobre 
          //cada problema que a pergunta implicar e tratar os possiveis erros: aqui eu uso as 
          //variáveis que eu declarei lá no inicio do código
        titulo = leia.question('Qual o Título do livro? ')
    
      do {
        autor = leia.question('Qual o Autor do livro? ')
        if(!isNaN(autor)){
          console.log('Por favor, digite um nome.')
        }
      } while (!isNaN(autor));
    
        editora = leia.question('Qual a Editora do livro? ')

      
        preco = leia.question('Qual o Preço do livro? ')  
        
      
    
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
        // se o cliente digitar  :
        
        break;
    
      case 3:
        // se o cliente digitar  :
        
        break;

      default:
    console.log('Opção inválida, por favor digite uma opção entre 1 e 3 ou 0 para voltar.')
        break;
      }  

    } while (option2 != 0);
    
    //parei aqui.









    
  case 2:
    // se o cliente digitar  :
    
    break;
  
  case 3:
    // se o cliente digitar  :
    
    break;
  
  case 4:
    // se o cliente digitar  :
      for (const iterator of lista.listaLivros) {
      console.log(iterator)
    }
    
    break;
    
  case 5:
    
    break;
                    

  default:
    console.log('Opção inválida, por favor digite uma opção entre 1 e 4 ou 0 para sair.')
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