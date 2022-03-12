import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodesequelize', 'root', '5121056', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Authentication successful')
// } catch (error) {
//     console.log('Não foi possível conectar: ' + error)
// }

export { sequelize }