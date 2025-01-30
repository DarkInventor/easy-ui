// import React from "react"

// function IntroductionPage() {
//   return (
// <div className="flex flex-wrap justify-center gap-4 pb-10 ml-0 lg:ml-10">
//   <div className="w-full p-4 space-y-4 mt-5">
//   <h2 className="text-2xl font-bold">Introduction</h2>
//     <p className="text-lg text-balance text-lg text-muted-foreground">
//       Beautiful collection of 50+ building blocks and website templates.
//     </p>
//     <p className="leading-7 tracking-tight font-[500]">
//       Easy UI is a <b>collection of re-usable 50+ templates</b> and <b>building blocks</b> that you can use into your web apps.
//     </p>
//     <p className="leading-7 tracking-tight font-[500]">It helps you:</p>
//     <ul className="list-disc pl-5 space-y-2 leading-7 tracking-tight font-[500]">
//       <li>✅ Save 100+ hours of work</li>
//       <li>✅ No need to learn advanced animations</li>
//       <li>✅ Easy to configure and change</li>
//       <li>✅ 1-click download and setup</li>
//       <li>✅ 5 minutes to update the text and images</li>
//       <li>✅ Deploy live to Vercel</li>
//     </ul>
//     <h2 className="text-2xl font-bold pt-10">Philosophy</h2>
//     <p>
//       <b>The philosophy behind Easy UI is rooted in simplicity and efficiency. As a developer, I&apos;ve always believed in the power of good design and user experience.</b> However, I also understand the challenges and time constraints that come with creating visually appealing and functional web applications. That&apos;s why I created Easy UI.
//     </p>
//     <p>
//       <b>My goal with Easy UI is to provide a straightforward solution for developers and designers alike. </b>Whether you&apos;re working on a personal project, a startup, or for a client, Easy UI offers a foundation that can be easily adapted and customized to fit your needs.
//     </p>
//     <p>
//       <b>It&apos;s not just about saving time; it&apos;s about maintaining a high standard of quality without the need to reinvent the wheel for every new project.</b>
//     </p>
//     <p>
//       <b>I&apos;ve focused on making Easy UI as accessible as possible.</b> This means clear documentation, simple configuration, and a community-driven approach to improvements and support. I believe that by sharing resources and tools, we can all achieve more, faster, and with better results.
//     </p>
//     <p>
//       In essence, Easy UI is my contribution to a more collaborative and efficient future in web development. It&apos;s about enabling creators to bring their visions to life with less friction and more joy in the process.
//     </p>
//     <p>
//       Easy UI templates draw inspiration from many well-regarded templates in the industry.
//     </p>
//   </div>
// </div>
//   )
// }

// export default IntroductionPage

"use client"

import React, { useRef, useState } from "react"
import { CheckCircle2, Clipboard } from "lucide-react"

// @ts-ignore
function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 transition-colors"
        aria-label="Copy code"
      >
        {copied ? <CheckCircle2 size={20} /> : <Clipboard size={20} />}
      </button>
      <pre className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  )
}

