import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://easy-ui-sigma.vercel.app/"), // Change this line
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon-32x32.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://easy-ui-sigma.vercel.app/",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/og.png", width: 800, height: 600, alt: siteConfig.name }],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
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
          <meta property="og:url" content="https://easy-ui-sigma.vercel.app/" />
          <meta property="og:image" content="/og.png" />
          <meta
            property="twitter:url"
            content="https://easy-ui-sigma.vercel.app/"
          />
          <meta property="twitter:image" content="/og.png" />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            {children}
            <SiteFooter className="border-t" />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
