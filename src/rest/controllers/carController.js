import { successObject } from '../../utils/responseObject.js'

import * as carQueries from '../queries/carQueries.js'

export const createCar = async (ctx) => {
    const { carOwner } = ctx.request.body
    const { newCarData } = ctx.state

    Object.assign(newCarData, { carOwner })

    await carQueries.createOneCar(newCarData)

    ctx.body = successObject('Car Created', { carNo: newCarData.carNo })
}

export const getAllCars = async (ctx) => {
    const carData = await carQueries.getAllCars()

    ctx.body = successObject('', carData)
}
