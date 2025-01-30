import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from 'lucide-react'
import { ExternalLinkIcon } from "@radix-ui/react-icons"

interface ShowcaseItem {
  title: string
  description: string
  image: string
  href: string
  previewlink: string
  affiliation: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Easy Designfast",
    description: "Streamline your design workflow with our rapid prototyping and design system tool. Create beautiful interfaces in minutes.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
    href: "https://www.easyui.pro/designfast",
    previewlink: "https://designfastt.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Docs",
    description: "Create and manage beautiful documentation with our intuitive documentation platform. Features live editing and version control.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
    href: "https://www.easyui.pro/ez-docs",
    previewlink:"https://easy-docs-lemon.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Nextui",
    description: "A comprehensive UI component library for Next.js applications. Build modern web interfaces with pre-built, customizable components.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
    href: "https://www.easyui.pro/ez-nextui",
    previewlink: "https://easy-nextui.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Portfolio",
    description: "Showcase your work with our professional portfolio templates. Perfect for designers, developers, and creative professionals.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
    href: "https://www.easyui.pro/ez-portfolio",
    previewlink: "https://kathann.vercel.app/home",
    affiliation: "Template",
  },
  {
    title: "Easy Quotes",
    description: "Generate and manage quotes for your business with our intuitive quote management system. Streamline your sales process.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
    href: "https://www.easyui.pro/quotesai",
    previewlink: "https://quotes-template.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Retro",
    description: "Create stunning retro-styled designs with our collection of vintage-inspired UI components and templates.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
    href: "https://www.easyui.pro/retro",
    previewlink: "https://retro-template.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Template",
    description: "Jump-start your web projects with our collection of professionally designed templates and layouts.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
    href: "https://www.easyui.pro/ez-tmp",
    previewlink: "https://ez-template1.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Waitlist",
    description: "Manage your product launch waitlist effectively with our waitlist management solution. Build anticipation for your upcoming release.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
    href: "https://www.easyui.pro/ez-waitlist",
    previewlink: "https://easy-waitlist.vercel.app/",
    affiliation: "Template",
  },
  {
    title: "Easy Chatbot",
    description: "Build intelligent conversational interfaces quickly with our customizable chatbot solution. Perfect for customer support and automated interactions.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
    href: "https://www.easyui.pro/ez-chatbot",
    previewlink: "https://easy-chatbot-five.vercel.app/",
    affiliation: "Template",
  },
]

export default function ShowcaseGrid() {
  return (
    <div className="mt-12 max-w-7xl sm:mt-16 md:mt-20 lg:mt-40 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showcaseItems.map((item, index) => (
          <div key={index} className="mb-12 flex flex-col gap-6 sm:mb-16 sm:gap-8 md:mb-20 lg:mb-40 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex flex-1 flex-col gap-4">
              <div>
                <span className="flex max-w-[75px] justify-start rounded-xl text-base font-semibold leading-7 text-indigo-600">{item.affiliation}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-left text-3xl font-bold tracking-tight leading-7 text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-6 text-left text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-[1rem] bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Details <ChevronRight className="ml-2 size-4" />
                </Link>
                <Link
                  href={item.previewlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-[1rem] border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Live Preview <ExternalLinkIcon className="ml-2 size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-4 aspect-video size-full flex-1 overflow-hidden rounded-xl border bg-muted lg:mt-0 shadow-2xl m-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={450}
                className="m-auto rounded-xl border shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}