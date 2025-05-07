import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductGallery from "@/components/product-gallery"

export default function PopularProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Popular Products</h1>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>
      <ProductGallery />
    </div>
  )
}
