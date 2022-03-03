const fs = require('fs')

fs.stat('arquivo.txt', (err, stats) => {
    if (err) {
        throw new Error('Error: ' + err)
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
    console.log(stats.ctime)
    console.log(stats.ctimeMs)
})