const total2 =
    line_items.reduce(
        (acc, { amount, discount_amount }) => acc + amount - discount_amount,
        0
    ) + (discounts?.[0]?.amount || 0)

// // import axios from 'axios'

// // const carOwner = '9'
// // const amount = 1

// // for (let index = 0; index < 4; index++) {
// //     const prefixes = ['A', 'B', 'C', 'D']

// //     const data = prefixes[index] + carOwner

// //     for (let index = 0; index < amount; index++) {
// //         await axios.post('http://localhost:8000/car/add', {
// //             carOwner: data,
// //         })
// //     }
// // }

const data = {
    estimate: {
        created_at: 1705668166,
        object: 'estimate',
        subscription_estimate: {
            id: '16BQ0gU1mkQKa3DOH',
            status: 'active',
            next_billing_at: 1737273181,
            object: 'subscription_estimate',
            currency_code: 'USD',
        },
        invoice_estimate: {
            recurring: true,
            price_type: 'tax_exclusive',
            sub_total: 258000,
            total: 219300,
            credits_applied: 0,
            amount_paid: 0,
            amount_due: 219300,
            object: 'invoice_estimate',
            customer_id: 'AzqF21U1mka5R3Ds0',
            line_items: [
                {
                    id: 'li_16BQ0gU1oPnen3xOV',
                    date_from: 1737273181,
                    date_to: 1768809181,
                    unit_amount: 60000,
                    quantity: 1,
                    amount: 60000,
                    pricing_model: 'flat_fee',
                    is_taxed: false,
                    tax_amount: 0,
                    object: 'line_item',
                    subscription_id: '16BQ0gU1mkQKa3DOH',
                    customer_id: 'AzqF21U1mka5R3Ds0',
                    description: 'Small Team V10 - Yearly',
                    entity_type: 'plan_item_price',
                    entity_id: 'small-team-yearly-V10',
                    discount_amount: 9000,
                    item_level_discount_amount: 0,
                },
                {
                    id: 'li_16BQ0gU1oPnep3xOW',
                    date_from: 1737273181,
                    date_to: 1768809181,
                    unit_amount: 6000,
                    quantity: 9,
                    amount: 54000,
                    pricing_model: 'per_unit',
                    is_taxed: false,
                    tax_amount: 0,
                    object: 'line_item',
                    subscription_id: '16BQ0gU1mkQKa3DOH',
                    customer_id: 'AzqF21U1mka5R3Ds0',
                    description: 'Team + Client',
                    entity_type: 'addon_item_price',
                    entity_id: 'team-yearly-v3',
                    discount_amount: 8100,
                    item_level_discount_amount: 0,
                },
                {
                    id: 'li_16BQ0gU1oPner3xOX',
                    date_from: 1737273181,
                    date_to: 1768809181,
                    unit_amount: 3600,
                    quantity: 40,
                    amount: 144000,
                    pricing_model: 'per_unit',
                    is_taxed: false,
                    tax_amount: 0,
                    object: 'line_item',
                    subscription_id: '16BQ0gU1mkQKa3DOH',
                    customer_id: 'AzqF21U1mka5R3Ds0',
                    description: 'Accounts',
                    entity_type: 'addon_item_price',
                    entity_id: 'accounts-yearly-v3',
                    discount_amount: 21600,
                    item_level_discount_amount: 0,
                },
            ],
            discounts: [
                {
                    object: 'discount',
                    entity_type: 'document_level_coupon',
                    description: '15FOREVER',
                    amount: 38700,
                    entity_id: '15FOREVER',
                    discount_percentage: 15,
                    discount_type: 'percentage',
                },
            ],
            taxes: [],
            line_item_taxes: [],
            currency_code: 'USD',
            round_off_amount: 0,
            line_item_discounts: [
                {
                    object: 'line_item_discount',
                    line_item_id: 'li_16BQ0gU1oPnen3xOV',
                    discount_type: 'document_level_coupon',
                    discount_amount: 9000,
                    coupon_id: '15FOREVER',
                    entity_id: '15FOREVER',
                },
                {
                    object: 'line_item_discount',
                    line_item_id: 'li_16BQ0gU1oPnep3xOW',
                    discount_type: 'document_level_coupon',
                    discount_amount: 8100,
                    coupon_id: '15FOREVER',
                    entity_id: '15FOREVER',
                },
                {
                    object: 'line_item_discount',
                    line_item_id: 'li_16BQ0gU1oPner3xOX',
                    discount_type: 'document_level_coupon',
                    discount_amount: 21600,
                    coupon_id: '15FOREVER',
                    entity_id: '15FOREVER',
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

console.log('sub_total:', sub_total)
