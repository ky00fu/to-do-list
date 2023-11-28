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

// login authentication
const baseURL = 'http://localhost:3000'
const loginForm = document.getElementById('redirect')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inpEmail = document.getElementById('email').value
    const inpSenha = document.getElementById('senha').value

    const url = `${baseURL}/login?email=${inpEmail}&senha=${inpSenha}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.length === 1) {
                const user = data[0];
                if (user.senha === inpSenha) {
                    localStorage.email = inpEmail;
                    window.location.assign('../pages/lista-restaurantes.html');
                } else {
                    console.log('Senha inválida!');
                }
            } else {
                console.log('Email inválido!');
            }
        })
        .catch(error => console.error(error));
})