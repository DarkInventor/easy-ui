interface Prop {
    name: string
    type: string
    default: string
    description: string
  }
  
  const props: Prop[] = [
    {
      name: "transactions",
      type: "Transaction[]",
      default: "Required",
      description: "An array of transaction objects to be displayed in the list.",
    },
    {
      name: "title",
      type: "string",
      default: '"Transactions"',
      description: "The title displayed at the top of the transaction list.",
    },
    {
      name: "maxHeight",
      type: "string",
      default: '"none"',
      description: "The maximum height of the transaction list. Can be any valid CSS height value.",
    },
    {
      name: "showAllTransactionsButton",
      type: "boolean",
      default: "true",
      description: 'Whether to show the "All Transactions" button at the bottom of the list.',
    },
    {
      name: "onAllTransactionsClick",
      type: "() => void",
      default: "() => {}",
      description: 'A function to be called when the "All Transactions" button is clicked.',
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the main container of the TransactionList.",
    },
    {
      name: "containerClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the inner container of the TransactionList.",
    },
    {
      name: "headerClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the header (title) of the TransactionList.",
    },
    {
      name: "transactionClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to each transaction item in the list.",
    },
    {
      name: "iconClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the icon container of each transaction.",
    },
    {
      name: "titleClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the title of each transaction.",
    },
    {
      name: "subtitleClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the subtitle of each transaction.",
    },
    {
      name: "amountClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the amount of each transaction.",
    },
    {
      name: "allTransactionsButtonClassName",
      type: "string",
      default: '""',
      description: 'Additional CSS classes to be applied to the "All Transactions" button.',
    },
    {
      name: "popupClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the transaction details popup container.",
    },
    {
      name: "popupHeaderClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the header of the transaction details popup.",
    },
    {
      name: "popupCloseButtonClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the close button of the transaction details popup.",
    },
    {
      name: "popupContentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the content container of the transaction details popup.",
    },
    {
      name: "popupIconClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the icon in the transaction details popup.",
    },
    {
      name: "popupTitleClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the title in the transaction details popup.",
    },
    {
      name: "popupSubtitleClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the subtitle in the transaction details popup.",
    },
    {
      name: "popupAmountClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the amount in the transaction details popup.",
    },
    {
      name: "popupDetailsClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the details section in the transaction details popup.",
    },
    {
      name: "renderPopupContent",
      type: "(transaction: Transaction) => ReactNode",
      default: "undefined",
      description:
        "A function that allows custom rendering of the popup content. If provided, it will be used instead of the default popup content.",
    },
  ]
  
  export function PropsTableTransactionList() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Prop Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Default
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {props.map((prop) => (
              <tr key={prop.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {prop.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{prop.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{prop.default}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  