// 'use client'

// import { useState, useEffect, useMemo } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Menu, FileText, Command, TextCursorIcon, EggFriedIcon, FileSignature, HexagonIcon, LucideSpeaker, ChevronRight, Highlighter, CreditCard } from 'lucide-react'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"
// import { BadgeIcon, DotFilledIcon, KeyboardIcon, Pencil1Icon, QuestionMarkCircledIcon, StarIcon } from '@radix-ui/react-icons'

// // Dynamic imports for better performance
// import dynamic from 'next/dynamic'
// import { AnimatePresence, motion } from 'framer-motion'

// const ComponentMap = {
//   'introduction': dynamic(() => import('../(docs)/introduction/page')),
//   'create-new': dynamic(() => import('../(docs)/create-new-component/page')),
//   'key button': dynamic(() => import('../(docs)/key-button-component/page')),
//   'sparkle button': dynamic(() => import('../(docs)/sparkle-button-component/page')),
//   'command search': dynamic(() => import('../(docs)/search-command-component/page')),
//   'glitch text': dynamic(() => import('../(docs)/glitch-text-component/page')),
//   'idea form': dynamic(() => import('../(docs)/idea-form-component/page')),
//   'firefly button': dynamic(() => import('../(docs)/firefly-button-component/page')),
//   'sign animation': dynamic(() => import('../(docs)/signature-animation-component/page')),
//   'feature card': dynamic(() => import('../(docs)/feature-card-component/page')),
//   'hexagon hero': dynamic(() => import('../(docs)/hexagon-hero-component/page')),
//   'animated badge': dynamic(() => import('../(docs)/animated-badge-component/page')),
//   'pixel cards': dynamic(() => import('../(docs)/pixel-card-component/page')),
//   'animated beam': dynamic(() => import('../(docs)/animated-beam-component/page')),
//   'highlighter': dynamic(() => import('../(docs)/highlighter/page')),
//   'transaction list': dynamic(() => import('../(docs)/transactionlist/page')),
// }

// const components = [
//   { name: 'introduction' },
//   { name: 'create-new', isNew: true },
//   { name: 'key button', isNew: true },
//   { name: 'sparkle button', isNew: true },
//   { name: 'command search', isNew: true },
//   { name: 'glitch text', isNew: true },
//   { name: 'idea form', isNew: true },
//   { name: 'firefly button', isNew: true },
//   { name: 'sign animation', isNew: true },
//   { name: 'feature card', isNew: true },
//   { name: 'hexagon hero', isNew: true },
//   { name: 'animated badge', isNew: true },
//   { name: 'pixel cards', isNew: true },
//   { name: 'animated beam', isNew: true },
//   {name: 'highlighter', isNew: true},
//   {name: 'transaction list', isNew: true}
// ] as const

// type ComponentName = typeof components[number]['name']

// const iconMap: Record<ComponentName, JSX.Element> = {
//   'introduction': <ChevronRight className="mr-2 size-4" />,
//   'create-new': <FileText className="mr-2 size-4" />,
//   'key button': <KeyboardIcon className="mr-2 size-4" />,
//   'sparkle button': <StarIcon className="mr-2 size-4" />,
//   'command search': <Command className="mr-2 size-4" />,
//   'glitch text': <TextCursorIcon className="mr-2 size-4" />,
//   'idea form': <QuestionMarkCircledIcon className="mr-2 size-4" />,
//   'firefly button': <EggFriedIcon className="mr-2 size-4" />,
//   'sign animation': <Pencil1Icon className="mr-2 size-4" />,
//   'feature card': <FileSignature className="mr-2 size-4" />,
//   'hexagon hero': <HexagonIcon className="mr-2 size-4" />,
//   'animated badge': <BadgeIcon className="mr-2 size-4" />,
//   'pixel cards': <DotFilledIcon className="mr-2 size-4" />,
//   'animated beam': <LucideSpeaker className="mr-2 size-4" />,
//   'highlighter': <Highlighter className='mr-2 size-4' />,
//   'transaction list': <CreditCard className='mr-2 size-4' />,
// }

// export default function TemplatePage() {
//   const [selectedItem, setSelectedItem] = useState<ComponentName>(() => {
//     if (typeof window === 'undefined') return 'create-new'
//     return (localStorage.getItem('selectedComponent') as ComponentName) || 'create-new'
//   })
//   const [isLargeScreen, setIsLargeScreen] = useState(true)

//   useEffect(() => {
//     const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('selectedComponent', selectedItem)
//   }, [selectedItem])

//   const SelectedComponent = useMemo(() => ComponentMap[selectedItem], [selectedItem])

