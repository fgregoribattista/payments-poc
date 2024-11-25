import { useCallback } from 'react'

import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js'
import { STRIPE_SESSION_URL } from '@/config/constant'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('sk_test_51QP2bD2NhwUxF23LuJymOuOiJEctkXPEpWQCSrkNKgwcUt8mo5Ryu2a0DZae7Qw3yOJ5epEXRCBAbl4oFMUZnqFB00vdpwcb0M');
const stripePromise = loadStripe(
  'pk_test_51QP2bD2NhwUxF23LFCeL4IjR9HsvgiuBb6rr2SNRZfI8pytrFgMy1guaxhF0vMmK548aWeDbeYEi9Xr4ybmSnu5W00Iw1BoEet'
)

export default function StripePayments() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(STRIPE_SESSION_URL, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret)
  }, [])

  const options = { fetchClientSecret }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
