import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
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
            <Image src={'/images/brand.svg'} width='100' height={100} alt='company brand' loading='lazy' />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
