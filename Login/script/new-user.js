newUser = () => {
    let newLoginInput = document.getElementById('newlogin-input').value
    let newPasswordInput = document.getElementById('newpassword-input').value

    if((newLoginInput === '') || (newPasswordInput === '')) {
        alert('Blank login or password fields. Fill in the fields to signup.')
        return
    }

    if(users.login.includes(newLoginInput)) {
        alert('Login already registered. Please choose another.')
        return
    }

    if(users.password.includes(newPasswordInput)) {
        alert('Password already registered. Please choose another.')
        return
    }

    users.login.push(newLoginInput)
    users.password.push(newPasswordInput)
    alert('Account created!!')
}