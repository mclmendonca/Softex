// 1. Função simples
function dizerOla(nome: string): void {
  console.log("Olá, " + nome + "!");
}
dizerOla("João");

// 2. Função com retorno
function somar(a: number, b: number): number {
  return a + b;
}
console.log(somar(5, 3)); // 8

// 3. Função tabuada
function tabuada(numero: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
}
tabuada(4);

// 4. Global x Local
let mensagem = "Mensagem global";
function mostrarMensagem(): void {
  let mensagem = "Mensagem local";
  console.log("Dentro da função:", mensagem);
}
mostrarMensagem();
console.log("Fora da função:", mensagem);

// 5. Alterando variável global
let contador = 0;
function incrementarContador(): void {
  contador++;
  console.log("Contador agora é:", contador);
}
incrementarContador();
incrementarContador();

// 6. Proteção de escopo
function funcaoComVariavelLocal(): void {
  let variavelLocal = "Sou local";
  console.log(variavelLocal);
}
funcaoComVariavelLocal();
// console.log(variavelLocal); // ERRO

// 7. If com let
if (true) {
  let numero = 10;
  console.log("Dentro do if:", numero);
}
// console.log("Fora do if:", numero); // ERRO

// 8. If com var
if (true) {
  var valor = 5;
  console.log("Dentro do if:", valor);
}
console.log("Fora do if:", valor); // FUNCIONA

// 9. Const em bloco
if (true) {
  const pi = 3.14;
  console.log("Dentro do bloco:", pi);
  // pi = 3.14159; // ERRO
}

// 10. Par ou ímpar
function parOuImpar(numero: number): string {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(parOuImpar(7));

// 11. Maior de idade
function verificarIdade(idade: number): string {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(verificarIdade(16));

// 12. Média de notas
function verificarAprovacao(n1: number, n2: number, n3: number): string {
  let media = (n1 + n2 + n3) / 3;
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(verificarAprovacao(6, 7, 8));

// 13. Maior número em array
function maiorNumero(numeros: number[]): number {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}
console.log(maiorNumero([4, 10, 2, 99, 5]));

// 14. Somar elementos do array
function somarArray(numeros: number[]): number {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}
console.log(somarArray([1, 2, 3, 4]));

// 15. Filtrar pares
function filtrarPares(numeros: number[]): number[] {
  let pares: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));

// 16. Procurar item
function procurarNome(nomes: string[], alvo: string): string {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === alvo) {
      return "Nome encontrado!";
    }
  }
  return "Nome não encontrado.";
}
console.log(procurarNome(["Ana", "Carlos", "João"], "Carlos"));

// 17. Carrinho de compras
type Produto = {
  nome: string;
  preco: number;
};

let carrinho: Produto[] = [
  { nome: "Arroz", preco: 5 },
  { nome: "Feijão", preco: 7 },
  { nome: "Carne", preco: 20 }
];

function calcularTotal(produtos: Produto[]): number {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
  }
  return total;
}
console.log("Total da compra:", calcularTotal(carrinho));

// 18. Lista de tarefas – Adicionar
let tarefas: string[] = ["Estudar", "Lavar roupa"];
function adicionarTarefa(nova: string): void {
  tarefas.push(nova);
  console.log("Tarefa adicionada:", nova);
}
adicionarTarefa("Fazer exercício");
console.log(tarefas);

// 19. Remover tarefa
function removerTarefa(tarefa: string): void {
  let index = tarefas.indexOf(tarefa);
  if (index !== -1) {
    tarefas.splice(index, 1);
    console.log("Tarefa removida:", tarefa);
  } else {
    console.log("Tarefa não encontrada.");
  }
}
removerTarefa("Lavar roupa");
console.log(tarefas);

// 20. Contar maiores que 10
function contarMaioresQueDez(numeros: number[]): number {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
      contador++;
    }
  }
  return contador;
}
console.log(contarMaioresQueDez([5, 12, 20, 8, 11]));
