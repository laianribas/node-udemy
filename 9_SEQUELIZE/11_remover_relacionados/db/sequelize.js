import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodesequelize', 'root', '5121056', {
    host: 'localhost',
    dialect: 'mysql'
})

export { sequelize }