'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PurchaseForm } from '@/components/purchase-form'
import BuyModal from '@/components/moon-pay/moon-pay-buy-modal'
import dynamic from 'next/dynamic'
// import { MoonPayProvider } from '@moonpay/moonpay-react';

const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false }
)
export default function Home() {
  const [activeTab, setActiveTab] = useState<'fiat' | 'crypto'>('fiat')

  return (
    // <MoonPayProvider apiKey="pk_test_YHaGUnoZCiKe1wPcyl26uZ89LDOOsRG" debug>
    <div className="max-w-md mx-auto p-10 ">
      <div className="max-w-md mx-auto mb-4">
        <h1 className="text-2xl font-bold mb-4">Buy Fiat or Crypto</h1>
        <Tabs defaultValue="fiat" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fiat" onClick={() => setActiveTab('fiat')}>
              Fiat
            </TabsTrigger>
            <TabsTrigger value="crypto" onClick={() => setActiveTab('crypto')}>
              Crypto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fiat">
            <div className="p-4 border rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Buy Fiat Currency</h2>
              <PurchaseForm type="fiat" />
            </div>
          </TabsContent>
          <TabsContent value="crypto">
            <div className="p-4 border rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Buy Cryptocurrency</h2>
              <PurchaseForm type="crypto" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* <BuyModal /> */}
    </div>

    // </MoonPayProvider>
  )
}
