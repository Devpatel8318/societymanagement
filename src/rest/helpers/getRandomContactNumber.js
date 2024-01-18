const generateRandomContactNumber = () => {
    const min = 1000000000 // 10^9 (the smallest 10-digit number)
    const max = 9999999999 // 10^10 - 1 (the largest 10-digit number)

    return Math.floor(Math.random() * (max - min + 1)) + min
}
export default generateRandomContactNumber
