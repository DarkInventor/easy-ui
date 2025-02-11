// import "@/styles/globals.css"
// import { Metadata } from "next"
// import Head from "next/head"

// import Script from 'next/script'
// import { siteConfig } from "@/config/site"
// import { fontSans } from "@/lib/fonts"
// import { cn } from "@/lib/utils"
// import { SiteFooter } from "@/components/site-footer"
// import { SiteHeader } from "@/components/site-header"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@vercel/analytics/react"
// import { SiteBanner } from "@/components/site-banner"
// import { GoogleAnalytics } from '@next/third-parties/google'

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.easyui.pro/"), 
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon-32x32.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   openGraph: {
//     url: "https://www.easyui.pro/",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [{ url: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png", width: 800, height: 600, alt: siteConfig.name }],
//     siteName: siteConfig.name,
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
// }

// export const viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// }

// interface RootLayoutProps {
//   children: React.ReactNode
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <Head>
//           <title>${siteConfig.name}</title>
//           <meta property="og:url" content="https://www.easyui.pro/" />
//           <meta property="og:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
//           <meta
//             property="twitter:url"
//             content="https://www.easyui.pro/"
//           />
//           <meta property="twitter:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
//           <script defer src="https://cloud.umami.is/script.js" data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"></script>
//           <link rel="alternate" href="https://www.easyui.pro/templates" title="Easy UI Templates" />
//           <link rel="alternate" href="https://premium.easyui.pro/" title="Easy UI Premium" />
//           <link rel="alternate" href="https://premium.easyui.pro/docs/sections/bento-grid" title="Easy UI Components" />
//         </Head>
//         <body
//           className={cn(
//             "min-h-screen bg-background font-sans antialiased",
//             fontSans.variable
//           )}
//         >
//           <Analytics/>
//           <GoogleAnalytics gaId="G-0RXSHN6M9R" />
//           <SiteBanner />
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <SiteHeader />
//             {children}
//             <SiteFooter />
//             <TailwindIndicator />
//             <Script
//             src="https://cloud.umami.is/script.js"
//             strategy="afterInteractive"
//             data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"
//             defer
//           />
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   )
// }




import "@/styles/globals.css"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SiteBanner } from "@/components/site-banner"
import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"
import type React from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.easyui.pro/"),
  title: {
    default: `${siteConfig.name} - ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description} Discover our extensive collection of React components and Tailwind CSS templates for rapid, beautiful web development.`,
  keywords: [
    "React templates",
    "Tailwind CSS",
    "UI components",
    "Web design",
    "Frontend development",
    "React hooks",
    "Responsive design",
    "Easy UI",
    "Website builder",
    "Developer tools",
    "UI kit",
    "Component library",
    "Modern web design",
    "React framework",
    "Customizable templates",
    "SEO-friendly components",
    "Rapid prototyping",
    "Next.js templates",
    "Performance optimization",
    "Design system",
  ],
  authors: [{ name: "Easy UI Team", url: "https://www.easyui.pro/about-us" }],
  creator: "Easy UI",
  publisher: "Easy UI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.easyui.pro/",
    title: `${siteConfig.name} - Beautiful React & Tailwind CSS Templates`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - React & Tailwind CSS Templates`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Beautiful React & Tailwind CSS Templates`,
    description: siteConfig.description,
    images: ["https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png"],
    creator: "@kathanmehtaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.easyui.pro",
    languages: {
      "en-US": "https://www.easyui.pro",
    },
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.easyui.pro/" />
        {siteConfig.mainNav.map((item) => (
          <link key={item.href} rel="prerender" href={item.href} />
        ))}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Analytics />
        <GoogleAnalytics gaId="G-0RXSHN6M9R" />
        <SiteBanner />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <TailwindIndicator />
        </ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          strategy="afterInteractive"
          data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"
        />
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "${siteConfig.name}",
              "description": "${siteConfig.description}",
              "url": "https://www.easyui.pro/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.easyui.pro/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "${siteConfig.links.twitter}",
                "${siteConfig.links.github}",
                "${siteConfig.links.docs}"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}


