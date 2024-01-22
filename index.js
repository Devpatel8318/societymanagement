// const total2 =
//     line_items.reduce(
//         (acc, { amount, discount_amount }) => acc + amount - discount_amount,
//         0
//     ) + (discounts?.[0]?.amount || 0)

// import axios from 'axios'

// const carOwner = '9'
// const amount = 1

// for (let index = 0; index < 4; index++) {
//     const prefixes = ['A', 'B', 'C', 'D']

//     const data = prefixes[index] + carOwner

//     for (let index = 0; index < amount; index++) {
//         await axios.post('http://localhost:8000/car/add', {
//             carOwner: data,
//         })
//     }
// }

const data = {
    estimate: {
        invoice_estimate: {
            sub_total: 258000,
            total: 219300,
            amount_due: 219300,
            line_items: [
                {
                    amount: 60000,
                    discount_amount: 9000,
                },
                {
                    amount: 54000,
                    discount_amount: 8100,
                },
                {
                    amount: 144000,
                    discount_amount: 21600,
                },
            ],
            discounts: [
                {
                    amount: 38700,
                },
            ],
        },
    },
}

const { line_items, discounts } = data.estimate.invoice_estimate

const total = line_items.reduce(
    (acc, curr) => acc + curr.amount - curr.discount_amount,
    0
)
const sub_total = total + (discounts?.[0]?.amount || 0)

console.log('total:', total)
console.log('sub_total:', sub_total)
