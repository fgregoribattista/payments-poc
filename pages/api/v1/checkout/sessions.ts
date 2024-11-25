import { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stripe = require('stripe')(
  'rk_test_51QP2bD2NhwUxF23LVFVmgTjtnwhJbFMpG6uYA8M0blrJkWlwzVENL7JmWpaJ04xauHKAPS1LuwlxFMWSwG7SFdqm001pqb51Y4'
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'digital-art'
              },
              unit_amount: 2000
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        ui_mode: 'embedded',
        return_url:
          'http://localhost:3000/api/v1/checkout/sessions?session_id={CHECKOUT_SESSION_ID}'
      })

      res.status(200).json({ clientSecret: session.client_secret })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.status(500).json({ error: (error as any).message })
    }
  }
  if (req.method === 'GET') {
    const id = req.query.session_id ?? ''
    if (!id) {
      res.status(400).json({ error: 'session_id is required' })
    }
    try {
      const session = await stripe.checkout.sessions.retrieve(id)
      console.log('session', session.status)
      // if (session.payment_status === 'paid') {
      //   res.status(200).json({ paid: true })
      // }
      // if (session.payment_status === 'unpaid') {
      //   res.status(200).json({ paid: false })
      // }
      if (session.status === 'complete') {
        res.status(200).json({ completed: true })
      }
      if (session.status === 'incomplete') {
        res.status(200).json({ completed: false })
      }

      res.status(501).json({ error: 'uninterpreted response' })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.status(500).json({ error: (error as any).message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
