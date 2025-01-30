"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Application {
  id: number;
  name: string;
  icon: string;
  category: string;
}

interface LaunchPadProps {
  applications: Application[];
}

const LaunchPad: React.FC<LaunchPadProps> = ({ applications }) => {
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState<Application[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Categories derived from applications props for dynamic categories handling
  const categories = Array.from(new Set(applications.map(app => app.category).concat('All')));

  useEffect(() => {
    const filtered = applications.filter(app =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || app.category === selectedCategory)
    )
    setFilteredApps(filtered)
  }, [searchTerm, selectedCategory, applications])

  const toggleLaunchpad = () => setIsLaunchpadOpen(!isLaunchpadOpen)

//   @ts-ignore
  const handleAppClick = (app) => {
    setSelectedApp(app)
  }

  const handleBackClick = () => {
    setSelectedApp(null)
    setSearchTerm('')
    setSelectedCategory('All')
  }

  return (
    <div className="h-[screen] overflow-hidden absolute bg-white dark:bg-black">
      <Button
        onClick={toggleLaunchpad}
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 rounded-xl bg-white dark:bg-black text-black dark:text-white hover:bg-gray-200 md:bottom-20 md:left-1/2 md:transform md:-translate-x-1/2"
        size="icon"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-top-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/></svg>
      </Button>

      <AnimatePresence>
        {isLaunchpadOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-transparent flex flex-col items-center pt-20 top-10 backdrop-blur sm:pt-20 sm:top-10"
            onClick={toggleLaunchpad}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-xl px-4 sm:max-w-2xl sm:px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mb-6 flex items-center">
                <Button
                  onClick={handleBackClick}
                  variant="ghost"
                  size="icon"
                  className="mr-2"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-400 dark:text-gray/20" />
                </Button>
                <Input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-gray-800 backdrop-blur-lg border-none text-black dark:text-white"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>

              {!selectedApp && (
                <Tabs defaultValue="All" className="w-full mb-6 bg-transparent dark:bg-background/50 border-none dark:text-white text-black border-none rounded-lg">
                  <TabsList className="flex justify-start overflow-x-auto border-none gap-2 rounded-full bg-transparent">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`leading-7 tracking-tight w-auto border-none text-sm ${category === selectedCategory ? 'dark:bg-gray-700' : ''}`}
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}
            </motion.div>

             <ScrollArea className="w-full max-w-2xl h-[calc(100vh-200px)]">
               <motion.div
                className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence>
                  {selectedApp ? (
                    <motion.div
                      key="app-details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="col-span-full flex flex-col items-center text-black dark:text-white"
                    >
                      <div className="w-22 h-22 flex items-center justify-center rounded-3xl text-black dark:text-white mb-4">
                        <img src={selectedApp.icon} alt={selectedApp.name} className="w-24 h-24 " />
                      </div>
                      <h2 className="text-2xl font-bold mb-2 leading-7 tracking-tigh text-black dark:text-white">{selectedApp.name}</h2>
                      <p className="text-lg mb-4 leading-7 tracking-tight text-black dark:text-white">{selectedApp.category}</p>
                      <Button className="bg-[#0B8CE9] text-white text-sm font-semibold" onClick={() => alert(`Launching ${selectedApp.name}`)}>
                        Open {selectedApp.name}
                      </Button>
                    </motion.div>
                  ) : (
                    filteredApps.map((app) => (
                      <motion.div
                        key={app.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center"
                        onClick={() => handleAppClick(app)}
                      >
                        <motion.div
                          className="w-20 h-20 flex items-center justify-center border-none rounded-lg  cursor-pointer text-black dark:text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img src={app.icon} alt={app.name} className="w-30 h-30 border-none rounded-lg text-black dark:text-white" />
                        </motion.div>
                        <motion.p className="mt-2 text-xs text-center tracking-tight text-gray-700 dark:text-white font-semibold">
                          {app.name}
                        </motion.p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollArea>

            <Button
              onClick={toggleLaunchpad}
              variant="ghost"
              size="icon"
              className="relative bottom-20 text-black bg-gray-200 sm:relative sm:bottom-20"
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LaunchPad;