//   const renderNewBadge = (isNew?: boolean) => 
//     isNew && <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">New</span>

//   const ComponentButton = ({ item }: { item: typeof components[number] }) => (
//     <Button
//       variant={selectedItem === item.name ? 'secondary' : 'ghost'}
//       className="w-full justify-start rounded-full"
//       onClick={() => setSelectedItem(item.name)}
//     >
//       {iconMap[item.name]}
//       {item.name}
//         {/* @ts-ignore */}
//       {renderNewBadge(item.isNew)}
//     </Button>
//   )

//   // const MobileMenu = () => (
//   //   <div className="flex h-screen flex-1 flex-col overflow-auto ">
//   //     <DropdownMenu >
//   //       <DropdownMenuTrigger asChild >
//   //         <Button variant="outline" className="w-full justify-between px-4 py-2">
//   //           <span className="flex items-center">
//   //             {iconMap[selectedItem]}
//   //             {selectedItem}
//   //           </span>
//   //           <Menu className="size-4" />
//   //         </Button>
//   //       </DropdownMenuTrigger>
//   //       <DropdownMenuContent className="max-h-[calc(100vh-200px)] w-screen overflow-auto">
//   //         {components.map(item => (
//   //           <DropdownMenuItem key={item.name} onSelect={() => setSelectedItem(item.name)}>
//   //             <span className="flex w-full items-center">
//   //               {iconMap[item.name]}
//   //               {item.name}
//   //               {/* @ts-ignore */}
//   //               {renderNewBadge(item.isNew)}
//   //             </span>
//   //           </DropdownMenuItem>
//   //         ))}
//   //       </DropdownMenuContent>
//   //     </DropdownMenu>
//   //     <div className="flex-1 overflow-auto px-1">
 
//   //         <SelectedComponent />

//   //     </div>

//   //   </div>
//   // )


//   const MobileMenu = () => (
//     <div className="flex h-screen flex-1 flex-col overflow-auto bg-background">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="outline"
//             className="m-4 w-auto justify-between rounded-[0.75rem] bg-white px-4 py-2 shadow-md dark:bg-background"
//           >
//             <span className="flex items-center">
//               {iconMap[selectedItem]}
//               {selectedItem}
//             </span>
//             <Menu className="size-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="max-h-[calc(100vh-200px)] w-[calc(100vw-2rem)] overflow-auto rounded-lg">
//           {components.map((item) => (
//             <DropdownMenuItem key={item.name} onSelect={() => setSelectedItem(item.name)}>
//               <span className="flex w-full items-center">
//                 {iconMap[item.name]}
//                 {item.name}
//                 {/* @ts-ignore */}
//                 {renderNewBadge(item.isNew)}
//               </span>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <div className="flex-1 overflow-auto p-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedItem}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//           >
//             <SelectedComponent />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
//   const DesktopLayout = () => (
//     <>
//       <ScrollArea className="w-64">
//         <div className="p-4">
//           <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Getting Started</h2>
//           {components.map(item => <ComponentButton key={item.name} item={item} />)}
//         </div>
//       </ScrollArea>
//       <div className="flex-1 overflow-auto">
//         <SelectedComponent />
//       </div>
//     </>
//   )

//   return (
//     <div className="flex h-screen">
//       {isLargeScreen ? <DesktopLayout /> : <MobileMenu />}
//     </div>
//   )
// }



'use client'

import { useState, useEffect, useMemo } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, FileText, Command, TextCursorIcon, EggFriedIcon, FileSignature, HexagonIcon, LucideSpeaker, ChevronRight, Highlighter, CreditCard, SmileIcon, LucideCloudMoonRain, CornerLeftUp, Beaker, LucideCloudLightning } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { BadgeIcon, CursorArrowIcon, DotFilledIcon, KeyboardIcon, Pencil1Icon, QuestionMarkCircledIcon, StarIcon, UploadIcon } from '@radix-ui/react-icons'

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
  'animated beam': dynamic(() => import('../(docs)/animated-beam-component/page')),
  'highlighter': dynamic(() => import('../(docs)/highlighter/page')),
  'transaction list': dynamic(() => import('../(docs)/transactionlist/page')),
  'file upload': dynamic(() => import('../(docs)/file-upload/page')),
  'reaction bar': dynamic(() => import('../(docs)/reaction-bar/page')),
  'colored button': dynamic(() => import('../(docs)/colored-button/page')),
  'confetti poll': dynamic(() => import('../(docs)/confetti-poll/page')),
  'tilt motion': dynamic(() => import('../(docs)/tilt-motion/page')),
  'beam card': dynamic(() => import('../(docs)/beam-card/page')),
}

