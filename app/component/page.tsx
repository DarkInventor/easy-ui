
// 'use client'

// import { useState, useEffect } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon, LucideGitBranchPlus, KeyIcon, Command, TextCursorIcon, EggFriedIcon, FileSignature, HexagonIcon, LucideSpeaker } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"

// import EzBlog from '../(docs)/ez-blog/page'
// import IntroductionPage from '../(docs)/introduction/page'
// import CreateNewComponentt from '../(docs)/create-new-component/page'
// // import LaunchpadComponent from '../(docs)/launchpad-component/page'
// import KeyButton from '@/components/easyui/key-button'
// import { BadgeIcon, DotFilledIcon, KeyboardIcon, Pencil1Icon, QuestionMarkCircledIcon, QuestionMarkIcon, StarFilledIcon, StarIcon } from '@radix-ui/react-icons'
// import SparkleButton from '@/components/easyui/sparkle-button'
// import KeyButtonComponent from '../(docs)/key-button-component/page'
// import SparkleButtonComponent from '../(docs)/sparkle-button-component/page'
// import { CommandShortcut } from '@/components/ui/command'
// import SearchCommand from '@/components/easyui/search-command'
// import SearchCommandComponent from '../(docs)/search-command-component/page'
// import GlitchTextComponent from '../(docs)/glitch-text-component/page'
// import IdeaFormComponent from '../(docs)/idea-form-component/page'
// import FireflyButton from '@/components/easyui/firefly-button'
// import FireFlyButtonComponent from '../(docs)/firefly-button-component/page'
// import SignatureAnimationComponent from '../(docs)/signature-animation-component/page'
// import FeatureCard from '@/components/easyui/feature-card'
// import Features from '../features/page'
// import FeatureCardComponent from '../(docs)/feature-card-component/page'
// import HexagonHeroComponent from '../(docs)/hexagon-hero-component/page'
// import AnimatedBadgeComponent from '../(docs)/animated-badge-component/page'
// import PixelCardComponent from '../(docs)/pixel-card-component/page'
// import AnimatedBeamComponent from '../(docs)/animated-beam-component/page'

// interface Item {
//   name: string;
//   isNew?: boolean;
//   isPaid?: boolean;
// }

// const components: Item[] = [
//   { name: 'introduction' },
//   { name: 'create-new', isNew: true },
//   // { name: 'launchpad', isNew: true},
//   { name: 'key button', isNew: true},
//   { name: 'sparkle button', isNew: true},
//   { name: 'command search', isNew: true},
//   { name: 'glitch text', isNew: true},
//   { name: 'idea form', isNew: true},
//   { name: 'firefly button', isNew: true},
//   { name: 'sign animation', isNew: true},
//   { name: 'feature card', isNew: true},
//   { name: 'hexagon hero', isNew: true},
//   { name: 'animated badge', isNew: true},
//   { name: 'pixel cards', isNew: true},
//   { name: 'animated beam', isNew: true},
// ]

// export default function TemplatePage() {
//   const [selectedItem, setSelectedItem] = useState('create-new')
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
//       case 'create-new':
//         return <CreateNewComponentt />
//       // case 'launchpad':
//       //   return <LaunchpadComponent />
//       case 'key button':
//           return <KeyButtonComponent />
//       case 'sparkle button':
//           return <SparkleButtonComponent />
//       case 'command search':
//           return <SearchCommandComponent />
//       case 'glitch text':
//           return <GlitchTextComponent />
//       case 'idea form':
//             return <IdeaFormComponent />
//       case 'firefly button':
//             return <FireFlyButtonComponent />
//       case 'sign animation':
//             return <SignatureAnimationComponent />
//       case 'feature card':
//             return <FeatureCardComponent />
//       case 'hexagon hero':
//             return <HexagonHeroComponent />
//       case 'animated badge':
//             return <AnimatedBadgeComponent />
//       case 'pixel cards':
//             return <PixelCardComponent />
//       case 'animated beam':
//               return <AnimatedBeamComponent />

//       default:
//         return <div>Component not found</div>
//     }
//   }

