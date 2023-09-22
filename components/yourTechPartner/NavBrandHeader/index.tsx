import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'

const NavBrandHeader = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            <Image src={'/images/brand.svg'} width='104' height={96} alt='company brand' loading='lazy' />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrandHeader