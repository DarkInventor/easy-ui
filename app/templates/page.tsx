// 'use client'

// import { useState, useEffect } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon, Airplay, CloudMoonRain } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"

// import EzBlog from '../(docs)/ez-blog/page'
// import EzChatbot from '../(docs)/ez-chatbot/page'
// import EzDocs from '../(docs)/ez-dashboard/page'
// import DesignPage from '../(docs)/ez-design/page'
// import GridsPage from '../(docs)/ez-grids/page'
// import EzNextUI from '../(docs)/ez-landing-docs/page'
// import MarketplacePage from '../(docs)/ez-marketplace/page'
// import StoryPage from '../(docs)/ez-newsletter/page'
// import NotesPage from '../(docs)/ez-notes/page'
// import EzPortfolio from '../(docs)/ez-portfolio/page'
// import EzRed from '../(docs)/ez-red/page'
// import EzShots from '../(docs)/ez-shots/page'
// import EzPage from '../(docs)/ez-tmp/page'
// import EzPage2 from '../(docs)/ez-tmp2/page'
// import EzPage3 from '../(docs)/ez-tmp3/page'
// import EzPage4 from '../(docs)/ez-tmp4/page'
// import EzPage5 from '../(docs)/ez-tmp5/page'
// import EzWaitlist from '../(docs)/ez-waitlist/page'
// import QuotesAI from '../(docs)/quotesai/page'
// import EzLandingDocs from '../(docs)/ez-landing-docs/page'
// import EzNextUII from '../(docs)/ez-nextui/page'
// import IntroductionPage from '../(docs)/introduction/page'
// import DesignfastPage from '../(docs)/designfast/page'
// import Retro from '../(docs)/retro/page'
// import NewsletterPage from '../(docs)/ez-newsletter/page'
// import EasyStory from '../(docs)/ez-story/page'
// import EzDashboard from '../(docs)/ez-dashboard/page'
// import EzDocss from '../(docs)/ez-docs/page'
// import EzAI from '../(docs)/ez-ai/page'
// import EzBeautiful from '../(docs)/ez-beautiful/page'
// import { ShadowInnerIcon } from '@radix-ui/react-icons'
// import EzIndigo from '../(docs)/ez-indigo/page'

// interface Item {
//   name: string;
//   isNew?: boolean;
//   isPaid?: boolean;
// }

// const components: Item[] = [
//   { name: 'introduction' },
//   { name: 'ez-blog', isNew: true },
//   { name: 'ez-chatbot' },
//   { name: 'ez-dashboard' },
//   { name: 'ez-design' },
//   { name: 'ez-docs' },
//   { name: 'ez-grids', isNew: true },
//   { name: 'ez-landing-docs', isNew: true },
//   { name: 'ez-marketplace' },
//   { name: 'ez-newsletter', isNew: true },
//   { name: 'ez-nextui' },
//   { name: 'ez-notes', isNew: true },
//   { name: 'ez-portfolio', isNew: true },
//   { name: 'ez-red' },
//   { name: 'ez-shots' },
//   { name: 'ez-story', isNew: true },
//   { name: 'ez-tmp', isNew: true },
//   { name: 'ez-tmp2' },
//   { name: 'ez-tmp3', isNew: true },
//   { name: 'ez-tmp4', isNew: true },
//   { name: 'ez-tmp5' },
//   { name: 'ez-waitlist' },
//   { name: 'quotesai' },
//   { name: 'designfast'},
//   { name: 'retro'},
//   { name: 'ez-ai', isNew: true},
//   { name: 'ez-beautiful', isNew: true},
//   { name: 'ez-indigo', isNew: true},
// ]

// export default function TemplatePage() {
//   const [selectedItem, setSelectedItem] = useState('introduction')
//   const [isLargeScreen, setIsLargeScreen] = useState(true)

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024)
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)

//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   const handleItemClick = (item: string) => {
//     setSelectedItem(item)
//   }

//   const renderComponent = (componentName: string) => {
//     switch (componentName) {
//       case 'introduction':
//         return <IntroductionPage />
//       case 'ez-blog':
//         return <EzBlog />
//       case 'ez-chatbot':
//         return <EzChatbot />
//       case 'ez-dashboard':
//         return <EzDashboard />
//       case 'ez-design':
//         return <DesignPage />
//       case 'ez-docs':
//         return <EzDocss />
//       case 'ez-grids':
//         return <GridsPage />
//       case 'ez-landing-docs':
//         return <EzLandingDocs />
//       case 'ez-marketplace':
//         return <MarketplacePage />
//       case 'ez-newsletter':
//         return <NewsletterPage />
//       case 'ez-nextui':
//         return <EzNextUII />
//       case 'ez-notes':
//         return <NotesPage />
//       case 'ez-portfolio':
//         return <EzPortfolio />
//       case 'ez-red':
//         return <EzRed />
//       case 'ez-shots':
//         return <EzShots />
//       case 'ez-story':
//         return <EasyStory />
//       case 'ez-tmp':
//         return <EzPage />
//       case 'ez-tmp2':
//         return <EzPage2 />
//       case 'ez-tmp3':
//         return <EzPage3 />
//       case 'ez-tmp4':
//         return <EzPage4 />
//       case 'ez-tmp5':
//         return <EzPage5 />
//       case 'ez-waitlist':
//         return <EzWaitlist />
//       case 'quotesai':
//         return <QuotesAI />
//       case 'designfast':
//         return <DesignfastPage />
//       case 'retro':
//         return <Retro />
//       case 'ez-ai':
//           return <EzAI />
//       case 'ez-beautiful':
//           return <EzBeautiful />
//       case 'ez-indigo':
//           return <EzIndigo />
//       default:
//         return <div>Component not found</div>
//     }
//   }

//   const getIcon = (name: string) => {
//     switch (name) {
//       case 'ez-blog': return <FileText className="mr-2 h-4 w-4" />
//       case 'ez-chatbot': return <MessageSquare className="mr-2 h-4 w-4" />
//       case 'ez-dashboard': return <LayoutDashboard className="mr-2 h-4 w-4" />
//       case 'ez-design': return <Palette className="mr-2 h-4 w-4" />
//       case 'ez-docs': return <Book className="mr-2 h-4 w-4" />
//       case 'ez-grids': return <Grid className="mr-2 h-4 w-4" />
//       case 'ez-landing-docs': return <Rocket className="mr-2 h-4 w-4" />
//       case 'ez-marketplace': return <ShoppingCart className="mr-2 h-4 w-4" />
//       case 'ez-newsletter': return <Mail className="mr-2 h-4 w-4" />
//       case 'ez-nextui': return <Box className="mr-2 h-4 w-4" />
//       case 'ez-notes': return <StickyNoteIcon className="mr-2 h-4 w-4" />
//       case 'ez-portfolio': return <Briefcase className="mr-2 h-4 w-4" />
//       case 'ez-red': return <Zap className="mr-2 h-4 w-4" />
//       case 'ez-shots': return <Camera className="mr-2 h-4 w-4" />
//       case 'ez-story': return <BookOpen className="mr-2 h-4 w-4" />
//       case 'ez-tmp': return <List className="mr-2 h-4 w-4" />
//       case 'ez-tmp2': return <List className="mr-2 h-4 w-4" />
//       case 'ez-tmp3': return <List className="mr-2 h-4 w-4" />
//       case 'ez-tmp4': return <List className="mr-2 h-4 w-4" />
//       case 'ez-tmp5': return <List className="mr-2 h-4 w-4" />
//       case 'ez-waitlist': return <Clock className="mr-2 h-4 w-4" />
//       case 'quotesai': return <Quote className="mr-2 h-4 w-4" />
//       case 'introduction': return <ChevronRight className="mr-2 h-4 w-4" />
//       case 'designfast': return <PaintBucketIcon className="mr-2 h-4 w-4" />
//       case 'retro': return <PuzzleIcon className="mr-2 h-4 w-4" />
//       case 'ez-ai': return <Airplay className="mr-2 h-4 w-4" />
//       case 'ez-beautiful': return <ShadowInnerIcon className="mr-2 h-4 w-4" />
//       case 'ez-indigo': return <CloudMoonRain className="mr-2 h-4 w-4" />
//       default: return <ChevronRight className="mr-2 h-4 w-4" />
//     }
//   }

//   const renderPaidBadge = (isNew?: boolean) => {
//     if (isNew) {
//       return <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">New</span>
//     }
//     return null
//   }

//   return (
//     <div className="flex flex h-screen">
//       {isLargeScreen ? (
//         <>
//        <ScrollArea className="w-64">
//        <div className="p-4">
//          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
//            Getting Started
//          </h2>
//          {components.map((item) => (
//            <Button
//              key={item.name}
//              variant={selectedItem === item.name ? 'secondary' : 'ghost'}
//              className="w-full justify-start"
//              onClick={() => handleItemClick(item.name)}
//            >
//              {getIcon(item.name)}
//              {item.name}
//              {renderPaidBadge(item.isNew)}
//            </Button>
//          ))}
//        </div>
//      </ScrollArea>
//      <div className="flex-1 overflow-auto">
//        {renderComponent(selectedItem)}
//      </div>
//      </>
//       ) : (
//         <div className="flex flex-col flex-1 overflow-auto h-screen">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" className="w-full justify-between px-4 py-2">
//                 <span className="flex items-center">
//                   {getIcon(selectedItem)}
//                   {selectedItem}
//                 </span>
//                 <Menu className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-screen max-h-[calc(100vh-200px)] overflow-auto h-screen">
//               {components.map((item) => (
//                 <DropdownMenuItem key={item.name} onSelect={() => handleItemClick(item.name)}>
//                   <span className="flex items-center w-full">
//                     {getIcon(item.name)}
//                     {item.name}
//                     {renderPaidBadge(item.isNew)}
//                   </span>
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <div className="flex-1 px-1 overflow-auto">
//             {renderComponent(selectedItem)}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }






// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Switch } from "@/components/ui/switch"
// import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import Link from 'next/link'
// import { Menu, Search, X, Grid, List, Info } from 'lucide-react'

// interface Template {
//   name: string
//   image: string
//   path: string
//   description: string
//   isNew?: boolean
//   category: string
//   difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
// }

// const templates: Template[] = [
//   { name: 'Introduction', image: 'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww', path: '/introduction', description: 'Get started with our templates', category: 'General', difficulty: 'Beginner' },
//   { name: 'EZ Beautiful', image: '/ez-beautiful.png', path: '/ez-beautiful', description: 'Design stunning interfaces', isNew: true, category: 'Design', difficulty: 'Beginner' },
//   { name: 'EZ Glow', image: '/ez-gloww.png', path: '/ez-glow', description: 'PTemplate for startups', isNew: true, category: 'Landing Page', difficulty: 'Beginner' },
//   { name: 'EZ Premium', image: '/ez-premium.png', path: '/ez-premium', description: 'Pre-built Boilerplate with Auth & Stripe', isNew: true, category: 'Productivity', difficulty: 'Advanced' },
//   { name: 'EZ Indigo', image: '/ez-indigo.png', path: '/ez-indigo', description: 'Create with an indigo theme', isNew: true, category: 'Design', difficulty: 'Beginner' },
//   { name: 'EZ Design', image: '/ez-design.png', path: '/ez-design', description: 'Create beautiful designs effortlessly', category: 'Design', difficulty: 'Beginner' },
//   { name: 'EZ Newsletter', image: '/ez-newsletter.png', path: '/ez-newsletter', description: 'Design eye-catching newsletters', isNew: true, category: 'Email', difficulty: 'Beginner' },
//   { name: 'EZ Tmp', image: '/eztmp1-img.png', path: '/ez-tmp', description: 'Versatile template for quick starts', isNew: true, category: 'General', difficulty: 'Advanced' },
//   { name: 'EZ Tmp2', image: '/ez-tmp2.png', path: '/ez-tmp2', description: 'Another versatile template option', category: 'General', difficulty: 'Intermediate' },
//   { name: 'EZ Tmp3', image: '/ez-tmp3.png', path: '/ez-tmp3', description: 'Third option for quick templating', isNew: true, category: 'General', difficulty: 'Intermediate' },
//   { name: 'EZ Tmp4', image: '/ez-tmp4.png', path: '/ez-tmp4', description: 'Fourth quick-start template', isNew: true, category: 'General', difficulty: 'Intermediate' },
//   { name: 'EZ Tmp5', image: '/ez-tmp5.png', path: '/ez-tmp5', description: 'Fifth option for rapid development', category: 'General', difficulty: 'Intermediate' },
//   { name: 'EZ NextUI', image: '/ez-nextui.png', path: '/ez-nextui', description: 'Leverage Next.js UI components', category: 'UI', difficulty: 'Intermediate' },
//   { name: 'EZ Notes', image: '/ez-notes.png', path: '/ez-notes', description: 'Create a sleek note-taking app', isNew: true, category: 'Productivity', difficulty: 'Advanced' },
//   { name: 'EZ Portfolio', image: '/ez-portfolio.png', path: '/ez-portfolio', description: 'Showcase your work beautifully', isNew: true, category: 'Portfolio', difficulty: 'Beginner' },
//   { name: 'EZ Red', image: '/ez-red.png', path: '/ez-red', description: 'Design with a vibrant red theme', category: 'Design', difficulty: 'Intermediate' },
//   { name: 'EZ Shots', image: '/ez-shots.png', path: '/ez-shots', description: 'Create stunning image galleries', category: 'Gallery', difficulty: 'Intermediate' },
//   { name: 'EZ Story', image: '/ez-story.png', path: '/ez-story', description: 'Tell your story with style', isNew: true, category: 'Blog', difficulty: 'Beginner' },
//   { name: 'EZ Dashboard', image: '/ez-dashboard.png', path: '/ez-dashboard', description: 'Build powerful dashboards', category: 'UI', difficulty: 'Intermediate' },
//   { name: 'EZ Docs', image: '/ez-docs.png', path: '/ez-docs', description: 'Craft comprehensive documentation', category: 'Documentation', difficulty: 'Advanced' },
//   { name: 'EZ Grids', image: '/ez-grids.png', path: '/ez-grids', description: 'Design with flexible grid layouts', isNew: true, category: 'UI', difficulty: 'Beginner' },
//   { name: 'EZ Landing Docs', image: '/ez-landing-docs.png', path: '/ez-landing-docs', description: 'Create engaging landing pages', isNew: true, category: 'Landing Page', difficulty: 'Intermediate' },
//   { name: 'EZ Marketplace', image: '/ez-marketplace.png', path: '/ez-marketplace', description: 'Build your own marketplace', category: 'E-commerce', difficulty: 'Advanced' },
//   { name: 'EZ Waitlist', image: '/easy-waitlist.png', path: '/ez-waitlist', description: 'Manage waitlists effectively', category: 'Marketing', difficulty: 'Beginner' },
//   { name: 'QuotesAI', image: '/ez-quotes.png', path: '/quotesai', description: 'Generate AI-powered quotes', category: 'AI', difficulty: 'Intermediate' },
//   { name: 'Designfast', image: '/ez-designfast.png', path: '/designfast', description: 'Rapid design prototyping', category: 'Design', difficulty: 'Beginner' },
//   { name: 'Retro', image: '/ez-retro.png', path: '/retro', description: 'Create with a retro aesthetic', category: 'Design', difficulty: 'Intermediate' },
//   { name: 'EZ Haze', image: '/ez-haze.png', path: '/ez-haze', description: 'Haze themed website', category: 'Landing Page', difficulty: 'Beginner' },
//   { name: 'EZ Blog', image: '/ez-blog.png', path: '/ez-blog', description: 'Create a stunning blog with ease', isNew: true, category: 'Blog', difficulty: 'Advanced' },
//   { name: 'EZ Chatbot', image: '/ez-chatbot.png', path: '/ez-chatbot', description: 'Implement a chatbot for your website', category: 'AI', difficulty: 'Beginner' },
//   { name: 'EZ AI', image: '/ez-ai.png', path: '/ez-ai', description: 'Implement AI features easily', isNew: true, category: 'AI', difficulty: 'Intermediate' },


