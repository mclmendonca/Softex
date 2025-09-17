# **10 Exercícios de Lógica (em TypeScript)**

1. **Cadastro simples**  
    Crie variáveis para guardar: nome, idade, cidade e se a pessoa estuda.   
   Mostre no console uma frase com essas informações.

2. **Área do retângulo**  
    Peça largura e altura (variáveis fixas). Calcule a área (`largura * altura`).

3. **Área do círculo**  
    Guarde o valor do raio em uma variável e calcule a área usando `π * raio²`.

4. **Conversor de temperatura**  
    Guarde uma temperatura em Celsius e calcule em Fahrenheit.  
    Fórmula: `F = C * 1.8 + 32`.

5. **Antecessor e sucessor**  
    Dado um número, mostre qual é o antecessor e o sucessor.

6. **Dobro e triplo**  
    Dado um número, mostre o dobro, triplo e a raiz quadrada.

7. **Média de notas**  
    Crie três variáveis com notas de um aluno e calcule a média.

8. **Troca de valores**  
    Guarde dois valores em variáveis (`a` e `b`) e troque seus valores (sem atribuir manualmente).

9. **Comparação de números**  
    Crie duas variáveis numéricas e diga se são iguais, se um é maior que o outro ou se são diferentes.

10. **Idade mínima para votar**  
     Crie uma variável `idade`. Mostre no console se a pessoa pode votar (idade \>= 16).  
  


    ### **11\. Par ou ímpar**

Crie uma variável com um número e mostre no console se ele é par ou ímpar.

---

### **12\. Tabuada**

Dado um número, mostre a tabuada dele de 1 até 10 usando um loop.

---

### **13\. Maior de três números**

Guarde três valores numéricos em variáveis e mostre qual deles é o maior.

---

### **14\. Verificador de senha**

Crie uma variável `senha` e verifique se ela é igual a `"1234"`.  
 Mostre "Acesso permitido" ou "Acesso negado".

---

### **15\. Soma dos primeiros N números**

Dado um valor `n`, calcule a soma dos números de 1 até `n`.

---

### **16\. Número primo**

Dado um número, verifique se ele é primo ou não.

---

### **17\. Contagem regressiva**

Crie uma variável com um número e faça uma contagem regressiva até 0\.

---

### **18\. Fatorial**

Dado um número `n`, calcule seu fatorial (`n!`).

---

### **19\. Inversor de string**

Crie uma variável com uma palavra e mostre a palavra invertida no console.

---

### **20\. Palíndromo**

Crie uma variável com uma palavra e verifique se ela é um palíndromo (lê igual de frente para trás).

# **10 Exercícios de Lógica (em TypeScript) Respostas**

## **Dia 1 – Variáveis, Tipos e Operadores**

### **Exercício 1 – Cadastro simples**

`let nome: string = "Ana";`  
`let idade: number = 25;`  
`let cidade: string = "São Paulo";`  
`let trabalha: boolean = true;`

``console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}, Trabalha: ${trabalha}`);``

---

### **Exercício 2 – Área do retângulo**

`let largura: number = 5;`  
`let altura: number = 10;`  
`let area: number = largura * altura;`

``console.log(`A área do retângulo é ${area}`);``

---

### **Exercício 3 – Área do círculo**

`let raio: number = 4;`  
`let pi: number = 3.14;`  
`let areaCirculo: number = pi * raio * raio;`

``console.log(`A área do círculo é ${areaCirculo}`);``

---

### **Exercício 4 – Conversor de temperatura**

`let celsius: number = 30;`  
`let fahrenheit: number = celsius * 1.8 + 32;`

``console.log(`${celsius}°C equivalem a ${fahrenheit}°F`);``

---

### **Exercício 5 – Antecessor e sucessor**

`let numero: number = 10;`  
`let antecessor: number = numero - 1;`  
`let sucessor: number = numero + 1;`

``console.log(`Número: ${numero}, Antecessor: ${antecessor}, Sucessor: ${sucessor}`);``

---

### **Exercício 6 – Dobro e triplo**

`let num: number = 7;`  
``console.log(`Dobro: ${num * 2}, Triplo: ${num * 3}, Raiz quadrada: ${Math.sqrt(num)}`);``

---

### **Exercício 7 – Média de notas**

`let nota1: number = 7;`  
`let nota2: number = 8;`  
`let nota3: number = 6;`  
`let media: number = (nota1 + nota2 + nota3) / 3;`

``console.log(`Média: ${media}`);``

---

### **Exercício 8 – Troca de valores**

`let a: number = 5;`  
`let b: number = 10;`  
`let temp: number;`

`temp = a;`  
`a = b;`  
`b = temp;`

``console.log(`a = ${a}, b = ${b}`);``

---

### **Exercício 9 – Comparação de números**

`let x: number = 12;`  
`let y: number = 15;`

`if (x > y) {`  
  ``console.log(`${x} é maior que ${y}`);``  
`} else if (x < y) {`  
  ``console.log(`${x} é menor que ${y}`);``  
`} else {`  
  ``console.log(`${x} e ${y} são iguais`);``  
`}`

---

### **Exercício 10 – Idade mínima para votar**

`let idadePessoa: number = 17;`

`if (idadePessoa >= 16) {`  
  `console.log("Pode votar");`  
`} else {`  
  `console.log("Não pode votar");`  
`}`  
