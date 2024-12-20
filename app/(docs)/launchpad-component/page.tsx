"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, ClipboardList, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"

const applications = [
    { id: 1, name: 'Finder', icon: '/Option-1.svg', category: 'System' },
    { id: 2, name: 'Apple TV', icon: '/Option-2.svg', category: 'Entertainment' },
    { id: 3, name: 'Settings', icon: '/Option-3.svg', category: 'System' },
    { id: 4, name: 'Clock', icon: '/Option-4.svg', category: 'Productivity' },
    { id: 5, name: 'Home', icon: '/Option.svg', category: 'Productivity' },
    { id: 6, name: 'App Store', icon: '/AppStore-60x60@3x.svg', category: 'Creativity' },
    { id: 7, name: 'iBooks', icon: '/Books-60x60@3x 3.svg', category: 'Productivity' },
    { id: 8, name: 'Camera', icon: '/Camera-Light-60x60@3x.svg', category: 'Travel' },
    { id: 9, name: 'Facetime', icon: '/FaceTime-Light-60x60@3x.svg', category: 'System' },
    { id: 10, name: 'Files', icon: '/Files-Light-60x60@3x.svg', category: 'System' },
    { id: 11, name: 'Maps', icon: '/Maps-60x60@3x 4.svg', category: 'Travel' },
    { id: 12, name: 'Reminders', icon: '/Reminders-60x60@3x 2.png', category: 'Productivity' },
  ];
  
