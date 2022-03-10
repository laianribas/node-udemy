import express from 'express'
import { engine } from 'express-handlebars'
import { pool } from './db/pool.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
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
    SET ?? = ?, ?? = ?
    WHERE ?? = ?`
    const data = ['title', title, 'pages', pages, 'id', id]

    pool.query(sql, data, (err) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
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
    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`

    const data = ['title', 'pages', title, pages]

    pool.query(sql, data, (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    pool.query(sql, (err, data) => {
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
app.listen(3000, () => {
    console.log('listening on port 3000')
})