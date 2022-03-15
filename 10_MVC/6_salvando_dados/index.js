import express from 'express'
import { engine } from 'express-handlebars'
import connection from './db/connection.js'
import Task from './models/Tasks.js'
import tasksRoutes from './routes/tasksRoutes.js'

const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)
app.use('/tasks/add', tasksRoutes)

connection
    .sync()
    .then(
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    )
    .catch((err) => console.log(err))