function LaunchpadComponent() {
  const [key, setKey] = React.useState(0); // State to trigger re-render

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Launchpad</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Click <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-top-close inline-block"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/></svg> to open</CardDescription>
      </div>
      
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none  bg-transparent p-0">
            <TabsTrigger value="preview" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            <span className="text-balance text-lg text-muted-foreground">Click <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-top-close inline-block"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/></svg> to open</span>
            <LaunchPad applications={applications} />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            <h2 className="font-semibold mt-12 scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 leading-7">
              Installation
            </h2>
            <p className="font-semibold mt-5 tracking-tight leading-7">Step 1: Copy and paste the following code into your<span className="font-normal italic"> components/launchpad.tsx</span></p>
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-sm">
              <button onClick={() => { 
                      const codeElement = document.getElementById('codeBlock');
                      const codeToCopy = codeElement ? codeElement.textContent : '';
                      // @ts-ignore
                      navigator.clipboard.writeText(codeToCopy).then(() => {
                        alert('Code copied to clipboard!');
                      });
                    }}
                    className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg px-3 py-1 text-white" title="Copy code to clipboard">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5C6.895 5 6 5.895 6 7v10c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2H8zm0 0V3c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v2m-6 4h4" />
                    </svg> */}
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
              </button>
              <pre className="ml-2 py-2 pb-2 pl-2 font-sm min-h-[600px] lg:min-h-[600px] sm:min-h-[300px]"><code id="codeBlock"  className="text-left language-js text-sm ">
{"\"use client\";import React, { useState, useEffect } from 'react';import { motion, AnimatePresence } from 'framer-motion';import { Search, ChevronLeft, X } from 'lucide-react';import { Input } from \"@/components/ui/input\";import { Button } from \"@/components/ui/button\";import { ScrollArea } from \"@/components/ui/scroll-area\";import { Tabs, TabsList, TabsTrigger } from \"@/components/ui/tabs\";interface Application {  id: number;  name: string;  icon: string;  category: string;}interface LaunchPadProps {  applications: Application[];}const LaunchPad: React.FC<LaunchPadProps> = ({ applications }) => {  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);  const [searchTerm, setSearchTerm] = useState('');  const [filteredApps, setFilteredApps] = useState<Application[]>([]);  const [selectedCategory, setSelectedCategory] = useState('All');  const [selectedApp, setSelectedApp] = useState<Application | null>(null);  // Categories derived from applications props for dynamic categories handling  const categories = Array.from(new Set(applications.map(app => app.category).concat('All')));  useEffect(() => {    const filtered = applications.filter(app =>      app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&      (selectedCategory === 'All' || app.category === selectedCategory)    )    setFilteredApps(filtered)  }, [searchTerm, selectedCategory, applications])  const toggleLaunchpad = () => setIsLaunchpadOpen(!isLaunchpadOpen)//   @ts-ignore  const handleAppClick = (app) => {    setSelectedApp(app)  }  const handleBackClick = () => {    setSelectedApp(null)    setSearchTerm('')    setSelectedCategory('All')  }  return (    <div className=\"h-[screen] overflow-hidden absolute bg-white dark:bg-black\">      <Button        onClick={toggleLaunchpad}        className=\"fixed bottom-20 left-1/2 transform -translate-x-1/2 rounded-xl bg-white dark:bg-black text-black dark:text-white hover:bg-gray-200 md:bottom-20 md:left-1/2 md:transform md:-translate-x-1/2\"        size=\"icon\"      >        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" className=\"lucide lucide-panel-top-close\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"m9 16 3-3 3 3\"/></svg>      </Button>      <AnimatePresence>        {isLaunchpadOpen && (          <motion.div            initial={{ opacity: 0 }}            animate={{ opacity: 1 }}            exit={{ opacity: 0 }}            transition={{ duration: 0.2 }}            className=\"fixed inset-0 bg-transparent flex flex-col items-center pt-20 top-10 backdrop-blur sm:pt-20 sm:top-10\"            onClick={toggleLaunchpad}          >            <motion.div              initial={{ opacity: 0, y: -20 }}              animate={{ opacity: 1, y: 0 }}              transition={{ delay: 0.1 }}              className=\"w-full max-w-xl px-4 sm:max-w-2xl sm:px-4\"              onClick={(e) => e.stopPropagation()}            >              <div className=\"relative mb-6 flex items-center\">                <Button                  onClick={handleBackClick}                  variant=\"ghost\"                  size=\"icon\"                  className=\"mr-2\"                >                  <ChevronLeft className=\"h-6 w-6 text-gray-400 dark:text-gray/20\" />                </Button>                <Input                  type=\"text\"                  placeholder=\"Search applications...\"                  value={searchTerm}                  onChange={(e) => setSearchTerm(e.target.value)}                  className=\"w-full bg-gray-100 dark:bg-gray-800 backdrop-blur-lg border-none text-black dark:text-white\"                />                <Search className=\"absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground\" />              </div>              {!selectedApp && (                <Tabs defaultValue=\"All\" className=\"w-full mb-6 bg-transparent dark:bg-background/50 border-none dark:text-white text-black border-none rounded-lg\">                  <TabsList className=\"flex justify-start overflow-x-auto border-none gap-2 rounded-full bg-transparent\">                    {categories.map((category) => (                      <TabsTrigger                        key={category}                        value={category}                        onClick={() => setSelectedCategory(category)}                        className={`leading-7 tracking-tight w-auto border-none text-sm ${category === selectedCategory ? 'dark:bg-gray-700' : ''}`}                      >                        {category}                      </TabsTrigger>                    ))}                  </TabsList>                </Tabs>              )}            </motion.div>             <ScrollArea className=\"w-full max-w-2xl h-[calc(100vh-200px)]\">               <motion.div                className=\"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 p-4\"                initial={{ opacity: 0, scale: 0.9 }}                animate={{ opacity: 1, scale: 1 }}                transition={{ delay: 0.2 }}                onClick={(e) => e.stopPropagation()}              >                <AnimatePresence>                  {selectedApp ? (                    <motion.div                      key=\"app-details\"                      initial={{ opacity: 0 }}                      animate={{ opacity: 1 }}                      exit={{ opacity: 0 }}                      className=\"col-span-full flex flex-col items-center text-black dark:text-white\"                    >                      <div className=\"w-22 h-22 flex items-center justify-center rounded-3xl text-black dark:text-white mb-4\">                        <img src={selectedApp.icon} alt={selectedApp.name} className=\"w-24 h-24 \" />                      </div>                      <h2 className=\"text-2xl font-bold mb-2 leading-7 tracking-tigh text-black dark:text-white\">{selectedApp.name}</h2>                      <p className=\"text-lg mb-4 leading-7 tracking-tight text-black dark:text-white\">{selectedApp.category}</p>                      <Button className=\"bg-[#0B8CE9] text-white text-sm font-semibold\" variant=\"sm\" onClick={() => alert(`Launching ${selectedApp.name}`)}>                        Open {selectedApp.name}                      </Button>                    </motion.div>                  ) : (                    filteredApps.map((app) => (                      <motion.div                        key={app.id}                        layout                        initial={{ opacity: 0, scale: 0.8 }}                        animate={{ opacity: 1, scale: 1 }}                        exit={{ opacity: 0, scale: 0.8 }}                        transition={{ duration: 0.2 }}                        className=\"flex flex-col items-center\"                        onClick={() => handleAppClick(app)}                      >                        <motion.div                          className=\"w-20 h-20 flex items-center justify-center rounded-2xl border-none rounded-lg  cursor-pointer text-black dark:text-white\"                          whileHover={{ scale: 1.1 }}                          whileTap={{ scale: 0.95 }}                        >                          <img src={app.icon} alt={app.name} className=\"w-30 h-30 border-none rounded-lg text-black dark:text-white\" />                        </motion.div>                        <motion.p className=\"mt-2 text-xs text-center tracking-tight text-gray-700 dark:text-white font-semibold\">                          {app.name}                        </motion.p>                      </motion.div>                    ))                  )}                </AnimatePresence>              </motion.div>            </ScrollArea>            <Button              onClick={toggleLaunchpad}              variant=\"ghost\"              size=\"icon\"              className=\"relative bottom-20 text-black bg-gray-200 sm:relative sm:bottom-20\"            >              <X className=\"h-6 w-6\" />            </Button>          </motion.div>        )}      </AnimatePresence>    </div>  );};export default LaunchPad;"}
                  </code></pre>
                </div>
              </div>

              <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
              <p className="font-semibold mt-5 tracking-tight leading-7">Step 2: Update the import paths and run this code.</p>
                <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
               
                <button onClick={() => { 
                      const codeElement = document.getElementById('codeBlock2');
                      const copycode2 = codeElement ? codeElement.textContent : '';
                      if (copycode2) {
                        navigator.clipboard.writeText(copycode2).then(() => {
                          alert('Code copied to clipboard!');
                        });
                      }
                    }}
                    className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" title="Copy code to clipboard">
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" />
              </button>
                 
                  <pre className="ml-2 py-2 pb-2 pl-2 font-sm"><code id="codeBlock2" className="text-left language-js text-sm"> 
{`import LaunchPad from '@/components/launchpad'; // Adjust the import path as necessary
import React from 'react'; 

const applications = [
  { id: 1, name: 'Finder', icon: '/Option-1.svg', category: 'System' },
  { id: 2, name: 'Apple TV', icon: '/Option-2.svg', category: 'Entertainment' },
  { id: 3, name: 'Settings', icon: '/Option-3.svg', category: 'System' },
  { id: 4, name: 'Clock', icon: '/Option-4.svg', category: 'Productivity' },
  { id: 5, name: 'Home', icon: '/Option.svg', category: 'Productivity' },
  { id: 6, name: 'App Store', icon: '/AppStore-60x60@3x.svg', category: 'Creativity' },
  { id: 7, name: 'iBooks', icon: '/Books-60x60@3x 3.svg', category: 'Productivity' },
  { id: 8, name: 'Camera', icon: '/Camera-Light-60x60@3x.svg', category: 'Travel' },
  { id: 9, name: 'Facetime', icon: '/FaceTime-Light-60x60@3x.svg', category: 'System' },
  { id: 10, name: 'Files', icon: '/Files-Light-60x60@3x.svg', category: 'System' },
  { id: 11, name: 'Maps', icon: '/Maps-60x60@3x 4.svg', category: 'Travel' },
  { id: 12, name: 'Reminders', icon: '/Reminders-60x60@3x 2.png', category: 'Productivity' },
];

const HomePage = () => {
  return <LaunchPad applications={applications} />;
};

export default HomePage;
`}
            {/* </div> */}
            </code></pre>
            </div>
          </div>

          <div className="mt-5 px-4 ml-3 lg:ml-1 md:lg-3">
      <h2 className="text-2xl font-semibold mb-5 tracking-tight leading-7 border-b dark:border-gray-700 pb-2 scroll-m-20">Props</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-900">
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Prop Name</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Type</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Description</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">id</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">Number</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Unique identifier for each application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">name</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Name of the application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">icon</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            URL or path to the application&apos;s icon image.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">category</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Category to which the application belongs.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
      </tbody>
    </table>
    </div>
        
        
        </TabsContent>
      </Tabs>
      
    {/* <div className="py-10 ml-3">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking tight">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="underline italic font-semibold" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div> */}
    </div>
  )
}

export default LaunchpadComponent
