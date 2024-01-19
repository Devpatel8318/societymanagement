import db from '../../connection/db.js'

export const numberOfMales = async () => {
    return await db
        .collection('houseMaster')
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
        .collection('houseMaster')
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
    return await db.collection('houseMaster').find(filter).count()
}

export const numberOfBikes = async () => {
    return await db.collection('bikeMaster').count()
}

export const numberOfBikesByCaste = async (caste) => {
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
        .collection('bikeMaster')
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
    return await db.collection('carMaster').find(filter).count()
}

export const numberOfHousesOwningRedBike = async () => {
    return await db
        .collection('bikeMaster')
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
        .collection('houseMaster')
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
        .collection('houseMaster')
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
            .collection('carMaster')
            .aggregate([
                {
                    $match: {
                        carColor: 'White',
                    },
                },
                {
                    $lookup: {
                        from: 'houseMaster',
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
        .collection('carMaster')
        .aggregate([
            {
                $lookup: {
                    as: 'ownerDetail',
                    from: 'houseMaster',
                    foreignField: 'houseNo',
                    localField: 'carOwner',
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
        .collection('bikeMaster')
        .aggregate([
            {
                $lookup: {
                    as: 'ownerDetail',
                    from: 'houseMaster',
                    foreignField: 'houseNo',
                    localField: 'bikeOwner',
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
