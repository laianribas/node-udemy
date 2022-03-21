import connect from '../db/connection.js'

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
}

export default Product