class Banco{
    constructor(agencia,conta,tipoConta,saldo){
        this.agencia = agencia
        this.conta = conta
        this.tipoConta = tipoConta
        this.saldo = saldo
    }

    buscarSaldo(){
        return console.log(`Seu saldo atual é: ${this.saldo}`)
    }

    deposito(vlrDeposito){
        this.saldo += vlrDeposito
        return console.log(`Seu saldo atual é: ${this.saldo}`)
    }

    saque(vlrSaque){
        this.saldo -= vlrSaque
        return console.log(`Seu saldo atual é: ${this.saldo}`)

    }

    numeroConta(){
        return console.log(`O número da sua conta é: ${this.conta}`)

    }

}

const banco = new Banco(239,"2742-3","corrente",100)

console.log(banco)

banco.deposito(100)
banco.saque(50)
banco.numeroConta()
banco.buscarSaldo()