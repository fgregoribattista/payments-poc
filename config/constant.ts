export const STRIPE_CALL_BACK_URL =
  process.env.NEXT_PUBLIC_STRIPE_CALL_BACK_URL ??
  'http://localhost:3000/api/v1/checkout/sessions?session_id={CHECKOUT_SESSION_ID}'
export const STRIPE_SESSION_URL =
  process.env.NEXT_PUBLIC_STRIPE_SESSION_URL ??
  'http://localhost:3000/api/v1/checkout/sessions'
export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ??
  'pk_test_51QP2bD2NhwUxF23LFCeL4IjR9HsvgiuBb6rr2SNRZfI8pytrFgMy1guaxhF0vMmK548aWeDbeYEi9Xr4ybmSnu5W00Iw1BoEet'
