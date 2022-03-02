const fs = require('fs')

console.log('Starting')

fs.writeFile('arquivo.txt', 'oi', (err) => {
    setTimeout(() => {
        console.log('Criando Arquivo...')
    }, 2000)
})

console.log('End')