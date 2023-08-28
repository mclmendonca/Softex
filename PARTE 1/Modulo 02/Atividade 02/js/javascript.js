/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a 
nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, 
também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

let candidato1Votos = 0
let candidato2Votos = 0
let candidato3Votos = 0
let candidato4Votos = 0
let votosNulos = 0


function obterVotoValido() {
  let opcao = prompt("Digite o número do candidato a ser votado:\n (13) para Luisinho\n (22) para Jairinho\n (15) para Moninha\n (0) para Branco\n ou 'F' para finalizar:")
  opcao = opcao.trim().toLowerCase()

  if (opcao === 'f') {
    return 'f'
  } else if (opcao === '13' || opcao === '22' || opcao === '15' || opcao === '0') {
    return parseInt(opcao)
  } else if (opcao == null || opcao.length == 0 || !isNaN(opcao)) {
    return 'nulo'
  }
  else {
    window.alert('Você digitou uma opção inválida. favor escolher um dos candidatos disponíveis o aperte a opção do branco.')
  }
}


while (true) {
  let voto = obterVotoValido()

  if (voto === 'f') {
    break
  } else if (voto === 'nulo') {
    votosNulos++
  } else if (voto === 13) {
    candidato1Votos++
  } else if (voto === 22) {
    candidato2Votos++
  } else if (voto === 15) {
    candidato3Votos++
  } else if (voto === 0) {
    candidato4Votos++
  }
}


const candidatos = [
  { nome: 'Luisinho   ', votos: candidato1Votos },
  { nome: 'Jairinho   ', votos: candidato2Votos },
  { nome: 'Moninha    ', votos: candidato3Votos }
]

candidatos.sort((a, b) => b.votos - a.votos)

console.log("\nClassificação final:")
candidatos.forEach((candidato, index) => {
  console.log(`${index + 1}. ${candidato.nome} => ${candidato.votos} votos`)

})
console.log(`Total de votos branco: ${candidato4Votos}`)
console.log(`Total de votos nulos: ${votosNulos}`)
