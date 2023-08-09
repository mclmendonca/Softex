

let nome  = ['Pedro','André','Marcos','Tiagão','Tiaguinho','Simão','Tomé','Mateus','Tadeu','Judas']
let idade = [30,29,28,27,26,25,23,22,21,24]
let cor   = ['azul','amarelo','verde','cinza','roxo','branco','preto','marrom','rosa','vermelho']

for (let i = 0; i < 10; i++) {
    document.write('nome: '+nome[i]+',  idade: '+idade[i]+',  cor: '+cor[i]+'.')
    document.write('<br>')
}

nome.pop()
nome.splice(1,0,'Judas')

idade.pop()
idade.splice(1,0,24)

cor.pop()
cor.splice(1,0,'vermelho')

document.write('<br>')
document.write('<br>')
for (let i = 0; i < 10; i++) {

    document.write('nome: '+nome[i]+',  idade: '+idade[i]+',  cor: '+cor[i]+'.')
    document.write('<br>')
}