//   const getIcon = (name: string) => {
//     switch (name) {
//       case 'create-new': return <FileText className="mr-2 h-4 w-4" />
//       // case 'launchpad': return <LucideGitBranchPlus className="mr-2 h-4 w-4" />
//       case 'key button': return <KeyboardIcon className="mr-2 h-4 w-4" />
//       case 'sparkle button': return <StarIcon className="mr-2 h-4 w-4" />
//       case 'command search': return <Command className="mr-2 h-4 w-4" />
//       case 'glitch text': return <TextCursorIcon className="mr-2 h-4 w-4" />
//       case 'idea form': return <QuestionMarkCircledIcon className="mr-2 h-4 w-4" />
//       case 'firefly button': return <EggFriedIcon className="mr-2 h-4 w-4" />
//       case 'sign animation': return <Pencil1Icon className="mr-2 h-4 w-4" />
//       case 'feature card': return <FileSignature className="mr-2 h-4 w-4" />
//       case 'hexagon hero': return <HexagonIcon className="mr-2 size-4" />
//       case 'animated badge': return <BadgeIcon className="mr-2 size-4" />
//       case 'pixel cards': return <DotFilledIcon className="mr-2 size-4" />
//       case 'animated beam': return <LucideSpeaker className="mr-2 size-4" />
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

// import { useState, useEffect } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon, LucideGitBranchPlus, KeyIcon, Command, TextCursorIcon, EggFriedIcon, FileSignature, HexagonIcon, LucideSpeaker } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"

// import EzBlog from '../(docs)/ez-blog/page'
// import IntroductionPage from '../(docs)/introduction/page'
// import CreateNewComponentt from '../(docs)/create-new-component/page'
// import KeyButton from '@/components/easyui/key-button'
// import { BadgeIcon, DotFilledIcon, KeyboardIcon, Pencil1Icon, QuestionMarkCircledIcon, QuestionMarkIcon, StarFilledIcon, StarIcon } from '@radix-ui/react-icons'
// import SparkleButton from '@/components/easyui/sparkle-button'
// import KeyButtonComponent from '../(docs)/key-button-component/page'
// import SparkleButtonComponent from '../(docs)/sparkle-button-component/page'
// import { CommandShortcut } from '@/components/ui/command'
// import SearchCommand from '@/components/easyui/search-command'
// import SearchCommandComponent from '../(docs)/search-command-component/page'
// import GlitchTextComponent from '../(docs)/glitch-text-component/page'
// import IdeaFormComponent from '../(docs)/idea-form-component/page'
// import FireflyButton from '@/components/easyui/firefly-button'
// import FireFlyButtonComponent from '../(docs)/firefly-button-component/page'
// import SignatureAnimationComponent from '../(docs)/signature-animation-component/page'
// import FeatureCard from '@/components/easyui/feature-card'
// import Features from '../features/page'
// import FeatureCardComponent from '../(docs)/feature-card-component/page'
// import HexagonHeroComponent from '../(docs)/hexagon-hero-component/page'
// import AnimatedBadgeComponent from '../(docs)/animated-badge-component/page'
// import PixelCardComponent from '../(docs)/pixel-card-component/page'
// import AnimatedBeamComponent from '../(docs)/animated-beam-component/page'

// interface Item {
//   name: string;
//   isNew?: boolean;
//   isPaid?: boolean;
// }

// const components: Item[] = [
//   { name: 'introduction' },
//   { name: 'create-new', isNew: true },
//   { name: 'key button', isNew: true},
//   { name: 'sparkle button', isNew: true},
//   { name: 'command search', isNew: true},
//   { name: 'glitch text', isNew: true},
//   { name: 'idea form', isNew: true},
//   { name: 'firefly button', isNew: true},
//   { name: 'sign animation', isNew: true},
//   { name: 'feature card', isNew: true},
//   { name: 'hexagon hero', isNew: true},
//   { name: 'animated badge', isNew: true},
//   { name: 'pixel cards', isNew: true},
//   { name: 'animated beam', isNew: true},
// ]

// const STORAGE_KEY = 'selectedComponent'

// export default function TemplatePage() {
//   const [selectedItem, setSelectedItem] = useState(() => {
//     // Initialize state from localStorage if available, otherwise use default
//     if (typeof window !== 'undefined') {
//       const saved = localStorage.getItem(STORAGE_KEY)
//       return saved || 'create-new'
//     }
//     return 'create-new'
//   })
//   const [isLargeScreen, setIsLargeScreen] = useState(true)

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024)
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)

