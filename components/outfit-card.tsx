"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatBookmarkCount } from "@/lib/format-number"

interface OutfitCardProps {
  id: string
  name: string
  imageUrl: string
  bookmarks: number
  tags: string[]
}

export default function OutfitCard({ id, name, imageUrl, bookmarks, tags }: OutfitCardProps) {
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add bookmark functionality here
    console.log(`Bookmarked outfit ${id}`)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <Link href={`/outfit/${id}`} className="block">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={400}
          height={500}
          className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
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
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white font-medium mb-2">{name}</h3>
        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full whitespace-nowrap bg-white/20 text-white border-transparent"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
