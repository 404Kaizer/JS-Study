const newLoginInput = document.querySelector('#newlogin-input')
const newPasswordInput = document.querySelector('#newpassword-input')
const newErrorMessage = document.querySelector('#newuser-error-message')
const newForm = document.querySelector('#newuser-form')

newForm.addEventListener('submit', (e) => {
    let messages = []

    if(login.includes(newLoginInput.value)) {
        newErrorMessage.style.color = 'red'
        messages.push('Login already exists. Try another.')
    }

    if(newPasswordInput.value.length < 8) {
        newErrorMessage.style.color = 'red'
        messages.push('Password length must be of 8 or more characters.')
    }

    if(messages.length > 0) {
        e.preventDefault()
        newErrorMessage.innerText = messages.join(' ')
    }

    login.push(newLoginInput)
    password.push(newPasswordInput)
})