// ]

// export default function Component() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([])
//   const [filteredTemplates, setFilteredTemplates] = useState(templates)
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [showNewOnly, setShowNewOnly] = useState(false)
//   const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])

//   const categories = Array.from(new Set(templates.map(template => template.category)))
//   const difficulties = ['Beginner', 'Intermediate', 'Advanced']
//   const [shouldAutoFocus, setShouldAutoFocus] = useState(true)
//   const searchInputRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setShouldAutoFocus(false)
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   useEffect(() => {
//     const filtered = templates.filter(template =>
//       template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategories.length === 0 || selectedCategories.includes(template.category)) &&
//       (selectedDifficulty.length === 0 || selectedDifficulty.includes(template.difficulty)) &&
//       (!showNewOnly || template.isNew)
//     )
//     setFilteredTemplates(filtered)
//   }, [searchTerm, selectedCategories, selectedDifficulty, showNewOnly])

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories(prev =>
//       prev.includes(category)
//         ? prev.filter(c => c !== category)
//         : [...prev, category]
//     )
//   }

//   const handleDifficultyChange = (difficulty: string) => {
//     setSelectedDifficulty(prev =>
//       prev.includes(difficulty)
//         ? prev.filter(d => d !== difficulty)
//         : [...prev, difficulty]
//     )
//   }


//   const handleSearchClick = () => {
//     setShouldAutoFocus(true)
//      // @ts-ignore
//     searchInputRef.current?.focus()
//   }

//   const Sidebar = () => (
//     <div className="space-y-6">
//       <div className="space-y-2">
//         {/* <h2 className="text-lg font-semibold">Search</h2> */}
//         {/* <div className="relative mt-10 lg:mt-0 md:mt-0">
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             type="text"
//             placeholder="Search templates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-8"
//             autoFocus
//             onBlur={(e) => e.target.focus()}
//           />
//         </div> */}
//          <div className="relative mt-10 lg:mt-0 md:mt-0">
//           <Search
//             className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"

//           />
//           <Input
//             ref={searchInputRef}
//             type="text"
//             placeholder="Search templates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-8"
//             autoFocus={shouldAutoFocus}
//             onClick={handleSearchClick}
//           />
//         </div>
//       </div>
//       <div className="space-y-2">
//         <h2 className="text-sm font-semibold">Categories</h2>
//         <ScrollArea className="h-[300px] pr-4">
//           {categories.map(category => (
//             <label key={category} className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent cursor-pointer">
//               <Checkbox
//               className='border-gray-300 dark:border-gray-500'
//                 checked={selectedCategories.includes(category)}
//                 onCheckedChange={() => handleCategoryChange(category)}
//               />
//               <span className="text-sm dark:text-gray-100 text-gray-800 leading-2 tracking-tight">{category}</span>
//             </label>
//           ))}
//         </ScrollArea>
//       </div>
//       <div className="space-y-2">
//         <h2 className="text-sm font-semibold">Difficulty</h2>
//         {difficulties.map(difficulty => (
//           <label key={difficulty} className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent cursor-pointer">
//             <Checkbox
//              className='border-gray-300 dark:border-gray-500'
//               checked={selectedDifficulty.includes(difficulty)}
//               onCheckedChange={() => handleDifficultyChange(difficulty)}
//             />
//             <span className="text-sm dark:text-gray-100 text-gray-800 leading-2 tracking-tight">{difficulty}</span>
//           </label>
//         ))}
//       </div>
//       {/* <div className="flex items-center space-x-2">
//         <Switch
//           checked={showNewOnly}
//           onCheckedChange={setShowNewOnly}
//           id="new-templates"
//         />
//         <label htmlFor="new-templates" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//           Show new templates only
//         </label>
//       </div> */}
//     </div>
//   )

//   return (
//     <div className="bg-background text-foreground min-h-screen">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-0">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold"></h1>
//             <div className="flex items-center space-x-4">
//               {/* @ts-ignore */}
//               <Tabs value={viewMode} onValueChange={(value: 'grid' | 'list') => setViewMode(value)}>
//                 <TabsList>
//                   <TabsTrigger value="grid"><Grid className="h-4 w-4" /></TabsTrigger>
//                   <TabsTrigger value="list"><List className="h-4 w-4" /></TabsTrigger>
//                 </TabsList>
//               </Tabs>
//               <Sheet>
//                 <SheetTrigger asChild>
//                   <Button variant="outline" size="icon" className="lg:hidden">
//                     <Menu className="h-6 w-6" />
//                     <span className="sr-only">Open filters</span>
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="left">
//                   <Sidebar />
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//           <div className="flex flex-col lg:flex-row gap-8">
//             <aside className="w-full lg:w-64 hidden lg:block">
//               <Sidebar />
//             </aside>
//             <main className="flex-1">
//               <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
//                 {filteredTemplates.map((template) => (
//                   <Link href={template.path} key={template.name}>
//                     <Card className={`bg-card hover:bg-accent transition-colors duration-300 overflow-hidden rounded-xl cursor-pointer group relative mb-5 ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}>
//                       <CardContent className={`p-0 ${viewMode === 'list' ? 'sm:w-1/3 w-full' : ''}`}>
//                         {viewMode === 'grid' || (viewMode === 'list' && window.innerWidth >= 640) ? (
//                           <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
//                         ) : null}
//                         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
//                           <span className="text-white text-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             View Details
//                           </span>
//                         </div>
//                       </CardContent>
//                       <CardFooter className={`flex flex-col items-start p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
//                         <div className="flex justify-between items-center w-full mb-2">
//                           <h2 className="text-md font-semibold leading-7 tracking-tight">{template.name}</h2>
//                           <TooltipProvider>
//                             <Tooltip>
//                               <TooltipTrigger asChild>
//                                 <Badge variant={template.difficulty === 'Beginner' ? 'default' : template.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>

//                                   {template.difficulty}
//                                 </Badge>
//                               </TooltipTrigger>
//                               <TooltipContent>
//                                 <p>Difficulty level</p>
//                               </TooltipContent>
//                             </Tooltip>
//                           </TooltipProvider>
//                         </div>
//                         <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
//                         <div className="flex justify-between items-center w-full">
//                           <span className="text-sm text-muted-foreground">{template.category}</span>
//                           {template.isNew && (
//                             <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
//                               New
//                             </Badge>
//                           )}
//                         </div>
//                       </CardFooter>
//                     </Card>
//                   </Link>
//                 ))}
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




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
  { name: 'EZ Portfolio', image: '/ez-portfolio.png', path: '/ez-portfolio', description: 'Showcase your work beautifully', isNew: true, category: 'Portfolio', difficulty: 'Beginner' },
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