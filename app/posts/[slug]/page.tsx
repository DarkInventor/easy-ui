// import { notFound } from "next/navigation"
// import { allPosts } from "contentlayer/generated"
// import { useMDXComponent } from "next-contentlayer/hooks"

// import { components } from "./mdx-components"
// import { CalendarIcon } from "@radix-ui/react-icons"
// import React from "react"
// import NextArticle from "./NextArticle"
// import BlogLeadMagnetBanner from "@/components/blog-lead-magnet-banner"

// export async function generateStaticParams() {
//   return allPosts.map((post) => ({
//     slug: post._raw.flattenedPath,
//   }))
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) return {}

//   const canonicalUrl = `https://easyui.pro/posts/${params.slug}`

//   return {
//     metadataBase: new URL("https://easyui.pro/"),
//     title: post.title,
//     description: post.description,
//     keywords: [
//       "Next.js website templates",
//       "Tailwind CSS UI templates",
//       "SEO optimized websites",
//       "responsive web design",
//       "modern UI design",
//       ...(post.tags || []),
//     ],
//     alternates: {
//       canonical: canonicalUrl,
//     },
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: "article",
//       publishedTime: post.date,
//       url: canonicalUrl,
//       images: [
//         {
//           url: post.coverImage || "/eztmp1-img.png",
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//       siteName: "Easy UI",
//       locale: "en_US",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description,
//       images: [post.coverImage || "/eztmp1-img.png"],
//       creator: "@EasyUI",
//     },
//     robots: {
//       index: true,
//       follow: true,
//       nocache: true,
//     },
//     authors: [
//       {
//         name: "Easy UI",
//         url: "https://www.easyui.pro",
//       },
//     ],
//     applicationName: "Easy UI Blog",
//   }
// }

// export default function PostPage({ params }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
//   if (!post) {
//     notFound()
//   }

//   const MDXContent = useMDXComponent(post.body.code)

//   return (
//     <div className="relative container mx-auto px-4 py-8">
//       <article className="max-w-4xl mx-auto px-4 py-8">
//         <header className="mb-6">
//           <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-normal leading-tight">
//             {post.title}
//           </h1>
//           <div className="flex items-center space-x-2 py-5">
//             <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
//               <CalendarIcon className="w-4 h-4 text-gray-600" />
//             </span>
//             <time dateTime={post.date} className="text-sm font-medium text-gray-600">
//               Published on {new Date(post.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </time>
//           </div>
//         </header>
//         <section className="prose dark:prose-invert max-w-none">
//           <MDXContent 
//             components={{
//               ...components,
//               img: (props) => <img className="rounded-lg shadow-md" {...props} />,
//             }} 
//           />
//         </section>
//         <footer className="mt-8 border-t pt-4">
//           <p className="text-gray-600 text-sm">Posted on {new Date().getFullYear()} Easy UI</p>
//         </footer>
//       </article>
//       <div className="absolute top-4 right-4 w-64 py-10 ">
//         <BlogLeadMagnetBanner />
//       </div>
//     </div>
//   )
// }


import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { components } from "./mdx-components"
import { CalendarIcon } from "@radix-ui/react-icons"
import React from "react"
import NextArticle from "./NextArticle"
import BlogLeadMagnetBanner from "@/components/blog-lead-magnet-banner"

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
    <div className="relative container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="flex-1 px-4 py-8">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-normal leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-2 py-5">
              <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                <CalendarIcon className="w-4 h-4 text-gray-900 " />
              </span>
              <time dateTime={post.date} className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Published on{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>
          <section className="prose dark:prose-invert max-w-none">
            <MDXContent 
              components={{
                ...components,
                img: (props) => <img className="rounded-lg shadow-md" {...props} />,
              }} 
            />
          </section>
          <footer className="mt-8 border-t pt-4">
            <p className="text-gray-600 text-sm">
              Posted on {new Date().getFullYear()} Easy UI
            </p>
          </footer>
        </article>
        <aside className="w-full lg:w-64 py-10">
          <div className="lg:sticky lg:top-4">
            <BlogLeadMagnetBanner />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PostPage
