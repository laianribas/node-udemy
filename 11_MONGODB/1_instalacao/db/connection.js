import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/testemongodb'

const connect = new MongoClient(uri)

async function run() {
    try {
        await connect.connect()
        console.log('Connected to Mongo')
    } catch (error) {
        console.log(error)
    }
}

run()

export default connect