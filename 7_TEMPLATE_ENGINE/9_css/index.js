import express from 'express'
import { engine, create } from 'express-handlebars'

const app = express()

const hbs = create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)

app.use(express.static('public'))

app.set('view engine', 'handlebars')

app.get('/movies', (req, res) => {
    const movie = {
        title: 'The batman',
        year: 2022,
        duration: '3h'
    }

    res.render('movies', { movie })
})

app.get('/blog', (req, res) => {
    const posts = [{
            title: 'Aprender nodeJS',
            category: 'JavaScript',
            body: 'teste',
            comment: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'teste',
            comment: 4
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'teste',
            comment: 4
        }
    ]

    res.render('blog', { posts })
})

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c', 'item d']
    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const user = {
        name: 'Laian',
        age: 25
    }

    const approved = true

    const auth = true
    res.render('home', { user, auth, approved })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})