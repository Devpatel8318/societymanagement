import { failureObject, successObject } from '../../utils/responseObject.js'

import * as allQuestionAnswers from '../helpers/getAnswers.js'

export const provideAnswer = async (ctx) => {
    const { questionNumber } = ctx.request.params
    let response

    if (allQuestionAnswers[`q${questionNumber}`]) {
        response = await allQuestionAnswers[`q${questionNumber}`]()
    } else {
        response = failureObject(
            'Question Number Does not Exist',
            'Invalid Request'
        )
    }

    ctx.body = successObject('', response)
}

export const provideAllAnswers = async (ctx) => {
    const questions = Array.from({ length: 34 }, (_, index) =>
        allQuestionAnswers[`q${index + 1}`]()
    )

    const answers = await Promise.all(questions)

    ctx.body = successObject('', answers)
}
