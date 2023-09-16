// Programa Livraria
// essas variáveis eu vou utilizar para gravar os itens quando chegar a hora do cadastro.
let titulo
let autor
let editora
let preco
let estoque

// Classe livro onde eu vou criar com o contrutor o objeto livro.
class Livro {

  constructor(nome, autor, editora, preco, estoque) {
    this.nome = nome
    this.autor = autor
    this.editora = editora
    this.preco = preco
    this.estoque = estoque
  }


}

// classe onde eu crio um array para colocar todos os livros cadastrados. coloquei também os métodos cadastrar livro,
// deletar livro e alterar livro.

class ListaLivros {
  constructor() {
    this.listaLivros = []
  }

  cadastrarLivro(livro) {
    this.listaLivros.push(livro)
    return console.log('\nLivro cadastrado com sucesso\n')

  }

  deletarLivro() {

  }

  alterarLivro() {

  }
}


// criei a classe de loja para colocar os métodos onde faremos as ações da loja efetivamente
// ou seja movimentar o estoque vendendo livros, devolvendo eles e emitir um relatório onde 
// eu vou listar o que existe dentro do array listsLivros
class Loja {

  venderLivros() {

  }

  devolucao() {

  }

  emitirRelatorio() {

  }

}

class ItemCarrinho extends Livro {

  constructor(id, qtd) {
    super(nome, preco)
    this.id = id
    this.quantidade = qtd
  }
}

class Carrinho {
  constructor(produto) {
    this.carrinho = []
  }
}


//colocando na variável leia algo que vai ajudar a conseguirmos ler aquilo que o cliente responde na tela.
var leia = require('readline-sync')

//estanciando a lista de livros 
const lista = new ListaLivros()

// coloquei esses livros para termos opções para apresentar ao professor.



const book3 = new Livro('Hount of Baskervilles', 'Arthur Conan Doyle', 'Penguim', 200, 50)
const book4 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book5 = new Livro('O Foguete da Morte', 'Ian Fleming', 'Eon', 100, 60)
const book6 = new Livro('Diamantes são Eternos', 'Sean Connery', 'Broccoli', 90, 10)
const book7 = new Livro('Viva e Deixe Morrer', 'Roger Moore', 'Wilson', 80, 60)
const book8 = new Livro('O Amanhã Nunca Morre', 'Pierce Brosnan', 'United', 150, 30)
const book9 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book10 = new Livro('Diario de um Banana', 'Banana', 'Brasil', 10, 600)
lista.cadastrarLivro(book3)
lista.cadastrarLivro(book4)
lista.cadastrarLivro(book5)
lista.cadastrarLivro(book6)
lista.cadastrarLivro(book7)
lista.cadastrarLivro(book8)
lista.cadastrarLivro(book9)
lista.cadastrarLivro(book10)



