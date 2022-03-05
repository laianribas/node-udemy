import inquirer from 'inquirer'
import chalk from 'chalk'

import fs from 'fs'

console.log(chalk.bgCyan.black('inicializando o Accounts\n\n'))

operations()

function operations() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer? ',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }])
        .then((answer) => {
            const action = answer.action
            if (action === 'Criar Conta') {
                createAccount()
            }
        })
        .catch((err) => console.log(err))
}

function createAccount() {
    console.log(chalk.bgGreen.black('Obrigado por escolher o banco Accounts!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir: '))
    buildAccount()
}

function buildAccount() {
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Digite o nome para sua conta: '
        }])
        .then((answer) => {
            const accountName = answer.accountName

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black(`A conta ${accountName} já existe`))
                buildAccount()
                return
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                '{"balance": 0}',
                (err) => {
                    console.log(err)
                }
            )

            console.log(chalk.bgGreen.black('Parabéns! Sua conta foi criada!'))

            operations()
        })
        .catch((err) => console.log(err))
}