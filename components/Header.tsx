import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-2xl font-bold">
          My Podcast
        </Link>
      </div>
    </header>
  )
}

