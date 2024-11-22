'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '../../hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

export default function WhitelistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Whitelist application submitted:', { name, email, reason })
    // Here you would typically send this data to your backend
    toast({
      title: 'Application submitted!',
      description: "We'll review your application and get back to you soon.",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>
    })
    setName('')
    setEmail('')
    setReason('')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Apply for Whitelist</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="reason">Reason for applying</Label>
          <Textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  )
}