//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   // Save to localStorage whenever selectedItem changes
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, selectedItem)
//   }, [selectedItem])

//   const handleItemClick = (item: string) => {
//     setSelectedItem(item)
//   }

//   const renderComponent = (componentName: string) => {
//     switch (componentName) {
//       case 'introduction':
//         return <IntroductionPage />
//       case 'create-new':
//         return <CreateNewComponentt />
//       case 'key button':
//           return <KeyButtonComponent />
//       case 'sparkle button':
//           return <SparkleButtonComponent />
//       case 'command search':
//           return <SearchCommandComponent />
//       case 'glitch text':
//           return <GlitchTextComponent />
//       case 'idea form':
//             return <IdeaFormComponent />
//       case 'firefly button':
//             return <FireFlyButtonComponent />
//       case 'sign animation':
//             return <SignatureAnimationComponent />
//       case 'feature card':
//             return <FeatureCardComponent />
//       case 'hexagon hero':
//             return <HexagonHeroComponent />
//       case 'animated badge':
//             return <AnimatedBadgeComponent />
//       case 'pixel cards':
//             return <PixelCardComponent />
//       case 'animated beam':
//               return <AnimatedBeamComponent />
//       default:
//         return <div>Component not found</div>
//     }
//   }

//   const getIcon = (name: string) => {
//     switch (name) {
//       case 'create-new': return <FileText className="mr-2 h-4 w-4" />
//       case 'key button': return <KeyboardIcon className="mr-2 h-4 w-4" />
//       case 'sparkle button': return <StarIcon className="mr-2 h-4 w-4" />
//       case 'command search': return <Command className="mr-2 h-4 w-4" />
//       case 'glitch text': return <TextCursorIcon className="mr-2 h-4 w-4" />
//       case 'idea form': return <QuestionMarkCircledIcon className="mr-2 h-4 w-4" />
//       case 'firefly button': return <EggFriedIcon className="mr-2 h-4 w-4" />
//       case 'sign animation': return <Pencil1Icon className="mr-2 h-4 w-4" />
//       case 'feature card': return <FileSignature className="mr-2 h-4 w-4" />
//       case 'hexagon hero': return <HexagonIcon className="mr-2 size-4" />
//       case 'animated badge': return <BadgeIcon className="mr-2 size-4" />
//       case 'pixel cards': return <DotFilledIcon className="mr-2 size-4" />
//       case 'animated beam': return <LucideSpeaker className="mr-2 size-4" />
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
//           <ScrollArea className="w-64">
//             <div className="p-4">
//               <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
//                 Getting Started
//               </h2>
//               {components.map((item) => (
//                 <Button
//                   key={item.name}
//                   variant={selectedItem === item.name ? 'secondary' : 'ghost'}
//                   className="w-full justify-start"
//                   onClick={() => handleItemClick(item.name)}
//                 >
//                   {getIcon(item.name)}
//                   {item.name}
//                   {renderPaidBadge(item.isNew)}
//                 </Button>
//               ))}
//             </div>
//           </ScrollArea>
//           <div className="flex-1 overflow-auto">
//             {renderComponent(selectedItem)}
//           </div>
//         </>
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






'use client'

import { useState, useEffect, useMemo } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, FileText, Command, TextCursorIcon, EggFriedIcon, FileSignature, HexagonIcon, LucideSpeaker, ChevronRight } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { BadgeIcon, DotFilledIcon, KeyboardIcon, Pencil1Icon, QuestionMarkCircledIcon, StarIcon } from '@radix-ui/react-icons'

// Dynamic imports for better performance
import dynamic from 'next/dynamic'

const ComponentMap = {
  'introduction': dynamic(() => import('../(docs)/introduction/page')),
  'create-new': dynamic(() => import('../(docs)/create-new-component/page')),
  'key button': dynamic(() => import('../(docs)/key-button-component/page')),
  'sparkle button': dynamic(() => import('../(docs)/sparkle-button-component/page')),
  'command search': dynamic(() => import('../(docs)/search-command-component/page')),
  'glitch text': dynamic(() => import('../(docs)/glitch-text-component/page')),
  'idea form': dynamic(() => import('../(docs)/idea-form-component/page')),
  'firefly button': dynamic(() => import('../(docs)/firefly-button-component/page')),
  'sign animation': dynamic(() => import('../(docs)/signature-animation-component/page')),
  'feature card': dynamic(() => import('../(docs)/feature-card-component/page')),
  'hexagon hero': dynamic(() => import('../(docs)/hexagon-hero-component/page')),
  'animated badge': dynamic(() => import('../(docs)/animated-badge-component/page')),
  'pixel cards': dynamic(() => import('../(docs)/pixel-card-component/page')),
  'animated beam': dynamic(() => import('../(docs)/animated-beam-component/page'))
}

