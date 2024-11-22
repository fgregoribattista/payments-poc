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
  // const [activeTab, setActiveTab] = useState<"fiat" | "crypto">("fiat")

  return (
    <MoonPayProvider apiKey="pk_test_YHaGUnoZCiKe1wPcyl26uZ89LDOOsRG" debug>
      <div className="max-w-md mx-auto p-10 ">
        <BuyModal />
      </div>
    </MoonPayProvider>
  )
}
