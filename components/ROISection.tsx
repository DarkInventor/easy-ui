'use client'

import { useState, useMemo } from 'react'
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Check, X } from 'lucide-react'
import { RainbowButton } from "@/components/ui/rainbow-button"

const ROISection = () => {
  const [designerDays, setDesignerDays] = useState(10)
  const [developerDays, setDeveloperDays] = useState(10)
  const [designerRate, setDesignerRate] = useState(100)
  const [developerRate, setDeveloperRate] = useState(150)

  const calculations = useMemo(() => {
    const totalDays = designerDays + developerDays
    const totalWeeks = (totalDays / 5).toFixed(1)
    const totalCost = (designerDays * 8 * designerRate) + (developerDays * 8 * developerRate)
    const easyUICost = 129
    const costSavings = totalCost - easyUICost
    const savingsPercentage = ((costSavings / totalCost) * 100).toFixed(1)
    const timeSavingsDays = 17.5 // Fixed value as per requirements
    const timeSavingsWeeks = 3.5 // Fixed value as per requirements

    return {
      totalDays,
      totalWeeks,
      totalCost,
      costSavings,
      savingsPercentage,
      timeSavingsDays,
      timeSavingsWeeks
    }
  }, [designerDays, developerDays, designerRate, developerRate])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:mt-1 dark:bg-background">
      {/* ROI Calculator Header */}
      <div className="text-center mb-8">
        {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">ROI Calculator</p> */}
        <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-3xl mb-5">
          Calculate Your Savings
        </h2>
        <p className="mt-18 px-10 text-center text-lg font-medium tracking-tight  leading-normal max-w-3xl text-muted-foreground mx-auto">
     
          See how much time and money you can save by using our pre-built components and templates compared to building everything from scratch.
        </p>
      </div>

      <div className="mb-12 text-center">
      <RainbowButton onClick={() => window.open('https://premium.easyui.pro/pricing-section', '_blank')} className='rounded-[1rem] text-sm leading-7 tracking-tight font-bold'>
Get Easy UI Premium Now
</RainbowButton>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 border  p-4 sm:p-6 lg:p-10 rounded-xl">
        {/* Left Column - Custom Landing Page */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-left mb-2">Custom Landing Page</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-left mb-4 sm:mb-8">
            Estimate how much it would cost to build these templates with your team
          </p>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">Designer Time (days)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[designerDays]}
                  onValueChange={(value) => setDesignerDays(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[40px]">{designerDays}d</span>
              </div>
            </div>

            <div>
              <label className="block mb-2">Developer Time (days)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[developerDays]}
                  onValueChange={(value) => setDeveloperDays(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[40px]">{developerDays}d</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Designer Rate ($/hour)</label>
                <Input
                  type="number"
                  value={designerRate}
                  onChange={(e) => setDesignerRate(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-2">Developer Rate ($/hour)</label>
                <Input
                  type="number"
                  value={developerRate}
                  onChange={(e) => setDeveloperRate(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="text-center space-y-1 text-gray-600 dark:text-gray-300">
              <p>Total estimated time: {calculations.totalWeeks} weeks ({calculations.totalDays} business days)</p>
              <p>Total estimated cost: ${calculations.totalCost.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Magic UI Landing Page */}
        <div className="mt-8 sm:mt-0 sm:ml-0 md:ml-4 lg:ml-20">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Easy UI Landing Page</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center mb-4 sm:mb-8">
            Unlock massive benefits with our templates
          </p>

          <div className="space-y-4">
            <Card className="p-6 bg-gray-50 dark:bg-black rounded-[1rem]">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Reduce costs by <span className="text-green-600 dark:text-green-400">${calculations.costSavings.toLocaleString()}</span>.{' '}
                    It&apos;s <span className="text-green-600 dark:text-green-400">{calculations.savingsPercentage}%</span> cheaper than building it yourself.
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-50 dark:bg-black rounded-[1rem]">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Launch <span className="text-green-600 dark:text-green-400">{calculations.timeSavingsDays} business days sooner</span> on average.
                    That&apos;s almost <span className="text-green-600 dark:text-green-400">{calculations.timeSavingsWeeks} weeks earlier!</span>
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Comparison Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card className="p-6 dark:bg-black rounded-[1rem]">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-start">Easy UI Landing Page</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-start">Benefits of using our templates</p>
          <ul className="space-y-4 py-5">
            {[
              { label: 'Cost:', value: 'Only $49' },
              { label: 'Time:', value: 'Same-day implementation' },
              { label: 'Expertise:', value: 'Engineered by UI/UX experts' },
              { label: 'Quality:', value: 'Thoroughly tested and optimized' },
              { label: 'Skills:', value: 'Includes professional animations' },
              { label: 'Optimization:', value: 'SEO-optimized with all best practices' },
              { label: 'Responsive:', value: 'Optimized for all devices' }
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold">{benefit.label}</span>{' '}
                  <span className="text-sm sm:text-base">{benefit.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 dark:bg-black rounded-[1rem]">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-start">Custom Landing Page</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-start">Common challenges when building your own landing page</p>         
          <ul className="space-y-4 py-5">
            {[
              { label: 'Cost:', value: `~$${calculations.totalCost.toLocaleString()} in developer and designer time` },
              { label: 'Time:', value: `${calculations.totalWeeks} weeks of development` },
              { label: 'Expertise:', value: 'Requires extensive UI/UX knowledge' },
              { label: 'Quality:', value: 'High risk of introducing bugs' },
              { label: 'Skills:', value: 'Requires animation experience' },
              { label: 'Optimization:', value: 'Requires SEO expertise' },
              { label: 'Responsive:', value: 'Requires custom styling for each device' }
            ].map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold">{challenge.label}</span>{' '}
                  <span className="text-sm sm:text-base">{challenge.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

   
    </div>
  )
}

export default ROISection

