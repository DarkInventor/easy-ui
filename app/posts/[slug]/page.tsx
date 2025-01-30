import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
// @ts-ignore
import { MDXComponents } from "./mdx-components"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://easyui.pro/posts/${params.slug}`,
      images: [{ url: post.coverImage || "/eztmp1-img.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage || "/eztmp1-img.png"],
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
        {/* @ts-ignore */}
        <p className="text-gray-600 text-sm">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        <MDXContent components={{ ...MDXComponents, img: (props) => <img className="rounded-lg shadow-md" {...props} /> }} />
      </div>
      <footer className="mt-8 border-t pt-4">
        <p className="text-gray-600 text-sm"> {new Date().getFullYear()} Easy UI</p>
      </footer>
    </div>
  )
}