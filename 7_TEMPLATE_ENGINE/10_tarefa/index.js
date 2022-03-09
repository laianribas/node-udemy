import express from 'express'
import { create } from 'express-handlebars'

const app = express()

const hbs = create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)

app.use(express.static('public'))

app.set('view engine', 'handlebars')

const products = [{
        id: 1,
        title: 'Aprender nodeJS',
        category: 'JavaScript',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla error asperiores! Incidunt quas ab rem veniam quibusdam illo deleniti doloremque assumenda ipsum labore. Quia officia molestias id incidunt culpa.',
        comment: 4
    },
    {
        id: 2,
        title: 'Aprender PHP',
        category: 'PHP',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea laudantium maiores cupiditate at, excepturi est ipsum odio quod eos expedita quo officiis vel delectus impedit quisquam autem. Numquam, dolorem ex',
        comment: 4
    },
    {
        id: 3,
        title: 'Aprender Python',
        category: 'Python',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a velit, perspiciatis, modi quae delectus ipsam ducimus, magni porro adipisci est quis tenetur. Corporis rem ipsa laboriosam laudantium vitae quasi.',
        comment: 4
    }
]

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = products.find((product) => product.id == id)
    res.render('product', { product: product })
})

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})