const fs = require('fs')

fs.unlink('arquivo.txt', (err) => {
    if (err) {
        throw new Error('Error:', err)
    }

    console.log('Arquivo removido')
})