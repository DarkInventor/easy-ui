export default function FeatureCard() {
    return (
      <div className="mx-auto flex h-[399px] w-full max-w-[343px] flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md sm:h-[310px] sm:max-w-[510px]">
        <div className="flex grow flex-col p-4 sm:p-6">
          <div className="mb-4 grid grow grid-cols-1 gap-4 sm:mb-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:-rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white  dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-orange-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-pink-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 dark:border-gray-700">
            <h2 className=" text-lg font-bold sm:mt-2 sm:text-xl ">Social</h2>
            <p className="text-xs text-gray-500 sm:text-sm">Write once, share with your friends</p>
          </div>
        </div>
      </div>
    )
  }