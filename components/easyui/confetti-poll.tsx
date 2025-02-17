"use client"

import * as React from "react"
import { useState } from "react"
import { Eye, Heart, MessageSquare, Bookmark, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import confetti from "canvas-confetti"

// Types
export interface PollOption {
  id: string
  text: string
  votes: number
  percentage: number
}

export interface PollProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  options: PollOption[]
  onVote?: (optionId: string) => void
  showResults?: boolean
  totalVotes?: number
  userVote?: string | null
  author?: {
    name: string
    username: string
    avatar: string
  }
  stats?: {
    views?: number
    likes?: number
    comments?: number
  }
}

// Component
const Poll = React.forwardRef<HTMLDivElement, PollProps>(
  (
    {
      className,
      question,
      options: initialOptions,
      onVote,
      showResults: initialShowResults = false,
      totalVotes: initialTotalVotes,
      userVote: initialUserVote = null,
      author,
      stats: initialStats,
      ...props
    },
    ref,
  ) => {
    const [hasVoted, setHasVoted] = useState(Boolean(initialUserVote))
    const [selectedOption, setSelectedOption] = useState<string | null>(initialUserVote)
    const [pollOptions, setPollOptions] = useState<PollOption[]>(initialOptions)
    const [showResults, setShowResults] = useState(initialShowResults)
    const [stats, setStats] = useState(initialStats)
    const [isLiked, setIsLiked] = useState(false)

    const totalVotes = initialTotalVotes || pollOptions.reduce((sum, option) => sum + option.votes, 0)

    const handleVote = (optionId: string) => {
      if (hasVoted) return

      setSelectedOption(optionId)
      setPollOptions((prev) =>
        prev.map((option) => ({
          ...option,
          votes: option.id === optionId ? option.votes + 1 : option.votes,
        })),
      )

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      setHasVoted(true)
      setShowResults(true)
      onVote?.(optionId)
    }

    const handleLike = () => {
      setIsLiked((prev) => !prev)
      setStats((prev) => ({
        ...prev,
        // @ts-ignore
        likes: prev.likes + (isLiked ? -1 : 1),
      }))
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[598px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl mt-20 mb-20",
          className,
        )}
        {...props}
      >
        <div className="p-4">
          {/* Author Section */}
          {author && (
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 rounded-full">
                  <AvatarImage src={author.avatar} alt={`@${author.username}`} />
                  <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1 text-[15px] leading-5">
                    <span className="font-bold text-gray-900 dark:text-gray-100">{author.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">@{author.username}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Poll Content */}
          <div className="mb-3">
            <p className="text-[15px] leading-5 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{question}</p>
          </div>

          <div className="mb-3">
            {pollOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleVote(option.id)}
                disabled={hasVoted}
                className={cn(
                  "w-full text-left relative py-1 mb-2",
                  showResults ? "cursor-default" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
              >
                <div className="flex items-center">
                  {showResults && (
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-blue-100 dark:bg-blue-900 rounded transition-all duration-500"
                      style={{ width: `${option.percentage}%` }}
                    />
                  )}
                  <div className="relative flex justify-between items-center w-full z-10 px-3 py-2">
                    <span className="text-[15px] leading-5 text-gray-900 dark:text-gray-100">{option.text}</span>
                    {showResults && (
                      <span className="text-[13px] leading-4 text-gray-500 dark:text-gray-400 ml-2">
                        {option.percentage.toFixed(1)}%
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {showResults && (
            <p className="text-[13px] leading-4 text-gray-500 dark:text-gray-400 mb-3">
              {totalVotes} votes · Final results
            </p>
          )}

          {/* Stats Footer */}
          {stats && (
            <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
              <div className="flex space-x-6">
                <button className="group flex items-center hover:text-blue-500">
                  <Eye className="h-[18px] w-[18px] mr-2" />
                  <span className="text-[13px] leading-4 group-hover:text-blue-500">
                    {stats.views?.toLocaleString()}
                  </span>
                </button>
                <button
                  className={cn("group flex items-center", isLiked ? "text-pink-500" : "hover:text-pink-500")}
                  onClick={handleLike}
                >
                  <Heart className={cn("h-[18px] w-[18px] mr-2", isLiked && "fill-current")} />
                  <span
                    className={cn("text-[13px] leading-4", isLiked ? "text-pink-500" : "group-hover:text-pink-500")}
                  >
                    {stats.likes?.toLocaleString()}
                  </span>
                </button>
                <button className="group flex items-center hover:text-blue-500">
                  <MessageSquare className="h-[18px] w-[18px] mr-2" />
                  <span className="text-[13px] leading-4 group-hover:text-blue-500">
                    {stats.comments?.toLocaleString()}
                  </span>
                </button>
              </div>
              <button className="flex items-center hover:text-blue-500">
                <Bookmark className="h-[18px] w-[18px] mr-2" />
                <span className="text-[13px] leading-4">Save</span>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  },
)
Poll.displayName = "Poll"

export { Poll }

