import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

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