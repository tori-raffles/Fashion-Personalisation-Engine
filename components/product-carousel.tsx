"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

// Product database with all products
const allProducts = [
  {
    id: "1",
    name: "Essential White T-Shirt",
    brand: "TABOO",
    imageUrl: "/images/white-tshirt.png",
    price: 29.99,
    rating: 4,
    bookmarks: 87,
    tags: ["Basics", "Casual", "Minimalist"],
  },
  {
    id: "2",
    name: "Classic White Button-Up Shirt",
    brand: "ElegantStyles",
    imageUrl: "/images/white-shirt.png",
    price: 49.99,
    rating: 5,
    bookmarks: 124,
    tags: ["Formal", "Office", "Elegant", "Minimalist"],
  },
  {
    id: "3",
    name: "Vintage Denim Overalls",
    brand: "DenimCo",
    imageUrl: "/images/denim-overalls.png",
    price: 79.99,
    rating: 4,
    bookmarks: 156,
    tags: ["Casual", "Denim", "Vintage", "Streetwear"],
  },
  {
    id: "4",
    name: "Long Brown Knit Cardigan",
    brand: "BraveSoul",
    imageUrl: "/images/brown-cardigan.png",
    price: 89.99,
    rating: 3,
    bookmarks: 142,
    tags: ["Cozy", "Casual", "Autumn", "Neutral"],
  },
  {
    id: "5",
    name: "Black Cargo Midi Skirt with Chain Detail",
    brand: "UrbanEdge",
    imageUrl: "/images/black-skirt.png",
    price: 59.99,
    rating: 5,
    bookmarks: 198,
    tags: ["Edgy", "Urban", "Streetwear", "Grunge"],
  },
  {
    id: "6",
    name: "Classic Black Wool Coat",
    brand: "MinimalChic",
    imageUrl: "/images/black-coat.png",
    price: 119.99,
    rating: 4,
    bookmarks: 176,
    tags: ["Formal", "Minimalist", "Elegant", "Winter"],
  },
  {
    id: "7",
    name: "Vintage Denim Shorts",
    brand: "NiliLotan",
    imageUrl: "/images/denim-shorts.png",
    price: 69.99,
    rating: 4,
    bookmarks: 92,
    tags: ["Casual", "Denim", "Summer", "Streetwear"],
  },
  {
    id: "8",
    name: "Black Leather Belt with Gold Buckle",
    brand: "AccessoryLab",
    imageUrl: "/images/black-belt.png",
    price: 39.99,
    rating: 5,
    bookmarks: 64,
    tags: ["Accessories", "Formal", "Casual", "Versatile"],
  },
  {
    id: "9",
    name: "Starry Night Velvet Dress",
    brand: "CelestialFashion",
    imageUrl: "/images/green-velvet-dress.png",
    price: 129.99,
    rating: 5,
    bookmarks: 312,
    tags: ["Elegant", "Party", "Statement", "Velvet"],
  },
  {
    id: "10",
    name: "Contrast Plaid Sleeve Mini Dress",
    brand: "AvantGarde",
    imageUrl: "/images/black-plaid-dress.png",
    price: 89.99,
    rating: 4,
    bookmarks: 178,
    tags: ["Edgy", "Preppy", "Grunge", "Statement"],
  },
  {
    id: "11",
    name: "Sun Goddess Two-Piece Set",
    brand: "BohoChic",
    imageUrl: "/images/sun-print-set.png",
    price: 75.99,
    rating: 5,
    bookmarks: 245,
    tags: ["Boho", "Summer", "Festival", "Statement"],
  },
  {
    id: "12",
    name: "Ribbon Detail Off-Shoulder Knit Dress",
    brand: "DarkRomance",
    imageUrl: "/images/black-knit-dress.png",
    price: 69.99,
    rating: 4,
    bookmarks: 156,
    tags: ["Romantic", "Elegant", "Cozy", "Winter"],
  },
  {
    id: "13",
    name: "Pink Acid Wash Denim Pinafore",
    brand: "RetroVibes",
    imageUrl: "/images/pink-denim-dress.png",
    price: 79.99,
    rating: 4,
    bookmarks: 189,
    tags: ["Y2K", "Denim", "Casual", "Streetwear"],
  },
  {
    id: "14",
    name: "Ethereal Blue Ruffle Maxi Dress",
    brand: "DreamyWear",
    imageUrl: "/images/blue-ruffle-dress.png",
    price: 149.99,
    rating: 5,
    bookmarks: 267,
    tags: ["Romantic", "Elegant", "Summer", "Occasion"],
  },
  {
    id: "15",
    name: "Pink Bow Embellished Crop Top",
    brand: "SweetCouture",
    imageUrl: "/images/white-bow-top.png",
    price: 59.99,
    rating: 4,
    bookmarks: 132,
    tags: ["Romantic", "Feminine", "Casual", "Summer"],
  },
  {
    id: "16",
    name: "Vintage Floral Slip Dress",
    brand: "ElegantEra",
    imageUrl: "/images/yellow-floral-dress.png",
    price: 119.99,
    rating: 5,
    bookmarks: 223,
    tags: ["Vintage", "Romantic", "Summer", "Boho"],
  },
  {
    id: "17",
    name: "Luxe Leather Trench Coat",
    brand: "UrbanNoir",
    imageUrl: "/images/black-leather-trench.png",
    price: 249.99,
    rating: 5,
    bookmarks: 278,
    tags: ["Edgy", "Statement", "Luxury", "Urban"],
  },
]

