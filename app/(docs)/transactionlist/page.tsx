"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { TransactionListCard } from "@/components/easyui/transaction-list"
import { PropsTableTransactionList } from "@/components/props-table-transactionlist"

const transactions = [
    {
      id: "1",
      icon: <CreditCard className="w-5 h-5 text-black" />,
      title: "Netflix",
      subtitle: "Subscription",
      amount: "-$6.99",
      transactionId: "#67593",
      date: "September 26",
      time: "12:01 am",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 9342 VISA",
    },
    {
      id: "2",
      icon: <MapPin className="w-5 h-5 text-black" />,
      title: "Verizon",
      subtitle: "Mobile Recharge",
      amount: "-$4.05",
      transactionId: "#67482",
      date: "September 24",
      time: "05:18 pm",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 2316 Mastercard",
    },
    {
      id: "3",
      icon: <Plus className="w-5 h-5 text-black" />,
      title: "Big Belly Burger",
      subtitle: "Restaurant",
      amount: "-$12.05",
      transactionId: "#52342",
      date: "September 12",
      time: "09:06 am",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 2316 Mastercard",
    },
  ]

export default function TransactionList() {
  const [key, setKey] = useState(0)
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)
  const [activeTab, setActiveTab] = useState("cli")
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    const codeElement = document.getElementById('codeBlock3')
    const copycode3 = codeElement ? codeElement.textContent : ''
    if (copycode3) {
      navigator.clipboard.writeText(copycode3).then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
      })
    }
  }

  const handleOpenInV0 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/highlighter.json`, '_blank')
  }

  const handleCopy = (id: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    const codeElement = document.getElementById(id)
    const codeToCopy = codeElement ? codeElement.textContent : ""
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Highlighter
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          A text highlighter that mimics the effect of a human-drawn marker stroke.
        </CardDescription>
      </div>

      <Tabs defaultValue="preview" className="relative z-0 mr-auto w-full">
      <div className="flex items-center justify-between pb-3 ">
      <TabsList className="z-50 grow justify-start rounded-none bg-transparent p-0">
          <TabsTrigger 
            value="preview" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>
        </TabsList>
        {/* @ts-ignore */}
        <RainbowButton className="z-50 mr-2 h-8 cursor-pointer rounded-xl px-4 font-semibold"  onClick={handleOpenInV0}>
          <span className="flex items-center text-sm font-semibold leading-7 ">
            Open in 
            <svg 
              fill="currentColor" 
              viewBox="0 0 40 20" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" 
              className="ml-1 inline-block size-6"
            >
              <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"></path>
              <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"></path>
            </svg>
          </span>
        </RainbowButton>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[550px]">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            {/* <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-100"> */}
       <TransactionListCard
          transactions={transactions}
          title="Recent Activity"
          maxHeight="600px"
          showAllTransactionsButton={true}
          onAllTransactionsClick={() => alert("View all transactions clicked")} 
          iconClassName="!text-black  dark:text-white"
          allTransactionsButtonClassName="bg-black border text-white dark:bg-white dark:text-black hover:bg-opacity-90 dark:hover:bg-opacity-90"
        />
    {/* </main> */}
          </div>
        </TabsContent>
        <TabsContent value="code">      
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or component:
            </p> */}
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleCopy("codeBlock2", setCopied2)}
                className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white"
                title="Copy code to clipboard"
              >
                {copied2 ? (
                  <Check className="text-green-500 h-4 w-4" />
                ) : (
                  <Copy className="text-black hover:text-gray-400 active:text-blue-700 h-4 w-4 dark:text-white" />
                )}
              </button>

              <pre className="ml-2 py-2 pb-2 pl-2 font-sm">
                <code id="codeBlock2" className="text-left language-js text-sm">
                  {`
import { TransactionListCard } from "@/components/easyui/transaction-list"
import React from 'react'

const transactions = [
    {
      id: "1",
      icon: <CreditCard className="w-5 h-5 text-black" />,
      title: "Netflix",
      subtitle: "Subscription",
      amount: "-$6.99",
      transactionId: "#67593",
      date: "September 26",
      time: "12:01 am",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 9342 VISA",
    },
    {
      id: "2",
      icon: <MapPin className="w-5 h-5 text-black" />,
      title: "Verizon",
      subtitle: "Mobile Recharge",
      amount: "-$4.05",
      transactionId: "#67482",
      date: "September 24",
      time: "05:18 pm",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 2316 Mastercard",
    },
    {
      id: "3",
      icon: <Plus className="w-5 h-5 text-black" />,
      title: "Big Belly Burger",
      subtitle: "Restaurant",
      amount: "-$12.05",
      transactionId: "#52342",
      date: "September 12",
      time: "09:06 am",
      paymentMethod: "Paid Via Credit Card",
      paymentInfo: "XXXX 2316 Mastercard",
    },
  ]

function Home() {
  return (
      <TransactionListCard
          transactions={transactions}
          title="Recent Activity"
          maxHeight="600px"
          showAllTransactionsButton={true}
          onAllTransactionsClick={() => alert("View all transactions clicked")} 
          iconClassName="!text-black  dark:text-white"
          allTransactionsButtonClassName="bg-black border text-white dark:bg-white dark:text-black hover:bg-opacity-90 dark:hover:bg-opacity-90"
      />
  )
}

