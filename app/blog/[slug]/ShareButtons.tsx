'use client'

import { Button } from "@/components/ui/button"
import { Share2, Twitter } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const handleShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
  }

  return (
    <div className="flex justify-between items-center">
      <Button variant="outline" onClick={handleShare}>
        <Share2 className="w-4 h-4 mr-2" />
        Share this post
      </Button>
      <div className="flex space-x-4">
        <Button variant="outline" size="icon" onClick={handleShare}>
          <Twitter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}