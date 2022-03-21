import express from 'express'
import { engine } from 'express-handlebars'
import connect from './db/connection.js'

const port = 3000
const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))