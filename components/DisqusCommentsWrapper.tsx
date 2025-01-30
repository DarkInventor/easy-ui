'use client'

import dynamic from 'next/dynamic'

const DisqusComments = dynamic(() => import('@/components/DisqusComments'), {
  ssr: false,
})

interface DisqusCommentsWrapperProps {
  url: string
  identifier: string
  title: string
}

export default function DisqusCommentsWrapper({ url, identifier, title }: DisqusCommentsWrapperProps) {
  return <DisqusComments url={url} identifier={identifier} title={title} />
}

