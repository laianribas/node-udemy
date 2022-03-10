import express from 'express'
import { engine } from 'express-handlebars'
import mysql from 'mysql'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ${id}`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        res.render('editbook', { book })
    })
})

app.post('/books/updatebooks', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pages = req.body.pages

    const sql = `UPDATE books
    SET title = '${title}', pages = '${pages}'
    WHERE id = ${id}`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        res.render('book', { book })
    })
})

app.post('/books/insertbooks', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages
    const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const books = data
        res.render('books', { books })
    })
})

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