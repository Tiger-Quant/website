"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Executive Board", href: "/executive-board" },
  { name: "Portfolios", href: "/portfolios" },
  { name: "Competitions", href: "/competitions" },
  { name: "Join", href: "/join" },
  { name: "Paper Trading", href: "/register" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-elevated border-b border-subtle backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-no-background.png"
              alt="TigerQuant Logo"
              width={200}
              height={79}
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-heading font-semibold text-gold">
              TigerQuant
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href || 
                  (pathname === "/" && item.href === "/about") ||
                  (pathname === "/about" && item.href === "/")
                    ? "active"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-surface hover:bg-gold hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-surface hover:bg-gold hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-subtle py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${
                    pathname === item.href || 
                    (pathname === "/" && item.href === "/about") ||
                    (pathname === "/about" && item.href === "/")
                      ? "active"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-secondary hover:text-gold transition-colors duration-200 font-medium relative;
        }

        .nav-link.active {
          @apply text-gold;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-muted));
        }

        .mobile-nav-link {
          @apply block px-4 py-2 text-secondary hover:text-gold hover:bg-surface rounded-lg transition-all duration-200 font-medium;
        }

        .mobile-nav-link.active {
          @apply text-gold bg-surface;
        }
      `}</style>
    </header>
  )
}
