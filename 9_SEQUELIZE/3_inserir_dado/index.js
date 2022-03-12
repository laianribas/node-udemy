import express from 'express'
import { engine } from 'express-handlebars'
import { sequelize } from './db/sequelize.js'
import User from './model/User.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async(req, res) => {
    const { name, occupation } = req.body
    let { newsletter } = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({ name, occupation, newsletter })

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('listening on port 3000')
        })
    })
    .catch((err) => console.log(err))

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })