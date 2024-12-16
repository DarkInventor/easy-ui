import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { ChevronRight } from "lucide-react"
import { getMDXComponent } from "next-contentlayer/hooks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ShareButtons from "@/components/ShareButtons"

import PostBody from "./PostBody"


export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://easyui.pro/posts/${slug}`,
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


const components = {
  img: (props: any) => (
    <Image
      {...props}
      width={700}
      height={350}
      className="rounded-lg my-8"
      alt={props.alt || "Blog post image"}
    />
  ),
}

function extractHeadings(content: any) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, "-"),
    })
  }

  return headings
}

const TableOfContents = ({
  headings,
}: {
  headings: { id: string; text: string; level: number }[]
}) => (
  <nav className="space-y-2">
    {headings.map(({ id, text, level }) => (
      <a
        key={id}
        href={`#${id}`}
        className={`block text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-purple-400 ${
          level === 2 ? "font-semibold" : "pl-4"
        }`}
      >
        {text}
      </a>
    ))}
  </nav>
)


const findNextPost = (currentSlug: string) => {
  const currentIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === currentSlug
  )
  return allPosts[currentIndex + 1] || null
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)
  const shareUrl = `https://easyui.pro/posts/${post._raw.flattenedPath}`
  const headings = extractHeadings(post.body.raw)
  const nextPost = findNextPost((await params).slug)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row">
          <main className="w-full md:flex-1">
            <article className="bg-white dark:bg-black rounded-2xl overflow-hidden ">
              <div className="px-6 py-0 sm:px-8 sm:py-0">
                <h1
                  className="text-5xl font-bold mb-6 py-0 dark:text-white tracking-tight lg:text-6xl md:text-4xl"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags &&
                    post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="dark:bg-gray-200 text-black"
                      >
                        {tag}
                      </Badge>
                    ))}
                </div>
                <Separator className="my-8" />
                <PostBody>
                  <Content components={components} />
                </PostBody>
                <Separator className="my-8" />
                <div className="flex justify-between items-center">
                  <ShareButtons title={post.title} url={shareUrl} />
                  <div className="flex space-x-4">
                    {/* Add your social media share buttons here */}
                  </div>
                </div>
                {nextPost && (
                  // <div className="mt-12 bg-white dark:bg-black">
                  //   <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 bg-white dark:bg-black">Next Article</h2>
                  //   <a href={`/posts/${nextPost._raw.flattenedPath}`} className="group">
                  //     <div className="flex items-center justify-between p-4 bg-white dark:bg-black border rounded-lg  transition-shadow duration-300">
                  //       <span className="font-semibold group-hover:text-gray-600 dark:group-hover:text-purple-400">{nextPost.title}</span>
                  //       <ChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  //     </div>

                  //   </a>
                  // </div>
                  <a
                    className="mt-12 bg-white dark:bg-black"
                    href={`/posts/${nextPost._raw.flattenedPath}`}
                  >
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 bg-white dark:bg-black py-2 mt-5">
                      Next Article
                    </h2>
                    <div className="relative  cursor-pointer group p-4 bg-white dark:bg-black border-none rounded-lg  transition-shadow duration-300">
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x" />
                      <div className="absolute inset-[2px] rounded-lg bg-white  dark:bg-black z-10 border" />
                      <div className="relative z-20 flex items-center justify-between h-full px-4 rounded-lg transition-all duration-300 ">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                          {nextPost.title}
                        </span>
                        <ChevronRight className="text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                      </div>
                    </div>
                    {/* </div> */}
                  </a>
                )}
              </div>
            </article>
          </main>
          <aside className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
            <div className="space-y-8 sticky top-8 ">
              <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg overflow-hidden rounded-[0.75rem]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold mb-4 tracking-tight ">
                    Want to save time? Get beautifully designed website
                    templates with Easy UI Premium.
                  </h3>
                  <p className="text-md mb-6 opacity-90 font-normal tracking-tight">
                    30+ beautiful sections and templates built with React,
                    Typescript, Tailwind CSS, and Framer Motion.
                  </p>
                  <a
                    href="https://premium.easyui.pro/pricing-section"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <Button className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg tracking-tight">
                      Get Started{" "}
                      <ChevronRight className="inline ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}