// Outfit-specific product recommendations
const outfitProductMap: Record<string, string[]> = {
  // Academic Chic (Preppy, Academic, Vintage, Korean, Autumn)
  "1": ["2", "4", "6", "8", "12"],

  // Y2K Denim Revival (Casual, Denim, Streetwear, Y2K, Sporty)
  "2": ["1", "3", "7", "13", "15"],

  // Minimalist Office Elegance (Elegant, Formal, Minimalist, Office, Chic)
  "3": ["2", "6", "8", "9", "17"],

  // Cozy Loungewear Ensemble (Cozy, Loungewear, Neutral, Casual, Minimalist)
  "4": ["1", "4", "12", "15", "16"],

  // Urban Night Out (Edgy, Streetwear, Urban, Grunge, Night Out)
  "5": ["5", "10", "13", "17", "9"],

  // Korean Minimalism (Minimalist, Monochrome, Urban, Casual, Korean)
  "6": ["1", "2", "6", "8", "17"],

  // Summer Denim Casual (Casual, Denim, Summer, Streetwear, Urban)
  "7": ["1", "3", "7", "13", "15"],

  // Bohemian Beach Romance (Boho, Summer, Romantic, Vacation, Beach)
  "8": ["11", "14", "15", "16", "7"],
}

interface ProductCarouselProps {
  outfitId?: string
}

export default function ProductCarousel({ outfitId }: ProductCarouselProps) {
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

  // Get products based on outfit ID or show default products
  const getProductsToShow = () => {
    if (outfitId && outfitProductMap[outfitId]) {
      // Get the product IDs for this outfit
      const productIds = outfitProductMap[outfitId]
      // Return the products that match these IDs
      return productIds.map((id) => allProducts.find((p) => p.id === id)).filter(Boolean)
    }

    // Default products if no outfit ID is provided or no mapping exists
    return allProducts.slice(0, 6)
  }

  const productsToShow = getProductsToShow()

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {productsToShow.map((product) => (
          <div key={product.id} className="min-w-[280px] snap-start">
            <ProductCard
              id={product.id}
              name={product.name}
              brand={product.brand}
              imageUrl={product.imageUrl}
              price={product.price}
              rating={product.rating}
              bookmarks={product.bookmarks}
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
