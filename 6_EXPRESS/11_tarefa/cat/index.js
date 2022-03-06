import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const basePath = path.join(__dirname, '../templates')

router.get('/', (request, response) => {
    response.sendFile(`${basePath}/cat.html`)
})

export { router }