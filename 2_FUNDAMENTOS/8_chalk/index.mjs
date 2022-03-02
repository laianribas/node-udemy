import chalk from 'chalk'

const nota = 7

if (nota >= 7) {
    console.log(chalk.green('Parabens, você foi aprovado!'))
} else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova final'))
}