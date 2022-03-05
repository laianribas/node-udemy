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
            const { action } = answer
            switch (action) {
                case 'Criar Conta':
                    return createAccount()
                case 'Consultar Saldo':
                    return balance()
                case 'Depositar':
                    return deposit()
                case 'Sacar':
                    return withdraw()
                case 'Sair':
                    console.log(
                        chalk.bgCyanBright.black('Obrigado por utilizar o Accounts!')
                    )
                    process.exit()
                default:
                    break
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
            const { accountName } = answer

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

//add an amount to user account
function deposit() {
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Qual o nome da conta? '
        }])
        .then((answer) => {
            const { accountName } = answer
            if (!checkAccount(accountName)) {
                deposit()
                return
            }

            inquirer
                .prompt([{
                    name: 'amount',
                    message: 'Digite o valor do deposito: '
                }])
                .then((answer) => {
                    const { amount } = answer
                    addAmount(accountName, amount)
                    operations()
                })
                .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
}

function balance() {
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Digite o nome da conta que deseja consultar o saldo: '
        }])
        .then((answer) => {
            const { accountName } = answer

            if (!checkAccount(accountName)) {
                return balance()
            }

            const accountData = getAccount(accountName)

            console.log(
                chalk.bgBlue.black(
                    `O saldo atual da sua conta é R$${accountData.balance}`
                )
            )
            operations()
        })
        .catch((err) => console.log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black(
                'Conta não encontradada, verifique o nome da conta e tente novamente!'
            )
        )
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)
    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `./accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => {
            console.log(err)
        }
    )

    console.log(
        chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`)
    )
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`./accounts/${accountName}.json`, {
        encoding: 'utf8',
        flags: 'r'
    })

    return JSON.parse(accountJSON)
}

function withdraw() {
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Digite o nome da sua conta: '
        }])
        .then((answer) => {
            const { accountName } = answer
            if (!checkAccount(accountName)) {
                return withdraw()
            }

            inquirer
                .prompt([{
                    name: 'amount',
                    message: 'Digite o valor do saque: '
                }])
                .then((answer) => {
                    const { amount } = answer

                    removeAmount(accountName, amount)
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        cconsole.log(chalk.bgRed.black('Ocorreu um erro, tente novamente!'))
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Saldo insuficiente'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `./accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => {
            console.log(err)
        }
    )

    console.log(
        chalk.green(`Foi realizado um saque no valor de ${amount} da sua conta!`)
    )
    operations()
}