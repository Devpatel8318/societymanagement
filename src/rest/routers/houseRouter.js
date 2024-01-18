import Router from '@koa/router'

import validator from '../middleware/validator.js'
import generateRandomHouseData from '../middleware/generateRandomHouseData.js'

import { doesHouseNoAlreadyExists } from '../validators/houseValidators.js'

import { createHouse, getAllHouses } from '../controllers/houseController.js'

const router = new Router({ prefix: '/house' })

router.post(
    '/add',
    generateRandomHouseData,
    validator([doesHouseNoAlreadyExists]),
    createHouse
)

router.get('/list', getAllHouses)

export default router
