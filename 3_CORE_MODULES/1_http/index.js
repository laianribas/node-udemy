const http = require('http')

const port = 3000

const server = http.createServer((request, response) => {
    response.write('hello world')
    response.end()
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})