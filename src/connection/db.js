import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()

import houseSchema from '../rest/schema/houseSchema.js'
import carSchema from '../rest/schema/carSchema.js'
import bikeSchema from '../rest/schema/bikeSchema.js'

const mongodbConnection = async () => {
    try {
        const client = new MongoClient(process.env.URL)
        await client.connect()
        console.log(`mongoDB Connected Successfully`)

        const db = client.db()

        await db.createCollection('houseMaster', {
            validator: { $jsonSchema: houseSchema },
        })
        await db.createCollection('carMaster', {
            validator: { $jsonSchema: carSchema },
        })
        await db.createCollection('bikeMaster', {
            validator: { $jsonSchema: bikeSchema },
        })

        await db
            .collection('houseMaster')
            .createIndex({ houseNo: 1 }, { unique: true })

        await db
            .collection('carMaster')
            .createIndex({ carNo: 1 }, { unique: true })

        await db
            .collection('bikeMaster')
            .createIndex({ bikeNo: 1 }, { unique: true })

        return db
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

export default await mongodbConnection()
