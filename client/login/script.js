const url = "http://localhost:3000";

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const cadastroLink = document.querySelector('.cadastrar-link')

// toggling login and register card
cadastroLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

const acesso = document.querySelector(".acesso");
const msgDiv = document.querySelector(".erro");
const mensagem = document.querySelector("#msgErro");

acesso.addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = {
    email: acesso.email.value,
    senha: acesso.senha.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  };

  fetch(url + "/usuario", options)
    .then((resp) => {
      if (resp.status !== 202) {
        msgDiv.offsetWidth;
        msgDiv.classList.remove("show");

        mensagem.innerHTML = "E-mail ou senha incorreta";

        msgDiv.offsetWidth;
        msgDiv.classList.add("show");
      } else {
        return resp.json();
      }
    })
    .then((resp) => {
      let inpEmail = document.getElementById("email");
      let inpSenha = document.getElementById("senha");

      if (inpEmail.value === "" || inpSenha.value === "") {
        msgDiv.offsetWidth;
        msgDiv.classList.remove("show");

        mensagem.innerHTML = "Preencha os campos abaixo";

        msgDiv.offsetWidth;
        msgDiv.classList.add("show");
      } else if (inpEmail.value && inpSenha.value) {
        if (resp.length > 0) {
          window.localStorage.setItem("dados", JSON.stringify(resp[0]));
          window.location.href = `../home/index.html`;
        } else {
          msgDiv.offsetWidth;
          msgDiv.classList.remove("show");

          mensagem.textContent = "Usuário não encontrado";

          msgDiv.offsetWidth;
          msgDiv.classList.add("show");
        }
      }
    });
});

function redirectHome() {
  window.location.href = `../../Entrada/index.html`;
}