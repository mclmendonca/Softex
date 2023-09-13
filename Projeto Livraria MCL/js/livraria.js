//leia = require("readline-sync")

class Livro{
    listaLivros = []

  constructor(nome,autor,editora,preco,estoque){
    this.nome = nome
    this.autor = autor
    this.editora = editora
    this.preco = preco
    this.estoque = estoque
  }

  cadastrarLivro(livro){
    this.listaLivros.push(livro)
    return console.log('Livro cadastrado com sucesso')

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

const book = new Livro('Cão dos Baskervilles','Arthur Conan Doyle','Penguim', 200, 50)
book.cadastrarLivro(book)

console.log(book.listaLivros)


