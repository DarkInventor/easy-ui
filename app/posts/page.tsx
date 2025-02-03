import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from 'lucide-react'

export const metadata = {
  title: 'Easy UI | Beautiful Website Templates',
  description:
    'Discover beautifully designed website templates built with React and Tailwind CSS at Easy UI. Our modern, responsive designs empower web developers and designers to create standout digital experiences.',
  keywords:
    'Next.js, React, Tailwind CSS, website templates, blog, UI design, web development, Easy UI',
  authors: [{ name: 'Easy UI', url: 'https://www.easyui.pro' }],
  metadataBase: new URL("https://www.easyui.pro"),
  alternates: {
    canonical: 'https://www.easyui.pro/',
  },
  openGraph: {
    url: 'https://www.easyui.pro/',
    type: 'website',
    title: 'Easy UI | Beautiful Website Templates',
    description:
      'Discover beautifully designed website templates built with React and Tailwind CSS at Easy UI. Elevate your web projects with cutting-edge design and SEO best practices.',
    locale: 'en_US',
    siteName: 'Easy UI',
    images: [
      {
        url: 'https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png',
        width: 1200,
        height: 630,
        alt: 'Easy UI Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'easyui.pro',
    url: 'https://www.easyui.pro/',
    title: 'Easy UI | Beautiful Website Templates',
    description:
      'Explore our collection of responsive and modern website templates built with React and Tailwind CSS. Perfect for developers and designers looking for inspiration.',
    images: ['https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png'],
    creator: '@EasyUI',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BlogLandingPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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
        url: `https://www.easyui.pro/posts/${post._raw.flattenedPath}`,
        datePublished: post.date,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-8" role="main">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Easy UI Blog</h1>
          <p className="text-xl text-muted-foreground">
            Explore the latest insights, trends, and tutorials in UI design and web development.
          </p>
        </header>
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Blog Posts">
          {sortedPosts.map((post) => (
            <Card key={post._id} className="flex flex-col rounded-[1rem]" role="article" aria-label={post.title}>
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
                    day: 'numeric',
                  })}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="rounded-[1rem]">
                  <Link href={`/posts/${post._raw.flattenedPath}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </>
  )
}
