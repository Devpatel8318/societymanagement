import db from '../../connection/db.js'

const tableName = 'houseMaster'

export const createOneHouse = async (body) => {
    return await db.collection(tableName).insertOne(body)
}

export const getOneHouse = async (query) => {
    return await db.collection(tableName).findOne(query)
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
        .collection(tableName)
        .find(filter, { projection: { _id: 0 } })
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .toArray()
}

export const getSingleHouse = async (houseNo) => {
    return await db
        .collection(tableName)
        .findOne({ houseNo }, { projection: { _id: 0 } })
}

export const numberOfCars = async (houseNo) => {
    return await db
        .collection('carMaster')
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

export const numberOfBikes = async (houseNo) => {
    return await db
        .collection('bikeMaster')
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

// export const numberOfBikesByCaste = async (caste) => {
//     return await db
//         .collection('bikeMaster')
//         .aggregate([
//             {
//                 $lookup: {
//                     from: 'houseMaster',
//                     localField: 'bikeOwner',
//                     foreignField: 'houseNo',
//                     as: 'ownerHouse',
//                 },
//             },
//             {
//                 $match: {
//                     'ownerHouse.caste': { $in: caste },
//                 },
//             },
//             {
//                 $count: 'numberOfBikes',
//             },
//         ])
//         .toArray()
// }
