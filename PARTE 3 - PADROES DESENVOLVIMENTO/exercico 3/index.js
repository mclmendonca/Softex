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
var agenteSecreto = SistemaSeguranca.getInstance();

var leia = require('readline-sync')


console.log('======= MI7 System =======')
console.log('====== Base Secreta ======')
console.log('Digite a senha de acesso: ')

// Tentativa de acesso à base secreta
agenteSecreto.acessarBaseSecreta("senha123"); // Acesso concedido à base secreta!

// Tentativa de acesso com senha incorreta
agenteSecreto.acessarBaseSecreta("senha456"); // Acesso negado! Senha incorreta.
