

let c

function analyzeNumbers(a,b){
    if (typeof a !== "number" || typeof b !=="number") {
        return "Entrada Invalida"
    }

if( a > b ){
    c = a + b
} else if ( a===b ){
    c = a * 2
} else {
    c = b - a
}

return c

}


console.log("1) Qual é o resultado de analyzeNumbers(5, 3)? ",analyzeNumbers(5,3))

console.log("2) Qual seria o resultado se a = 0 e b = 5? ",analyzeNumbers(0,5))

console.log("3) E se a = 5 e b = 0?",analyzeNumbers(5,0))

console.log("4) E se a = 4 e b = 4?",analyzeNumbers(4,4))

console.log("O que acontece se você deixar a vazio?",analyzeNumbers("",1))

console.log("O que acontece se você passar uma letra no lugar de a ou b?",analyzeNumbers(5,"y"))

console.log("E se a = 5 e b = 0?",analyzeNumbers(5,0))

console.log("E se a = 5 e b = 0?",analyzeNumbers(5,0))

console.log("E se a = 5 e b = 0?",analyzeNumbers(5,0))




