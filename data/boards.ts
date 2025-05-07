export interface BoardImage {
  url: string
  alt?: string
}

export interface Board {
  id: string
  name: string
  images: string[]
  count: number
  type: "outfits" | "products"
  description?: string
}

// Outfit boards data
export const outfitBoards: Board[] = [
  {
    id: "outfit-1",
    name: "Evening Clothes",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae7509020527bec51294a1a1d40035ba.jpg-amqHqJJXH8nN4VHfdd0jZIqZXpXsoR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0f9438fddb7e0f44dcb04c4a5ca8270.jpg-oa1V7XWcVGE9jdqxxaDiV4lPVzJFsT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4a34094ae61ff2dfb2c45e9ed1e4ea0.jpg-h0c3nrle2xWdh9sjnOIBeadzdwpgb1.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79e25c24291dfda9915dba2edf8a7377.jpg-CQEKoVUBhVeXenZyWjwyazfrfoSaIz.jpeg",
    ],
    count: 150,
    type: "outfits",
    description:
      "A collection of elegant evening outfits perfect for formal events, dinner parties, and special occasions.",
  },
  {
    id: "outfit-2",
    name: "Daily",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Street%20Fashion%20Women%E2%80%99s%20Style%20in%20Seoul%20October%202020.jpg-UXEORdhfAxSy2teXotQdLiCgYNQnnG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f1a78d54e69e64e3392977354ca8414.jpg-6JuAKxVWHxsRYJmXekewRpffP2s9AC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fda37bcc3f623c6826c7c5c5e645feaa.jpg-eOfitx1MdyW2N7mx8toldEozY0AUHF.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loungewear-Looks-sweater.jpg-OQiPMo9mFpogX7YGHi22tg0IdelxHn.jpeg",
    ],
    count: 87,
    type: "outfits",
    description: "Everyday casual outfits that are comfortable yet stylish for work, errands, and casual outings.",
  },
  {
    id: "outfit-3",
    name: "Favorites",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Street%20Fashion%20Women%E2%80%99s%20Style%20in%20Seoul%20October%202020.jpg-UXEORdhfAxSy2teXotQdLiCgYNQnnG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae7509020527bec51294a1a1d40035ba.jpg-amqHqJJXH8nN4VHfdd0jZIqZXpXsoR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0f9438fddb7e0f44dcb04c4a5ca8270.jpg-oa1V7XWcVGE9jdqxxaDiV4lPVzJFsT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79e25c24291dfda9915dba2edf8a7377.jpg-CQEKoVUBhVeXenZyWjwyazfrfoSaIz.jpeg",
    ],
    count: 42,
    type: "outfits",
    description: "My all-time favorite outfit inspirations saved for future reference and shopping ideas.",
  },
  {
    id: "outfit-4",
    name: "Beach",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79e25c24291dfda9915dba2edf8a7377.jpg-CQEKoVUBhVeXenZyWjwyazfrfoSaIz.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fda37bcc3f623c6826c7c5c5e645feaa.jpg-eOfitx1MdyW2N7mx8toldEozY0AUHF.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f1a78d54e69e64e3392977354ca8414.jpg-6JuAKxVWHxsRYJmXekewRpffP2s9AC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loungewear-Looks-sweater.jpg-OQiPMo9mFpogX7YGHi22tg0IdelxHn.jpeg",
    ],
    count: 23,
    type: "outfits",
    description: "Vacation-ready beach outfits and resort wear for summer getaways and tropical destinations.",
  },
]

// Product boards data
export const productBoards: Board[] = [
  {
    id: "product-1",
    name: "Tops Collection",
    images: [
      "/images/white-tshirt.png",
      "/images/white-shirt.png",
      "/images/white-bow-top.png",
      "/images/black-leather-trench.png",
    ],
    count: 78,
    type: "products",
    description: "A curated collection of versatile tops for every occasion, from casual t-shirts to elegant blouses.",
  },
  {
    id: "product-2",
    name: "Winter Essentials",
    images: [
      "/images/black-coat.png",
      "/images/brown-cardigan.png",
      "/images/black-leather-trench.png",
      "/images/black-knit-dress.png",
    ],
    count: 45,
    type: "products",
    description: "Must-have pieces for the cold season, including coats, sweaters, and warm accessories.",
  },
  {
    id: "product-3",
    name: "Wish List",
    images: [
      "/images/green-velvet-dress.png",
      "/images/blue-ruffle-dress.png",
      "/images/yellow-floral-dress.png",
      "/images/sun-print-set.png",
    ],
    count: 112,
    type: "products",
    description: "Products I'm planning to purchase in the future, including statement pieces and seasonal must-haves.",
  },
  {
    id: "product-4",
    name: "Summer Styles",
    images: [
      "/images/sun-print-set.png",
      "/images/pink-denim-dress.png",
      "/images/denim-shorts.png",
      "/images/blue-ruffle-dress.png",
    ],
    count: 67,
    type: "products",
    description: "Light and breezy pieces perfect for hot weather, beach days, and summer festivals.",
  },
]

// Helper function to get all boards
export const getAllBoards = (): Board[] => {
  return [...outfitBoards, ...productBoards]
}

// Helper function to get a board by ID
export const getBoardById = (id: string): Board | undefined => {
  return getAllBoards().find((board) => board.id === id)
}
