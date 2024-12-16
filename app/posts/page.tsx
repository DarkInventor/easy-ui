import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export const metadata = {
  title: 'Blog Posts',
  description: 'All blog posts from Easy UI',
}

export default function BlogLandingPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {sortedPosts.map((post) => (
          <li key={post._id} className="border-b pb-4">
            <Link href={`/posts/${post._raw.flattenedPath}`} className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{post.description}</p>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

