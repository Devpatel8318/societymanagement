import * as questionQueries from '../queries/questionQueries.js'

export const q1 = async () => {
    const question = 'Total Number of Males in Society'

    const answer = await questionQueries.numberOfMales()

    return { no: 1, question, totalMales: answer[0]?.numberOfMales }
}

export const q2 = async () => {
    const question = 'Total Number of Females in Society'

    const answer = await questionQueries.numberOfFemales()

    return { no: 2, question, totalFemales: answer[0]?.numberOfFemales }
}

export const q3 = async () => {
    const question = 'How many Houses are there in Society?'

    const answer = await questionQueries.numberOfHouses()

    return { no: 3, question, totalHouses: answer }
}

export const q4 = async () => {
    const question = 'How many Houses of Muslim are there in Society?'

    const answer = await questionQueries.numberOfHouses({ caste: 'Muslim' })

    return { no: 4, question, numberOfHouses: answer }
}

export const q5 = async () => {
    const question = 'How many Houses of Jain are there in Society?'

    const answer = await questionQueries.numberOfHouses({ caste: 'Jain' })

    return { no: 5, question, numberOfHouses: answer }
}

export const q6 = async () => {
    const question = 'How many Houses of Patel are there in Society?'

    const answer = await questionQueries.numberOfHouses({ caste: 'Patel' })

    return { no: 6, question, numberOfHouses: answer }
}

export const q7 = async () => {
    const question = 'How many Houses of Rabari are there in Society?'

    const answer = await questionQueries.numberOfHouses({ caste: 'Rabari' })

    return { no: 7, question, numberOfHouses: answer }
}

export const q8 = async () => {
    const question = 'How many Houses of Bharwad are there in Society?'

    const answer = await questionQueries.numberOfHouses({ caste: 'Bharwad' })

    return { no: 88, question, numberOfHouses: answer }
}

export const q9 = async () => {
    const question = 'How many Houses of Muslim are there in Line 1?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Muslim',
        lineNo: 1,
    })

    return { no: 98, question, numberOfHouses: answer }
}

export const q10 = async () => {
    const question = 'How many Houses of Jain are there in Line 1?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Jain',
        lineNo: 1,
    })

    return { no: 10, question, numberOfHouses: answer }
}

export const q11 = async () => {
    const question = 'How many Houses of Patel are there in Line 1?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Patel',
        lineNo: 1,
    })

    return { no: 11, question, numberOfHouses: answer }
}

export const q12 = async () => {
    const question = 'How many Houses of Rabari are there in Line 1?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Rabari',
        lineNo: 1,
    })

    return { no: 12, question, numberOfHouses: answer }
}

export const q13 = async () => {
    const question = 'How many Houses of Bharwad are there in Line 1?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Bharwad',
        lineNo: 1,
    })

    return { no: 13, question, numberOfHouses: answer }
}

export const q14 = async () => {
    const question = 'How many Houses of Muslim are there in Line 2?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Muslim',
        lineNo: 2,
    })

    return { no: 14, question, numberOfHouses: answer }
}

export const q15 = async () => {
    const question = 'How many Houses of Jain are there in Line 2?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Jain',
        lineNo: 2,
    })

    return { no: 15, question, numberOfHouses: answer }
}

export const q16 = async () => {
    const question = 'How many Houses of Patel are there in Line 2?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Patel',
        lineNo: 2,
    })

    return { no: 16, question, numberOfHouses: answer }
}

export const q17 = async () => {
    const question = 'How many Houses of Rabari are there in Line 2?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Rabari',
        lineNo: 2,
    })

    return { no: 17, question, numberOfHouses: answer }
}

export const q18 = async () => {
    const question = 'How many Houses of Bharwad are there in Line 2?'

    const answer = await questionQueries.numberOfHouses({
        caste: 'Bharwad',
        lineNo: 2,
    })

    return { no: 18, question, numberOfHouses: answer }
}

export const q19 = async () => {
    const question = 'How many Bikes are there in Society?'

    const answer = await questionQueries.numberOfBikes()

    return { no: 19, question, numberOfBikes: answer }
}

