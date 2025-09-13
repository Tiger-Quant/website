import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-subtle mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-no-background.png"
                alt="TigerQuant Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-heading font-semibold text-gold">
                TigerQuant
              </h3>
            </div>
            <p className="text-secondary text-sm">
              University of Missouri&apos;s premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-gold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-secondary hover:text-gold transition-colors text-sm">
                About Us
              </Link>
              <Link href="/executive-board" className="block text-secondary hover:text-gold transition-colors text-sm">
                Executive Board
              </Link>
              <Link href="/portfolios" className="block text-secondary hover:text-gold transition-colors text-sm">
                Portfolios
              </Link>
              <Link href="/competitions" className="block text-secondary hover:text-gold transition-colors text-sm">
                Competitions
              </Link>
              <Link href="/join" className="block text-secondary hover:text-gold transition-colors text-sm">
                Join Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-gold">Contact</h4>
            <div className="space-y-2">
              <p className="text-secondary text-sm">University of Missouri</p>
              <p className="text-secondary text-sm">Columbia, MO</p>
              <a 
                href="mailto:tigerquant@missouri.edu" 
                className="block text-secondary hover:text-gold transition-colors text-sm"
              >
                tigerquant@missouri.edu
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-subtle mt-8 pt-8 text-center">
          <p className="text-secondary text-sm">
            © 2024 TigerQuant. All rights reserved. | University of Missouri
          </p>
        </div>
      </div>
    </footer>
  )
}
