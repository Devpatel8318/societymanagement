import getRandomColor from '../helpers/getRandomColor.js'
import getRandomCarName from '../helpers/getRandomCarName.js'
import getRandomNumberPlate from '../helpers/getRandomNumberPlate.js'

const generateRandomCarData = async (ctx, next) => {
    const { carNo, carName, carColor } = ctx.request.body

    const newCarData = {
        carNo: carNo || getRandomNumberPlate(),
        carName: carName || getRandomCarName(),
        carColor: carColor || getRandomColor(),
    }

    ctx.state.newCarData = newCarData

    await next()
}

export default generateRandomCarData
