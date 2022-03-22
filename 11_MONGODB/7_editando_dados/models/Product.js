import connect from '../db/connection.js'
import { ObjectId } from 'mongodb'

class Product {
    constructor(name, image, price, description) {
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    save() {
        const product = connect.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

        return product
    }

    static getAllProducts() {
        const products = connect.db().collection('products').find().toArray()
        return products
    }

    static getProductById(id) {
        const product = connect
            .db()
            .collection('products')
            .findOne({ _id: ObjectId(id) })
        return product
    }

    static removeProductById(id) {
        connect
            .db()
            .collection('products')
            .deleteOne({ _id: ObjectId(id) })
        return
    }

    updateProduct(id) {
        connect
            .db()
            .collection('products')
            .updateOne({ _id: ObjectId(id) }, { $set: this })
        return
    }
}

export default Product