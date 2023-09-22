import LineDivider from 'components/atoms/LineDivider'
import Image from "next/legacy/image"
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/about/hnm.png'}
            width={65}
            height="43"
            alt="H & M"
          />
        </div>
        <div className="">
          <Image
            src={'/images/about/vinfast.png'}
            width={63}
            height="63"
            alt="Vinfast"
          />
        </div>
        <div className="">
          <Image
            src={'/images/about/vib.png'}
            width={125}
            height="62"
            alt="VIB"
          />
        </div>
        <div className="">
          <Image
            src={'/images/about/propzy.png'}
            width={199}
            height="48"
            alt="Propzy"
          />
        </div>
        <div className="">
          <Image
            src={'/images/about/ralph-lauren.png'}
            width={31}
            height="72"
            alt="Ralph lauren"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
