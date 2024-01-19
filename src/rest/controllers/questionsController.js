import { failureObject, successObject } from '../../utils/responseObject.js'

import * as allQuestionAnswers from '../helpers/getAnswers.js'

export const provideAnswer = async (ctx) => {
    const { questionNumber } = ctx.request.params
    let response

    switch (questionNumber) {
        case 'q1':
            response = await allQuestionAnswers.q1()
            break
        case 'q2':
            response = await allQuestionAnswers.q2()
            break
        case 'q3':
            response = await allQuestionAnswers.q3()
            break
        case 'q4':
            response = await allQuestionAnswers.q4()
            break
        case 'q5':
            response = await allQuestionAnswers.q5()
            break
        case 'q6':
            response = await allQuestionAnswers.q6()
            break
        case 'q7':
            response = await allQuestionAnswers.q7()
            break
        case 'q8':
            response = await allQuestionAnswers.q8()
            break
        case 'q9':
            response = await allQuestionAnswers.q9()
            break
        case 'q10':
            response = await allQuestionAnswers.q10()
            break
        case 'q11':
            response = await allQuestionAnswers.q11()
            break
        case 'q12':
            response = await allQuestionAnswers.q12()
            break
        case 'q13':
            response = await allQuestionAnswers.q13()
            break
        case 'q14':
            response = await allQuestionAnswers.q14()
            break
        case 'q15':
            response = await allQuestionAnswers.q15()
            break
        case 'q16':
            response = await allQuestionAnswers.q16()
            break
        case 'q17':
            response = await allQuestionAnswers.q17()
            break
        case 'q18':
            response = await allQuestionAnswers.q18()
            break
        case 'q19':
            response = await allQuestionAnswers.q19()
            break
        case 'q20':
            response = await allQuestionAnswers.q20()
            break
        case 'q21':
            response = await allQuestionAnswers.q21()
            break
        case 'q22':
            response = await allQuestionAnswers.q22()
            break
        case 'q23':
            response = await allQuestionAnswers.q23()
            break
        case 'q24':
            response = await allQuestionAnswers.q24()
            break
        case 'q25':
            response = await allQuestionAnswers.q25()
            break
        case 'q26':
            response = await allQuestionAnswers.q26()
            break
        case 'q27':
            response = await allQuestionAnswers.q27()
            break
        case 'q28':
            response = await allQuestionAnswers.q28()
            break
        case 'q29':
            response = await allQuestionAnswers.q29()
            break
        case 'q30':
            response = await allQuestionAnswers.q30()
            break
        case 'q31':
            response = await allQuestionAnswers.q31()
            break
        case 'q32':
            response = await allQuestionAnswers.q32()
            break
        case 'q33':
            response = await allQuestionAnswers.q33()
            break
        case 'q34':
            response = await allQuestionAnswers.q34()
            break
        default:
            response = failureObject(
                'Question Number Does not Exist',
                'Invalid Request'
            )
            break
    }

    ctx.body = successObject('', response)
}
export const provideAllAnswers = async (ctx) => {
    const questions = [
        allQuestionAnswers.q1(),
        allQuestionAnswers.q2(),
        allQuestionAnswers.q3(),
        allQuestionAnswers.q4(),
        allQuestionAnswers.q5(),
        allQuestionAnswers.q6(),
        allQuestionAnswers.q7(),
        allQuestionAnswers.q8(),
        allQuestionAnswers.q9(),
        allQuestionAnswers.q10(),
        allQuestionAnswers.q11(),
        allQuestionAnswers.q12(),
        allQuestionAnswers.q13(),
        allQuestionAnswers.q14(),
        allQuestionAnswers.q15(),
        allQuestionAnswers.q16(),
        allQuestionAnswers.q17(),
        allQuestionAnswers.q18(),
        allQuestionAnswers.q19(),
        allQuestionAnswers.q20(),
        allQuestionAnswers.q21(),
        allQuestionAnswers.q22(),
        allQuestionAnswers.q23(),
        allQuestionAnswers.q24(),
        allQuestionAnswers.q25(),
        allQuestionAnswers.q26(),
        allQuestionAnswers.q27(),
        allQuestionAnswers.q28(),
        allQuestionAnswers.q29(),
        allQuestionAnswers.q30(),
        allQuestionAnswers.q31(),
        allQuestionAnswers.q32(),
        allQuestionAnswers.q33(),
        allQuestionAnswers.q34(),
    ]

    const answers = await Promise.all(
        questions.map(async (question) => await question)
    )

    ctx.body = successObject('', answers)
}
