import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'

interface NextArticleProps {
  currentSlug: string
}

export default function NextArticle({ currentSlug }: NextArticleProps) {
  const currentIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === currentSlug
  )
  const nextPost = allPosts[currentIndex + 1] || null
  
  if (!nextPost) return null
  
  return (
    <Link
      // Updated URL to use the flattenedPath for generating the link
      href={`/blog/${nextPost._raw.flattenedPath}`}
      className="mt-12 block bg-white dark:bg-black "
    >
      <h2 className="mb-4 mt-5 bg-white py-2 text-xl font-bold text-gray-800 dark:bg-black dark:text-white">
        Next Article
      </h2>
      <div className="group relative cursor-pointer rounded-[0.75rem] border-none bg-white p-4 transition-shadow duration-300 dark:bg-black">
        <div className="animate-gradient-x absolute inset-0 rounded-[0.75rem] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-[2px] z-10 rounded-[0.75rem] border bg-white dark:bg-black" />
        <div className="relative z-20 flex h-full items-center justify-between rounded-[0.75rem] px-4 transition-all duration-300">
          <span className="font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200">
            {nextPost.title}
          </span>
          <ChevronRight className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-600 dark:text-gray-400 dark:group-hover:text-purple-400" />
        </div>
      </div>
    </Link>
  )
}