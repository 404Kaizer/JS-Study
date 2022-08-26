const USERS = {
    login: ['john', 'james', 'fred', 'hugo', 'gates'],
    password: ['1232', '5555', '2020', '5155', '1000']
}

checkLogin = () => {
    let loginInput = document.getElementById('login-input').value

    if(USERS.login.includes(loginInput) === false) {
        alert('Please enter a valid login.')
        return
    }
    
    checkPassword()
}

checkPassword = () => {
    let passwordInput = document.getElementById('password-input').value

    if(USERS.password.includes(passwordInput) === false) {
        alert('Please enter a valid password.')
        return
    }

    alert('Login succedded!!')
}

createUser = () => {
    let newLoginInput = document.getElementById('newlogin-input').value
    let newPasswordInput = document.getElementById('newpassword-input').value

    if((newLoginInput === '') || (newPasswordInput === '')) {
        alert('Blank login or password fields. Fill in the fields to signup.')
        return
    }

    if(USERS.login.includes(newLoginInput)) {
        alert('Login already registered. Please choose another.')
        return
    }

    if(USERS.password.includes(newPasswordInput)) {
        alert('Password already registered. Please choose another.')
        return
    }

    USERS.login.push(newLoginInput)
    USERS.password.push(newPasswordInput)
    alert('Account created!!')
}