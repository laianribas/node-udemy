import express from 'express'

// npm i express
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Olá mundo!')
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})