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

function checkAuth(request, response, next) {
    request.authStatus = true
    if (request.authStatus) {
        console.log('Usuário logado, pode continuar!')
        next()
    } else {
        console.log('Usuário não logado, por favor efetuar login!')
        next()
    }
}

app.use(checkAuth)

app.get('/', (request, response) => {
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})