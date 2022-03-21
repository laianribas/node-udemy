import connect from '../db/connection.js'

class Product {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }

    save() {
        const product = connect.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        })

        return product
    }
}

export default Product