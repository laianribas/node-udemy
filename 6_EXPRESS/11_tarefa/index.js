import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { router } from './cat/index.js'

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/cat', router)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})