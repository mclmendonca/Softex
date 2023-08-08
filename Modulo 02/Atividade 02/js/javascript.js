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


function votar(cand1, cand2, cand3, branco, nulo) {

    var voto = prompt('======== ||| Eleições ||| ========\rDigite 1 para votar em ' + cand1.nome + '\rDigite 2 para votar em ' + cand2.nome + '\rDigite 3 para votar em ' + cand3.nome + '\rDigite 0 para votar em ' + branco.nome)


    switch (voto) {
        case '1':
            voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')

            while (voto != '1' && voto != '0') {
                window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para CONFIRMAR ou ( 0 ) para corrigir.')
                voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')
            }

            if (voto == '0') {
                votar(candidato1, candidato2, candidato3, branco, nulo)
            } else if (voto == '1') {
                cand1.voto++
            }

            break;

        case '2':
            voto = prompt('Você votou em ' + cand2.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')

            while (voto != '1' && voto != '0') {
                window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para CONFIRMAR ou ( 0 ) para corrigir.')
                voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')
            }


            if (voto == '0') {
                votar(candidato1, candidato2, candidato3, branco, nulo)
            } else if (voto == '1') {
                cand2.voto++

            }

            break;


        case '3':
            voto = prompt('Você votou em ' + cand3.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')

            while (voto != '1' && voto != '0') {
                window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para CONFIRMAR ou ( 0 ) para corrigir.')
                voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')
            }



            if (voto == '0') {
                votar(candidato1, candidato2, candidato3, branco, nulo)
            } else if (voto == '1') {
                cand3.voto++

            }

            break;


        case '0':
            voto = prompt('Você votou em ' + branco.nome + '. Tem certeza que deseja confirmar o voto? (( 1 ) Confirmar. ( 0 ) Corrige ): ')

            while (voto != '1' && voto != '0') {
                window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para CONFIRMAR ou ( 0 ) para corrigir.')
                voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')
            }



            if (voto == '0') {
                votar(candidato1, candidato2, candidato3, branco, nulo)
            } else if (voto == '1') {
                branco.voto++

            }

            break;


        case '':
            voto = prompt('Você votou em ' + nulo.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')

            while (voto != '1' && voto != '0') {
                window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para CONFIRMAR ou ( 0 ) para corrigir.')
                voto = prompt('Você votou em ' + cand1.nome + '. Tem certeza que deseja confirmar o voto? ( ( 1 ) Confirmar. ( 0 ) Corrige ): ')
            }



            if (voto == '0') {
                votar(candidato1, candidato2, candidato3, branco, nulo)
            } else if (voto == '1') {
                nulo.voto++

            }

            break;

        default:

            window.alert('Você digitou um numero/texto inválido, favor escolher a opção numérica correta: ')
            votar(candidato1, candidato2, candidato3, branco, nulo)
            break;
    }

    let acabar = prompt('Acabou a votação?\r ( 1 ) - Não, ainda teremos mais votação.\r ( 2 ) - Sim, vamos aos resultados da eleição')
    while (acabar != '1' && acabar != '2') {
        window.alert('Voce digitou uma opção inválida. Favor digitar ( 1 ) para NÃO ou ( 2 ) para SIM.')
        acabar = prompt('Acabou a votação?\r ( 1 ) - Não, ainda teremos mais votação.\r ( 2 ) - Sim, vamos aos resultados da eleição')
    }

    if (acabar == '1') {
        votar(candidato1, candidato2, candidato3, branco, nulo)
    } else if (acabar == '2') {
        return
    } else {

    }
}


var candidato1 = { nome: 'Luisinho', voto: 0 }
var candidato2 = { nome: 'Jairinho', voto: 0 }
var candidato3 = { nome: 'Moninha', voto: 0 }
var branco = { nome: 'Branco', voto: 0 }
var nulo = { nome: 'Nulo', voto: 0 }


var resultado = votar(candidato1, candidato2, candidato3, branco, nulo)



document.write('Resultado Final das Eleiões: <br>')
document.write('Posição<tab>Candidato<tab>Votos <br>')
if (candidato1.voto >= candidato2.voto && candidato1.voto >= candidato3.voto) {
    if (candidato2.voto >= candidato3.voto) {
        document.write('<br>1º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
        document.write('<br>2º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
        document.write('<br>3º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
    } else {
        document.write('<br>1º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
        document.write('<br>2º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
        document.write('<br>3º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
    }

} else if (candidato2.voto >= candidato1.voto && candidato2.voto >= candidato3.voto) {
    if (candidato1.voto >= candidato3.voto) {
        document.write('<br>1º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
        document.write('<br>2º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
        document.write('<br>3º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
    } else {
        document.write('<br>1º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
        document.write('<br>2º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
        document.write('<br>3º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
    }

} else if (candidato3.voto >= candidato1.voto && candidato3.voto >= candidato2.voto) {
    if (candidato1.voto >= candidato2.voto) {
        document.write('<br>1º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
        document.write('<br>2º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
        document.write('<br>3º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
    } else {
        document.write('<br>1º          ' + candidato3.nome + '   votos: ' + candidato3.voto)
        document.write('<br>2º          ' + candidato2.nome + '   votos: ' + candidato2.voto)
        document.write('<br>3º          ' + candidato1.nome + '   votos: ' + candidato1.voto)
    }

}


document.write('<br>          ' + branco.nome + '   votos: ' + branco.voto)
document.write('<br>          ' + nulo.nome + '   votos: ' + nulo.voto)






