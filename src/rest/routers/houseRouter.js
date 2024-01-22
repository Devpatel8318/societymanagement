import Router from '@koa/router'

import validator from '../middleware/validator.js'
import generateRandomHouseData from '../middleware/generateRandomHouseData.js'

import { doesHouseNoAlreadyExists } from '../validators/houseValidators.js'

import {
    createHouse,
    getAllHouses,
    getNumberOfBikes,
    getNumberOfCars,
    getSingleHouse,
} from '../controllers/houseController.js'

const router = new Router({ prefix: '/house' })

router.post(
    '/add',
    generateRandomHouseData,
    validator([doesHouseNoAlreadyExists]),
    createHouse
)

router.get('/list', getAllHouses)

router.get('/view/:houseNo', getSingleHouse)

router.get('/cars/:houseNo', getNumberOfCars)

router.get('/bikes/:houseNo', getNumberOfBikes)

export default router
