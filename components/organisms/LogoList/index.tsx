import LineDivider from 'components/atoms/LineDivider'
import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <Link href="https://epicureanadvertising.com/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/epicurean-advertising.webp'}
              width={120}
              height={120}
              alt="Epicurean Advertising"
            />
        </Link>
        <Link href="https://www2.hm.com/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/hnm.png'}
              width={65}
              height="43"
              alt="H & M"
            />
        </Link>
        <Link href="https://www.oaksure.co.za/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/oaksure.svg'}
              width={180}
              height={180}
              alt="Oaksure Financial Service"
            />
        </Link>
        <Link href="https://www.qima.com/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/qima.png'}
              width={128}
              height={46}
              alt="QIMA"
            />
        </Link>
        <Link href="https://aaronfoxlaw.com/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/aaron-fox-law.jpg'}
              width={150}
              height={61}
              alt="Aaron Fox Law"
            />
        </Link>
        <Link href="https://vetslovepets.com.au/" rel="noopener noreferrer" target="_blank">
            <Image
              src={'/images/client_logo/vetslovepets.webp'}
              width={80}
              height={80}
              alt="Vets Love Pets"
            />
        </Link>
      </section>
    </>
  )
}

export default LogoList
