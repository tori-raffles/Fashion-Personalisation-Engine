"use client"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { cn } from "@/lib/utils"

// All available tags
const allTags = [
  "Casual",
  "Streetwear",
  "Urban",
  "Vintage",
  "Formal",
  "Sporty",
  "Romantic",
  "Edgy",
  "Preppy",
  "Minimalist",
  "Lounge",
  "Elegant",
  "Y2K",
  "K-pop",
  "Techwear",
  "Skater",
  "Grunge",
  "Boho",
  "Goth",
  "Cottagecore",
  "Activewear",
  "Outdoor",
  "Resortwear",
  "Cozy",
  "Asian Street Style",
  "Night Out",
  "Retro",
  "Punk",
  "Hipster",
  "Athleisure",
  "Bohemian",
  "Classic",
  "Eclectic",
  "Feminine",
  "Masculine",
  "Androgynous",
  "Artsy",
  "Business Casual",
  "Chic",
  "Coastal",
  "Contemporary",
  "Denim",
  "Glamorous",
  "Hippie",
  "Indie",
  "Kawaii",
  "Luxury",
  "Monochrome",
  "Nautical",
  "Oversized",
  "Pastel",
  "Quirky",
  "Rustic",
  "Scandinavian",
  "Tomboy",
  "Tropical",
  "Utility",
  "Vacation",
  "Western",
  "Workwear",
]

export default function StylePreferences() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // Calculate how many tags to show in 2 rows
  const getVisibleTags = () => {
    if (showAll) return allTags

    // Approximate number of tags that fit in 2 rows
    // This is an approximation and might need adjustment based on actual UI
    return allTags.slice(0, 14)
  }

  const visibleTags = getVisibleTags()

  if (!isVisible) {
    return (
      <div className="flex justify-between items-center bg-muted/30 rounded-lg p-3 mb-4">
        <h2 className="text-lg font-semibold">Style Preferences</h2>
        <Button variant="ghost" size="sm" onClick={toggleVisibility}>
          <ChevronDown className="h-4 w-4 mr-1" />
          Show
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-muted/30 rounded-lg p-4 mb-6" ref={containerRef}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Style Preferences</h2>
        <Button variant="ghost" size="sm" onClick={toggleVisibility}>
          <X className="h-4 w-4 mr-1" />
          Hide
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mb-3">Click on tags to select your style preferences</p>

      <div className="flex flex-wrap gap-2 mb-2">
        {visibleTags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className={cn(
              "text-sm py-1 px-3 cursor-pointer transition-all",
              selectedTags.includes(tag) ? "bg-[#cdff3a]/70 hover:bg-[#cdff3a]/80" : "hover:bg-secondary/90",
            )}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground mt-1" onClick={toggleShowAll}>
        {showAll ? (
          <>
            <ChevronUp className="h-3 w-3 mr-1" /> Show Less
          </>
        ) : (
          <>
            <ChevronDown className="h-3 w-3 mr-1" /> Show More
          </>
        )}
      </Button>
    </div>
  )
}
