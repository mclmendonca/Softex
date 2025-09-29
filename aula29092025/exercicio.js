var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercício 1 - Classe Carro
var Carro = /** @class */ (function () {
    function Carro(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    return Carro;
}());
var carro1 = new Carro("Toyota", 2020);
var carro2 = new Carro("Honda", 2021);
console.log(carro1, carro2);
// Exercício 2 - Classe Pessoa
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentacao = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentacao());
// Exercício 3 - Classe Retângulo
var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    Retangulo.prototype.obterArea = function () {
        return this.largura * this.altura;
    };
    Retangulo.prototype.obterPerimetro = function () {
        return 2 * (this.largura + this.altura);
    };
    return Retangulo;
}());
var retangulo = new Retangulo(5, 10);
console.log("Área:", retangulo.obterArea());
console.log("Perímetro:", retangulo.obterPerimetro());
// Exercício 4 - Classe Livro
var Livro = /** @class */ (function () {
    function Livro(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    Livro.prototype.descrever = function () {
        return "".concat(this.titulo, " foi escrito por ").concat(this.autor, ".");
    };
    return Livro;
}());
var livro = new Livro("1984", "George Orwell");
console.log(livro.descrever());
// Exercício 5 - Conta Bancária com saldo privado
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    ContaBancaria.prototype.obterSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria();
conta.depositar(100);
conta.sacar(30);
console.log("Saldo atual:", conta.obterSaldo());
// Exercício 6 - Animal → Cachorro
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.emitirSom = function () {
        console.log("Som genérico de animal");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("Au! Au!");
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro();
cachorro.emitirSom();
// Exercício 7 - Gato com método miar
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.miar = function () {
        console.log("Miau!");
    };
    return Gato;
}(Animal));
var gato = new Gato();
gato.miar();
// Exercício 8 - Pássaro com método voar
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.voar = function () {
        console.log("O pássaro está voando...");
    };
    return Passaro;
}(Animal));
var passaro = new Passaro();
passaro.voar();
// Exercício 9 - Aluno herdando de Pessoa
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, serie) {
        var _this = _super.call(this, nome, idade) || this;
        _this.serie = serie;
        return _this;
    }
    Aluno.prototype.estudar = function () {
        console.log("".concat(this.nome, " est\u00E1 estudando na s\u00E9rie ").concat(this.serie, "."));
    };
    return Aluno;
}(Pessoa));
var aluno = new Aluno("Maria", 15, "9º ano");
aluno.apresentacao();
aluno.estudar();
// Exercício 10 - Professor herdando de Pessoa
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, disciplina) {
        var _this = _super.call(this, nome, idade) || this;
        _this.disciplina = disciplina;
        return _this;
    }
    Professor.prototype.ensinar = function () {
        console.log("".concat(this.nome, " est\u00E1 ensinando ").concat(this.disciplina, "."));
    };
    return Professor;
}(Pessoa));
var professor = new Professor("Carlos", 40, "História");
professor.ensinar();
// Exercício 11 - Veículo → CarroV
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, velocidade) {
        this.marca = marca;
        this.velocidade = velocidade;
    }
    Veiculo.prototype.mover = function () {
        console.log("".concat(this.marca, " est\u00E1 se movendo a ").concat(this.velocidade, " km/h."));
    };
    return Veiculo;
}());
var CarroV = /** @class */ (function (_super) {
    __extends(CarroV, _super);
    function CarroV(marca, velocidade, rodas) {
        var _this = _super.call(this, marca, velocidade) || this;
        _this.rodas = rodas;
        return _this;
    }
    CarroV.prototype.mover = function () {
        console.log("".concat(this.marca, " est\u00E1 rodando com ").concat(this.rodas, " rodas a ").concat(this.velocidade, " km/h."));
    };
    return CarroV;
}(Veiculo));
var veiculo = new CarroV("Ford", 100, 4);
veiculo.mover();
// Exercício 12 - Forma → Círculo e Quadrado
var Forma = /** @class */ (function () {
    function Forma() {
    }
    return Forma;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.obterArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    return Circulo;
}(Forma));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.obterArea = function () {
        return Math.pow(this.lado, 2);
    };
    return Quadrado;
}(Forma));
var circulo = new Circulo(3);
console.log("Área do círculo:", circulo.obterArea());
var quadrado = new Quadrado(4);
console.log("Área do quadrado:", quadrado.obterArea());
// Exercício 13 - Funcionário → Gerente
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.equipe = [];
        return _this;
    }
    Gerente.prototype.adicionarFuncionario = function (funcionario) {
        this.equipe.push(funcionario);
    };
    return Gerente;
}(Funcionario));
var funcionario1 = new Funcionario("Lucas", 3000);
var funcionario2 = new Funcionario("Ana", 3200);
var gerente = new Gerente("Bruno", 5000);
gerente.adicionarFuncionario(funcionario1);
gerente.adicionarFuncionario(funcionario2);
console.log(gerente.equipe);
// Exercício 14 - Conta → ContaPoupanca
var Conta = /** @class */ (function () {
    function Conta(dono) {
        this.dono = dono;
        this.saldo = 0;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.adicionarJuros = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.obterSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(dono, taxaJuros) {
        var _this = _super.call(this, dono) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    ContaPoupanca.prototype.aplicarJuros = function () {
        var juros = this.obterSaldo() * this.taxaJuros;
        this.adicionarJuros(juros);
    };
    return ContaPoupanca;
}(Conta));
var poupanca = new ContaPoupanca("João", 0.05);
poupanca.depositar(1000);
poupanca.aplicarJuros();
console.log("Saldo com juros:", poupanca.obterSaldo());
// Exercício 15 - Personagem → Guerreiro → Cavaleiro
var Personagem = /** @class */ (function () {
    function Personagem() {
    }
    Personagem.prototype.atacar = function () {
        console.log("Atacando!");
    };
    return Personagem;
}());
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guerreiro.prototype.defender = function () {
        console.log("Defendendo!");
    };
    return Guerreiro;
}(Personagem));
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cavaleiro.prototype.liderarExercito = function () {
        console.log("Liderando o exército!");
    };
    return Cavaleiro;
}(Guerreiro));
var cavaleiro = new Cavaleiro();
cavaleiro.atacar();
cavaleiro.defender();
cavaleiro.liderarExercito();
