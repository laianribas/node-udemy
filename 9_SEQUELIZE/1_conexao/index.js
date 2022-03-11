import express from 'express'
import { engine } from 'express-handlebars'
import sequelize from './db/pool.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})