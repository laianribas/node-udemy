const fs = require('fs')

console.log('Starting')

fs.writeFileSync('./arquivo.txt', 'oi')

console.log('End')