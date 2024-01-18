import * as bikeQueries from '../queries/bikeQueries.js'

export const doesBikeNoAlreadyExists = async (ctx) => {
    const { bikeNo } = ctx.state.newBikeData

    console.log(bikeNo)

    const bikeData = await bikeQueries.getOneBike({ bikeNo })

    if (bikeData) {
        return 'Bike having same bikeNo already Exists'
    }

    return null
}
