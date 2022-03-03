const path = require('path')

console.log(path.resolve('arquivo.txt'))

const midFolder = 'relatorios'

const filename = 'Laian.pdf'

const finalPath = path.join('/', 'arquivos', midFolder, filename)

console.log(finalPath)