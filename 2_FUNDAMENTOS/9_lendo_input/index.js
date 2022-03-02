const readline = require('readline').Interface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual sua linguagem favorita? ', (language) => {
    if (language == 'Python') {
        console.log(`E ${language} é linguagem de programação desde quando? `)
    } else {
        console.log(`Sua linguagem favorita é: ${language}`)
    }
    readline.close()
})