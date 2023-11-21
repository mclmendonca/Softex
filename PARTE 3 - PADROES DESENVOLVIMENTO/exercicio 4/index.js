// Classe base para os sanduíches
class Sanduiche {
  constructor() {
    this.descricao = "Sanduíche";
  }

  obterDescricao() {
    return this.descricao;
  }

  calcularCusto() {
    return 0;
  }
}

// Decorator para adicionar ingredientes aos sanduíches
class AdicionalDecorator extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  obterDescricao() {
    return this.sanduiche.obterDescricao();
  }

  calcularCusto() {
    return this.sanduiche.calcularCusto();
  }
}

// Implementação da classe FrangoAssado
class FrangoAssado extends Sanduiche {
  constructor() {
    super();
    this.descricao = "Sanduíche de Frango Assado";
    this.custo = 4.50;
  }

  calcularCusto() {
    return this.custo;
  }
}

// Implementação da classe QueijoMussarelaRalado
class QueijoMussarelaRalado extends AdicionalDecorator {
  constructor(sanduiche) {
    super(sanduiche);
    this.descricao = "Queijo Mussarela Ralado";
    this.custoAdicional = 2.00;
  }

  calcularCusto() {
    return this.sanduiche.calcularCusto() + this.custoAdicional;
  }
}

// Implementação da classe Pepperoni
class Pepperoni extends AdicionalDecorator {
  constructor(sanduiche) {
    super(sanduiche);
    this.descricao = "Pepperoni";
    this.custoAdicional = 0.99;
  }

  calcularCusto() {
    return this.sanduiche.calcularCusto() + this.custoAdicional;
  }
}

// Uso do padrão decorator para criar o sanduíche desejado
let sanduicheFrangoAssado = new FrangoAssado();
sanduicheFrangoAssado = new QueijoMussarelaRalado(sanduicheFrangoAssado);
sanduicheFrangoAssado = new Pepperoni(sanduicheFrangoAssado);

// Impressão no console
console.log(
  `${sanduicheFrangoAssado.obterDescricao()}, custando R$ ${sanduicheFrangoAssado.calcularCusto().toFixed(2)}`
);
