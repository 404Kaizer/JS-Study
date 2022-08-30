let users = {
    login: ['john', 'james', 'fred', 'hugo', 'gates'],
    password: ['1232', '5555', '2020', '5155', '1000']
}

// Object Deconstruct
let { login, password } = users

const loginInput = document.querySelector('#login-input')
const passwordInput = document.querySelector('#password-input')
const loginForm = document.querySelector('#login-form')
const loginErrorMessage = document.querySelector('#login-error-message')

loginForm.addEventListener('submit', (e) => {
    let messages = []
    
    if((login.includes(loginInput.value) === false) || (password.includes(passwordInput.value) === false)) {
        loginErrorMessage.style.color = 'red'
        messages.push('Invalid login or password.')
    } else {
        loginErrorMessage.style.color = 'green'
        loginErrorMessage.innerText = 'Successfully logged in!!'
    }

    if(messages.length > 0) {
        e.preventDefault()
        loginErrorMessage.innerText = messages.join(' ')
    }
})