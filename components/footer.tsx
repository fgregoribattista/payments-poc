import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <p>&copy; 2024 Payments Modal PoC. All rights reserved.</p>
        <nav className="space-x-4">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
