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