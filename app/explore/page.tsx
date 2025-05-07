import OutfitGallery from "@/components/outfit-gallery"
import StylePreferences from "@/components/style-preferences"

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Explore</h1>
      <StylePreferences />
      <OutfitGallery />
    </div>
  )
}
