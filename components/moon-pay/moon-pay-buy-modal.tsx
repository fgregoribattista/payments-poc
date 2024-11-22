// import { MoonPayBuyWidget } from '@moonpay/moonpay-react';
import { useState } from 'react'

import { Button } from '@/components/ui/button'

// import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

import dynamic from 'next/dynamic'

// const MoonPayProvider = dynamic(
//   () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
//   { ssr: false },
// );

const MoonPayBuyWidget = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayBuyWidget),
  { ssr: false }
)

export default function MoonPayBuyModal() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="max-w-md mx-auto">
      <MoonPayBuyWidget
        variant="overlay"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        defaultCurrencyCode="eth"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //   onUrlSignatureRequested={async (data:any=1) => {
        //     console.log('data,',data);
        //     console.log("URL signature requested!");
        //     return "signature";
        //   }}
        onLogin={async () => console.log('Customer logged in!')}
        visible={visible}
      />
      {/* <Button > */}
      <Button onClick={() => setVisible(!visible)}>MoonPay</Button>
    </div>
  )
}
