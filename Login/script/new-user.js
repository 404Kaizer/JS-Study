newUser = () => {
    let newLoginInput = document.getElementById('newlogin-input').value
    let newPasswordInput = document.getElementById('newpassword-input').value

    if((newLoginInput === '') || (newPasswordInput === '')) {
        alert('Blank login or password. Fill all the fields to procced.')
        return
    }

    if(login.includes(newLoginInput)) {
        alert('Login already registered. Please choose another.')
        window.location.reload()
        return
    }

    // Somente para fins de teste, já que não faz sentido verificar se uma senha já existe no contexto de criação de usuário...
    if(password.includes(newPasswordInput)) {
        alert('Password already registered. Please choose another.')
        return
    }

    login.push(newLoginInput)
    password.push(newPasswordInput)
    alert('Account created!!')
}