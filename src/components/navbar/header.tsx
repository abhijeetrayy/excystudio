import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Excy Studio
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/services"
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
