// Singleton SistemaSeguranca
var SistemaSeguranca = (function () {
  var instancia;

  function SistemaSeguranca() {
    // A senha da base secreta
    this.senhaBaseSecreta = "senha123";
  }

  SistemaSeguranca.prototype.acessarBaseSecreta = function (senha) {
    if (senha === this.senhaBaseSecreta) {
      console.log("Acesso concedido à base secreta!");
      acess = true
    } else {
      console.log("Acesso negado! Senha incorreta.");
    }
  };

  return {
    getInstance: function () {
      if (!instancia) {
        instancia = new SistemaSeguranca();
      }
      return instancia;
    },
  };
})();

// Programa principal
var acess = false
var agenteSecreto = SistemaSeguranca.getInstance();

//Instalar o readline-sync  para poder ler a senha que voce digitar no node. npm install readline-sync
var leia = require('readline-sync')

do {

  console.log('======= MI7 System =======')
  console.log('====== Base Secreta ======')
  senha = leia.question('Digite a senha de acesso: ')

  // Tentativa de acesso à base secreta
  agenteSecreto.acessarBaseSecreta(senha);
  
} while (acess == false);
 // Acesso concedido à base secreta!

// Tentativa de acesso com senha incorreta
//agenteSecreto.acessarBaseSecreta("senha456"); // Acesso negado! Senha incorreta.
