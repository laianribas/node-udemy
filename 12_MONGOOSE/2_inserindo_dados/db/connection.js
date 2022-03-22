import mongoose from 'mongoose'

async function run() {
    try {
        await mongoose.connect('mongodb://localhost:27017/testemongoose')
        console.log('Connected to Mongo with mongoose connection')
    } catch (error) {
        console.log(error)
    }
}

run().catch((error) => console.log(error))

export default mongoose