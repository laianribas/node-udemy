const http = require('http')

const port = 3000

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Olá, Mundo</h1>')
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})