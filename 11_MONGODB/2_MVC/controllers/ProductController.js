//import Product from '../models/Product.js'

export default class ProductController {
    static showProducts(req, res) {
        res.render('products/all')
    }
}