export default Home
`}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>


      <p className="mt-5 mb-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl ml-0">Installation</p>

<Tabs defaultValue="cli" className="relative mr-auto w-full" onValueChange={setActiveTab}>
<div className="flex items-center justify-between pb-3">
  <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
    <TabsTrigger
      value="cli"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      CLI
    </TabsTrigger>
    <TabsTrigger
      value="manual"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      Manual
    </TabsTrigger>
  </TabsList>
</div>
<TabsContent value="cli">
  <div className="md:lg-3 ml-3 flex w-full max-w-full flex-col space-y-4 lg:ml-4">
    {/* <p className="mt-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl">Installation</p> */}
    <div className="relative w-full max-w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
      <button 
        onClick={copyToClipboard}
        className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" 
        title={isCopied ? "Copied!" : "Copy code to clipboard"}
      >
        {isCopied ? (
          <CheckIcon className="h-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" />
        )}
      </button>
      <pre className="font-sm ml-2 max-w-full overflow-x-auto rounded-2xl py-4 pl-2">
        <code id="codeBlock3" className="language-js block w-full text-left text-sm"> 
          {`npx shadcn@latest add "https://easyui.pro/components-json/transaction-list.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/transaction-list.tsx</span></p>
      <div className="font-sm relative w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
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
              <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
        </button>
        <pre className="font-sm ml-2 min-h-[600px] py-2 pl-2 sm:min-h-[300px] lg:min-h-[600px]"><code id="codeBlock"  className="language-js text-left text-sm ">              
        {"\"use client\"\n\nimport { useState, type ReactNode } from \"react\"\nimport { motion, AnimatePresence } from \"framer-motion\"\nimport { X, ChevronRight } from \"lucide-react\"\n\ninterface Transaction {\n  id: string\n  icon: ReactNode\n  title: string\n  subtitle: string\n  amount: string\n  transactionId: string\n  date: string\n  time: string\n  paymentMethod: string\n  paymentInfo: string\n}\n\ninterface TransactionListProps {\n  transactions: Transaction[]\n  title?: string\n  maxHeight?: string\n  showAllTransactionsButton?: boolean\n  onAllTransactionsClick?: () => void\n  className?: string\n  containerClassName?: string\n  headerClassName?: string\n  transactionClassName?: string\n  iconClassName?: string\n  titleClassName?: string\n  subtitleClassName?: string\n  amountClassName?: string\n  allTransactionsButtonClassName?: string\n  popupClassName?: string\n  popupHeaderClassName?: string\n  popupCloseButtonClassName?: string\n  popupContentClassName?: string\n  popupIconClassName?: string\n  popupTitleClassName?: string\n  popupSubtitleClassName?: string\n  popupAmountClassName?: string\n  popupDetailsClassName?: string\n  renderPopupContent?: (transaction: Transaction) => ReactNode\n}\n\nfunction TransactionPopup({\n  transaction,\n  onClose,\n  className,\n  headerClassName,\n  closeButtonClassName,\n  contentClassName,\n  iconClassName,\n  titleClassName,\n  subtitleClassName,\n  amountClassName,\n  detailsClassName,\n  renderContent,\n}: {\n  transaction: Transaction | null\n  onClose: () => void\n  className?: string\n  headerClassName?: string\n  closeButtonClassName?: string\n  contentClassName?: string\n  iconClassName?: string\n  titleClassName?: string\n  subtitleClassName?: string\n  amountClassName?: string\n  detailsClassName?: string\n  renderContent?: (transaction: Transaction) => ReactNode\n}) {\n  if (!transaction) return null\n\n  return (\n    <motion.div\n      className=\"fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 z-50 \"\n      initial={{ opacity: 0 }}\n      animate={{ opacity: 1 }}\n      exit={{ opacity: 0 }}\n    >\n      <motion.div\n        className={`bg-white dark:bg-black text-black dark:text-white rounded-[1rem] p-6 w-full max-w-md mx-4 shadow-xl ${className}`}\n        initial={{ scale: 0.9, opacity: 0 }}\n        animate={{ scale: 1, opacity: 1 }}\n        exit={{ scale: 0.9, opacity: 0 }}\n        transition={{ type: \"spring\", damping: 25, stiffness: 300 }}\n      >\n        {renderContent ? (\n          renderContent(transaction)\n        ) : (\n          <>\n            <div className={`flex justify-between items-center mb-6 ${headerClassName} `}>\n              <h2 className=\"text-2xl font-semibold\">Transaction Details</h2>\n              <button\n                onClick={onClose}\n                className={`text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 ${closeButtonClassName}`}\n              >\n                <X className=\"w-6 h-6\" />\n              </button>\n            </div>\n            <div className={`space-y-6 ${contentClassName} `}>\n              <div className=\"flex items-center gap-4\">\n                <div\n                  className={`icon w-14 h-14 bg-background border text-black dark:bg-white dark:text-black rounded-2xl grid place-items-center flex-shrink-0 ${iconClassName}`}\n                >\n                  {transaction.icon}\n                </div>\n                <div>\n                  <div className={`font-medium text-lg ${titleClassName}`}>{transaction.title}</div>\n                  <div className={`text-sm text-gray-600 dark:text-gray-400 ${subtitleClassName}`}>\n                    {transaction.subtitle}\n                  </div>\n                </div>\n              </div>\n              <div className={`text-3xl font-bold ml-5 tracking-tight leading-7 ${amountClassName}`}>{transaction.amount}</div>\n              <div className={`space-y-2 text-base dark:text-gray-200 ml-5 ${detailsClassName}`}>\n                <p>Transaction ID: {transaction.transactionId}</p>\n                <p>Date: {transaction.date}</p>\n                <p>Time: {transaction.time}</p>\n                <p>{transaction.paymentMethod}</p>\n                <p>{transaction.paymentInfo}</p>\n              </div>\n            </div>\n          </>\n        )}\n      </motion.div>\n    </motion.div>\n  )\n}\n\nexport function TransactionListCard({\n  transactions,\n  title = \"Transactions\",\n  maxHeight = \"none\",\n  showAllTransactionsButton = true,\n  onAllTransactionsClick = () => {},\n  className = \"\",\n  containerClassName = \"\",\n  headerClassName = \"\",\n  transactionClassName = \"\",\n  iconClassName = \"\",\n  titleClassName = \"\",\n  subtitleClassName = \"\",\n  amountClassName = \"\",\n  allTransactionsButtonClassName = \"\",\n  popupClassName = \"\",\n  popupHeaderClassName = \"\",\n  popupCloseButtonClassName = \"\",\n  popupContentClassName = \"\",\n  popupIconClassName = \"\",\n  popupTitleClassName = \"\",\n  popupSubtitleClassName = \"\",\n  popupAmountClassName = \"\",\n  popupDetailsClassName = \"\",\n  renderPopupContent,\n}: TransactionListProps) {\n  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)\n\n  const handleTransactionClick = (transaction: Transaction) => {\n    if (typeof document.startViewTransition === \"function\") {\n      document.startViewTransition(() => {\n        setSelectedTransaction(transaction)\n      })\n    } else {\n      setSelectedTransaction(transaction)\n    }\n  }\n\n  return (\n    <div\n      className={`container bg-white dark:bg-background text-black dark:text-white rounded-2xl p-6 w-full max-w-[400px] mx-auto border border-gray-200 dark:border-gray-900 ${className} ${containerClassName}`}\n    >\n      <h2 className={`text-2xl font-bold mb-6 ml-5 ${headerClassName}`}>{title}</h2>\n      <div className=\"space-y-4\" style={{ maxHeight, overflowY: \"auto\" }}>\n        <AnimatePresence>\n          {transactions.map((transaction) => (\n            <motion.div\n              key={transaction.id}\n              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-10 transition-colors duration-200 ${transactionClassName}`}\n              onClick={() => handleTransactionClick(transaction)}\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              exit={{ opacity: 0, y: -20 }}\n              transition={{ duration: 0.3 }}\n            >\n              <div\n                className={`icon w-12 h-12 bg-background border text-white dark:bg-white dark:text-black rounded-2xl grid place-items-center flex-shrink-0 ${iconClassName}`}\n              >\n                {transaction.icon}\n              </div>\n              <div className=\"flex-grow\">\n                <div className={`font-medium ${titleClassName}`}>{transaction.title}</div>\n                <div className={`text-sm text-gray-600 dark:text-gray-400 ${subtitleClassName}`}>\n                  {transaction.subtitle}\n                </div>\n              </div>\n              <div className={`font-medium ${amountClassName}`}>{transaction.amount}</div>\n            </motion.div>\n          ))}\n        </AnimatePresence>\n      </div>\n      {showAllTransactionsButton && (\n        <button\n          onClick={onAllTransactionsClick}\n          className={`w-full mt-6 py-2 text-center font-medium bg-background rounded-2xl  flex items-center justify-center ${allTransactionsButtonClassName}`}\n        >\n          All Transactions\n          <ChevronRight className=\"ml-2 w-5 h-5\" />\n        </button>\n      )}\n      <AnimatePresence>\n        {selectedTransaction && (\n          <TransactionPopup\n            transaction={selectedTransaction}\n            onClose={() => setSelectedTransaction(null)}\n            className={popupClassName}\n            headerClassName={popupHeaderClassName}\n            closeButtonClassName={popupCloseButtonClassName}\n            contentClassName={popupContentClassName}\n            iconClassName={popupIconClassName}\n            titleClassName={popupTitleClassName}\n            subtitleClassName={popupSubtitleClassName}\n            amountClassName={popupAmountClassName}\n            detailsClassName={popupDetailsClassName}\n            renderContent={renderPopupContent}\n          />\n        )}\n      </AnimatePresence>\n    </div>\n  )\n}\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
      
      <div className="py-10">
      <p className="mt-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl mb-12">Props</p>
        <PropsTableTransactionList />
      </div>
    </div>
  )
}