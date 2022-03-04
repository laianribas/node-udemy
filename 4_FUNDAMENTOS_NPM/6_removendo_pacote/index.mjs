import _ from 'lodash'
import chalk from 'chalk'

const array1 = [1, 2, 3, 4, 5]
const array2 = [2, 4, 6, 8, 9, 10, 11, 12]

const diff = _.difference(array1, array2)
console.log(chalk.bgRed.bold(diff))

//npm uninstall lodash