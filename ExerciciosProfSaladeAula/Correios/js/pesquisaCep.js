export class PesquisaCep{

  pesquisaCep(){
    let choice2
    do {
      let cep = parseInt(prompt('Insira o CEP: '))

    let fetchCep = fetch("https://viacep.com.br/ws/"+cep+"/json")

    fetchCep.then(cep => cep.json())
    .then(data =>{
      choice2 = parseInt(prompt(`O Endereço do CEP ${cep} é : `+ data.logradouro+'\nBairro: '
      +data.bairro+'\nCidade: '+data.localidade+'\nUF: '+data.uf+'\nCodigo IBGE: '+data.ibge+
      '\nDDD: '+data.ddd+'\n\n\nDigite ( 1 ) - consultar outro CEP ou ( 0 ) - retornar ao Menu Principal' ))
     
  })  
    } while (choice2 != 0);
    

  }

}




