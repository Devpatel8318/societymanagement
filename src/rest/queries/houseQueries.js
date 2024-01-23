import db from '../../connection/db.js'

const houseTable = 'houseMaster'
const carTable = 'carMaster'
const bikeTable = 'bikeMaster'

export const createOneHouse = async (body) => {
    return await db.collection(houseTable).insertOne(body)
}

export const getOneHouse = async (query) => {
    return await db.collection(houseTable).findOne(query)
}

export const getAllHouses = async (
    filter = {},
    page = null,
    perPage = null,
    sortOptions = {}
) => {
    const skip = (page - 1) * perPage
    const limit = perPage || 0

    return await db
        .collection(houseTable)
        .find(filter, { projection: { _id: 0 } })
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .toArray()
}

export const getSingleHouse = async (houseNo) => {
    return await db
        .collection(houseTable)
        .findOne({ houseNo }, { projection: { _id: 0 } })
}

export const numberOfCarsOfHouse = async (houseNo) => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: 'houseMaster',
                    localField: 'carOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.houseNo': houseNo,
                },
            },
            {
                $count: 'numberOfCars',
            },
        ])
        .toArray()
}

export const numberOfBikesOfHouse = async (houseNo) => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $lookup: {
                    from: 'houseMaster',
                    localField: 'bikeOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.houseNo': houseNo,
                },
            },
            {
                $count: 'numberOfBikes',
            },
        ])
        .toArray()
}
