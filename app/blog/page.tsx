import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, RssIcon } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Easy UI Blog | Beautiful Website Templates",
  description:
    "Discover beautifully designed website templates built with React and Tailwind CSS at Easy UI. Our modern, responsive designs empower web developers and designers to create standout digital experiences.",
  keywords: "Next.js, React, Tailwind CSS, website templates, blog, UI design, web development, Easy UI",
  authors: [{ name: "Easy UI", url: "https://www.easyui.pro" }],
  metadataBase: new URL("https://www.easyui.pro"),
  alternates: {
    canonical: "https://www.easyui.pro/blog",
    types: {
      "application/rss+xml": "https://www.easyui.pro/feed.xml",
    },
  },
  openGraph: {
    url: "https://www.easyui.pro/blog",
    type: "website",
    title: "Easy UI Blog | Beautiful Website Templates",
    description:
      "Discover beautifully designed website templates built with React and Tailwind CSS at Easy UI. Elevate your web projects with cutting-edge design and SEO best practices.",
    locale: "en_US",
    siteName: "Easy UI",
    images: [
      {
        url: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Easy UI Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "easyui.pro",
    url: "https://www.easyui.pro/blog",
    title: "Easy UI Blog | Beautiful Website Templates",
    description:
      "Explore our collection of responsive and modern website templates built with React and Tailwind CSS. Perfect for developers and designers looking for inspiration.",
    images: ["https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png"],
    creator: "@EasyUI",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogLandingPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "Descending",
    numberOfItems: sortedPosts.length,
    itemListElement: sortedPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: `https://www.easyui.pro/blog/${post._raw.flattenedPath}`,
        datePublished: post.date,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container mx-auto px-4 py-8" role="main">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Easy UI Blog</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Explore the latest insights, trends, and tutorials in UI design and web development.
          </p>
          <Link href="/feed.xml" passHref>
            <Button variant="outline" className="gap-2 rounded-[1rem]">
              <RssIcon className="h-4 w-4" />
              Subscribe to RSS
            </Button>
          </Link>
        </header>
        <section
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-10"
          aria-label="Blog Posts Collection"
        >
          {sortedPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._raw.flattenedPath}`}
              className="group block transform rounded-2xl border-none"
              aria-label={`Read post: ${post.title}`}
            >
              <Card className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-card/50 hover:border-black dark:hover:border-gray-600 hover:ring-offset-2">
                {post.coverImage && (
                  <div className="relative aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={sortedPosts.indexOf(post) < 4}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJc08sE7wAAAABJRU5ErkJggg=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                  </div>
                )}

                <CardHeader className="relative space-y-2.5 px-6 pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                    <time dateTime={new Date(post.date).toISOString()}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-balance text-xl font-semibold leading-tight tracking-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground line-clamp-3 text-pretty leading-relaxed">{post.description}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="rounded-full border-primary/30 px-6 font-medium shadow-sm hover:bg-primary/5 hover:shadow-md"
                      asChild
                    >
                      <span>
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

