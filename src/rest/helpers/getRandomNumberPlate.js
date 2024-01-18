const stateCodes = [
    'AP',
    'AR',
    'AS',
    'BR',
    'CG',
    'DL',
    'GA',
    'GJ',
    'HR',
    'HP',
    'JK',
    'JH',
    'MP',
    'ML',
    'MZ',
    'RJ',
    'TN',
    'TR',
    'UP',
    'AN',
]

const randomStateCode = () => {
    return stateCodes[Math.floor(Math.random() * stateCodes.length)]
}

// 1 - 40
const generateRandomTwoDigitString = () => {
    const randomNumber = Math.floor(Math.random() * 40) + 1
    return randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`
}

// AA - ZZ
const generateRandomTwoLetterString = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return (
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)]
    )
}

// 0001 - 9999
const generateRandomFourDigitString = () => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000
    return randomNumber.toString().padStart(4, '0')
}

const getRandomNumberPlate = () => {
    return `${randomStateCode()}${generateRandomTwoDigitString()}${generateRandomTwoLetterString()}${generateRandomFourDigitString()}`
}

export default getRandomNumberPlate
