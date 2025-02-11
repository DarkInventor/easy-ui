'use client'

import Image from 'next/image'
import { ImageProps } from 'next/image'

interface MDXImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
}

export default function MDXImage({ src, alt, ...props }: MDXImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      {...props}
    />
  )
}