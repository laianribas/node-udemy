import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 3000

app.get('/users/:id', (request, response) => {
    const id = request.params.id

    //Lógica para executar ação com o id

    console.log(`Estamos buscando o usuário: ${id}`)

    response.sendFile(`${basePath}/users.html`)
})

app.get('/', (request, response) => {
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})