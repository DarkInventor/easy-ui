// import DisqusCommentsWrapper from '@/components/DisqusCommentsWrapper'
// import { Post } from 'contentlayer/generated'

// export default function Comments({ post }: { post: Post }) {
//   return (
//     <DisqusCommentsWrapper
//       url={post.url}
//       identifier={post._id}
//       title={post.title}
//     />
//   )
// }

import dynamic from 'next/dynamic'

const DisqusComments = dynamic(() => import('@/components/DisqusComments'), {
  ssr: false,
})

// @ts-ignore
export default function Comments({ post }) {
  return (
    <DisqusComments
      url={`https://easyui.pro/posts/${post._raw.flattenedPath}`}
      identifier={post._id}
      title={post.title}
    />
  )
}