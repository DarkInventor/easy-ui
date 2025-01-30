'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const components = {
  img: ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg"
    />
  ),
}

interface MDXContentProps {
  code: string
}

export default function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)
  // @ts-ignore
  return <Component components={components} />
}
