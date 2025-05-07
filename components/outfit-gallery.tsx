import OutfitCard from "@/components/outfit-card"

// Updated outfits data with consistent bookmark counts
const outfits = [
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

export default function OutfitGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {outfits.map((outfit) => (
        <OutfitCard
          key={outfit.id}
          id={outfit.id}
          name={outfit.name}
          imageUrl={outfit.imageUrl}
          bookmarks={outfit.bookmarks}
          tags={outfit.tags}
        />
      ))}
    </div>
  )
}
