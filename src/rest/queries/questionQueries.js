import db from '../../connection/db.js'

const houseTable = 'houseMaster'
const bikeTable = 'bikeMaster'
const carTable = 'carMaster'

export const numberOfMales = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $group: {
                    _id: null,
                    numberOfMales: {
                        $sum: `$numberOfMales`,
                    },
                },
            },
        ])
        .toArray()
}
export const numberOfFemales = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $group: {
                    _id: null,
                    numberOfFemales: {
                        $sum: `$numberOfFemales`,
                    },
                },
            },
        ])

        .toArray()
}

export const numberOfHouses = async (filter = {}) => {
    return await db.collection(houseTable).countDocuments(filter)
}

export const numberOfBikes = async () => {
    return await db.collection(bikeTable).countDocuments({})
}

export const numberOfBikesByCaste = async (caste) => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'bikeOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.caste': { $in: caste },
                },
            },
            {
                $count: 'numberOfBikes',
            },
        ])
        .toArray()
}

export const redBikeNumberOwnedByA1 = async (caste) => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $match: {
                    bikeOwner: 'A1',
                    bikeColor: 'Red',
                },
            },
            {
                $project: {
                    bikeNo: 1,
                    _id: 0,
                },
            },
        ])
        .toArray()
}

export const numberOfCarsOfBharwad = async () => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'carOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.caste': 'Bharwad',
                },
            },
            {
                $count: 'numberOfCars',
            },
        ])
        .toArray()
}

export const numberOfCars = async (filter = {}) => {
    return await db.collection(carTable).countDocuments(filter)
}

export const numberOfHousesOwningRedBike = async () => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $match: {
                    bikeColor: 'Red',
                },
            },
            {
                $group: {
                    _id: '$bikeOwner',
                },
            },
            {
                $count: 'numberOfHouses',
            },
        ])
        .toArray()
}

export const allCarsOfPatel = async () => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'carOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.caste': 'Patel',
                },
            },
            {
                $project: {
                    ownerHouse: 0,
                    _id: 0,
                },
            },
        ])
        .toArray()
}

export const allBikesOfMuslim = async () => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'bikeOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.caste': 'Muslim',
                },
            },
            {
                $project: {
                    ownerHouse: 0,
                    _id: 0,
                },
            },
        ])
        .toArray()
}

export const numberOfBikesOwnedByBHK = async (bhk) => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'bikeOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.bhk': bhk,
                },
            },
            {
                $count: 'numberOfBikes',
            },
        ])
        .toArray()
}
export const numberOfCarsOwnedByBHK = async (bhk) => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    localField: 'carOwner',
                    foreignField: 'houseNo',
                    as: 'ownerHouse',
                },
            },
            {
                $match: {
                    'ownerHouse.bhk': bhk,
                },
            },
            {
                $count: 'numberOfCars',
            },
        ])
        .toArray()
}

export const numberOfMarriagesInHall = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $group: {
                    _id: null,
                    numberOfMarriagesInHall: {
                        $sum: '$marriagesInHall',
                    },
                },
            },
        ])
        .toArray()
}

export const numberOfPatelWhoseMarriageInHall = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $match: {
                    caste: 'Patel',
                },
            },
            {
                $group: {
                    _id: null,
                    numberOfPeople: {
                        $sum: '$marriagesInHall',
                    },
                },
            },
        ])
        .toArray()
}

export const numberOfPeopleWhoseMarriageHappenedInHallFromHouseHavingWhiteCar =
    async () => {
        return await db
            .collection(carTable)
            .aggregate([
                {
                    $match: {
                        carColor: 'White',
                    },
                },
                {
                    $lookup: {
                        from: houseTable,
                        localField: 'carOwner',
                        foreignField: 'houseNo',
                        as: 'ownerDetail',
                    },
                },
                {
                    $unwind: {
                        path: '$ownerDetail',
                    },
                },
                {
                    $group: {
                        _id: null,
                        numberOfPople: {
                            $sum: '$ownerDetail.marriagesInHall',
                        },
                    },
                },
            ])
            .toArray()
    }

export const housesWithAtleastOneCar = async () => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    foreignField: 'houseNo',
                    localField: 'carOwner',
                    as: 'ownerDetail',
                },
            },
            {
                $unwind: {
                    path: '$ownerDetail',
                },
            },
            {
                $group: {
                    _id: null,
                    houses: {
                        $addToSet: '$ownerDetail.houseNo',
                    },
                },
            },
        ])
        .toArray()
}

export const housesWithAtleastOneBike = async () => {
    return await db
        .collection(bikeTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    foreignField: 'houseNo',
                    localField: 'bikeOwner',
                    as: 'ownerDetail',
                },
            },
            {
                $unwind: {
                    path: '$ownerDetail',
                },
            },
            {
                $group: {
                    _id: null,
                    houses: {
                        $addToSet: '$ownerDetail.houseNo',
                    },
                },
            },
        ])
        .toArray()
}

export const housesWithNoCar = async (listOfAllHouseNo) => {
    return await db
        .collection(carTable)
        .aggregate([
            {
                $lookup: {
                    from: houseTable,
                    foreignField: 'houseNo',
                    localField: 'carOwner',
                    as: 'ownerDetail',
                },
            },
            {
                $unwind: {
                    path: '$ownerDetail',
                },
            },
            {
                $group: {
                    _id: null,
                    housesWithCar: {
                        $addToSet: '$ownerDetail.houseNo',
                    },
                },
            },
            {
                $addFields: {
                    housesWithoutCar: {
                        $setDifference: [listOfAllHouseNo, '$housesWithCar'],
                    },
                },
            },
        ])
        .toArray()
}

export const allHouseNo = async () => {
    return await db.collection(houseTable).distinct('houseNo')
}

export const housesInLine = async (lineNo) => {
    return await db
        .collection(houseTable)
        .find({ lineNo }, { projection: { _id: 0, houseNo: 1 } })
        .toArray()
}

export const hallMarriedHouses = async () => {
    return await db
        .collection(houseTable)
        .find({ marriagesInHall: { $gt: 0 } })
        .toArray()
}

export const greenCars = async () => {
    return await db.collection(carTable).find({ carColor: 'Green' }).toArray()
}

export const lineNumbersMuslimHouses = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $match: {
                    caste: 'Muslim',
                },
            },
            {
                $group: {
                    _id: '$caste',
                    lineNo: {
                        $addToSet: '$lineNo',
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                },
            },
        ])
        .toArray()
}

export const peopleInHousesWithDInName = async () => {
    return await db
        .collection(houseTable)
        .aggregate([
            {
                $match: {
                    houseNo: {
                        $regex: 'D',
                    },
                },
            },
            {
                $project: {
                    subTotal: {
                        $add: ['$numberOfMales', '$numberOfFemales'],
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: '$subTotal',
                    },
                },
            },
        ])
        .toArray()
}
