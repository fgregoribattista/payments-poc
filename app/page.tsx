"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PurchaseForm } from "@/components/purchase-form"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"fiat" | "crypto">("fiat")

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Buy Fiat or Crypto</h1>
      <Tabs defaultValue="fiat" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="fiat" onClick={() => setActiveTab("fiat")}>Fiat</TabsTrigger>
          <TabsTrigger value="crypto" onClick={() => setActiveTab("crypto")}>Crypto</TabsTrigger>
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
  )
}

