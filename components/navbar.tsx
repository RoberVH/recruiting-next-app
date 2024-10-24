"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Building2, UserCircle2 } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="font-bold">TalentBridge</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/jobs"
              className={pathname === "/jobs" ? "text-foreground" : "text-foreground/60"}
            >
              Jobs
            </Link>
            <Link
              href="/candidates"
              className={pathname === "/candidates" ? "text-foreground" : "text-foreground/60"}
            >
              Candidates
            </Link>
            <Link
              href="/messages"
              className={pathname === "/messages" ? "text-foreground" : "text-foreground/60"}
            >
              Messages
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <UserCircle2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}