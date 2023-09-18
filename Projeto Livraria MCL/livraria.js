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


// criei a classe de loja para colocar os métodos onde faremos as acoes da loja efetivamente
// ou seja movimentar o estoque vendendo livros, devolvendo eles e emitir um relatório onde 
// eu vou listar o que existe dentro do array listsLivros
class Loja {

  venderLivros() {
    let idped
    let qtdped

    for (const i in paraCarrinho.carrinho) {
      
      idped = paraCarrinho.carrinho[i].id
      qtdped = paraCarrinho.carrinho[i].quantidade

        for (const j in lista.listaLivros) {
          if (idped == j) {
              lista.listaLivros[j].estoque -= qtdped                    
            
          }
        }
      
    }


  }

  devolucao() {

  }

  emitirRelatorio() {

  }

}


//Criei essa classe para criar os itens do carrinho, usei o conceito de herança aqui
class ItemCarrinho extends Livro {

  constructor(id, qtd, nome, preco, precoTotal) {
    super(nome, '', '', preco)
    this.id = id
    this.quantidade = qtd
    this.precoTotal = precoTotal

  }
}

//Aqui crio a classe do carrinho em si, um array onde eu guardo os objetos feitos em "ItemCarrinho" 
//para montar o pedido, depois o cupom e vender.
class Carrinho {
  constructor() {
    this.carrinho = []
  }

  inserirCarrinho(produto) {
    this.carrinho.push(produto)
    return console.log('\nLivro inserio no carrinho com sucesso.')
  }
}


//colocando na variável leia algo que vai ajudar a conseguirmos ler aquilo que o cliente responde na tela.
var leia = require('readline-sync')

//espaço para estanciar o necessario para o bom funcionamento do programa orientado a objeto
const lista = new ListaLivros()
const paraCarrinho = new Carrinho()
const loja = new Loja()


// coloquei esses livros para termos opcoes para apresentar ao professor.

const book3 = new Livro('Hount of Baskervilles', 'Arthur Conan Doyle', 'Penguim', 200, 50)
const book4 = new Livro('A Study in a Red', 'Arthur Conan Doyle', 'Penguim', 150, 30)
const book5 = new Livro('O Foguete da Morte', 'Ian Fleming', 'Eon', 100, 60)
const book6 = new Livro('Diamantes sao Eternos', 'Sean Connery', 'Broccoli', 90, 10)
const book7 = new Livro('Viva e Deixe Morrer', 'Roger Moore', 'Wilson', 80, 60)
const book8 = new Livro('O Amanha Nunca Morre', 'Pierce Brosnan', 'United', 150, 30)
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



