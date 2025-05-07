"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BoardGallery from "@/components/board-gallery"

export default function BoardsPage() {
  const [activeTab, setActiveTab] = useState("outfits")

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Boards</h1>

      <Tabs defaultValue="outfits" onValueChange={setActiveTab}>
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="outfits">Outfits</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>
        <TabsContent value="outfits">
          <BoardGallery type="outfits" />
        </TabsContent>
        <TabsContent value="products">
          <BoardGallery type="products" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
