import { DataTypes } from 'sequelize'
import connection from '../db/connection.js'

const Task = connection.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

export default Task