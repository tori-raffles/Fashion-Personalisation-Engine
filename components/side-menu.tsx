"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Compass, TrendingUp, Bookmark, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    name: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    name: "Popular Products",
    href: "/popular-products",
    icon: TrendingUp,
  },
  {
    name: "Boards",
    href: "/boards",
    icon: Bookmark,
  },
  {
    name: "Complete the Look",
    href: "/complete-the-look",
    icon: Layers,
  },
]

export default function SideMenu() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-background hidden md:block">
      <div className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
              pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
