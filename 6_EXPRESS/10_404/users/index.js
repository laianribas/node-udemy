import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const basePath = path.join(__dirname, '../templates')

router.get('/form', (request, response) => {
    response.sendFile(`${basePath}/usersform.html`)
})

router.post('/save', (request, response) => {
    const { name, age } = request.body
    console.log(`O nome do usuário é ${name} e tem ${age} anos`)
    response.sendFile(`${basePath}/usersform.html`)
})

router.get('/:id', (request, response) => {
    const id = request.params.id

    console.log(`Estamos buscando o usuário: ${id}`)
        //Lógica para executar ação com o id

    response.sendFile(`${basePath}/users.html`)
})

export { router }