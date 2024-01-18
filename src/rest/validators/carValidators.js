import * as carQueries from '../queries/carQueries.js'

export const doesCarNoAlreadyExists = async (ctx) => {
    const { carNo } = ctx.state.newCarData

    console.log(carNo)

    const carData = await carQueries.getOneCar({ carNo })

    if (carData) {
        return 'Car having same carNo already Exists'
    }

    return null
}
