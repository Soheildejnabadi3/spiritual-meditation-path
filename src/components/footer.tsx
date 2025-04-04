import Link from "next/link"
import Image from "next/image"
import { NotebookIcon as Lotus, Mail, Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-purple-950 dark:bg-black text-purple-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo-png.png" width={260} height={100} alt="Logo" />
          </div>
          <p className="max-w-md">
            Guiding you on your journey to spiritual growth, mindfulness, and inner peace through ancient wisdom and
            modern practices.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="#" className="text-purple-300 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-purple-300 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-purple-300 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-purple-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/meditation" className="hover:text-white transition-colors">
                Meditation
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-white transition-colors">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Guided Meditations
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Spiritual Readings
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Community Events
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-purple-800 dark:border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SpiritualPath. All rights reserved.</p>
      </div>
    </footer>
  )
}

