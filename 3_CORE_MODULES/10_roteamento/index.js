const fs = require('fs')
const http = require('http')
const url = require('url')

const port = 3000
const server = http.createServer((request, response) => {
    const urlInfo = url.parse(request.url, true)
    const filename = urlInfo.pathname.substring(1)

    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, (err, data) => {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.write(data)
                return response.end()
            })
        } else {
            fs.readFile('404.html', (err, data) => {
                response.writeHead(404, { 'Content-Type': 'text/html' })
                response.write(data)
                return response.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log('listening on port ' + port)
})