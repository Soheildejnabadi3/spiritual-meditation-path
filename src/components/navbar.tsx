"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NotebookIcon as Lotus, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const routes = [
  { name: "Home", path: "/" },
  { name: "Meditation", path: "/meditation" },
  { name: "Articles", path: "/articles" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full px-10 border-b border-purple-100 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icon-512x512.png" width={250} height={250} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* Placeholder for theme toggle */}
            <div className="h-9 w-9 rounded-full border" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon-512x512.png" width={250} height={250} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 ">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-900 dark:hover:text-purple-300",
                pathname === route.path
                  ? "text-purple-900 dark:text-purple-300 border-b-2 border-purple-600 dark:border-purple-400 pb-1"
                  : "text-purple-600 dark:text-purple-400",
              )}
            >
              {route.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            Sign In
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden ">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-purple-900 dark:text-purple-200" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Image src="/icon-512x512.png" width={250} height={250} alt="Logo" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 text-purple-900 dark:text-purple-200" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-purple-900 dark:hover:text-purple-300 py-2",
                        pathname === route.path
                          ? "text-purple-900 dark:text-purple-300 border-l-4 border-purple-600 dark:border-purple-400 pl-4"
                          : "text-purple-600 dark:text-purple-400 pl-5",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

