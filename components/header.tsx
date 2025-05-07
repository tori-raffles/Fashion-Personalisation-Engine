"use client"

import { useState } from "react"
import Link from "next/link"
import { Shirt, Search, ShoppingBasket, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Import the useCart hook
import { useCart } from "@/context/cart-context"

// Add the cart count to the shopping basket button
export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#cdff3a]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shirt className="h-6 w-6 text-[#313131]" />
            <span className="text-xl font-bold text-[#313131] hidden md:inline-block">
              Fashion Personalization Engine
            </span>
            <span className="text-xl font-bold text-[#313131] md:hidden">FPE</span>
          </Link>
        </div>

        <div className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-8 bg-white/90" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="text-[#313131] relative">
              <ShoppingBasket className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Shopping basket</span>
            </Button>
          </Link>

          <Sheet open={showNotifications} onOpenChange={setShowNotifications}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#313131]">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <p className="text-center text-muted-foreground">No notifications yet</p>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full bg-[#313131] text-white">
                FP
                <span className="sr-only">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShoppingBasket className="mr-2 h-4 w-4" />
                <span>Purchase History</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
