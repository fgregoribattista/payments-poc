'use client'

import  MoonPayBuyModal  from '@/components/moon-pay/moon-pay-buy-modal'
import dynamic from 'next/dynamic'

const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false }
)
export default function Home() {
  return (
    <MoonPayProvider apiKey="pk_test_YHaGUnoZCiKe1wPcyl26uZ89LDOOsRG" debug>
      <div className="max-w-md mx-auto p-10 ">
        <MoonPayBuyModal />
      </div>
    </MoonPayProvider>
  )
}
