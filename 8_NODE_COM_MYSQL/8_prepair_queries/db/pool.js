import mysql from 'mysql'

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '5121056',
    database: 'nodemysql'
})

export { pool }