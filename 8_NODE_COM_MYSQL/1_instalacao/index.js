import express from 'express'
import { engine } from 'express-handlebars'
import mysql from 'mysql'

const app = express()

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5121056',
    database: 'nodemysql'
})

conn.connect((err) => {
    if (err) {
        console.error(err)
    }

    console.log('Conectou ao mysql')

    app.listen(3000)
})