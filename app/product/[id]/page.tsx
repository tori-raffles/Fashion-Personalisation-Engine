"use client"

import { useState } from "react"
import Image from "next/image"
import { BookmarkIcon, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { formatBookmarkCount } from "@/lib/format-number"
import ProductCarousel from "@/components/product-carousel"
import { useCart } from "@/context/cart-context"
import { products } from "@/data/products" // We'll create this file next

export default function ProductPage({ params }: { params: { id: string } }) {
  // Find the product based on the ID
  const productId = params.id
  const product = products.find((p) => p.id === productId)

  // If product not found, show a message
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    )
  }

  const initialStyle = product.styles?.[0] || {
    id: "1",
    name: "Default",
    imageUrl: product.imageUrl,
  }

  const [selectedStyle, setSelectedStyle] = useState(initialStyle)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleBookmark = () => {
    console.log(`Bookmarked product ${product.id}`)
  }

  const handleStyleChange = (styleId: string) => {
    const style = product.styles?.find((s) => s.id === styleId)
    if (style) {
      setSelectedStyle(style)
    }
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        imageUrl: selectedStyle.imageUrl || product.imageUrl,
        price: product.price,
      })
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={selectedStyle.imageUrl || product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-cover w-full aspect-square"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full bg-white/80 backdrop-blur-sm flex items-center gap-1 px-3"
              onClick={handleBookmark}
            >
              <BookmarkIcon className="h-5 w-5" />
              <span>{formatBookmarkCount(product.bookmarks)}</span>
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <p className="text-lg font-medium text-muted-foreground">{product.brand}</p>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {product.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : i < product.rating
                      ? "fill-primary text-primary opacity-50"
                      : "fill-muted text-muted"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">{product.rating} out of 5</span>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          {product.styles && product.styles.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-medium">Color</h3>
              <RadioGroup
                defaultValue={selectedStyle.id}
                onValueChange={handleStyleChange}
                className="flex flex-wrap gap-3"
              >
                {product.styles.map((style) => (
                  <div key={style.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={style.id} id={`style-${style.id}`} className="peer sr-only" />
                    <Label
                      htmlFor={`style-${style.id}`}
                      className="flex items-center gap-2 rounded-md border-2 px-3 py-2 cursor-pointer peer-data-[state=checked]:border-primary"
                    >
                      {style.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>

          <Button
            className="w-full py-6 text-lg bg-[#cdff3a] text-[#313131] hover:bg-[#b8e535]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <div className="space-y-3">
            <h3 className="font-medium">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Available in Stores Section */}
      {product.stores && product.stores.length > 0 && (
        <div className="mb-12 bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Available in Stores</h2>
          <div className="space-y-4">
            {product.stores.map((store, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">{store.name}</h3>
                  <p className="text-sm text-muted-foreground">{store.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6 mt-12">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <ProductCarousel />
      </div>
    </div>
  )
}
