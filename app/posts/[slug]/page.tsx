import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { components } from "./mdx-components"
import { CalendarIcon } from "@radix-ui/react-icons"
import React from "react"
import NextArticle from "./NextArticle"
import BlogLeadMagnetBanner from "@/components/blog-lead-magnet-banner"
import { BackButton } from "@/components/back-button"
import Image from "next/image"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return {}

  const canonicalUrl = `https://easyui.pro/posts/${params.slug}`

  return {
    metadataBase: new URL("https://easyui.pro/"),
    title: post.title,
    description: post.description,
    keywords: [
      "Next.js website templates",
      "Tailwind CSS UI templates",
      "SEO optimized websites",
      "responsive web design",
      "modern UI design",
      ...(post.tags || []),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: canonicalUrl,
      images: [
        {
          url: post.coverImage || "/eztmp1-img.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Easy UI",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage || "/eztmp1-img.png"],
      creator: "@EasyUI",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    authors: [
      {
        name: "Easy UI",
        url: "https://www.easyui.pro",
      },
    ],
    applicationName: "Easy UI Blog",
  }
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="relative lg:flex container mx-auto px-4 py-0 lg:py-10  lg:max-w-6xl pl-10">
        
      <div className="flex flex-col lg:flex-row gap-8">
     
        <article className="flex-1 px-4 py-0 lg:py-0">
        <BackButton />
        {post.coverImage && (
            <div className="relative overflow-hidden rounded-xl p-3 sm:p-5 md:p-0 w-full mt-10">
              <div className="relative aspect-video w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  className="rounded-xl border border-border object-cover object-center md:object-left"
                  fill
                />
              </div>
            </div>
        )}
 
        
          <header className="mb-2 mt-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-normal leading-tight items-center text-center">
              {post.title}
            </h1>
            <div className="flex items-center space-x-2 py-5 items-center text-center justify-center mx-auto">
              <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                <CalendarIcon className="w-4 h-4 text-gray-900 " />
              </span>
              <time dateTime={post.date} className="text-sm font-medium text-gray-600 dark:text-gray-300 ">
                Published on{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>
          <section className="prose dark:prose-invert max-w-none mx-auto text-left justify-center align-center">
            <MDXContent 
              components={{
                ...components,
                img: (props) => <img className="rounded-lg shadow-md inline" {...props} />,
              }} 
            />
          </section>
          <footer className="mt-8 border-t pt-4">
            <p className="text-gray-600 text-sm">
              Posted on {new Date().getFullYear()} Easy UI
            </p>
          </footer>
          <NextArticle currentSlug={post._raw.flattenedPath} />
        </article>
   
        <aside className="w-full lg:w-80 ml-0 lg:ml-10 py-12">
          <div className="sticky lg:top-10 py-7">
            <BlogLeadMagnetBanner />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PostPage
