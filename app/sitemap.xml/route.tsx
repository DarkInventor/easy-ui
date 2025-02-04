// import { allPosts } from "contentlayer/generated"
// import { readdirSync, statSync } from "fs"
// import { join } from "path"

// const baseUrl = "https://www.easyui.pro"

// // Function to recursively get all routes from the app directory
// function getRoutes(dir: string): string[] {
//   const routes: string[] = []
//   const items = readdirSync(dir)

//   for (const item of items) {
//     // Skip special files and directories
//     if (
//       item.startsWith("_") ||
//       item.startsWith(".") ||
//       item === "api" ||
//       item === "sitemap.xml" ||
//       item === "layout.tsx" ||
//       item === "page.tsx" ||
//       item === "not-found.tsx" ||
//       item === "loading.tsx" ||
//       item === "error.tsx" ||
//       item === "layout-metadata.tsx" ||
//       item.startsWith("[") || // Skip dynamic route folders
//       item.endsWith("]")
//     ) {
//       continue
//     }

//     const path = join(dir, item)
//     const stat = statSync(path)

//     if (stat.isDirectory()) {
//       // Remove parentheses from route groups and handle nested routes
//       const routeName = item.replace(/[$$$$]/g, "") // Remove parentheses
//       const nestedRoutes = getRoutes(path)

//       if (nestedRoutes.length > 0) {
//         // Add nested routes with proper prefix
//         routes.push(...nestedRoutes.map((route) => (route ? `${routeName}/${route}` : routeName)))
//       } else {
//         // Add the directory itself as a route if it contains a page.tsx
//         try {
//           if (statSync(join(path, "page.tsx")).isFile()) {
//             routes.push(routeName)
//           }
//         } catch (e) {
//           // No page.tsx found, skip this directory
//         }
//       }
//     } else if (item === "page.tsx" && dir !== "app") {
//       // For page.tsx files, add the parent directory as a route
//       const routeName =
//         dir
//           .split("/")
//           .pop()
//           ?.replace(/[$$$$]/g, "") || ""
//       if (!routes.includes(routeName)) {
//         routes.push(routeName)
//       }
//     }
//   }

//   return routes
// }

// export async function GET() {
//   // Get all dynamic routes from the app directory
//   const appDir = join(process.cwd(), "app")
//   const dynamicRoutes = getRoutes(appDir)
//     .filter((route) => route) // Remove empty strings
//     .map((route) => route.replace(/\/+/g, "/")) // Clean up multiple slashes
//     .map((route) => route.replace(/[$$$$]/g, "")) // Remove any remaining parentheses

//   // Build XML entries for the dynamic routes
//   const dynamicUrls = dynamicRoutes
//     .map(
//       (route) => `
//     <url>
//       <loc>${baseUrl}${route ? `/${route}` : ""}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>weekly</changefreq>
//       <priority>0.7</priority>
//     </url>`,
//     )
//     .join("")

//   // Build XML entries for each blog post from Contentlayer
//   const postsUrls = allPosts
//     .map((post) => {
//       const url = `${baseUrl}/posts/${post._raw.flattenedPath}`
//       const lastmod = post.date ? new Date(post.date).toISOString() : new Date().toISOString()
//       return `
//     <url>
//       <loc>${url}</loc>
//       <lastmod>${lastmod}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.8</priority>
//     </url>`
//     })
//     .join("")

//   // Assemble the full XML sitemap
//   const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     <url>
//       <loc>${baseUrl}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>daily</changefreq>
//       <priority>1.0</priority>
//     </url>
//     ${dynamicUrls}
//     ${postsUrls}
// </urlset>`

//   return new Response(sitemapXml, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   })
// }


import { allPosts } from "contentlayer/generated"
import { readdirSync, statSync } from "fs"
import { join } from "path"

const baseUrl = "https://www.easyui.pro"

// Function to recursively get all routes from the app directory
function getRoutes(dir: string): string[] {
  const routes: string[] = []
  const items = readdirSync(dir)

  for (const item of items) {
    // Skip special files and directories
    if (
      item.startsWith("_") ||
      item.startsWith(".") ||
      item === "api" ||
      item === "sitemap.xml" ||
      item === "layout.tsx" ||
      item === "page.tsx" ||
      item === "not-found.tsx" ||
      item === "loading.tsx" ||
      item === "error.tsx" ||
      item === "layout-metadata.tsx" ||
      item.startsWith("[") || // Skip dynamic route folders
      item.endsWith("]")
    ) {
      continue
    }

    const path = join(dir, item)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      // Remove parentheses from route groups and handle nested routes
      const routeName = item.replace(/[$$$$]/g, "") // Remove parentheses
      const nestedRoutes = getRoutes(path)

      if (nestedRoutes.length > 0) {
        // Add nested routes with proper prefix
        routes.push(...nestedRoutes.map((route) => (route ? `${routeName}/${route}` : routeName)))
      } else {
        // Add the directory itself as a route if it contains a page.tsx
        try {
          if (statSync(join(path, "page.tsx")).isFile()) {
            routes.push(routeName)
          }
        } catch (e) {
          // No page.tsx found, skip this directory
        }
      }
    } else if (item === "page.tsx" && dir !== "app") {
      // For page.tsx files, add the parent directory as a route
      const routeName =
        dir
          .split("/")
          .pop()
          ?.replace(/[$$$$]/g, "") || ""
      if (!routes.includes(routeName)) {
        routes.push(routeName)
      }
    }
  }

  return routes
}

export async function GET() {
  // Get all dynamic routes from the app directory
  const appDir = join(process.cwd(), "app")
  const dynamicRoutes = getRoutes(appDir)
    .filter((route) => route) // Remove empty strings
    .map((route) => route.replace(/\/+/g, "/")) // Clean up multiple slashes
    .map((route) => route.replace(/[$$$$]/g, "")) // Remove any remaining parentheses

  // Build XML entries for the dynamic routes
  const dynamicUrls = dynamicRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route ? `/${route}` : ""}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`,
    )
    .join("")

  // Build XML entries for each blog post from Contentlayer
  const postsUrls = allPosts
    .map((post) => {
      const url = `${baseUrl}/posts/${post._raw.flattenedPath}`
      const lastmod = post.date ? new Date(post.date).toISOString() : new Date().toISOString()
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    })
    .join("")

  // Assemble the full XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${dynamicUrls}
    ${postsUrls}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

