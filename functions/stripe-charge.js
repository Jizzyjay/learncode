const stripe = require('stripe')('pk_test_51LHqsXAOvbAP476Uccu24PBDTdXnPxg0UrTHhZDQLaESOeMcAYyPdzrYbcw7vfijmYPzwj3ZxxzeBQAJQHuQ0LKo005ZEKbnLE')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}