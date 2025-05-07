"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DraggableCanvas from "@/components/draggable-canvas"
import SimpleProductCard from "@/components/simple-product-card"

// Updated products data with correct image paths
const products = [
  { id: "1", name: "Essential White T-Shirt", imageUrl: "/images/white-tshirt.png" },
  { id: "2", name: "Classic White Button-Up Shirt", imageUrl: "/images/white-shirt.png" },
  { id: "3", name: "Vintage Denim Overalls", imageUrl: "/images/denim-overalls.png" },
  { id: "4", name: "Long Brown Knit Cardigan", imageUrl: "/images/brown-cardigan.png" },
  { id: "5", name: "Black Cargo Midi Skirt", imageUrl: "/images/black-skirt.png" },
  { id: "6", name: "Classic Black Wool Coat", imageUrl: "/images/black-coat.png" },
  { id: "7", name: "Vintage Denim Shorts", imageUrl: "/images/denim-shorts.png" },
  { id: "8", name: "Black Leather Belt", imageUrl: "/images/black-belt.png" },
  { id: "9", name: "Starry Night Velvet Dress", imageUrl: "/images/green-velvet-dress.png" },
  { id: "10", name: "Contrast Plaid Sleeve Mini Dress", imageUrl: "/images/black-plaid-dress.png" },
  { id: "11", name: "Sun Goddess Two-Piece Set", imageUrl: "/images/sun-print-set.png" },
  { id: "12", name: "Ribbon Detail Knit Dress", imageUrl: "/images/black-knit-dress.png" },
]

export default function CompleteTheLookPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const handleProductSelect = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    } else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  const handleClearAll = () => {
    setSelectedProducts([])
  }

  const handleSaveLook = () => {
    console.log("Saving look with products:", selectedProducts)
    // Implementation for saving the look would go here
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Complete the Look</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-xl font-semibold">Your Bookmarked Products</h2>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tops">Tops</TabsTrigger>
              <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
              <TabsTrigger value="dresses">Dresses</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="h-[500px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {products.map((product) => (
                  <SimpleProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    selected={selectedProducts.includes(product.id)}
                    onSelect={handleProductSelect}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tops" className="h-[500px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {products
                  .filter(
                    (product) =>
                      product.name.toLowerCase().includes("shirt") ||
                      product.name.toLowerCase().includes("top") ||
                      product.name.toLowerCase().includes("cardigan") ||
                      product.name.toLowerCase().includes("t-shirt"),
                  )
                  .map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      selected={selectedProducts.includes(product.id)}
                      onSelect={handleProductSelect}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="bottoms" className="h-[500px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {products
                  .filter(
                    (product) =>
                      product.name.toLowerCase().includes("skirt") ||
                      product.name.toLowerCase().includes("shorts") ||
                      product.name.toLowerCase().includes("overalls"),
                  )
                  .map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      selected={selectedProducts.includes(product.id)}
                      onSelect={handleProductSelect}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="dresses" className="h-[500px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {products
                  .filter((product) => product.name.toLowerCase().includes("dress"))
                  .map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      selected={selectedProducts.includes(product.id)}
                      onSelect={handleProductSelect}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="h-[500px] overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-3">
                {products
                  .filter((product) => product.name.toLowerCase().includes("belt"))
                  .map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      selected={selectedProducts.includes(product.id)}
                      onSelect={handleProductSelect}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-2 flex flex-col h-[600px]">
          <h2 className="text-xl font-semibold mb-4">Your Canvas</h2>
          <div className="flex-grow">
            <DraggableCanvas selectedProducts={selectedProducts} productsData={products} />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={handleClearAll}>
              Clear All
            </Button>
            <Button className="bg-[#cdff3a] text-black hover:bg-[#b8e535]" onClick={handleSaveLook}>
              Save Look
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
