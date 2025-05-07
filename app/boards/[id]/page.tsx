import { BookmarkIcon } from "lucide-react"
import OutfitGallery from "@/components/outfit-gallery"
import ProductGallery from "@/components/product-gallery"
import { getBoardById } from "@/data/boards"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BoardPage({ params }: { params: { id: string } }) {
  const boardId = params.id
  const board = getBoardById(boardId)

  // If board not found, show a message
  if (!board) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Board Not Found</h1>
        <p className="text-muted-foreground mb-6">The board you're looking for doesn't exist or has been removed.</p>
        <Link href="/boards">
          <Button>Go to Boards</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <BookmarkIcon className="h-6 w-6" />
        <h1 className="text-3xl font-bold">{board.name}</h1>
      </div>

      {board.description && <p className="text-muted-foreground">{board.description}</p>}

      {board.type === "outfits" ? <OutfitGallery /> : <ProductGallery />}
    </div>
  )
}
