
let c 

function analyzeNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Entrada Invalida"
    }

    if (a > b) {
        c = a + b
    } else if (a === b) {
        c = a * 2
    } else {
        c = b - a
    }

    return c
}

// 🧪 Casos de teste
console.log("======== TESTES ========")

// 1️⃣ a > b
console.log("1) analyzeNumbers(8, 3) →", analyzeNumbers(8, 3)) // Esperado: 11

// 2️⃣ a === b
console.log("2) analyzeNumbers(5, 5) →", analyzeNumbers(5, 5)) // Esperado: 10

// 3️⃣ a < b
console.log("3) analyzeNumbers(2, 9) →", analyzeNumbers(2, 9)) // Esperado: 7

// 4️⃣ Entrada inválida
console.log('4) analyzeNumbers("x", 4) →', analyzeNumbers("x", 4)) // Esperado: "Entrada Invalida"

// 5️⃣ Valores negativos
console.log("5) analyzeNumbers(-3, -8) →", analyzeNumbers(-3, -8)) // Esperado: -11

// 🔍 Verificando valor global de c após entrada inválida
console.log("\nValor de c após último teste:", c)
console.log("Obs: c é global e mantém o último valor numérico válido.")
