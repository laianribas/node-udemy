const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const server = http.createServer((request, response) => {
    fs.readFile('mensagem.html', (err, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        return response.end()
    })
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})