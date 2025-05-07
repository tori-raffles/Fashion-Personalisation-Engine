"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useDrag } from "react-use-gesture"
import { X, ZoomIn, ZoomOut, RotateCw, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DraggableItemProps {
  id: string
  position: { x: number; y: number }
  scale: number
  rotation: number
  onDrag: (id: string, position: { x: number; y: number }) => void
  onRemove: (id: string) => void
  onScale: (id: string, scale: number) => void
  onRotate: (id: string, rotation: number) => void
  imageUrl: string
  name: string
  isSelected: boolean
  onSelect: (id: string) => void
}

function DraggableItem({
  id,
  position,
  scale,
  rotation,
  onDrag,
  onRemove,
  onScale,
  onRotate,
  imageUrl,
  name,
  isSelected,
  onSelect,
}: DraggableItemProps) {
  const bind = useDrag(({ offset: [x, y] }) => {
    onDrag(id, { x, y })
  })

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    onScale(id, scale + 0.1)
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    onScale(id, Math.max(0.5, scale - 0.1))
  }

  const handleRotateClockwise = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRotate(id, rotation + 15)
  }

  const handleRotateCounterClockwise = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRotate(id, rotation - 15)
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove(id)
  }

  return (
    <div
      {...bind()}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transformOrigin: "center center",
        touchAction: "none",
        cursor: "move",
        zIndex: isSelected ? 20 : 10,
      }}
      onClick={() => onSelect(id)}
      className={cn("transition-shadow", isSelected && "shadow-lg")}
    >
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={150}
          height={150}
          className={cn("rounded-md border shadow-md object-cover", isSelected && "ring-2 ring-[#cdff3a]")}
        />

        {isSelected && (
          <div className="absolute -top-10 left-0 right-0 flex justify-center gap-1">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={handleZoomIn}
            >
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom in</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={handleZoomOut}
            >
              <ZoomOut className="h-4 w-4" />
              <span className="sr-only">Zoom out</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={handleRotateClockwise}
            >
              <RotateCw className="h-4 w-4" />
              <span className="sr-only">Rotate clockwise</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={handleRotateCounterClockwise}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Rotate counter-clockwise</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

interface DraggableCanvasProps {
  selectedProducts: string[]
  productsData: Array<{ id: string; name: string; imageUrl: string }>
}

export default function DraggableCanvas({ selectedProducts, productsData }: DraggableCanvasProps) {
  const [items, setItems] = useState<
    Array<{
      id: string
      position: { x: number; y: number }
      scale: number
      rotation: number
      imageUrl: string
      name: string
    }>
  >([])
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize positions for new products
    const newItems = selectedProducts
      .filter((id) => !items.some((item) => item.id === id))
      .map((id, index) => {
        const product = productsData.find((p) => p.id === id)
        return {
          id,
          position: {
            x: 50 + (index % 3) * 100,
            y: 50 + Math.floor(index / 3) * 100,
          },
          scale: 1,
          rotation: 0,
          imageUrl: product?.imageUrl || "/placeholder.svg?height=150&width=150",
          name: product?.name || `Product ${id}`,
        }
      })

    // Keep only selected products
    const currentItems = items.filter((item) => selectedProducts.includes(item.id))

    setItems([...currentItems, ...newItems])
  }, [selectedProducts, productsData])

  const handleDrag = (id: string, position: { x: number; y: number }) => {
    setItems(items.map((item) => (item.id === id ? { ...item, position } : item)))
  }

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
    if (selectedItemId === id) {
      setSelectedItemId(null)
    }
  }

  const handleScale = (id: string, scale: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, scale } : item)))
  }

  const handleRotate = (id: string, rotation: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, rotation } : item)))
  }

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id)
  }

  const handleCanvasClick = () => {
    setSelectedItemId(null)
  }

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-[600px] border rounded-lg bg-gray-50 overflow-hidden"
      onClick={handleCanvasClick}
    >
      {items.length === 0 && (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Select products to add to your canvas
        </div>
      )}

      {items.map((item) => (
        <DraggableItem
          key={item.id}
          id={item.id}
          position={item.position}
          scale={item.scale}
          rotation={item.rotation}
          onDrag={handleDrag}
          onRemove={handleRemove}
          onScale={handleScale}
          onRotate={handleRotate}
          imageUrl={item.imageUrl}
          name={item.name}
          isSelected={selectedItemId === item.id}
          onSelect={handleSelectItem}
        />
      ))}
    </div>
  )
}
