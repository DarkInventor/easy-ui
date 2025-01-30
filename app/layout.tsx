import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import Script from 'next/script'
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SiteBanner } from "@/components/site-banner"
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.easyui.pro/"), 
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon-32x32.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://www.easyui.pro/",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png", width: 800, height: 600, alt: siteConfig.name }],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>${siteConfig.name}</title>
          <meta property="og:url" content="https://www.easyui.pro/" />
          <meta property="og:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
          <meta
            property="twitter:url"
            content="https://www.easyui.pro/"
          />
          <meta property="twitter:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
          <script defer src="https://cloud.umami.is/script.js" data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"></script>
          <link rel="alternate" href="https://www.easyui.pro/templates" title="Easy UI Templates" />
          <link rel="alternate" href="https://premium.easyui.pro/" title="Easy UI Premium" />
          <link rel="alternate" href="https://premium.easyui.pro/docs/sections/bento-grid" title="Easy UI Components" />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Analytics/>
          <GoogleAnalytics gaId="G-0RXSHN6M9R" />
          <SiteBanner />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            {children}
            <SiteFooter />
            <TailwindIndicator />
            <Script
            src="https://cloud.umami.is/script.js"
            strategy="afterInteractive"
            data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"
            defer
          />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}


// "use client"

// import "@/styles/globals.css"
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
// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// interface RootLayoutProps {
//   children: React.ReactNode
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   const [showLogo, setShowLogo] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLogo(false)
//     }, 3000)

//     return () => clearTimeout(timer)
//   }, [])

//   const logoVariants = {
//     initial: { scale: 2, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     exit: { scale: 0.5, opacity: 0 },
//   }

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <Head>
//         <title>{siteConfig.name}</title>
//         <meta property="og:url" content="https://www.easyui.pro/" />
//         <meta property="og:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
//         <meta
//           property="twitter:url"
//           content="https://www.easyui.pro/"
//         />
//         <meta property="twitter:image" content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/og.png" />
//         <script defer src="https://cloud.umami.is/script.js" data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"></script>
//         <link rel="alternate" href="https://www.easyui.pro/templates" title="Easy UI Templates" />
//         <link rel="alternate" href="https://premium.easyui.pro/" title="Easy UI Premium" />
//         <link rel="alternate" href="https://premium.easyui.pro/docs/sections/bento-grid" title="Easy UI Components" />
//       </Head>
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         <Analytics/>
//         <GoogleAnalytics gaId="G-0RXSHN6M9R" />
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <AnimatePresence>
//             {showLogo ? (
//               <motion.div
//                 key="logo"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 variants={logoVariants}
//                 transition={{ duration: 2.5, ease: "easeInOut" }}
//                 className="fixed inset-0 flex items-center justify-center bg-background z-50"
//               >
//                 <div className="relative w-20 h-20 lg:w-64 lg:h-64">
//                   <Image
//                     src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/logo.svg"
//                     alt="Logo"
//                     layout="fill"
//                     objectFit="contain"
//                     priority
//                   />
//                 </div>
//               </motion.div>
//             ) : null}
//           </AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: showLogo ? 0 : 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <SiteBanner />
//             <SiteHeader />
//             {children}
//             <SiteFooter />
//             <TailwindIndicator />
//           </motion.div>
//           <Script
//             src="https://cloud.umami.is/script.js"
//             strategy="afterInteractive"
//             data-website-id="7ad28072-1308-433d-abce-2e92a70ab64d"
//             defer
//           />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }