import db from '../../connection/db.js'

const tableName = 'carMaster'

export const createOneCar = async (body) => {
    return await db.collection(tableName).insertOne(body)
}

export const getOneCar = async (query) => {
    return await db.collection(tableName).findOne(query)
}

export const getAllCars = async (
    filter = {},
    page = null,
    perPage = null,
    sortOptions = {}
) => {
    const skip = (page - 1) * perPage
    const limit = perPage || 0

    return await db
        .collection(tableName)
        .find(filter, { projection: { _id: 0 } })
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .toArray()
}
