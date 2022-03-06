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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users/form', (request, response) => {
    response.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save', (request, response) => {
    const { name, age } = request.body
    console.log(`O nome do usuário é ${name} e tem ${age}`)
    response.sendFile(`${basePath}/usersform.html`)
})

app.get('/users/:id', (request, response) => {
    const id = request.params.id

    console.log(`Estamos buscando o usuário: ${id}`)
        //Lógica para executar ação com o id

    response.sendFile(`${basePath}/users.html`)
})

app.get('/', (request, response) => {
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})