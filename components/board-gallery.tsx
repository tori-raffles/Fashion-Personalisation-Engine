import BoardCard from "@/components/board-card"
import { outfitBoards, productBoards } from "@/data/boards"

interface BoardGalleryProps {
  type: "outfits" | "products"
}

export default function BoardGallery({ type }: BoardGalleryProps) {
  const boards = type === "outfits" ? outfitBoards : productBoards

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          id={board.id}
          name={board.name}
          images={board.images}
          count={board.count}
          type={type}
        />
      ))}
    </div>
  )
}
