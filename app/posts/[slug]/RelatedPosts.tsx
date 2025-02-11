import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

// @ts-ignore
export default function RelatedPosts({ currentPost }) {
  const relatedPosts = allPosts
  // @ts-ignore
    .filter(p => p._id !== currentPost._id && p.tags.some(tag => currentPost.tags.includes(tag)))
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-8">
      <h2>Related Posts</h2>
      <ul>
        {relatedPosts.map(post => (
          <li key={post._id}>
            <Link href={`/posts/${post._raw.flattenedPath}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}