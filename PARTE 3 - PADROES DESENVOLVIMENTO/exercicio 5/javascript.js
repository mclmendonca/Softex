// Classe Galinha
class Galinha {
  cacarejar() {
    console.log("Cocoricó!");
  }
}

// Classe Pato
class Pato {
  grasnar() {
    console.log("Quack!");
  }
}

// Classe AdaptadorPato que permite que um Pato seja usado como Galinha
class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  cacarejar() {
    // Adapta o método de grasnar para cacarejar
    this.pato.grasnar();
  }
}

// Classe AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato
class AdaptadorPatoDemo {
  static run() {
    // Criando uma instância de Pato
    const pato = new Pato();

    // Criando uma instância de AdaptadorPato, passando o Pato como parâmetro
    const adaptadorPato = new AdaptadorPato(pato);

    // Usando o AdaptadorPato como se fosse uma Galinha
    adaptadorPato.cacarejar();
  }
}

// Executando a demonstração
AdaptadorPatoDemo.run();
