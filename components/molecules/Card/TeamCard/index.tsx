import Text from 'components/atoms/Text'
import Image from "next/legacy/image"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface TeamCardProps {
  imageSrc: string
  name: string
  job: string
  linkedin: string
}
const TeamCard = ({ imageSrc, job, name, linkedin }: TeamCardProps) => {
  const container: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [imageSize, setImageSize] = useState({ width: 328, height: 356 })
  useEffect(() => {
    if (container.current?.clientWidth !== undefined) {
      setImageSize({
        width: container.current?.clientWidth,
        height: container.current?.clientWidth * 1.1,
      })
    }

    const resizeListener = () => {
      if (container.current?.clientWidth !== undefined) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth * 1.085,
        })
      }
    };

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [container])
  return (
    <div className="w-full bg-white/5 rounded-md overflow-hidden" ref={container}>
      <div className="w-full relative">
        <Image
          width={imageSize.width}
          height={imageSize.height}
          src={imageSrc}
          quality={80}
          objectFit="contain"
          objectPosition="bottom"
          alt="Team Avatar"
        />
      </div>
      <div className="w-full px-8 py-7 grid gap-2">
        <Link href={linkedin} target={'_blank'} rel="noreferrer">
          <Text textStyle="TeamName" value={name} />
        </Link>
        <Text textStyle="TeamJob" value={job} />
      </div>
    </div>
  )
}

export default TeamCard
