// Função de login chamada em index.html
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");
  const welcomeBox = document.getElementById("welcome-box");

  if (username === "" || password === "") {
    errorMessage.textContent = "Por favor, preencha o usuário e a senha.";
    welcomeBox.style.display = "none";
  } else {
    localStorage.setItem("usuarioLogado", username); // Salva o nome
    window.location.href = "usuario.html"; 
  }
}

// Função executada automaticamente em usuario.html
function verificarUsuario() {
  const username = localStorage.getItem("usuarioLogado");

  if (!username) {
    // Se não houver usuário logado, redireciona
    window.location.href = "index.html";
  } else {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
      welcomeMessage.textContent = `Bem-vindo, ${username}!`;
    }
  }
}

// Função de logout
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}

// Executa verificarUsuario() automaticamente se estiver na pagina usuario.html
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("welcome-message")) {
    verificarUsuario();
  }
});
