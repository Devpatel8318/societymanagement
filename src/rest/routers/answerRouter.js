import Router from '@koa/router'

import {
    provideAnswer,
    provideAllAnswers,
} from '../controllers/questionsController.js'

const router = new Router({ prefix: '/question' })

router.get('/view/:questionNumber', provideAnswer)

router.get('/all', provideAllAnswers)

export default router
