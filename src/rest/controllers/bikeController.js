import { successObject } from '../../utils/responseObject.js'

import * as bikeQueries from '../queries/bikeQueries.js'

export const createBike = async (ctx) => {
    const { bikeOwner } = ctx.request.body
    const { newBikeData } = ctx.state

    Object.assign(newBikeData, { bikeOwner })

    await bikeQueries.createOneBike(newBikeData)

    ctx.body = successObject('Bike Created', { bikeNo: newBikeData.bikeNo })
}

export const getAllBikes = async (ctx) => {
    const bikeData = await bikeQueries.getAllBikes()

    ctx.body = successObject('', bikeData)
}
