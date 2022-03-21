import Product from '../models/Product.js'

export default class ProductController {
    static showProducts(req, res) {
        res.render('products/all')
    }
    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        console.log('aqui chega')
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const product = new Product(name, price, description)
        product.save()
        res.redirect('/products')
    }
}