"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"

interface Transaction {
  id: string
  icon: ReactNode
  title: string
  subtitle: string
  amount: string
  transactionId: string
  date: string
  time: string
  paymentMethod: string
  paymentInfo: string
}

interface TransactionListProps {
  transactions: Transaction[]
  title?: string
  maxHeight?: string
  showAllTransactionsButton?: boolean
  onAllTransactionsClick?: () => void
  className?: string
  containerClassName?: string
  headerClassName?: string
  transactionClassName?: string
  iconClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  amountClassName?: string
  allTransactionsButtonClassName?: string
  popupClassName?: string
  popupHeaderClassName?: string
  popupCloseButtonClassName?: string
  popupContentClassName?: string
  popupIconClassName?: string
  popupTitleClassName?: string
  popupSubtitleClassName?: string
  popupAmountClassName?: string
  popupDetailsClassName?: string
  renderPopupContent?: (transaction: Transaction) => ReactNode
}

function TransactionPopup({
  transaction,
  onClose,
  className,
  headerClassName,
  closeButtonClassName,
  contentClassName,
  iconClassName,
  titleClassName,
  subtitleClassName,
  amountClassName,
  detailsClassName,
  renderContent,
}: {
  transaction: Transaction | null
  onClose: () => void
  className?: string
  headerClassName?: string
  closeButtonClassName?: string
  contentClassName?: string
  iconClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  amountClassName?: string
  detailsClassName?: string
  renderContent?: (transaction: Transaction) => ReactNode
}) {
  if (!transaction) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 z-50 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`bg-white dark:bg-black text-black dark:text-white rounded-[1rem] p-6 w-full max-w-md mx-4 shadow-xl ${className}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {renderContent ? (
          renderContent(transaction)
        ) : (
          <>
            <div className={`flex justify-between items-center mb-6 ${headerClassName} `}>
              <h2 className="text-2xl font-semibold">Transaction Details</h2>
              <button
                onClick={onClose}
                className={`text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 ${closeButtonClassName}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className={`space-y-6 ${contentClassName} `}>
              <div className="flex items-center gap-4">
                <div
                  className={`icon w-14 h-14 bg-background border text-black dark:bg-white dark:text-black rounded-2xl grid place-items-center flex-shrink-0 ${iconClassName}`}
                >
                  {transaction.icon}
                </div>
                <div>
                  <div className={`font-medium text-lg ${titleClassName}`}>{transaction.title}</div>
                  <div className={`text-sm text-gray-600 dark:text-gray-400 ${subtitleClassName}`}>
                    {transaction.subtitle}
                  </div>
                </div>
              </div>
              <div className={`text-3xl font-bold ml-5 tracking-tight leading-7 ${amountClassName}`}>{transaction.amount}</div>
              <div className={`space-y-2 text-base dark:text-gray-200 ml-5 ${detailsClassName}`}>
                <p>Transaction ID: {transaction.transactionId}</p>
                <p>Date: {transaction.date}</p>
                <p>Time: {transaction.time}</p>
                <p>{transaction.paymentMethod}</p>
                <p>{transaction.paymentInfo}</p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export function TransactionListCard({
  transactions,
  title = "Transactions",
  maxHeight = "none",
  showAllTransactionsButton = true,
  onAllTransactionsClick = () => {},
  className = "",
  containerClassName = "",
  headerClassName = "",
  transactionClassName = "",
  iconClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  amountClassName = "",
  allTransactionsButtonClassName = "",
  popupClassName = "",
  popupHeaderClassName = "",
  popupCloseButtonClassName = "",
  popupContentClassName = "",
  popupIconClassName = "",
  popupTitleClassName = "",
  popupSubtitleClassName = "",
  popupAmountClassName = "",
  popupDetailsClassName = "",
  renderPopupContent,
}: TransactionListProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)

  const handleTransactionClick = (transaction: Transaction) => {
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => {
        setSelectedTransaction(transaction)
      })
    } else {
      setSelectedTransaction(transaction)
    }
  }

  return (
    <div
      className={`container bg-white dark:bg-background text-black dark:text-white rounded-2xl p-6 w-full max-w-[400px] mx-auto border border-gray-200 dark:border-gray-900 ${className} ${containerClassName}`}
    >
      <h2 className={`text-2xl font-bold mb-6 ml-5 ${headerClassName}`}>{title}</h2>
      <div className="space-y-4" style={{ maxHeight, overflowY: "auto" }}>
        <AnimatePresence>
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-10 transition-colors duration-200 ${transactionClassName}`}
              onClick={() => handleTransactionClick(transaction)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`icon w-12 h-12 bg-background border text-white dark:bg-white dark:text-black rounded-2xl grid place-items-center flex-shrink-0 ${iconClassName}`}
              >
                {transaction.icon}
              </div>
              <div className="flex-grow">
                <div className={`font-medium ${titleClassName}`}>{transaction.title}</div>
                <div className={`text-sm text-gray-600 dark:text-gray-400 ${subtitleClassName}`}>
                  {transaction.subtitle}
                </div>
              </div>
              <div className={`font-medium ${amountClassName}`}>{transaction.amount}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {showAllTransactionsButton && (
        <button
          onClick={onAllTransactionsClick}
          className={`w-full mt-6 py-2 text-center font-medium bg-background rounded-2xl  flex items-center justify-center ${allTransactionsButtonClassName}`}
        >
          All Transactions
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      )}
      <AnimatePresence>
        {selectedTransaction && (
          <TransactionPopup
            transaction={selectedTransaction}
            onClose={() => setSelectedTransaction(null)}
            className={popupClassName}
            headerClassName={popupHeaderClassName}
            closeButtonClassName={popupCloseButtonClassName}
            contentClassName={popupContentClassName}
            iconClassName={popupIconClassName}
            titleClassName={popupTitleClassName}
            subtitleClassName={popupSubtitleClassName}
            amountClassName={popupAmountClassName}
            detailsClassName={popupDetailsClassName}
            renderContent={renderPopupContent}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

