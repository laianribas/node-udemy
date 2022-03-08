import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: 'Laian',
        age: 25
    }

    const auth = true
    res.render('home', { user, auth })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})