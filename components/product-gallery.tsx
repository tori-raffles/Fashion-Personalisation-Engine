"use client"

import { useState } from "react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"

interface ProductGalleryProps {
  selectable?: boolean
  selectedProducts?: string[]
  onProductSelect?: (id: string) => void
  category?: string
  initialLimit?: number
}

export default function ProductGallery({
  selectable = false,
  selectedProducts = [],
  onProductSelect,
  category,
  initialLimit = 12,
}: ProductGalleryProps) {
  const [limit, setLimit] = useState(initialLimit)

  const filteredProducts = category
    ? products.filter((product) => product.name.toLowerCase().includes(category.toLowerCase()))
    : products

  const visibleProducts = filteredProducts.slice(0, limit)
  const hasMore = limit < filteredProducts.length

  const handleViewMore = () => {
    setLimit(limit + 12)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            rating={product.rating}
            bookmarks={product.bookmarks}
            brand={product.brand}
            selectable={selectable}
            selected={selectedProducts?.includes(product.id)}
            onSelect={onProductSelect}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button onClick={handleViewMore} className="bg-[#cdff3a] text-[#313131] hover:bg-[#b8e535] px-8">
            View More
          </Button>
        </div>
      )}
    </div>
  )
}
