'use client'

import MoonPayBuyModal from '@/components/moon-pay/moon-pay-buy-modal'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false }
)
export default function Home() {
  return (
    <MoonPayProvider apiKey="pk_test_YHaGUnoZCiKe1wPcyl26uZ89LDOOsRG" debug>
      <div className="max-w-md mx-auto p-10 ">
        <div className="flex flex-row justify-start items-stretch mb-12 text-sm ">
          <MoonPayBuyModal />
          <Button>
            <Link href="/pocs/stripe">Stripe</Link>
          </Button>
        </div>
      </div>
    </MoonPayProvider>
  )
}
