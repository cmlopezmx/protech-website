"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { PhoneButton } from "./phone-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Work", href: "#our-work" },
  { label: "Areas", href: "#areas" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="ProTech Home & Business Services"
            height={40}
            width={160}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop phone button */}
        <div className="hidden md:flex">
          <PhoneButton />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-surface md:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 bg-white px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-surface hover:text-amber"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 px-3">
            <PhoneButton className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </header>
  )
}