const components = [
  { name: 'introduction' },
  { name: 'create-new', isNew: true },
  { name: 'key button', isNew: true },
  { name: 'sparkle button', isNew: true },
  { name: 'command search', isNew: true },
  { name: 'glitch text', isNew: true },
  { name: 'idea form', isNew: true },
  { name: 'firefly button', isNew: true },
  { name: 'sign animation', isNew: true },
  { name: 'feature card', isNew: true },
  { name: 'hexagon hero', isNew: true },
  { name: 'animated badge', isNew: true },
  { name: 'pixel cards', isNew: true },
  { name: 'animated beam', isNew: true }
] as const

type ComponentName = typeof components[number]['name']

const iconMap: Record<ComponentName, JSX.Element> = {
  'introduction': <ChevronRight className="mr-2 size-4" />,
  'create-new': <FileText className="mr-2 size-4" />,
  'key button': <KeyboardIcon className="mr-2 size-4" />,
  'sparkle button': <StarIcon className="mr-2 size-4" />,
  'command search': <Command className="mr-2 size-4" />,
  'glitch text': <TextCursorIcon className="mr-2 size-4" />,
  'idea form': <QuestionMarkCircledIcon className="mr-2 size-4" />,
  'firefly button': <EggFriedIcon className="mr-2 size-4" />,
  'sign animation': <Pencil1Icon className="mr-2 size-4" />,
  'feature card': <FileSignature className="mr-2 size-4" />,
  'hexagon hero': <HexagonIcon className="mr-2 size-4" />,
  'animated badge': <BadgeIcon className="mr-2 size-4" />,
  'pixel cards': <DotFilledIcon className="mr-2 size-4" />,
  'animated beam': <LucideSpeaker className="mr-2 size-4" />
}

export default function TemplatePage() {
  const [selectedItem, setSelectedItem] = useState<ComponentName>(() => {
    if (typeof window === 'undefined') return 'create-new'
    return (localStorage.getItem('selectedComponent') as ComponentName) || 'create-new'
  })
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedComponent', selectedItem)
  }, [selectedItem])

  const SelectedComponent = useMemo(() => ComponentMap[selectedItem], [selectedItem])

  const renderNewBadge = (isNew?: boolean) => 
    isNew && <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">New</span>

  const ComponentButton = ({ item }: { item: typeof components[number] }) => (
    <Button
      variant={selectedItem === item.name ? 'secondary' : 'ghost'}
      className="w-full justify-start"
      onClick={() => setSelectedItem(item.name)}
    >
      {iconMap[item.name]}
      {item.name}
        {/* @ts-ignore */}
      {renderNewBadge(item.isNew)}
    </Button>
  )

  const MobileMenu = () => (
    <div className="flex h-screen flex-1 flex-col overflow-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between px-4 py-2">
            <span className="flex items-center">
              {iconMap[selectedItem]}
              {selectedItem}
            </span>
            <Menu className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-[calc(100vh-200px)] w-screen overflow-auto">
          {components.map(item => (
            <DropdownMenuItem key={item.name} onSelect={() => setSelectedItem(item.name)}>
              <span className="flex w-full items-center">
                {iconMap[item.name]}
                {item.name}
                {/* @ts-ignore */}
                {renderNewBadge(item.isNew)}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-1 overflow-auto px-1">
        <SelectedComponent />
      </div>
    </div>
  )

  const DesktopLayout = () => (
    <>
      <ScrollArea className="w-64">
        <div className="p-4">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Getting Started</h2>
          {components.map(item => <ComponentButton key={item.name} item={item} />)}
        </div>
      </ScrollArea>
      <div className="flex-1 overflow-auto">
        <SelectedComponent />
      </div>
    </>
  )

  return (
    <div className="flex h-screen">
      {isLargeScreen ? <DesktopLayout /> : <MobileMenu />}
    </div>
  )
}