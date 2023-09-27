import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import useMobileDeviceDetection from 'hooks/useMobileDetection'
interface Props {
  href: string
  value: string
  canActive?: boolean
  className?: string
}
const NavLink = ({ href, value, canActive = false, className }: Props) => {
  const router = useRouter()
  const isMobile = useMobileDeviceDetection()
  return (
      <Link href={href} passHref>
        <p
          className={`text-base text-white select-none hover:text-white ${
            router.pathname == href && canActive
              ? 'font-semibold'
              : 'text-opacity-80'
          } ${isMobile ? 'cursor-default' : 'cursor-pointer'} ${className}`}
        >
          {value}
        </p>
      </Link>
  )
}

export default NavLink
