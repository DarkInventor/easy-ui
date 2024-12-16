// import { ImageResponse } from 'next/og'
// import { allPosts } from 'contentlayer/generated'
 
// export const size = {
//   width: 1200,
//   height: 630,
// }
 
// export const contentType = 'image/png'
 
// export default async function Image({ params }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
//   if (!post) {
//     return new ImageResponse(
//       (
//         <div
//           style={{
//             fontSize: 48,
//             background: 'white',
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           Post not found
//         </div>
//       ),
//       { ...size }
//     )
//   }

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 48,
//           background: 'white',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '40px',
//         }}
//       >
//         <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>{post.title}</h1>
//         <p style={{ fontSize: '24px', color: '#666', textAlign: 'center' }}>{post.description}</p>
//       </div>
//     ),
//     { ...size }
//   )
// }



import { ImageResponse } from 'next/og'
import { allPosts } from 'contentlayer/generated'
 
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  // @ts-ignore
  if (!post) return new ImageResponse('Post not found')
// @ts-ignore
  return new ImageResponse(
    // @ts-ignore
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    { ...size }
  )
}