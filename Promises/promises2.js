fetch('https://api.github.com/users/404Kaizer')
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log('Fim.')
    })

// .then -> Retorna o "resolve" da promise.
// .catch -> Retorna o "reject" da promise.
// .finally -> Retorno padrão independente do resultado da promise.