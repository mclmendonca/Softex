let carro = {
    modelo: 'Classic',
    ano: 2017,
    cor: 'vermelho',
    flex: true,
    preco: 40.000,
    velocidade: 100,


    acelera: () => `o carro do modelo ${carro.modelo} está acelerando a ${carro.velocidade}km por hora`,


    freia: () => `o carro está freiando`,

    para: () => `o carro está parado`
}

carro.velocidade > 100 || carro.velocidade < 200 ? console.log(carro.acelera()):console.log(carro.para())



