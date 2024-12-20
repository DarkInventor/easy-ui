import { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.easyui.pro/"),
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