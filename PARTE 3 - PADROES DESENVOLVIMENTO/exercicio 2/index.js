// Classe abstrata Veículo
function Veiculo(modelo, marca, cor, numeroRodas) {
  this.modelo = modelo;
  this.marca = marca;
  this.cor = cor;
  this.numeroRodas = numeroRodas;
}

// Métodos da classe abstrata Veículo
Veiculo.prototype.clone = function () {
  return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
};

Veiculo.prototype.represent = function () {
  return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
};

// Subclasse 1: Carro
function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
  Veiculo.call(this, modelo, marca, cor, numeroRodas);
  this.numeroPortas = numeroPortas;
}

// Herança para Carro
Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

// Subclasse 2: Moto
function Moto(modelo, marca, cor, numeroRodas, estilo) {
  Veiculo.call(this, modelo, marca, cor, numeroRodas);
  this.estilo = estilo;
}

// Herança para Moto
Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

// Classe Aplicação
function Aplicacao() {
  this.veiculos = [
    new Carro("Sedan", "Toyota", "Azul", 4, 4),
    new Moto("Sport", "Honda", "Vermelha", 2, "Esportiva"),
    new Carro("Hatchback", "Volkswagen", "Preto", 4, 5),
    new Moto("Cruiser", "Harley-Davidson", "Prata", 2, "Cruiser"),
    new Carro("SUV", "Ford", "Branco", 4, 5),
    new Moto("Touring", "BMW", "Dourada", 2, "Touring"),
  ];
}

// Método para clonar os veículos
Aplicacao.prototype.clonarVeiculos = function () {
  return this.veiculos.map(function (veiculo) {
    return veiculo.clone();
  });
};

// Método para representar os veículos clonados
Aplicacao.prototype.representarVeiculosClonados = function () {
  const veiculosClonados = this.clonarVeiculos();
  veiculosClonados.forEach(function (veiculo) {
    console.log(veiculo.represent());
  });
};

// Instanciando a classe Aplicação e chamando o método representarVeiculosClonados
const aplicacao = new Aplicacao();
aplicacao.representarVeiculosClonados();
