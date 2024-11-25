'use client'

import StripePayments from '@/components/stripe/stripe-payments'

export default function Stripe() {
  return (
    <div className="max-w-md mx-auto p-10 ">
      <div className="mb-12 text-sm ">
        <h1 className="text-2xl font-bold">Stripe</h1>
        <table className="table-auto mt-6">
          <thead>
            <tr>
              <th className="px-4 py-2">Card number </th>
              <th className="px-4 py-2">Scenario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">4242424242424242</td>
              <td className="border px-4 py-2">
                The card payment succeeds and doesnt require authentication.{' '}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4000002500003155</td>
              <td className="border px-4 py-2">
                The card payment requires authentication.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4000000000009995</td>
              <td className="border px-4 py-2">
                The card is declined with a decline code like
                insufficient_funds.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6205500000000000004</td>
              <td className="border px-4 py-2">
                The UnionPay card has a variable length of 13-19 digits.
              </td>
            </tr>
          </tbody>
        </table>
        <h4 className="text-sm mt-6">How to test</h4>
        <p className="text-sm text-gray-500">
          Fill out the credit card form using the credit card number with any
          expiration, CVC, and postal code.
        </p>
        <p className="text-xs italic mt-2 text-gray-500">
          https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=embedded-form&client=react#testing
        </p>
      </div>
      <StripePayments />
    </div>
  )
}
