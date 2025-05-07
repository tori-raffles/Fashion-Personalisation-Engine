"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import OutfitCard from "@/components/outfit-card"

// Updated outfits data with consistent bookmark counts and names
const allOutfits = [
  {
    id: "1",
    name: "Academic Chic",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Street%20Fashion%20Women%E2%80%99s%20Style%20in%20Seoul%20October%202020.jpg-UXEORdhfAxSy2teXotQdLiCgYNQnnG.jpeg",
    bookmarks: 245,
    tags: ["Preppy", "Academic", "Vintage", "Korean", "Autumn"],
  },
  {
    id: "2",
    name: "Y2K Denim Revival",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f1a78d54e69e64e3392977354ca8414.jpg-6JuAKxVWHxsRYJmXekewRpffP2s9AC.jpeg",
    bookmarks: 189,
    tags: ["Casual", "Denim", "Streetwear", "Y2K", "Sporty"],
  },
  {
    id: "3",
    name: "Minimalist Office Elegance",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae7509020527bec51294a1a1d40035ba.jpg-amqHqJJXH8nN4VHfdd0jZIqZXpXsoR.jpeg",
    bookmarks: 312,
    tags: ["Elegant", "Formal", "Minimalist", "Office", "Chic"],
  },
  {
    id: "4",
    name: "Cozy Loungewear Ensemble",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loungewear-Looks-sweater.jpg-OQiPMo9mFpogX7YGHi22tg0IdelxHn.jpeg",
    bookmarks: 156,
    tags: ["Cozy", "Loungewear", "Neutral", "Casual", "Minimalist"],
  },
  {
    id: "5",
    name: "Urban Night Out",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0f9438fddb7e0f44dcb04c4a5ca8270.jpg-oa1V7XWcVGE9jdqxxaDiV4lPVzJFsT.jpeg",
    bookmarks: 278,
    tags: ["Edgy", "Streetwear", "Urban", "Grunge", "Night Out"],
  },
  {
    id: "6",
    name: "Korean Minimalism",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4a34094ae61ff2dfb2c45e9ed1e4ea0.jpg-h0c3nrle2xWdh9sjnOIBeadzdwpgb1.jpeg",
    bookmarks: 201,
    tags: ["Minimalist", "Monochrome", "Urban", "Casual", "Korean"],
  },
  {
    id: "7",
    name: "Summer Denim Casual",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fda37bcc3f623c6826c7c5c5e645feaa.jpg-eOfitx1MdyW2N7mx8toldEozY0AUHF.jpeg",
    bookmarks: 167,
    tags: ["Casual", "Denim", "Summer", "Streetwear", "Urban"],
  },
  {
    id: "8",
    name: "Bohemian Beach Romance",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79e25c24291dfda9915dba2edf8a7377.jpg-CQEKoVUBhVeXenZyWjwyazfrfoSaIz.jpeg",
    bookmarks: 223,
    tags: ["Boho", "Summer", "Romantic", "Vacation", "Beach"],
  },
]

// Similar outfit recommendations
const similarOutfitsMap: Record<string, string[]> = {
  "1": ["6", "3", "4"], // Academic Chic -> Korean Minimalism, Minimalist Office, Cozy Loungewear
  "2": ["7", "5", "1"], // Y2K Denim -> Summer Denim, Urban Night Out, Academic Chic
  "3": ["6", "1", "5"], // Minimalist Office -> Korean Minimalism, Academic Chic, Urban Night Out
  "4": ["1", "6", "8"], // Cozy Loungewear -> Academic Chic, Korean Minimalism, Bohemian Beach
  "5": ["7", "2", "3"], // Urban Night Out -> Summer Denim, Y2K Denim, Minimalist Office
  "6": ["1", "3", "4"], // Korean Minimalism -> Academic Chic, Minimalist Office, Cozy Loungewear
  "7": ["2", "5", "8"], // Summer Denim -> Y2K Denim, Urban Night Out, Bohemian Beach
  "8": ["7", "4", "2"], // Bohemian Beach -> Summer Denim, Cozy Loungewear, Y2K Denim
}

interface OutfitCarouselProps {
  currentOutfitId?: string
}

export default function OutfitCarousel({ currentOutfitId }: OutfitCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // Get outfits based on current outfit ID or show default outfits
  const getOutfitsToShow = () => {
    if (currentOutfitId && similarOutfitsMap[currentOutfitId]) {
      // Get the outfit IDs similar to the current outfit
      const outfitIds = similarOutfitsMap[currentOutfitId]
      // Return the outfits that match these IDs
      return outfitIds.map((id) => allOutfits.find((o) => o.id === id)).filter(Boolean)
    }

    // Default outfits if no current outfit ID is provided or no mapping exists
    return allOutfits.slice(0, 5)
  }

  const outfitsToShow = getOutfitsToShow()

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {outfitsToShow.map((outfit) => (
          <div key={outfit.id} className="min-w-[250px] snap-start">
            <OutfitCard
              id={outfit.id}
              name={outfit.name}
              imageUrl={outfit.imageUrl}
              bookmarks={outfit.bookmarks}
              tags={outfit.tags}
            />
          </div>
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Scroll left</span>
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
        onClick={scrollRight}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Scroll right</span>
      </Button>
    </div>
  )
}
