const fs = require('fs')

fs.rename('arquivo.txt', 'renomeado.txt', (err) => {
    if (err) {
        throw new Error('Error:', err)
    }

    console.log('Arquivo renomeado')
})