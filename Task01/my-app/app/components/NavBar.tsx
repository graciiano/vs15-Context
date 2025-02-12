import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/favorites"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Favorites
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )
}

export default Navbar