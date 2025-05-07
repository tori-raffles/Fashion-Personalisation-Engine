"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TagListProps {
  tags: string[]
  variant?: "default" | "light"
  maxTags?: number
}

export default function TagList({ tags, variant = "default", maxTags }: TagListProps) {
  const [visibleTags, setVisibleTags] = useState<string[]>(tags)
  const [showEllipsis, setShowEllipsis] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // If maxTags is provided, use that directly
    if (maxTags) {
      if (tags.length > maxTags) {
        setVisibleTags(tags.slice(0, maxTags))
        setShowEllipsis(true)
      } else {
        setVisibleTags(tags)
        setShowEllipsis(false)
      }
      return
    }

    // Otherwise, calculate how many tags can fit in a single row
    const calculateVisibleTags = () => {
      const container = containerRef.current
      if (!container) return

      // Reset to show all tags first to measure
      setVisibleTags(tags)
      setShowEllipsis(false)

      // Wait for render
      setTimeout(() => {
        if (!container) return

        const containerWidth = container.offsetWidth
        const tagElements = Array.from(container.children) as HTMLElement[]

        let totalWidth = 0
        let visibleCount = 0

        for (let i = 0; i < tagElements.length; i++) {
          const tagWidth = tagElements[i].offsetWidth + 8 // 8px for gap

          if (totalWidth + tagWidth > containerWidth) {
            break
          }

          totalWidth += tagWidth
          visibleCount++
        }

        // Check if we need to reserve space for ellipsis
        if (visibleCount < tags.length) {
          // Try to fit one less tag to make room for ellipsis
          const ellipsisWidth = 40 // Approximate width of ellipsis badge

          while (visibleCount > 0 && totalWidth + ellipsisWidth > containerWidth) {
            totalWidth -= tagElements[visibleCount - 1].offsetWidth + 8
            visibleCount--
          }

          setVisibleTags(tags.slice(0, visibleCount))
          setShowEllipsis(true)
        } else {
          setVisibleTags(tags)
          setShowEllipsis(false)
        }
      }, 0)
    }

    calculateVisibleTags()
    window.addEventListener("resize", calculateVisibleTags)

    return () => {
      window.removeEventListener("resize", calculateVisibleTags)
    }
  }, [tags, maxTags])

  return (
    <div ref={containerRef} className="flex flex-nowrap overflow-hidden gap-2">
      {visibleTags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className={cn(
            "rounded-full whitespace-nowrap",
            variant === "light" && "bg-white/20 text-white border-transparent",
          )}
        >
          {tag}
        </Badge>
      ))}
      {showEllipsis && (
        <Badge
          variant="outline"
          className={cn(
            "rounded-full whitespace-nowrap",
            variant === "light" && "bg-white/20 text-white border-transparent",
          )}
        >
          ...
        </Badge>
      )}
    </div>
  )
}
