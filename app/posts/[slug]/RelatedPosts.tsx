// import Link from 'next/link'
// import { allPosts, Post } from 'contentlayer/generated'

// export default function RelatedPosts({ currentPost }: { currentPost: Post }) {
//   const relatedPosts = allPosts
//     .filter(p => p._id !== currentPost._id && p.tags.some(tag => currentPost.tags.includes(tag)))
//     .slice(0, 3)

//   if (relatedPosts.length === 0) return null

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
//       <ul className="space-y-2">
//         {relatedPosts.map(post => (
//           <li key={post._id}>
//             <Link href={post.url} className="text-blue-600 hover:underline">
//               {post.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

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