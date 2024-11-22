import Link from 'next/link'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Payments Modal PoC
        </Link>
        <nav className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/whitelist">Whitelist</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pocs">PoC</Link>
          </Button>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}
