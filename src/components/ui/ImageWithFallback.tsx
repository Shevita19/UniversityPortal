"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaImage } from 'react-icons/fa'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  className?: string
}

const ImageWithFallback = ({ src, alt, fill, priority, className }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <FaImage className="w-12 h-12 text-gray-400" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      onError={() => setError(true)}
    />
  )
}

export default ImageWithFallback 