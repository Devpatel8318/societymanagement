import * as houseQueries from '../queries/houseQueries.js'

export const doesHouseNoAlreadyExists = async (ctx) => {
    const { houseNo } = ctx.state.newHouseData

    const houseData = await houseQueries.getOneHouse({ houseNo })

    if (houseData) {
        return 'House having same houseNo already Exists'
    }

    return null
}
