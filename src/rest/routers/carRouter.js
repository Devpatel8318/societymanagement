import Router from '@koa/router'

import validator from '../middleware/validator.js'
import generateRandomCarData from '../middleware/generateRandomCarData.js'

import { doesCarNoAlreadyExists } from '../validators/carValidators.js'

import { createCar, getAllCars } from '../controllers/carController.js'

const router = new Router({ prefix: '/car' })

router.post(
    '/add',
    generateRandomCarData,
    validator([doesCarNoAlreadyExists]),
    createCar
)

router.get('/list', getAllCars)

export default router
