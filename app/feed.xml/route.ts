import { allPosts } from "contentlayer/generated"
import { siteConfig } from "@/config/site"

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
    }
    return c
  })
}

export async function GET() {
  // Sort posts by date (newest first)
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Create RSS feed
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${escapeXml(siteConfig.name)} Blog</title>
        <link>https://www.easyui.pro/posts</link>
        <description>${escapeXml("Explore the latest insights, trends, and tutorials in UI design and web development.")}</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="https://www.easyui.pro/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map((post) => {
            return `
            <item>
              <title>${escapeXml(post.title)}</title>
              <link>https://www.easyui.pro/blog/${post._raw.flattenedPath}</link>
              <guid>https://www.easyui.pro/blog/${post._raw.flattenedPath}</guid>
              <description><![CDATA[${post.description}]]></description>
              <pubDate>${new Date(post.date).toUTCString()}</pubDate>
              ${post.coverImage ? `<enclosure url="${escapeXml(post.coverImage)}" type="image/jpeg" />` : ""}
            </item>
          `
          })
          .join("")}
      </channel>
    </rss>`

  // Return the RSS feed with proper headers
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  })
}

