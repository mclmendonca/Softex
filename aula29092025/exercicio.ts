// Exercício 1 - Classe Carro
class Carro {
    
  constructor(public marca: string, public ano: number) {}
}

const carro1 = new Carro("Toyota", 2020);
const carro2 = new Carro("Honda", 2021);
console.log(carro1, carro2);

// Exercício 2 - Classe Pessoa
class Pessoa {
  constructor(public nome: string, public idade: number) {}

  apresentacao(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentacao());

// Exercício 3 - Classe Retângulo
class Retangulo {
  constructor(public largura: number, public altura: number) {}

  obterArea(): number {
    return this.largura * this.altura;
  }

  obterPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}

const retangulo = new Retangulo(5, 10);
console.log("Área:", retangulo.obterArea());
console.log("Perímetro:", retangulo.obterPerimetro());

// Exercício 4 - Classe Livro
class Livro {
  constructor(public titulo: string, public autor: string) {}

  descrever(): string {
    return `${this.titulo} foi escrito por ${this.autor}.`;
  }
}

const livro = new Livro("1984", "George Orwell");
console.log(livro.descrever());

// Exercício 5 - Conta Bancária com saldo privado
class ContaBancaria {
  private saldo: number = 0;

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
conta.sacar(30);
console.log("Saldo atual:", conta.obterSaldo());

// Exercício 6 - Animal → Cachorro
class Animal {
  emitirSom(): void {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("Au! Au!");
  }
}

const cachorro = new Cachorro();
cachorro.emitirSom();

// Exercício 7 - Gato com método miar
class Gato extends Animal {
  miar(): void {
    console.log("Miau!");
  }
}

const gato = new Gato();
gato.miar();

// Exercício 8 - Pássaro com método voar
class Passaro extends Animal {
  voar(): void {
    console.log("O pássaro está voando...");
  }
}

const passaro = new Passaro();
passaro.voar();

// Exercício 9 - Aluno herdando de Pessoa
class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public serie: string) {
    super(nome, idade);
  }

  estudar(): void {
    console.log(`${this.nome} está estudando na série ${this.serie}.`);
  }
}

const aluno = new Aluno("Maria", 15, "9º ano");
aluno.apresentacao();
aluno.estudar();

// Exercício 10 - Professor herdando de Pessoa
class Professor extends Pessoa {
  constructor(nome: string, idade: number, public disciplina: string) {
    super(nome, idade);
  }

  ensinar(): void {
    console.log(`${this.nome} está ensinando ${this.disciplina}.`);
  }
}

const professor = new Professor("Carlos", 40, "História");
professor.ensinar();

// Exercício 11 - Veículo → CarroV
class Veiculo {
  constructor(public marca: string, public velocidade: number) {}

  mover(): void {
    console.log(`${this.marca} está se movendo a ${this.velocidade} km/h.`);
  }
}

class CarroV extends Veiculo {
  constructor(marca: string, velocidade: number, public rodas: number) {
    super(marca, velocidade);
  }

  mover(): void {
    console.log(`${this.marca} está rodando com ${this.rodas} rodas a ${this.velocidade} km/h.`);
  }
}

const veiculo = new CarroV("Ford", 100, 4);
veiculo.mover();

// Exercício 12 - Forma → Círculo e Quadrado
abstract class Forma {
  abstract obterArea(): number;
}

class Circulo extends Forma {
  constructor(public raio: number) {
    super();
  }

  obterArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Quadrado extends Forma {
  constructor(public lado: number) {
    super();
  }

  obterArea(): number {
    return this.lado ** 2;
  }
}

const circulo = new Circulo(3);
console.log("Área do círculo:", circulo.obterArea());

const quadrado = new Quadrado(4);
console.log("Área do quadrado:", quadrado.obterArea());

// Exercício 13 - Funcionário → Gerente
class Funcionario {
  constructor(public nome: string, public salario: number) {}
}

class Gerente extends Funcionario {
  public equipe: Funcionario[] = [];

  adicionarFuncionario(funcionario: Funcionario): void {
    this.equipe.push(funcionario);
  }
}

const funcionario1 = new Funcionario("Lucas", 3000);
const funcionario2 = new Funcionario("Ana", 3200);
const gerente = new Gerente("Bruno", 5000);
gerente.adicionarFuncionario(funcionario1);
gerente.adicionarFuncionario(funcionario2);
console.log(gerente.equipe);

// Exercício 14 - Conta → ContaPoupanca
class Conta {
  private saldo: number = 0;

  constructor(public dono: string) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  protected adicionarJuros(valor: number): void {
    this.saldo += valor;
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

class ContaPoupanca extends Conta {
  constructor(dono: string, public taxaJuros: number) {
    super(dono);
  }

  aplicarJuros(): void {
    const juros = this.obterSaldo() * this.taxaJuros;
    this.adicionarJuros(juros);
  }
}

const poupanca = new ContaPoupanca("João", 0.05);
poupanca.depositar(1000);
poupanca.aplicarJuros();
console.log("Saldo com juros:", poupanca.obterSaldo());

// Exercício 15 - Personagem → Guerreiro → Cavaleiro
class Personagem {
  atacar(): void {
    console.log("Atacando!");
  }
}

class Guerreiro extends Personagem {
  defender(): void {
    console.log("Defendendo!");
  }
}

class Cavaleiro extends Guerreiro {
  liderarExercito(): void {
    console.log("Liderando o exército!");
  }
}

const cavaleiro = new Cavaleiro();
cavaleiro.atacar();
cavaleiro.defender();
cavaleiro.liderarExercito();
