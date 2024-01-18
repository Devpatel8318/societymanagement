import axios from 'axios'

const carOwner = '9'
const amount = 1

for (let index = 0; index < 4; index++) {
    const prefixes = ['A', 'B', 'C', 'D']

    const data = prefixes[index] + carOwner

    for (let index = 0; index < amount; index++) {
        await axios.post('http://localhost:8000/car/add', {
            carOwner: data,
        })
    }
}
