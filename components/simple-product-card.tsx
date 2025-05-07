"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SimpleProductCardProps {
  id: string
  name: string
  imageUrl: string
  selected?: boolean
  onSelect?: (id: string) => void
}

export default function SimpleProductCard({ id, name, imageUrl, selected = false, onSelect }: SimpleProductCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md cursor-pointer",
        selected && "ring-2 ring-[#cdff3a] ring-offset-2",
      )}
      onClick={() => onSelect && onSelect(id)}
    >
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
      </div>
    </div>
  )
}
