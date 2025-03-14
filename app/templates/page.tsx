'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link'
import { Menu, Search, X, Grid, List, Info } from 'lucide-react'

interface Template {
  name: string
  image: string
  path: string
  description: string
  isNew?: boolean
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  isFree?: boolean
}

const templates: Template[] = [
  { name: 'Introduction', image: 'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww', path: '/introduction', description: 'Get started with our templates', category: 'General', difficulty: 'Beginner' },
  { name: 'EZ Beautiful', image: '/ez-beautiful.png', path: '/ez-beautiful', description: 'Design stunning interfaces', isNew: true, category: 'Design', difficulty: 'Beginner' },
  { name: 'EZ Glow', image: '/ez-gloww.png', path: '/ez-glow', description: 'PTemplate for startups', isNew: true, category: 'Landing Page', difficulty: 'Beginner' },
  { name: 'EZ Premium', image: '/ez-premium.png', path: '/ez-premium', description: 'Pre-built Boilerplate with Auth & Stripe', isNew: true, category: 'Productivity', difficulty: 'Advanced' },
  { name: 'EZ Indigo', image: '/ez-indigo.png', path: '/ez-indigo', description: 'Create with an indigo theme', isNew: true, category: 'Design', difficulty: 'Beginner' },
  { name: 'EZ Design', image: '/ez-design.png', path: '/ez-design', description: 'Create beautiful designs effortlessly', category: 'Design', difficulty: 'Beginner', isFree: true },
  { name: 'EZ Newsletter', image: '/ez-newsletter.png', path: '/ez-newsletter', description: 'Design eye-catching newsletters', isNew: true, category: 'Email', difficulty: 'Beginner' },
  { name: 'EZ Tmp', image: '/eztmp1-img.png', path: '/ez-tmp', description: 'Versatile template for quick starts', isNew: true, category: 'General', difficulty: 'Advanced' },
  { name: 'EZ Tmp2', image: '/ez-tmp2.png', path: '/ez-tmp2', description: 'Another versatile template option', category: 'General', difficulty: 'Intermediate' },
  { name: 'EZ Tmp3', image: '/ez-tmp3.png', path: '/ez-tmp3', description: 'Third option for quick templating', isNew: true, category: 'General', difficulty: 'Intermediate' },
  { name: 'EZ Tmp4', image: '/ez-tmp4.png', path: '/ez-tmp4', description: 'Fourth quick-start template', isNew: true, category: 'General', difficulty: 'Intermediate' },
  { name: 'EZ Tmp5', image: '/ez-tmp5.png', path: '/ez-tmp5', description: 'Fifth option for rapid development', category: 'General', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ NextUI', image: '/ez-nextui.png', path: '/ez-nextui', description: 'Leverage Next.js UI components', category: 'UI', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ Notes', image: '/ez-notes.png', path: '/ez-notes', description: 'Create a sleek note-taking app', isNew: true, category: 'Productivity', difficulty: 'Advanced' },
  // { name: 'EZ Portfolio', image: '/ez-portfolio.png', path: '/ez-portfolio', description: 'Showcase your work beautifully', isNew: true, category: 'Portfolio', difficulty: 'Beginner' },
  { name: 'EZ Red', image: '/ez-red.png', path: '/ez-red', description: 'Design with a vibrant red theme', category: 'Design', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ Shots', image: '/ez-shots.png', path: '/ez-shots', description: 'Create stunning image galleries', category: 'Gallery', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ Story', image: '/ez-story.png', path: '/ez-story', description: 'Tell your story with style', isNew: true, category: 'Blog', difficulty: 'Beginner' },
  { name: 'EZ Dashboard', image: '/ez-dashboard.png', path: '/ez-dashboard', description: 'Build powerful dashboards', category: 'UI', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ Docs', image: '/ez-docs.png', path: '/ez-docs', description: 'Craft comprehensive documentation', category: 'Documentation', difficulty: 'Advanced', isFree: true },
  { name: 'EZ Grids', image: '/ez-grids.png', path: '/ez-grids', description: 'Design with flexible grid layouts', isNew: true, category: 'UI', difficulty: 'Beginner' },
  { name: 'EZ Landing Docs', image: '/ez-landing-docs.png', path: '/ez-landing-docs', description: 'Create engaging landing pages', isNew: true, category: 'Landing Page', difficulty: 'Intermediate' },
  { name: 'EZ Marketplace', image: '/ez-marketplace.png', path: '/ez-marketplace', description: 'Build your own marketplace', category: 'E-commerce', difficulty: 'Advanced', isFree: true },
  { name: 'EZ Waitlist', image: '/easy-waitlist.png', path: '/ez-waitlist', description: 'Manage waitlists effectively', category: 'Marketing', difficulty: 'Beginner', isFree: true },
  { name: 'QuotesAI', image: '/ez-quotes.png', path: '/quotesai', description: 'Generate AI-powered quotes', category: 'AI', difficulty: 'Intermediate', isFree: true },
  { name: 'Designfast', image: '/ez-designfast.png', path: '/designfast', description: 'Rapid design prototyping', category: 'Design', difficulty: 'Beginner', isFree: true },
  { name: 'Retro', image: '/ez-retro.png', path: '/retro', description: 'Create with a retro aesthetic', category: 'Design', difficulty: 'Intermediate', isFree: true },
  { name: 'EZ Haze', image: '/ez-haze.png', path: '/ez-haze', description: 'Haze themed website', category: 'Landing Page', difficulty: 'Beginner' },
  { name: 'EZ Blog', image: '/ez-blog.png', path: '/ez-blog', description: 'Create a stunning blog with ease', isNew: true, category: 'Blog', difficulty: 'Advanced' },
  { name: 'EZ Chatbot', image: '/ez-chatbot.png', path: '/ez-chatbot', description: 'Implement a chatbot for your website', category: 'AI', difficulty: 'Beginner', isFree: true },
  { name: 'EZ AI', image: '/ez-ai.png', path: '/ez-ai', description: 'Implement AI features easily', isNew: true, category: 'AI', difficulty: 'Intermediate' },
  { name: 'EZ Portfolio II', image: '/ez-portfolio-2.png', path: '/ez-portfolio-2', description: 'Stand out and showcase your magic', isNew: true, category: 'Portfolio', difficulty: 'Beginner', isFree: true },
  { name: 'EZ SaaS', image: '/ez-SaaS.png', path: '/ez-SaaS', description: 'Stand out and showcase your magic', isNew: true, category: 'AI', difficulty: 'Beginner', isFree: true },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [filteredTemplates, setFilteredTemplates] = useState(templates)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const categories = Array.from(new Set(templates.map(template => template.category)))
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']
  const [shouldAutoFocus, setShouldAutoFocus] = useState(true)
  const searchInputRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShouldAutoFocus(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const filtered = templates.filter(template =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(template.category)) &&
      (selectedDifficulty.length === 0 || selectedDifficulty.includes(template.difficulty)) &&
      (!showNewOnly || template.isNew) &&
      (!showFreeOnly || template.isFree)
    )
    setFilteredTemplates(filtered)
  }, [searchTerm, selectedCategories, selectedDifficulty, showNewOnly, showFreeOnly])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    )
  }

  const handleSearchClick = () => {
    setShouldAutoFocus(true)
    // @ts-ignore
    searchInputRef.current?.focus()
  }

  const Sidebar = () => (
    <div className="space-y-6">
      <div className="space-y-2 ">
        <div className="relative mt-10 lg:mt-0 md:mt-0">
          <Search
            className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
            autoFocus={shouldAutoFocus}
            onClick={handleSearchClick}
          />
        </div>
      </div>
      <div className="space-y-2">
      <div className="flex items-center space-x-2 pb-4">
        <Switch
          checked={showFreeOnly}
          onCheckedChange={setShowFreeOnly}
          id="free-templates"
        />
        <label htmlFor="free-templates" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Show free templates only
        </label>
      </div>
        <h2 className="text-sm font-semibold">Categories</h2>
        <ScrollArea className="h-[300px] pr-4">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent cursor-pointer">
              <Checkbox
              className='border-gray-300 dark:border-gray-500'
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <span className="text-sm dark:text-gray-100 text-gray-800 leading-2 tracking-tight">{category}</span>
            </label>
          ))}
        </ScrollArea>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold">Difficulty</h2>
        {difficulties.map(difficulty => (
          <label key={difficulty} className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent cursor-pointer">
            <Checkbox
             className='border-gray-300 dark:border-gray-500'
              checked={selectedDifficulty.includes(difficulty)}
              onCheckedChange={() => handleDifficultyChange(difficulty)}
            />
            <span className="text-sm dark:text-gray-100 text-gray-800 leading-2 tracking-tight">{difficulty}</span>
          </label>
        ))}
      </div>

    </div>
  )

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold"></h1>
            <div className="flex items-center space-x-4">
              {/* @ts-ignore */}
              <Tabs value={viewMode} onValueChange={(value: 'grid' | 'list') => setViewMode(value)}>
                <TabsList>
                  <TabsTrigger value="grid"><Grid className="h-4 w-4" /></TabsTrigger>
                  <TabsTrigger value="list"><List className="h-4 w-4" /></TabsTrigger>
                </TabsList>
              </Tabs>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden border rounded-xl">
                    <Menu className="h-6 w-6 " />
                    <span className="sr-only">Open filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Sidebar />
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 hidden lg:block">
              <Sidebar />

            </aside>
            <main className="flex-1">
              <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredTemplates.map((template) => (
                  <Link href={template.path} key={template.name}>
                    <Card className={`bg-card hover:bg-accent transition-colors duration-300 overflow-hidden rounded-xl cursor-pointer group relative mb-5 ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}>
                      <CardContent className={`p-0 ${viewMode === 'list' ? 'sm:w-1/3 w-full' : ''}`}>
                        {viewMode === 'grid' || (viewMode === 'list' && window.innerWidth >= 640) ? (
                          <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                        ) : null}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white text-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Details
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className={`flex flex-col items-start p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                        <div className="flex justify-between items-center w-full mb-2">
                          <h2 className="text-md font-semibold leading-7 tracking-tight">{template.name}</h2>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge variant={template.difficulty === 'Beginner' ? 'default' : template.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                                  {template.difficulty}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Difficulty level</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                        <div className="flex justify-between items-center w-full">
                          <span className="text-sm text-muted-foreground">{template.category}</span>
                          <div className="flex gap-2">
                            {template.isNew && (
                              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                New
                              </Badge>
                            )}
                            {template.isFree && (
                              <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                Free
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}