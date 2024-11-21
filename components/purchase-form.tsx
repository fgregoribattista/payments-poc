"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PurchaseFormProps {
  type: "fiat" | "crypto"
}

export function PurchaseForm({ type }: PurchaseFormProps) {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Purchasing ${amount} ${currency} ${type}`)
    // Here you would typically send this data to your backend
  }

  const currencies = type === "fiat" 
    ? ["USD", "EUR", "GBP", "JPY"] 
    : ["BTC", "ETH", "XRP", "LTC"]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      <div>
        <Label htmlFor="currency">Currency</Label>
        <Select onValueChange={setCurrency} required>
          <SelectTrigger id="currency">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((curr) => (
              <SelectItem key={curr} value={curr}>
                {curr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Buy {type}
      </Button>
    </form>
  )
}

