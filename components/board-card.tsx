import Link from "next/link"
import Image from "next/image"

interface BoardCardProps {
  id: string
  name: string
  images: string[]
  count: number
  type: "outfits" | "products"
}
 
export default function BoardCard({ id, name, images, count, type }: BoardCardProps) {
  return (
    <Link href={`/boards/${id}`} className="block group">
      <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
        <div className="grid grid-cols-2 gap-1 p-1">
          {images.slice(0, 4).map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${name} image ${index + 1}`}
              width={150}
              height={150}
              className="aspect-square object-cover"
            />
          ))}
        </div>
        <div className="p-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {count} {type}
          </p>
        </div>
      </div>
    </Link>
  )
}
