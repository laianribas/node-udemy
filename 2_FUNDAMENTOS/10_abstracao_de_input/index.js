const inquirer = require('inquirer')

inquirer
    .prompt([{
            name: 'pergunta1',
            message: 'Qual a primeira nota? '
        },
        {
            name: 'pergunta2',
            message: 'Qual a segunda nota? '
        }
    ])
    .then((answer) => {
        console.log(answer)
        const media = (parseInt(answer.pergunta1) + parseInt(answer.pergunta2)) / 2
        console.log(media)
    })
    .catch((err) => console.log(err))