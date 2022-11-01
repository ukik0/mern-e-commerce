import {Router} from "express";
import stripe from 'stripe'

const router = Router()

const Stripe = stripe(process.env.STRIPE_KEY)

router.post('/payment', async (req, res) => {
    try {
        Stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd"
        }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        })
    } catch (e) {

    }
})

export default router