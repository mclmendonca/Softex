/*


import {PesquisaCep} from "./pesquisaCep.js";
//import { cepLogradouro } from "./cepLogradouro.js";

let choice

do {

  choice = parseInt(prompt('===Bem vindo a Pesquisa dos Correios===\n\naperte uma das opções a seguir:\n( 1 ) - Pesquisar por CEP\n( 2 ) - Cep por Logradouro'))

  switch (choice) {
    case 1:
      PesquisaCep.pesquisaCep()
      
      break;
  
    default:
      break;
  }

} while(choice != 0);


*/

let choice

do {

  choice = parseInt(prompt('===Bem vindo a Pesquisa dos Correios===\n\naperte uma das opções a seguir:\n( 1 ) - Pesquisar por CEP\n( 2 ) - Cep por Logradouro\n( 0 ) - Para sair do programa'))

  switch (choice) {
    case 1:
      let choice2
      do {
        let cep = parseInt(prompt('Insira o CEP: '))

        let fetchCep = fetch("https://viacep.com.br/ws/"+cep+"/json")

        fetchCep.then(cep => cep.json())
        .then(data =>{
        choice2 = parseInt(prompt(`CEP ${cep}\nEndereço: `+ data.logradouro+'\nBairro: '
        +data.bairro+'\nCidade: '+data.localidade+'\nUF: '+data.uf+'\nCodigo IBGE: '+data.ibge+
        '\nDDD: '+data.ddd+'\n\nDigite ( 1 ) - consultar outro CEP ou ( 0 ) - retornar ao Menu Principal' ))
     
        })  
      } while (choice2 == 0);
      
      break;

    case 2:

      let uf = prompt('Qual a UF: ')
      let cidade = prompt('Qual a cidade: ')
      let logradouro = prompt('Qual o Endereço (quanto mais souber, mais acertivo será a reposta): ')

      let fetchCep = fetch("https://viacep.com.br/ws/"+uf+"/"+cidade+"/"+logradouro+"/json")

        fetchCep.then(cep => cep.json())
        .then(data =>{
        choice2 = parseInt(prompt(`O Endereço do CEP ${cep} é : `+ data.logradouro+'\nBairro: '
        +data.bairro+'\nCidade: '+data.localidade+'\nUF: '+data.uf+'\nCodigo IBGE: '+data.ibge+
        '\nDDD: '+data.ddd+'\n\nDigite ( 1 ) - para consultar outro CEP ou ( 0 ) - para retornar ao Menu Principal' ))
     
        })  


      
      break;
  
    default:
      break;
  }

} while(choice == 0);

