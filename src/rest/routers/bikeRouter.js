import Router from '@koa/router'

import validator from '../middleware/validator.js'
import generateRandomBikeData from '../middleware/generateRandomBikeData.js'

import { doesBikeNoAlreadyExists } from '../validators/bikeValidators.js'

import { createBike, getAllBikes } from '../controllers/bikeController.js'

const router = new Router({ prefix: '/bike' })

router.post(
    '/add',
    generateRandomBikeData,
    validator([doesBikeNoAlreadyExists]),
    createBike
)

router.get('/list', getAllBikes)

export default router