// aqui começa o código que aparece no console. Começo com um DoWhile gigante para amarrar que o sistema não saia de jeito 
// nenhum a não ser que o cara digite o "0" que é sair. dentro dele eu vou colocar switchCases para navegar entre os sobmenus
// da aplicação até chegar no objetivo que o usuário quer dentro do sistema. tudo isso o usuario vai digitando os numeros das
// opções disponíveis.
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
            // usuario vai responder a medida que o sistema pergunta a ele: precisamos pensar sobre 
            // cada problema que a pergunta implicar e tratar os possiveis erros: aqui eu uso as 
            // variáveis que eu declarei lá no inicio do código
            titulo = leia.question('Qual o Título do livro? ')

            do {
              autor = leia.question('Qual o Autor do livro? ')
              if (!isNaN(autor)) {
                console.log('Por favor, digite um nome.')
              }
            } while (!isNaN(autor));

            editora = leia.question('Qual a Editora do livro? ')


            preco = leia.question('Qual o Preço do livro? ')



            do {
              estoque = leia.question('Qual o Estoque do livro? ')
              if (isNaN(estoque)) {
                console.log('Por favor, digite um nome.')
              }
            } while (isNaN(estoque));

            let book = new Livro(titulo, autor, editora, preco, estoque)
            lista.cadastrarLivro(book)

            break;


          case 2:
            // Se o cliente digitar 2 no segundo menu de Livros vamos apagar o registro do livro no array ListaLivros.
            // penso que poderíamos criar aqui um outro nível de menu dando duas opções do cliente porder achar o livro
            // a ser alterado. seria assim (1) para procurar pelo titulo e (2) para procurar pelo autor e (0) para voltar
            // ao manu anterior. Depois de acessar esse menu e o sistema mostrar os titulos em tela do que se encaixa 
            // dentro do que foi procurado o usuario iria escolher qual dos títulos quer deletar(usando o menun numerico).
            // no fim a mensagem "Livro deletado com sucesso".        
            break;

          case 3:
            // Se o cliente digitar 3 no segundo menu de Livros vamos alterar algum dos dados do livro no array ListaLivros.
            // penso que poderíamos criar aqui um outro nível de menu dando duas opções do cliente porder achar o livro
            // a ser alterado. seria assim (1) para procurar pelo titulo e (2) para procurar pelo autor e (0) para voltar
            // ao manu anterior. Depois de acessar esse menu e o sistema mostrar os titulos em tela do que se encaixa 
            // dentro do que foi procurado o usuario iria escolher qual dos títulos quer alterar. escolhedo o livro, 
            // apareceria outro menu para dizer qual dos atributos quer mexer e finalmente em outra tela ele digitaria o
            // valor a ser gravado. no fim a mensagem "Alteração feita com sucesso".

            break;

          case 0:



            break;


          default:
            console.log('Opção inválida, por favor digite uma opção entre 1 e 3 ou 0 para voltar.')
            break;


        }

      } while (option2 != 0);

      break;


    case 2:
      // vou falar o conceito mais amplo sem parte técnica envolvida: Se o cliente digitar 2 no primeiro menu vamos 
      // vender o livro. Vender nada mais é do que selecionar um livro ou mais de um de livros, colocar num "carrinho"
      // somar os totais. totalizar e pagar. penso que o carrinho pode ser um novo array que inseriamos neles os livros
      // que selecionássimos após uma busca por titulo ou por autor, ou através de uma listagem em tela com todos os itens.
      // abateríamos as devidas quantidades dos seus respectivos estoques. no fim um demonstrativo que lembre um cupom.
      let option3
      do {
        console.log("============+++++++     Livraria Jaca   +++++++==========\n")
        console.log("=================| Produtos Disponíveis: |===============\n")
        console.log("Opção ===== Produto  ====================  Preço  =======\n")
        let item = 0
        for (const iterator of lista.listaLivros) {
          item = (lista.listaLivros.indexOf(iterator))
          console.log((item + 1) + '\t' + iterator.nome + '\t\t R$: ' + iterator.preco)
        }
        console.log('\n0\tPara Voltar')
        console.log("=========================================================\n")
        option3 = parseInt(leia.question('Escolha uma das opçõs para adicionar ao carrinho: '))

        let escolhido = lista.listaLivros.indexOf((option3 - 1))

        let quantidade
        do {
          quantidade = parseInt(leia.question('qual a quantidade?'))
        } while (isNaN(quantidade))

/////////////////////// PAREI AQUI. CRIEI A CLASSE ITEM CARRINHO PARA CRIAR O OBJETO E 
///////////////////////A CLASSE CARRINHO PARA FAZER O CARRINHO E VOU CRIAR OS METODOS PARA POR OS OBJETOS NO CARRINHO.
///////////////////////AGORA É FAZER ISSO ACONTECER E INSERIR MAIS DE UM PRODUTO NO CARRINHO, MOSTRAR PEDIDO , ESCOLHER
/////////////////////// FORMA DE PAGTO E FECHAR MOSTRANDO UMA NOTA.




      } while (option3 != 0);








      break;

    case 3:
      // se o cliente digitar 3 iriamos devolver o livro. faríamos uma busca desse livro pelo titulo ou pelo autor e ao 
      // selecionar o usuario informaria a quantidade a ser devolvida e somariamos ele ao nosso estoque. no fim a mensagem
      // "devolvido com sucesso".

      break;

    case 4:
      // Se o cliente digitar  4 no primeiro menu nós exibimos a lista de produtos cadastrados com todas as informações
      // do produto. se pudermos caprichar e dar uma cara de relatório ao resultado... melhor.
      for (const iterator of lista.listaLivros) {
        console.log(iterator)
      }

      break;

    default:
      console.log('Opção inválida, por favor digite uma opção entre 1 e 4 ou 0 para sair.')
      break;
  }



} while (option != 0)





/*
const book3 = new Livro('Hount of Baskervilles', 'Arthur Conan Doyle', 'Penguim', 200, 50)
const book4 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book5 = new Livro('Casino Royale', 'Ian Fleming', 'Eon', 100, 60)
const book6 = new Livro('Os Diamantes são Eternos', 'Sean Connery', 'Broccoli', 90, 10)
const book7 = new Livro('Viva e Deixe Morrer', 'Roger Moore', 'Wilson', 80, 60)
const book8 = new Livro('O Amanhã Nunca Morre', 'Pierce Brosnan', 'United', 150, 30)
const book9 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book10 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book11 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book12 = new Livro('Diario de um Banana', 'Banana', 'Brasil', 10, 600)
lista.cadastrarLivro(book3)
lista.cadastrarLivro(book4)
lista.cadastrarLivro(book5)
lista.cadastrarLivro(book6)
lista.cadastrarLivro(book7)
lista.cadastrarLivro(book8)
lista.cadastrarLivro(book9)
lista.cadastrarLivro(book10)
lista.cadastrarLivro(book11)
lista.cadastrarLivro(book12)
*/