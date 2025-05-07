"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleQuantityChange = (id: string, change: number, currentQuantity: number) => {
    const newQuantity = currentQuantity + change
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity)
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="text-center py-16 space-y-6">
          <p className="text-xl text-muted-foreground">Your cart is empty</p>
          <Link href="/popular-products">
            <Button className="bg-[#cdff3a] text-[#313131] hover:bg-[#b8e535]">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex items-center mb-8">
        <Link href="/popular-products" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold ml-auto">Your Cart</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="font-medium">Product</span>
            <span className="font-medium">Total</span>
          </div>

          {items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="ml-4 flex-grow">
                <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                  {item.name}
                </Link>
                <div className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</div>
                <div className="flex items-center mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleQuantityChange(item.id, -1, item.quantity)}
                  >
                    <ChevronLeft className="h-3 w-3" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleQuantityChange(item.id, 1, item.quantity)}
                  >
                    <ChevronRight className="h-3 w-3" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button
            className={cn(
              "w-full mt-6 py-6 text-lg",
              isCheckingOut
                ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                : "bg-[#cdff3a] text-[#313131] hover:bg-[#b8e535]",
            )}
            onClick={() => setIsCheckingOut(true)}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? "Processing..." : "Checkout"}
          </Button>
        </div>
      </div>
    </div>
  )
}
