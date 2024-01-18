import getRandomContactNumber from '../helpers/getRandomContactNumber.js'

const generateRandomHouseData = async (ctx, next) => {
    const {
        houseNo,
        numberOfMales,
        numberOfFemales,
        contactNumber,
        caste,
        lineNo,
        marriagesInHall,
        bhk,
    } = ctx.request.body

    const newHouseData = {
        houseNo,
        numberOfMales,
        numberOfFemales,
        contactNumber: contactNumber || getRandomContactNumber(),
        caste,
        lineNo,
        marriagesInHall,
        bhk,
    }

    ctx.state.newHouseData = newHouseData

    await next()
}

export default generateRandomHouseData
