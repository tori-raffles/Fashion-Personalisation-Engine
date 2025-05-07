"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { BookmarkIcon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatBookmarkCount } from "@/lib/format-number"
// Import the useCart hook
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  id: string
  name: string
  imageUrl: string
  price: number
  rating: number
  bookmarks: number
  brand?: string
  selectable?: boolean
  selected?: boolean
  onSelect?: (id: string) => void
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  price,
  rating,
  bookmarks,
  brand,
  selectable = false,
  selected = false,
  onSelect,
}: ProductCardProps) {
  const { addItem } = useCart()

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add bookmark functionality here
    console.log(`Bookmarked product ${id}`)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id, name, imageUrl, price })
  }

  const cardContent = (
    <>
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="aspect-square w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full bg-white/80 backdrop-blur-sm flex items-center gap-1 px-3"
            onClick={handleBookmark}
          >
            <BookmarkIcon className="h-4 w-4" />
            <span className="text-xs">{formatBookmarkCount(bookmarks)}</span>
          </Button>
        </div>
      </div>
      <div className="p-4">
        {brand && <p className="text-sm text-muted-foreground">{brand}</p>}
        <h3 className="font-medium line-clamp-2 h-[3rem] overflow-hidden mb-1">{name}</h3>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-4 w-4", i < rating ? "fill-primary text-primary" : "fill-muted text-muted")}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${price.toFixed(2)}</span>
          <Button className="bg-[#cdff3a] text-[#313131] hover:bg-[#b8e535]" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  )

  if (selectable) {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md",
          selectable && "cursor-pointer",
          selected && "ring-2 ring-[#cdff3a] ring-offset-2",
        )}
        onClick={() => onSelect && onSelect(id)}
      >
        {cardContent}
      </div>
    )
  }

  return (
    <Link
      href={`/product/${id}`}
      className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md block"
    >
      {cardContent}
    </Link>
  )
}