const components = [
  { name: 'introduction', category: 'getting-started' },
  { name: 'create-new', category: 'navigation', isNew: false },
  { name: 'key button', category: 'buttons', isNew: false },
  { name: 'sparkle button', category: 'buttons', isNew: true },
  { name: 'firefly button', category: 'buttons', isNew: true },
  { name: 'command search', category: 'navigation', isNew: false },
  { name: 'glitch text', category: 'typography', isNew: false },
  { name: 'idea form', category: 'forms', isNew: false },
  { name: 'sign animation', category: 'animations', isNew: false },
  { name: 'feature card', category: 'cards', isNew: true },
  { name: 'hexagon hero', category: 'layout', isNew: false },
  { name: 'animated badge', category: 'badge', isNew: false },
  { name: 'pixel cards', category: 'cards', isNew: true },
  { name: 'animated beam', category: 'animations', isNew: true },
  { name: 'highlighter', category: 'typography', isNew: true },
  { name: 'transaction list', category: 'data-display', isNew: true },
  { name: 'file upload', category: 'forms', isNew: true },
  { name: 'reaction bar', category: 'cards', isNew: true },
  { name: 'colored button', category: 'buttons', isNew: true },
  { name: 'confetti poll', category: 'cards', isNew: true },
  { name: 'tilt motion', category: 'cards', isNew: true },
  { name: 'beam card', category: 'cards', isNew: true }
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
  'animated beam': <LucideSpeaker className="mr-2 size-4" />,
  'highlighter': <Highlighter className='mr-2 size-4' />,
  'transaction list': <CreditCard className='mr-2 size-4' />,
  'file upload': <UploadIcon className='mr-2 size-4' />,
  'reaction bar': <SmileIcon className='mr-2 size-4' />,
  'colored button': <LucideCloudMoonRain className='mr-2 size-4' />,
  'confetti poll': <CornerLeftUp className='mr-2 size-4' />,
  'tilt motion': <CursorArrowIcon className='mr-2 size-4' />,
  'beam card': <LucideCloudLightning className='mr-2 size-4' />,
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
      className="w-full justify-start rounded-full"
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
          <Button variant="outline" className="w-[95%] justify-between px-4 py-2 felx mx-auto rounded-[0.75rem]">
            <span className="flex items-center">
              {iconMap[selectedItem]}
              {selectedItem}
            </span>
            <Menu className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-[450px] w-screen overflow-auto">
          {Object.entries(
            components.reduce((acc, component) => {
              const category = component.category
              if (!acc[category]) {
                 // @ts-ignore
                acc[category] = []
              }
               // @ts-ignore
              acc[category].push(component)
              return acc
            }, {} as Record<string, typeof components>)
          ).sort(([a], [b]) => 
            a === 'getting-started' ? -1 : b === 'getting-started' ? 1 : a.localeCompare(b)
          ).map(([category, items]) => (
            <div key={category}>
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                {category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </div>
              {items.map(item => (
                <DropdownMenuItem key={item.name} onSelect={() => setSelectedItem(item.name)}>
                  <span className="flex w-full items-center">
                    {iconMap[item.name]}
                    {item.name}
                    {/* @ts-ignore */}
                    {renderNewBadge(item.isNew)}
                  </span>
                </DropdownMenuItem>
              ))}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex-1 overflow-auto px-1">
        <SelectedComponent />
      </div>
    </div>
  )

  const DesktopLayout = () => {
    const groupedComponents = useMemo(() => {
      const groups = components.reduce((acc, component) => {
        const category = component.category
        if (!acc[category]) {
           // @ts-ignore
          acc[category] = []
        }
        // @ts-ignore
        acc[category].push(component)
        return acc
      }, {} as Record<string, typeof components>)
      
      return Object.entries(groups).sort(([a], [b]) => 
        a === 'getting-started' ? -1 : b === 'getting-started' ? 1 : a.localeCompare(b)
      )
    }, [])

    return (
      <>
        <ScrollArea className="w-64">
          <div className="p-4">
            {groupedComponents.map(([category, items]) => (
              <div key={category} className="mb-4">
                <h2 className="mb-2 px-2 text-sm font-semibold tracking-tight">
                  {category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h2>
                {items.map(item => 
                  <ComponentButton key={item.name} item={item} />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex-1 overflow-auto">
          <SelectedComponent />
        </div>
      </>
    )
  }

  return (
    <div className="flex h-screen">
      {isLargeScreen ? <DesktopLayout /> : <MobileMenu />}
    </div>
  )
}