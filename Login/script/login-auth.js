let users = {
    login: ['john', 'james', 'fred', 'hugo', 'gates'],
    password: ['1232', '5555', '2020', '5155', '1000']
}

// Object Deconstruct
let { login, password } = users

checkLogin = () => {
    let loginInput = document.getElementById('login-input').value

    if(login.includes(loginInput) === false) {
        alert('Please enter a valid login and password.')
        window.location.reload()
        return
    }
    
    checkPassword()
}

checkPassword = () => {
    let passwordInput = document.getElementById('password-input').value

    if(password.includes(passwordInput) === false) {
        alert('Please enter a valid login and password.')
        window.location.reload()
        return
    }

    alert('Login succedded!!')
}