import express from 'express'
import { engine } from 'express-handlebars'
import mysql from 'mysql'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.post('/books/insertbooks', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages
    const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
    })
})

conn.connect((err) => {
    if (err) {
        console.error(err)
    }

    console.log('Conectou ao mysql')

    app.listen(3000)
})