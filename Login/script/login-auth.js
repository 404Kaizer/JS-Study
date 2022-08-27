let users = {
    login: ['john', 'james', 'fred', 'hugo', 'gates'],
    password: ['1232', '5555', '2020', '5155', '1000']
}

checkLogin = () => {
    let loginInput = document.getElementById('login-input').value

    if(users.login.includes(loginInput) === false) {
        alert('Please enter a valid login.')
        return
    }
    
    checkPassword()
}

checkPassword = () => {
    let passwordInput = document.getElementById('password-input').value

    if(users.password.includes(passwordInput) === false) {
        alert('Please enter a valid password.')
        return
    }

    alert('Login succedded!!')
}