function IntroductionPage() {
  const introRef = useRef(null)
  const installRef = useRef(null)
  const philosophyRef = useRef(null)
  const [highlightedSection, setHighlightedSection] = useState(null)

  // @ts-ignore
  const scrollToSection = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setHighlightedSection(section)
    setTimeout(() => setHighlightedSection(null), 2000)
  }

  // @ts-ignore
  const getHighlightClass = (section) =>
    highlightedSection === section
      ? "bg-yellow-100/50 dark:bg-slate-800/50 transition-all duration-1000"
      : ""

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-3">
            <nav className="sticky mt-5 space-y-4 hidden lg:block">
              <h3 className="font-bold text-sm leading-7 tracking-looser text-black dark:text-white">
                Getting Started
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection(introRef, "intro")}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 leading-7 tracking-looser"
                  >
                    Introduction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(installRef, "install")}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 leading-7 tracking-looser"
                  >
                    Installation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(philosophyRef, "philosophy")}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 leading-7 tracking-looser"
                  >
                    Philosophy
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-9">
            <section
              ref={philosophyRef}
              className={`space-y-6 scroll-mt-28 rounded-lg p-0 ${getHighlightClass(
                "philosophy"
              )}`}
            >
              <div className="flex flex-wrap justify-center gap-4 pb-10 ml-0 lg:ml-0">
                <div className="w-full p-0 space-y-4 mt-5" ref={introRef}>
                  <h2 className="text-2xl font-bold">Introduction</h2>
                  <p className="text-lg text-balance text-lg text-muted-foreground">
                    Beautiful collection of 50+ building blocks and website
                    templates.
                  </p>
                  <p className="leading-7 tracking-tight font-[500]">
                    Easy UI is a <b>collection of re-usable 50+ templates</b>{" "}
                    and <b>building blocks</b> that you can use into your web
                    apps.
                  </p>
                  <p className="leading-7 tracking-tight font-[500]">
                    It helps you:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 leading-7 tracking-tight font-[500]">
                    <li>✅ Save 100+ hours of work</li>
                    <li>✅ No need to learn advanced animations</li>
                    <li>✅ Easy to configure and change</li>
                    <li>✅ 1-click download and setup</li>
                    <li>✅ 5 minutes to update the text and images</li>
                    <li>✅ Deploy live to Vercel</li>
                  </ul>
                  <h2 className="text-2xl font-bold pt-10">Philosophy</h2>
                  <p>
                    <b>
                      The philosophy behind Easy UI is rooted in simplicity and
                      efficiency. As a developer, I&apos;ve always believed in
                      the power of good design and user experience.
                    </b>{" "}
                    However, I also understand the challenges and time
                    constraints that come with creating visually appealing and
                    functional web applications. That&apos;s why I created Easy
                    UI.
                  </p>
                  <p>
                    <b>
                      My goal with Easy UI is to provide a straightforward
                      solution for developers and designers alike.{" "}
                    </b>
                    Whether you&apos;re working on a personal project, a
                    startup, or for a client, Easy UI offers a foundation that
                    can be easily adapted and customized to fit your needs.
                  </p>
                  <p>
                    <b>
                      It&apos;s not just about saving time; it&apos;s about
                      maintaining a high standard of quality without the need to
                      reinvent the wheel for every new project.
                    </b>
                  </p>
                  <p>
                    <b>
                      I&apos;ve focused on making Easy UI as accessible as
                      possible.
                    </b>{" "}
                    This means clear documentation, simple configuration, and a
                    community-driven approach to improvements and support. I
                    believe that by sharing resources and tools, we can all
                    achieve more, faster, and with better results.
                  </p>
                  <p>
                    In essence, Easy UI is my contribution to a more
                    collaborative and efficient future in web development.
                    It&apos;s about enabling creators to bring their visions to
                    life with less friction and more joy in the process.
                  </p>
                  <p>
                    Easy UI templates draw inspiration from many well-regarded
                    templates in the industry.
                  </p>
                </div>
              </div>
            </section>
            <section
              ref={installRef}
              className={`space-y-6 scroll-mt-28 rounded-lg p-0 ${getHighlightClass(
                "install"
              )}`}
            >
              <h2 className="text-2xl font-bold">Installation</h2>
              <p>
                Follow the steps below to install and configure Easy UI for Next.js:
              </p>
              <ol className="list-decimal pl-5 space-y-2 tracking-tight leading-7">
                <li>
                  <b>Information:</b> This project and all templates are written in <b>TypeScript</b>. We recommend using TypeScript for your project as well.
                </li>
                <li>
                  <b>Download the template:</b> Start by downloading a new Easy UI template.
                </li>
                <li>
                  <b>Install dependencies:</b> Run the following command to install dependencies:
                  <p className="py-2">
                  <CodeBlock>pnpm install</CodeBlock></p>
                </li>
                <li>
                  <b>Run the development server:</b> Start the development server with this command:
                  <p className="py-2">
                  <CodeBlock>pnpm dev</CodeBlock>
                  </p>
                </li>
                <li>
                  <b>View in the browser:</b> Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://localhost:3000</a> in your browser to see the result.
                </li>
              </ol>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default IntroductionPage
