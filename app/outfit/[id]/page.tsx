"use client"

import Image from "next/image"
import { BookmarkIcon, MoreHorizontal, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ProductCarousel from "@/components/product-carousel"
import OutfitCarousel from "@/components/outfit-carousel"
import TagList from "@/components/tag-list"
import { formatBookmarkCount } from "@/lib/format-number"

// Updated outfits data with names and descriptions
const outfits = [
  {
    id: "1",
    name: "Academic Chic",
    description:
      "A preppy, academic-inspired outfit perfect for campus or casual outings. The layered look combines vintage elements with Korean-inspired styling, creating a sophisticated yet approachable aesthetic. Ideal for autumn days when you want to look put-together without trying too hard.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Street%20Fashion%20Women%E2%80%99s%20Style%20in%20Seoul%20October%202020.jpg-UXEORdhfAxSy2teXotQdLiCgYNQnnG.jpeg",
    bookmarks: 245,
    tags: ["Preppy", "Academic", "Vintage", "Korean", "Autumn"],
  },
  {
    id: "2",
    name: "Y2K Denim Revival",
    description:
      "This casual streetwear look brings back Y2K vibes with a modern twist. The oversized denim paired with sporty elements creates an effortlessly cool aesthetic that's perfect for everyday wear. The outfit balances comfort and style for an on-trend appearance.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f1a78d54e69e64e3392977354ca8414.jpg-6JuAKxVWHxsRYJmXekewRpffP2s9AC.jpeg",
    bookmarks: 189,
    tags: ["Casual", "Denim", "Streetwear", "Y2K", "Sporty"],
  },
  {
    id: "3",
    name: "Minimalist Office Elegance",
    description:
      "A sophisticated and elegant outfit perfect for the modern professional. The clean lines and minimalist approach create a timeless look that transitions seamlessly from office meetings to evening events. The neutral color palette ensures versatility and effortless style.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae7509020527bec51294a1a1d40035ba.jpg-amqHqJJXH8nN4VHfdd0jZIqZXpXsoR.jpeg",
    bookmarks: 312,
    tags: ["Elegant", "Formal", "Minimalist", "Office", "Chic"],
  },
  {
    id: "4",
    name: "Cozy Loungewear Ensemble",
    description:
      "The ultimate comfort-focused outfit that doesn't sacrifice style. This loungewear look features soft, neutral pieces that create a cohesive and relaxed aesthetic. Perfect for work-from-home days, weekend relaxation, or casual coffee runs when comfort is a priority.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loungewear-Looks-sweater.jpg-OQiPMo9mFpogX7YGHi22tg0IdelxHn.jpeg",
    bookmarks: 156,
    tags: ["Cozy", "Loungewear", "Neutral", "Casual", "Minimalist"],
  },
  {
    id: "5",
    name: "Urban Night Out",
    description:
      "An edgy, statement-making outfit designed for nightlife and urban adventures. The combination of streetwear elements with grunge-inspired details creates a bold look that stands out in any crowd. The dark color palette adds to the mysterious and confident vibe.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0f9438fddb7e0f44dcb04c4a5ca8270.jpg-oa1V7XWcVGE9jdqxxaDiV4lPVzJFsT.jpeg",
    bookmarks: 278,
    tags: ["Edgy", "Streetwear", "Urban", "Grunge", "Night Out"],
  },
  {
    id: "6",
    name: "Korean Minimalism",
    description:
      "A clean, monochromatic outfit that embodies modern Korean street style. The simple silhouette and understated details create an effortlessly cool look that's both trendy and timeless. Perfect for those who appreciate minimalist fashion with an urban edge.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4a34094ae61ff2dfb2c45e9ed1e4ea0.jpg-h0c3nrle2xWdh9sjnOIBeadzdwpgb1.jpeg",
    bookmarks: 201,
    tags: ["Minimalist", "Monochrome", "Urban", "Casual", "Korean"],
  },
  {
    id: "7",
    name: "Summer Denim Casual",
    description:
      "A relaxed summer outfit centered around classic denim with a contemporary twist. The casual silhouette is perfect for warm weather while maintaining an urban street style aesthetic. Ideal for weekend outings, festivals, or casual summer gatherings.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fda37bcc3f623c6826c7c5c5e645feaa.jpg-eOfitx1MdyW2N7mx8toldEozY0AUHF.jpeg",
    bookmarks: 167,
    tags: ["Casual", "Denim", "Summer", "Streetwear", "Urban"],
  },
  {
    id: "8",
    name: "Bohemian Beach Romance",
    description:
      "A dreamy, romantic outfit with bohemian influences perfect for beach vacations or summer events. The flowing silhouette and light fabrics create an ethereal look that's both comfortable and stylish. The outfit captures the free-spirited essence of boho fashion.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79e25c24291dfda9915dba2edf8a7377.jpg-CQEKoVUBhVeXenZyWjwyazfrfoSaIz.jpeg",
    bookmarks: 223,
    tags: ["Boho", "Summer", "Romantic", "Vacation", "Beach"],
  },
]

export default function OutfitPage({ params }: { params: { id: string } }) {
  // Find the outfit based on the ID
  const outfitId = params.id
  const outfit = outfits.find((o) => o.id === outfitId) || outfits[0]

  const handleBookmark = () => {
    // Add bookmark functionality here
    console.log(`Bookmarked outfit ${outfitId}`)
  }

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src={outfit.imageUrl || "/placeholder.svg"}
            alt={outfit.name}
            width={500}
            height={600}
            className="rounded-lg object-cover w-full h-[600px]"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full bg-white/80 backdrop-blur-sm flex items-center gap-1 px-3"
              onClick={handleBookmark}
            >
              <BookmarkIcon className="h-5 w-5" />
              <span>{formatBookmarkCount(outfit.bookmarks)}</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm">
                  <MoreHorizontal className="h-5 w-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{outfit.name}</h1>
          <p className="text-muted-foreground">{outfit.description}</p>
          <TagList tags={outfit.tags} />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Get this Look</h2>
        <ProductCarousel outfitId={outfitId} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Similar Outfits</h2>
        <OutfitCarousel currentOutfitId={outfitId} />
      </div>
    </div>
  )
}