// aqui comeca o código que aparece no console. Comeco com um DoWhile gigante para amarrar que o sistema nao saia de jeito 
// nenhum a nao ser que o cara digite o "0" que é sair. dentro dele eu vou colocar switchCases para navegar entre os sobmenus
// da aplicacao até chegar no objetivo que o usuário quer dentro do sistema. tudo isso o usuario vai digitando os numeros das
// opcoes disponiveis.
let option
do {
  
  console.log('\n=== Livraria ===\n')
  console.log()
  console.log('= ( 1 ) - Livros')
  console.log('= ( 2 ) - Vender Livro')
  console.log('= ( 3 ) - Devolver o livro')
  console.log('= ( 4 ) - Relatório de Estoque')
  console.log('= ( 0 ) - Sair')

  option = parseInt(leia.question('\n= Escolha uma das opcoes = '))

  switch (option) {
    case 1:
      // se o cliente digitar 1 no primeiro menu, vamos jogar ele para um segundo menu, como 
      //se fosse um segundo nivel de menu onde ele vai escolher mais especificamente o que ele quer fazer.
      let option2
      console.clear()
      do {
        console.log('\n=== Livros ===\n')
        console.log()
        console.log('= ( 1 ) - Cadastrar Livro')
        console.log('= ( 2 ) - Deletar Livro')
        console.log('= ( 3 ) - Alterar Livro')
        console.log('= ( 0 ) - Voltar')


        option2 = parseInt(leia.question('\n= Escolha uma das opcoes = '))

        

        switch (option2) {
          case 1:
            // se o cliente digitar 1 no segundo menu vamos iniciar prontamente o cadastro do livro. 
            // usuario vai responder a medida que o sistema pergunta a ele: precisamos pensar sobre 
            // cada problema que a pergunta implicar e tratar os possiveis erros: aqui eu uso as 
            // variáveis que eu declarei lá no inicio do código
            titulo = leia.question('Qual o Titulo do livro? ')

            do {
              autor = leia.question('Qual o Autor do livro? ')
              if (!isNaN(autor)) {
                console.log('Por favor, digite um nome.')
              }
            } while (!isNaN(autor));

            editora = leia.question('Qual a Editora do livro? ')


            preco = leia.question('Qual o Preco do livro? ')



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
            // penso que poderiamos criar aqui um outro nivel de menu dando duas opcoes do cliente porder achar o livro
            // a ser alterado. seria assim (1) para procurar pelo titulo e (2) para procurar pelo autor e (0) para voltar
            // ao manu anterior. Depois de acessar esse menu e o sistema mostrar os titulos em tela do que se encaixa 
            // dentro do que foi procurado o usuario iria escolher qual dos titulos quer deletar(usando o menun numerico).
            // no fim a mensagem "Livro deletado com sucesso".        
            break;

          case 3:
            // Se o cliente digitar 3 no segundo menu de Livros vamos alterar algum dos dados do livro no array ListaLivros.
            // penso que poderiamos criar aqui um outro nivel de menu dando duas opcoes do cliente porder achar o livro
            // a ser alterado. seria assim (1) para procurar pelo titulo e (2) para procurar pelo autor e (0) para voltar
            // ao manu anterior. Depois de acessar esse menu e o sistema mostrar os titulos em tela do que se encaixa 
            // dentro do que foi procurado o usuario iria escolher qual dos titulos quer alterar. escolhedo o livro, 
            // apareceria outro menu para dizer qual dos atributos quer mexer e finalmente em outra tela ele digitaria o
            // valor a ser gravado. no fim a mensagem "Alteracao feita com sucesso".

            break;

          case 0:



            break;


          default:
            console.log('\nopcao inválida, por favor digite uma opcao entre 1 e 3 ou 0 para voltar.\n')
            break;


        }

      } while (option2 != 0);

      break;


    case 2:
      // vou falar o conceito mais amplo sem parte técnica envolvida: Se o cliente digitar 2 no primeiro menu vamos 
      // vender o livro. Vender nada mais é do que selecionar um livro ou mais de um de livros, colocar num "carrinho"
      // somar os totais. totalizar e pagar. penso que o carrinho pode ser um novo array que inseriamos neles os livros
      // que selecionássimos após uma busca por titulo ou por autor, ou através de uma listagem em tela com todos os itens.
      // abateriamos as devidas quantidades dos seus respectivos estoques. no fim um demonstrativo que lembre um cupom.
      let option3
      do {
        console.clear()
        console.log("===============+++++++     Livraria Jaca   +++++++================\n")
        console.log("====================| Produtos Disponiveis: |=====================\n")
        console.log("opcao ====== Produto  =======================  Preco  ============\n")

        let itemOpcao = 0
        for (const i in lista.listaLivros) {
          console.log((parseInt(i) + 1) + '\t' + lista.listaLivros[i].nome + '\t\t R$ ' + lista.listaLivros[i].preco)
          itemOpcao +=1
        }

        console.log('\n0\tPara Voltar')
        console.log("==================================================================\n")
        option3 = parseInt(leia.question('Escolha uma das opcos para adicionar ao carrinho: '))





        if( option3 > 0 && option3 <= itemOpcao){
            

        let nomeEscolhido
        let precoEscolhido
        let precoTotal

        let quantidade
        do {
          quantidade = parseInt(leia.question('\nqual a quantidade? '))
        } while (isNaN(quantidade))

        for (const i in lista.listaLivros) {
          if (i == (option3 - 1)) {
            nomeEscolhido = lista.listaLivros[i].nome
            precoEscolhido = lista.listaLivros[i].preco
          }
        }

        precoTotal = (precoEscolhido * quantidade)


        let selecionado = new ItemCarrinho((option3 - 1), quantidade, nomeEscolhido, precoEscolhido, precoTotal)
        paraCarrinho.inserirCarrinho(selecionado)

        let simnao
        let subtotal = 0

        console.clear()
        console.log("===============+++++++     Livraria Jaca   +++++++================\n")
        console.log("=====================|        Carrinho       |====================\n")
        console.log("opcao ====== Produto  ======== qtd ==== Preco ====== Preco Total =\n")


        for (const i in paraCarrinho.carrinho) {
          console.log((parseInt(i) + 1) + '\t' + paraCarrinho.carrinho[i].nome + '\t' + paraCarrinho.carrinho[i].quantidade + '\t R$ ' + paraCarrinho.carrinho[i].preco + '\t\t R$ ' + paraCarrinho.carrinho[i].precoTotal)
          subtotal += paraCarrinho.carrinho[i].precoTotal
        }

        console.log("\n===================================================== SUBTOTAL ===")
        console.log('\t\t\t\t\t\t\t R$ ' + subtotal)
        console.log("==================================================================\n")
        //console.log('\n0\tPara Voltar')
        //console.log("==================================================================\n")

        do {
          simnao = leia.question('mais algum livro no carrinho? (s/n) ')
          simnao = simnao.toLowerCase()

          if (simnao != 's' && simnao != 'n') {
            console.log('Por Favor, digite S para SIM ou N para NaO.')
          }
        } while (simnao != 's' && simnao != 'n')

        if (simnao == 'n') {
          let option5
          let formaPagto
          do {
            console.log("\n Formas de Pagto:")
            console.log(" 1- PIX            ")
            console.log(" 2- Cartao Credito(Rotativo)")
            console.log(" 3- Cartao Débito ")
            console.log("\n=================================================================\n")
            console.log('0\tPara cancelar o pedido')
            console.log("=================================================================\n")
            option5 = parseInt(leia.question('Escolha uma das formas de pagamento: '))
            switch (option5) {

              case 0:
                option5 = 0
                option3 = 0
                paraCarrinho.carrinho = []
                console.log('\nPedido Cancelado com sucesso\n\n')
                break;

              case 1:
                formaPagto = 'PIX'
                break;

              case 2:
                formaPagto = 'Crédito (Roatativo)'
                break;

              case 3:
                formaPagto = 'Débito'
                break;

              default:
                console.log('opcao inválida, por favor digite uma opcao entre 1 e 3 ou 0 para voltar.')
                break;
            }

            if (option5 > 0 && option5 <=3) {
              console.clear()
              console.log("\n\n\n=================+++++++++  Livraria Jaca  ++++++++++=============")
              console.log("------------------------------------------------------------------")
              console.log("--------------------------- CUPOM FISCAL -------------------------")
              console.log("------------------------------------------------------------------")
              console.log("Ordem ====== Produto  ======== qtd ===== Preco ===== Preco Total =\n")
  
              let ordem = 0
              for (const i in paraCarrinho.carrinho) {
                console.log((parseInt(i) + 1) + '\t' + paraCarrinho.carrinho[i].nome + '\t' + paraCarrinho.carrinho[i].quantidade + '\t R$ ' + paraCarrinho.carrinho[i].preco + '\t\t R$ ' + paraCarrinho.carrinho[i].precoTotal)
                ordem +=1
              }
  
  
  
              console.log("------------------------------------------------------------------")
              console.log("QTD TOTAL DE ITENS\t                                     "+ordem)
              console.log(`VALOR TOTAL\t                                      R$  ${subtotal}`)
              console.log(`DESCONTO\t                                      R$     0`)
              console.log(`VALOR A PAGAR\t                                      R$  ${subtotal}`)
              console.log(`FORMA PAGTO:\t                                        ${formaPagto}`)
              console.log("==================================================================\n\n\n")
  
              

              //vou tirar os itens vendidos do estoque
                
              loja.venderLivros()         
    
              option5 = 0
              option3 = 0
              paraCarrinho.carrinho = []
            }


          } while (option5 != 0);


        }

        }else if(option3 == 0){
            option3 = 0
            paraCarrinho.carrinho = []
            console.log('\nPedido Cancelado com Sucesso!\n')          
          }else{
          console.log('\nOpcao inválida, por favor digite uma das opcoes disponiveis.\n')
        }

      


      } while (option3 != 0)

      

      break;

    case 3:
      // se o cliente digitar 3 iriamos devolver o livro. fariamos uma busca desse livro pelo titulo ou pelo autor e ao 
      // selecionar o usuario informaria a quantidade a ser devolvida e somariamos ele ao nosso estoque. no fim a mensagem
      // "devolvido com sucesso".

      break;

    case 4:
      // Se o cliente digitar  4 no primeiro menu nós exibimos a lista de produtos cadastrados com todas as informacoes
      // do produto. se pudermos caprichar e dar uma cara de relatório ao resultado... melhor.
      for (const iterator of lista.listaLivros) {
        console.log(iterator)
      }

      break;

    default:
      console.log('opcao inválida, por favor digite uma opcao entre 1 e 4 ou 0 para sair.')
      break;
  }



} while (option != 0)



