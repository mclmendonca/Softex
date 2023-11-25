// Interface Strategy
class OperationStrategy {
  execute(num1, num2) {
    // Método abstrato a ser implementado nas classes concretas
  }
}

// Classes concretas que implementam a Strategy para soma, subtração e multiplicação
class AdditionStrategy extends OperationStrategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class SubtractionStrategy extends OperationStrategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class MultiplicationStrategy extends OperationStrategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Contexto da aplicação
class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

// Função para obter a operação desejada do usuário
function getOperation() {
  const operation = prompt('Digite a operação desejada (+, -, *):');
  switch (operation) {
    case '+':
      return new AdditionStrategy();
    case '-':
      return new SubtractionStrategy();
    case '*':
      return new MultiplicationStrategy();
    default:
      console.log('Operação inválida. Tente novamente.');
      return getOperation();
  }
}

// Entrada do usuário
const num1 = parseInt(prompt('Digite o primeiro número:'));
const num2 = parseInt(prompt('Digite o segundo número:'));

// Obtenção da estratégia com base na operação informada pelo usuário
const operationStrategy = getOperation();

// Criação da calculadora com a estratégia selecionada
const calculator = new Calculator(operationStrategy);

// Cálculo e exibição do resultado
const result = calculator.calculate(num1, num2);
console.log(`O resultado da operação é: ${result}`);
