// 'use client'

// import { Button } from "@/components/ui/button"

// interface ShareButtonsProps {
//   post: {
//     title: string
//     _raw: {
//       flattenedPath: string
//     }
//   }
// }

// export default function ShareButtons({ post }: ShareButtonsProps) {
//   const shareUrl = `https://easyui.pro/posts/${post._raw.flattenedPath}`

//   const handleShare = () => {
//     window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
//   }

//   return (
//     <div className="mt-8">
//       <h3>Share this post</h3>
//       <Button onClick={handleShare}>
//         Share on Twitter
//       </Button>
//       {/* Add more social sharing buttons */}
//     </div>
//   )
// }






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

  const handleProfileVisit = () => {
    window.open(`https://twitter.com/kathanmehtaa`, '_blank')
  }

  return (
    <div className="flex justify-between items-center">
      <Button variant="outline" onClick={handleShare}>
        <Share2 className="w-4 h-4 mr-2" />
        Share this post
      </Button>
      <div className="flex space-x-4 ml-2">
        <Button variant="outline" size="icon" onClick={handleProfileVisit}>
          <Twitter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}