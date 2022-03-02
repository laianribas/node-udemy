import chalk from 'chalk'
import inquirer from 'inquirer'

inquirer
    .prompt([{
            name: 'nome',
            message: 'Qual é o seu nome? '
        },
        {
            name: 'idade',
            message: 'Qual é a sua idade?'
        }
    ])
    .then((answer) => {
        if (!answer.nome || !answer.idade) {
            throw new Error('É necessario informar nome e idade!')
        }
        console.log(
            chalk.bgYellow.black(
                `O seu nome é ${answer.nome} e voce tem ${answer.idade} anos`
            )
        )
    })
    .catch((err) => console.log('Error:', err))