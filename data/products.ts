export interface ProductStyle {
  id: string
  name: string
  imageUrl: string
}

export interface Store {
  name: string
  address: string
}

export interface Product {
  id: string
  name: string
  brand: string
  description?: string
  imageUrl: string
  price: number
  rating: number
  bookmarks: number
  tags?: string[]
  styles?: ProductStyle[]
  stores?: Store[]
}

// Centralized product data
export const products: Product[] = [
  {
    id: "1",
    name: "Essential White T-Shirt",
    brand: "TABOO",
    description:
      "A premium quality white t-shirt made from 100% organic cotton. Features a classic crew neck and short sleeves with a relaxed fit that's perfect for everyday wear. This versatile basic is a must-have for any wardrobe.",
    imageUrl: "/images/white-tshirt.png",
    price: 29.99,
    rating: 4,
    bookmarks: 87,
    tags: ["Basics", "Casual", "Minimalist", "Sustainable", "Everyday"],
    styles: [
      { id: "1", name: "White", imageUrl: "/images/white-tshirt.png" },
      { id: "2", name: "Black", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Gray", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "4", name: "Navy", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "TABOO Flagship Store", address: "123 Fashion Avenue, New York, NY 10001" },
      { name: "Urban Outfitters", address: "456 Style Street, Los Angeles, CA 90012" },
      { name: "Nordstrom", address: "789 Trend Boulevard, Chicago, IL 60611" },
    ],
  },
  {
    id: "2",
    name: "Classic White Button-Up Shirt",
    brand: "ElegantStyles",
    description:
      "A timeless white button-up shirt crafted from premium cotton. Features a classic collar, button-front closure, and long sleeves with button cuffs. The tailored fit creates a polished silhouette that's perfect for both formal and casual occasions.",
    imageUrl: "/images/white-shirt.png",
    price: 49.99,
    rating: 5,
    bookmarks: 124,
    tags: ["Formal", "Office", "Elegant", "Minimalist", "Versatile"],
    styles: [
      { id: "1", name: "White", imageUrl: "/images/white-shirt.png" },
      { id: "2", name: "Light Blue", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Pink", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "ElegantStyles Boutique", address: "234 Fashion District, New York, NY 10018" },
      { name: "Bloomingdale's", address: "567 Luxury Lane, Chicago, IL 60611" },
    ],
  },
  {
    id: "3",
    name: "Vintage Denim Overalls",
    brand: "DenimCo",
    description:
      "These vintage-inspired denim overalls feature a relaxed fit with adjustable straps and multiple pockets. Made from medium-weight denim with a slightly distressed finish for an authentic vintage look. Perfect for casual outings and weekend adventures.",
    imageUrl: "/images/denim-overalls.png",
    price: 79.99,
    rating: 4,
    bookmarks: 156,
    tags: ["Casual", "Denim", "Vintage", "Streetwear", "Weekend"],
    styles: [
      { id: "1", name: "Medium Wash", imageUrl: "/images/denim-overalls.png" },
      { id: "2", name: "Light Wash", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Black", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "DenimCo Store", address: "345 Vintage Avenue, Portland, OR 97205" },
      { name: "Urban Outfitters", address: "456 Style Street, Los Angeles, CA 90012" },
    ],
  },
  {
    id: "4",
    name: "Long Brown Knit Cardigan",
    brand: "BraveSoul",
    description:
      "This cozy long cardigan features a chunky knit texture, open front design, and relaxed silhouette. The warm brown color adds a touch of earthy elegance to any outfit. Perfect for layering during cooler months or as a light outer layer for transitional seasons.",
    imageUrl: "/images/brown-cardigan.png",
    price: 89.99,
    rating: 3,
    bookmarks: 142,
    tags: ["Cozy", "Casual", "Autumn", "Neutral", "Layering"],
    styles: [
      { id: "1", name: "Brown", imageUrl: "/images/brown-cardigan.png" },
      { id: "2", name: "Beige", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Gray", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "BraveSoul Flagship", address: "456 Cozy Corner, Boston, MA 02108" },
      { name: "Anthropologie", address: "789 Comfort Street, Seattle, WA 98101" },
    ],
  },
  {
    id: "5",
    name: "Black Cargo Midi Skirt with Chain Detail",
    brand: "UrbanEdge",
    description:
      "This edgy black cargo midi skirt features multiple utility pockets, a high waist with belt loops, and a statement chain detail. The durable cotton blend fabric offers both style and functionality. Perfect for creating bold, urban-inspired looks.",
    imageUrl: "/images/black-skirt.png",
    price: 59.99,
    rating: 5,
    bookmarks: 198,
    tags: ["Edgy", "Urban", "Streetwear", "Grunge", "Statement"],
    styles: [
      { id: "1", name: "Black", imageUrl: "/images/black-skirt.png" },
      { id: "2", name: "Olive", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "UrbanEdge Store", address: "567 Edgy Street, Brooklyn, NY 11201" },
      { name: "ASOS Studio", address: "890 Fashion Forward Ave, Los Angeles, CA 90012" },
    ],
  },
  {
    id: "6",
    name: "Classic Black Wool Coat",
    brand: "MinimalChic",
    description:
      "This timeless black wool coat features a clean silhouette with notched lapels, a double-breasted front, and a mid-length cut. The premium wool blend provides warmth without bulk, while the full lining ensures comfort. A versatile investment piece for your cold-weather wardrobe.",
    imageUrl: "/images/black-coat.png",
    price: 119.99,
    rating: 4,
    bookmarks: 176,
    tags: ["Formal", "Minimalist", "Elegant", "Winter", "Investment"],
    styles: [
      { id: "1", name: "Black", imageUrl: "/images/black-coat.png" },
      { id: "2", name: "Camel", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Gray", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "MinimalChic Boutique", address: "678 Elegant Avenue, Chicago, IL 60611" },
      { name: "Nordstrom", address: "789 Trend Boulevard, Chicago, IL 60611" },
      { name: "Saks Fifth Avenue", address: "901 Luxury Lane, New York, NY 10022" },
    ],
  },
  {
    id: "7",
    name: "Vintage Denim Shorts",
    brand: "NiliLotan",
    description:
      "These vintage-inspired denim shorts feature a high-rise waist, relaxed fit through the hip, and raw-edge hem. The medium wash denim has light distressing for an authentic lived-in look. Perfect for casual summer days and festival season.",
    imageUrl: "/images/denim-shorts.png",
    price: 69.99,
    rating: 4,
    bookmarks: 92,
    tags: ["Casual", "Denim", "Summer", "Streetwear", "Festival"],
    styles: [
      { id: "1", name: "Medium Wash", imageUrl: "/images/denim-shorts.png" },
      { id: "2", name: "Light Wash", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Black", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "NiliLotan Store", address: "789 Summer Street, Miami, FL 33139" },
      { name: "Urban Outfitters", address: "456 Style Street, Los Angeles, CA 90012" },
    ],
  },
  {
    id: "8",
    name: "Black Leather Belt with Gold Buckle",
    brand: "AccessoryLab",
    description:
      "This premium black leather belt features a sleek gold-tone buckle for a touch of elegance. The high-quality genuine leather construction ensures durability, while the classic design makes it a versatile addition to any wardrobe. Suitable for both casual and formal outfits.",
    imageUrl: "/images/black-belt.png",
    price: 39.99,
    rating: 5,
    bookmarks: 64,
    tags: ["Accessories", "Formal", "Casual", "Versatile", "Minimalist"],
    styles: [
      { id: "1", name: "Black/Gold", imageUrl: "/images/black-belt.png" },
      { id: "2", name: "Brown/Gold", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Black/Silver", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "AccessoryLab", address: "890 Fashion District, New York, NY 10018" },
      { name: "Nordstrom", address: "789 Trend Boulevard, Chicago, IL 60611" },
    ],
  },
  {
    id: "9",
    name: "Starry Night Velvet Dress",
    brand: "CelestialFashion",
    description:
      "This enchanting emerald green velvet dress features a celestial star pattern and sheer organza sleeves. The high neckline with bow detail adds a romantic touch, while the fit-and-flare silhouette creates a flattering shape. Perfect for special occasions and holiday parties.",
    imageUrl: "/images/green-velvet-dress.png",
    price: 129.99,
    rating: 5,
    bookmarks: 312,
    tags: ["Elegant", "Party", "Statement", "Velvet", "Holiday"],
    styles: [
      { id: "1", name: "Emerald", imageUrl: "/images/green-velvet-dress.png" },
      { id: "2", name: "Burgundy", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Navy", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "CelestialFashion Boutique", address: "234 Starlight Road, Miami, FL 33101" },
      { name: "Bloomingdale's", address: "567 Luxury Lane, New York, NY 10022" },
      { name: "Saks Fifth Avenue", address: "890 High-End Street, San Francisco, CA 94108" },
    ],
  },
  {
    id: "10",
    name: "Contrast Plaid Sleeve Mini Dress",
    brand: "AvantGarde",
    description:
      "This edgy mini dress features a unique design with solid black body and contrasting plaid sleeves. The oversized collar and button details add a preppy touch to the grunge-inspired silhouette. A versatile statement piece that can be dressed up or down for various occasions.",
    imageUrl: "/images/black-plaid-dress.png",
    price: 89.99,
    rating: 4,
    bookmarks: 178,
    tags: ["Edgy", "Preppy", "Grunge", "Statement", "Versatile"],
    styles: [
      { id: "1", name: "Black/Red Plaid", imageUrl: "/images/black-plaid-dress.png" },
      { id: "2", name: "Black/Green Plaid", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "AvantGarde Flagship", address: "345 Alternative Avenue, Seattle, WA 98101" },
      { name: "Urban Outfitters", address: "456 Style Street, Los Angeles, CA 90012" },
    ],
  },
  {
    id: "11",
    name: "Sun Goddess Two-Piece Set",
    brand: "BohoChic",
    description:
      "This bohemian two-piece set features a bandeau top and high-waisted shorts in a vibrant sun-motif print. The warm terracotta base with golden sun faces creates a statement look perfect for festivals, beach days, or summer outings. Made from lightweight cotton blend fabric for comfort in warm weather.",
    imageUrl: "/images/sun-print-set.png",
    price: 75.99,
    rating: 5,
    bookmarks: 245,
    tags: ["Boho", "Festival", "Summer", "Matching Set", "Statement"],
    styles: [
      { id: "1", name: "Terracotta", imageUrl: "/images/sun-print-set.png" },
      { id: "2", name: "Blue", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "BohoChic Store", address: "456 Festival Street, Austin, TX 78701" },
      { name: "Free People", address: "789 Bohemian Boulevard, Portland, OR 97205" },
      { name: "Urban Outfitters", address: "123 Indie Avenue, Nashville, TN 37203" },
    ],
  },
  {
    id: "12",
    name: "Ribbon Detail Off-Shoulder Knit Dress",
    brand: "DarkRomance",
    description:
      "This elegant black knit dress features an off-shoulder neckline with delicate ribbon details. The fitted silhouette and midi length create a sophisticated look, while the soft knit fabric ensures comfort. Perfect for evening events or romantic dinner dates.",
    imageUrl: "/images/black-knit-dress.png",
    price: 69.99,
    rating: 4,
    bookmarks: 156,
    tags: ["Romantic", "Elegant", "Cozy", "Winter", "Evening"],
    styles: [
      { id: "1", name: "Black", imageUrl: "/images/black-knit-dress.png" },
      { id: "2", name: "Burgundy", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Cream", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "DarkRomance Boutique", address: "567 Elegant Street, Chicago, IL 60611" },
      { name: "Nordstrom", address: "789 Trend Boulevard, Chicago, IL 60611" },
    ],
  },
  {
    id: "13",
    name: "Pink Acid Wash Denim Pinafore",
    brand: "RetroVibes",
    description:
      "This playful pink acid wash denim pinafore features adjustable straps, a square neckline, and a relaxed A-line silhouette. The unique color and wash create a bold Y2K-inspired look that stands out from traditional denim. Perfect for creating nostalgic yet trendy outfits.",
    imageUrl: "/images/pink-denim-dress.png",
    price: 79.99,
    rating: 4,
    bookmarks: 189,
    tags: ["Y2K", "Denim", "Casual", "Streetwear", "Statement"],
    styles: [
      { id: "1", name: "Pink", imageUrl: "/images/pink-denim-dress.png" },
      { id: "2", name: "Blue", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "RetroVibes Store", address: "678 Throwback Lane, Los Angeles, CA 90012" },
      { name: "Urban Outfitters", address: "456 Style Street, Los Angeles, CA 90012" },
    ],
  },
  {
    id: "14",
    name: "Ethereal Blue Ruffle Maxi Dress",
    brand: "DreamyWear",
    description:
      "This dreamy light blue maxi dress features delicate ruffle details, a flattering sweetheart neckline, and adjustable spaghetti straps. The flowing silhouette with side slit creates an ethereal look, while the floral embellishments add a romantic touch. Perfect for garden parties, weddings, or summer events.",
    imageUrl: "/images/blue-ruffle-dress.png",
    price: 149.99,
    rating: 5,
    bookmarks: 267,
    tags: ["Romantic", "Maxi", "Summer", "Occasion", "Ruffle"],
    styles: [
      { id: "1", name: "Sky Blue", imageUrl: "/images/blue-ruffle-dress.png" },
      { id: "2", name: "Blush Pink", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Ivory", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "DreamyWear Flagship", address: "345 Romance Avenue, Boston, MA 02108" },
      { name: "Anthropologie", address: "678 Whimsical Way, Seattle, WA 98101" },
      { name: "Neiman Marcus", address: "901 Elegant Boulevard, Dallas, TX 75201" },
    ],
  },
  {
    id: "15",
    name: "Pink Bow Embellished Crop Top",
    brand: "SweetCouture",
    description:
      "This charming crop top features a delicate bow embellishment at the center, a square neckline, and short puff sleeves. The soft white fabric with subtle pink details creates a sweet, feminine look. Perfect for pairing with high-waisted bottoms for a balanced silhouette.",
    imageUrl: "/images/white-bow-top.png",
    price: 59.99,
    rating: 4,
    bookmarks: 132,
    tags: ["Romantic", "Feminine", "Casual", "Summer", "Crop"],
    styles: [
      { id: "1", name: "White/Pink", imageUrl: "/images/white-bow-top.png" },
      { id: "2", name: "Black/Red", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Blue/White", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "SweetCouture Boutique", address: "789 Feminine Avenue, Miami, FL 33139" },
      { name: "Anthropologie", address: "678 Whimsical Way, Seattle, WA 98101" },
    ],
  },
  {
    id: "16",
    name: "Vintage Floral Slip Dress",
    brand: "ElegantEra",
    description:
      "This romantic slip dress features a vintage-inspired yellow floral print, delicate spaghetti straps, and a flowing midi length. The lightweight fabric drapes beautifully for an effortless, feminine silhouette. Perfect for summer events, vacation outings, or styled with layers for transitional seasons.",
    imageUrl: "/images/yellow-floral-dress.png",
    price: 119.99,
    rating: 5,
    bookmarks: 223,
    tags: ["Vintage", "Romantic", "Summer", "Boho", "Floral"],
    styles: [
      { id: "1", name: "Yellow Floral", imageUrl: "/images/yellow-floral-dress.png" },
      { id: "2", name: "Blue Floral", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Pink Floral", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "ElegantEra Boutique", address: "890 Vintage Lane, Portland, OR 97205" },
      { name: "Anthropologie", address: "678 Whimsical Way, Seattle, WA 98101" },
      { name: "Free People", address: "789 Bohemian Boulevard, Portland, OR 97205" },
    ],
  },
  {
    id: "17",
    name: "Luxe Leather Trench Coat",
    brand: "UrbanNoir",
    description:
      "This statement leather trench coat features a classic silhouette with a modern twist. Made from premium faux leather with a glossy finish, it includes a belted waist, notched lapels, and a flared hem. The perfect investment piece to elevate any outfit with an edge of sophistication.",
    imageUrl: "/images/black-leather-trench.png",
    price: 249.99,
    rating: 5,
    bookmarks: 278,
    tags: ["Leather", "Statement", "Outerwear", "Luxury", "Edgy"],
    styles: [
      { id: "1", name: "Black", imageUrl: "/images/black-leather-trench.png" },
      { id: "2", name: "Brown", imageUrl: "/placeholder.svg?height=600&width=500" },
      { id: "3", name: "Burgundy", imageUrl: "/placeholder.svg?height=600&width=500" },
    ],
    stores: [
      { name: "UrbanNoir Flagship", address: "567 Edge Street, New York, NY 10012" },
      { name: "Nordstrom", address: "890 Fashion Avenue, Chicago, IL 60611" },
      { name: "Bloomingdale's", address: "123 Luxury Lane, Los Angeles, CA 90048" },
    ],
  },
]
