import React from 'react'
import Image from "next/legacy/image"
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'

interface ImageCardProps extends LazyCardProps {
  title: string
  imageUrl: string
}
const ImageCard = ({
  title = '',
  height = 450,
  bottomSquareSize = 'small',
  imageUrl = ''
}: ImageCardProps) => {
  return (
    <div
      className={`w-full ${
        height == 300
          ? 'h-[300px]'
          : height == 350
          ? 'h-[350px]'
          : height == 400
          ? 'h-[400px]'
          : height == 450
          ? 'h-[450px]'
          : ''
      } flex flex-col place-items-center place-content-between overflow-hidden relative bg-cardDark border border-borderLight pt-[54px] rounded-md px-12 lg:px-16`}
    >{!imageUrl ? <LazyCard bottomSquareSize={bottomSquareSize} height={height} /> :
      <Image
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          alt={title}
        />
      }
    </div>
  )
}

export default ImageCard
export type { ImageCardProps }