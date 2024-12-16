// import Link from 'next/link'
// import { allPosts } from 'contentlayer/generated'

// export const metadata = {
//   title: 'Blog Posts',
//   description: 'All blog posts from Easy UI',
// }

// export default function BlogLandingPage() {
//   const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
//       <ul className="space-y-4">
//         {sortedPosts.map((post) => (
//           <li key={post._id} className="border-b pb-4">
//             <Link href={`/posts/${post._raw.flattenedPath}`} className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded">
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               <p className="text-gray-600 dark:text-gray-400 mb-2">{post.description}</p>
              
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from 'lucide-react'

export const metadata = {
  title: 'Blog Posts',
  description: 'Explore the latest insights and tutorials from Easy UI',
}

export default function BlogLandingPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Easy UI Blog</h1>
        <p className="text-xl text-muted-foreground">Explore the latest insights and tutorials</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {sortedPosts.map((post) => (
          <Card key={post._id} className="flex flex-col rounded-[1rem]">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
            <CardFooter className="mt-auto ">
              <Button asChild className='rounded-[1rem]'>
                <Link href={`/posts/${post._raw.flattenedPath}`} >
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

