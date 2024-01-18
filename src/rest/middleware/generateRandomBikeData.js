import getRandomColor from '../helpers/getRandomColor.js'
import getRandomBikeName from '../helpers/getRandomBikeName.js'
import getRandomNumberPlate from '../helpers/getRandomNumberPlate.js'

const generateRandomBikeData = async (ctx, next) => {
    const { bikeNo, bikeName, bikeColor } = ctx.request.body

    const newBikeData = {
        bikeNo: bikeNo || getRandomNumberPlate(),
        bikeName: bikeName || getRandomBikeName(),
        bikeColor: bikeColor || getRandomColor(),
    }

    ctx.state.newBikeData = newBikeData

    await next()
}

export default generateRandomBikeData
