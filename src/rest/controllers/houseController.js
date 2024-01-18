import { failureObject, successObject } from '../../utils/responseObject.js'

import * as houseQueries from '../queries/houseQueries.js'

export const createHouse = async (ctx) => {
    const { newHouseData } = ctx.state
    let response = {}

    try {
        await houseQueries.createOneHouse(newHouseData)
        response = successObject('House Created', {
            houseNo: newHouseData.houseNo,
        })
    } catch (error) {
        response = failureObject(
            'auto generated Number caused error, Please try again'
        )
    }

    ctx.body = response
}

export const getAllHouses = async (ctx) => {
    const houseData = await houseQueries.getAllHouses()

    ctx.body = successObject('', houseData)
}