export const q20 = async () => {
    const question = 'How Many Bikes are Owned by Muslim?'

    const answer = await questionQueries.numberOfBikesByCaste(['Muslim'])
    console.log('====================================')
    console.log({ answer })
    console.log('====================================')
    return { no: 20, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q21 = async () => {
    const question = 'How Many Bikes are Owned by Jain?'

    const answer = await questionQueries.numberOfBikesByCaste(['Jain'])

    return { no: 21, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q22 = async () => {
    const question = 'How Many Bikes are Owned by Patel?'

    const answer = await questionQueries.numberOfBikesByCaste(['Patel'])

    return { no: 22, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q23 = async () => {
    const question = 'How Many Bikes are Owned by Bharwad?'

    const answer = await questionQueries.numberOfBikesByCaste(['Bharwad'])

    return { no: 23, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q24 = async () => {
    const question = 'How Many Bikes are Owned by Rabari?'

    const answer = await questionQueries.numberOfBikesByCaste(['Rabari'])

    return { no: 24, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q25 = async () => {
    const question =
        'How Many Bikes are Owned by Muslim, Bharwad and  Rabari Collectively?'

    const answer = await questionQueries.numberOfBikesByCaste([
        'Muslim',
        'Bharwad',
        'Rabari',
    ])

    return { no: 25, question, numberOfBikes: answer[0]?.numberOfBikes }
}

export const q26 = async () => {
    const question = 'What is the Bike Number of Red Bike Owned By A1 House'

    const answer = await questionQueries.redBikeNumberOwnedByA1()

    return { no: 26, question, bikeNumber: answer }
}

export const q27 = async () => {
    const question = 'How many Cars are owned By Bharwad?'

    const answer = await questionQueries.numberOfCarsOfBharwad()

    return { no: 27, question, numberOfCars: answer[0]?.numberOfCars }
}

export const q28 = async () => {
    const question = 'How many Cars are there in Society?'

    const answer = await questionQueries.numberOfCars()

    return { no: 28, question, numberOfCars: answer }
}

export const q29 = async () => {
    const question = 'How many White Cars are there?'

    const answer = await questionQueries.numberOfCars({ carColor: 'White' })

    return { no: 29, question, numberOfCars: answer }
}

export const q30 = async () => {
    const question = 'How many Houses are there which owns Red bike?'

    const answer = await questionQueries.numberOfHousesOwningRedBike()

    return { no: 30, question, numberOfHouses: answer[0]?.numberOfHouses }
}

export const q31 = async () => {
    const question = 'Display All Cars of Patel'

    const answer = await questionQueries.allCarsOfPatel()

    return { no: 31, question, allCars: answer }
}

export const q32 = async () => {
    const question = 'Display all Bikes of Muslim'

    const answer = await questionQueries.allBikesOfMuslim()

    return { no: 32, question, allBikes: answer }
}

export const q33 = async () => {
    const question = 'How many total Vehicles are there in 3BHK?'

    const numberOfBikes = await questionQueries.numberOfBikesOwnedByBHK(3)
    const numberOfCars = await questionQueries.numberOfCarsOwnedByBHK(3)

    return {
        no: 33,
        question,
        numberOfCars:
            numberOfBikes[0]?.numberOfBikes + numberOfCars[0]?.numberOfCars,
    }
}

export const q34 = async () => {
    const question = 'How many total Bikes are there in 1BHK Houses?'

    const numberOfBikes = await questionQueries.numberOfBikesOwnedByBHK(1)

    return { no: 34, question, numberOfBikes: numberOfBikes[0]?.numberOfBikes }
}

//new

export const q35 = async () => {
    const question = 'How many Marriages happened in Society-Hall?'

    const numberOfMarriagesInHall =
        await questionQueries.numberOfMarriagesInHall()

    return {
        no: 35,
        question,
        numberOfMarriagesInHall:
            numberOfMarriagesInHall[0]?.numberOfMarriagesInHall,
    }
}

export const q36 = async () => {
    const question = 'How many Marriages of Patel happened in Society-Hall?'

    const numberOfPeople =
        await questionQueries.numberOfPatelWhoseMarriageInHall()

    return {
        no: 36,
        question,
        numberOfPeople: numberOfPeople[0]?.numberOfPeople,
    }
}

export const q37 = async () => {
    const question =
        'How many Marriages happened in Hall from House which Own White Car?'

    const numberOfPople =
        await questionQueries.numberOfPeopleWhoseMarriageHappenedInHallFromHouseHavingWhiteCar()

    return {
        no: 37,
        question,
        numberOfPople: numberOfPople[0]?.numberOfPople,
    }
}

export const q38 = async () => {
    const question = 'Which Houses have atleast one Car'

    const housesWithCars = await questionQueries.housesWithAtleastOneCar()

    return {
        no: 38,
        question,
        housesWithCars: housesWithCars[0].houses,
    }
}

export const q39 = async () => {
    const question = 'Which Houses have atleast one Bike'

    const housesWithBike = await questionQueries.housesWithAtleastOneBike()

    return {
        no: 39,
        question,
        housesWithBike: housesWithBike[0].houses,
    }
}

export const q40 = async () => {
    const question = 'Which Houses have no Car'

    const listOfHouseNo = await questionQueries.allHouseNo()

    const housesWithoutCar = await questionQueries.housesWithNoCar(
        listOfHouseNo
    )

    return {
        no: 40,
        question,
        housesWithoutCar: housesWithoutCar[0].housesWithoutCar,
    }
}

export const q41 = async () => {
    const question = 'List houses in Line 1'

    const housesInLine1 = (await questionQueries.housesInLine(1))?.map(
        (data) => data.houseNo
    )
    return {
        no: 41,
        question,
        houses: housesInLine1,
    }
}

export const q42 = async () => {
    const question = 'List houses in Line 2'

    const housesInLine1 = (await questionQueries.housesInLine(2))?.map(
        (data) => data.houseNo
    )
    return {
        no: 42,
        question,
        houses: housesInLine1,
    }
}

export const q43 = async () => {
    const question = 'List houses in Line 3'

    const housesInLine1 = (await questionQueries.housesInLine(3))?.map(
        (data) => data.houseNo
    )
    return {
        no: 43,
        question,
        houses: housesInLine1,
    }
}

export const q44 = async () => {
    const question = 'List houses in Line 4'

    const housesInLine1 = (await questionQueries.housesInLine(4))?.map(
        (data) => data.houseNo
    )
    return {
        no: 44,
        question,
        houses: housesInLine1,
    }
}

export const q45 = async () => {
    const question = 'Houses having atleast one member married in Hall'

    const hallMarriedHouses = await questionQueries.hallMarriedHouses()
    console.log(hallMarriedHouses)

    return {
        no: 45,
        question,
        numberOfHouses: hallMarriedHouses.length || 0,
        houses: hallMarriedHouses,
    }
}

export const q46 = async () => {
    const question = 'Cars having Green Color'

    const greenCars = await questionQueries.greenCars()

    return {
        no: 46,
        question,
        numberOfHouses: greenCars.length || 0,
        houses: greenCars,
    }
}

export const q47 = async () => {
    const question = 'Line Numbers Which have Muslim Houses'

    const muslimHouseLineNumbers =
        await questionQueries.lineNumbersMuslimHouses()

    return {
        no: 47,
        question,
        numberOfHouses: muslimHouseLineNumbers[0].lineNo.length || 0,
        lineNumbers: muslimHouseLineNumbers[0].lineNo,
    }
}

// house number contaning D, return number of people living

export const q48 = async () => {
    const question =
        'Number of People living in Houses having house name containing D'

    const peopleInHousesWithDInName =
        await questionQueries.peopleInHousesWithDInName()

    return {
        no: 48,
        question,
        numberOfPeople: peopleInHousesWithDInName[0].total,
    }
}
