import { Button, Link } from './Button'

export function Navbar() {
  return (
    <nav className="bg-white sticky top-0 shadow  px-4 md:px-10 py-4 flex items-center">
      <h1 className="font-black text-xl font-tt">Logo</h1>

      <div className="ml-auto"></div>
      <Link href="/">Random</Link>
      <Link href="/">Profile</Link>
      <Button>Hello world</Button>
    </nav>
  )
}
