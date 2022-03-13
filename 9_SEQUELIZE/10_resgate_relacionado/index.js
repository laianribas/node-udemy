import express from 'express'
import { engine } from 'express-handlebars'
import { sequelize } from './db/sequelize.js'
import User from './model/User.js'
import Address from './model/Address.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/edit/:id', async(req, res) => {
    const id = req.params.id

    const user = await User.findOne({ include: Address, where: { id: id } })
    console.log(user)

    res.render('edituser', { user: user.get({ plain: true }) })
})

app.post('/users/update', async(req, res) => {
    const { id, name, occupation } = req.body
    let { newsletter } = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, { where: { id: id } })

    res.redirect('/')
})

app.post('/users/delete/:id', async(req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async(req, res) => {
    const { name, occupation } = req.body
    let { newsletter } = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({ name, occupation, newsletter })

    res.redirect('/')
})

app.get('/users/:id', async(req, res) => {
    const { id } = req.params
    const user = await User.findOne({ raw: true, where: { id: id } })
    console.log(user)
    res.render('userview', { user })
})

app.post('/address/create', async(req, res) => {
    const { UserId, street, number, city } = req.body

    const address = {
        UserId,
        street,
        number,
        city
    }

    console.log(req.body)

    await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)
})

app.get('/', async(req, res) => {
    const users = await User.findAll({ raw: true })

    console.log(users)
    res.render('home', { users })
})

sequelize
    .sync()
    // .sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('listening on port 3000')
        })
    })
    .catch((err) => console.log(err))

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })