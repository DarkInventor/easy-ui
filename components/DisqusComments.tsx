'use client'

import { DiscussionEmbed } from 'disqus-react'

interface DisqusCommentsProps {
  url: string
  identifier: string
  title: string
}

export default function DisqusComments({ url, identifier, title }: DisqusCommentsProps) {
  return (
    <DiscussionEmbed
      shortname="your-disqus-shortname"
      config={{
        url: url,
        identifier: identifier,
        title: title,
      }}
    />
  )
}