const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
  // Post api token to user model
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' })
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5$ for 5 credits',
      source: req.body.id
    })
    // Add 5 credits to user model
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user)
  })
}
