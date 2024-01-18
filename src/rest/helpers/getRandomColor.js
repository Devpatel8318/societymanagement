const colors = ['Red', 'Blue', 'Green', 'Silver', 'Black', 'White', 'Yellow']

const getRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return randomColor
}

export default getRandomColor
