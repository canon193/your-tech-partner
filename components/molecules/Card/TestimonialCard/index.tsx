import Text from 'components/atoms/Text'
import Image from "next/legacy/image"
import React from 'react'
interface Props {
  avatarSrc: string
  name: string
  linkedin: string
  company: string
  company_website: string
  testimony: string
}
const TestimonialCard = ({ avatarSrc, company, name, linkedin, company_website, testimony }: Props) => {
  return (
    <div className="w-full px-10 py-14 bg-light rounded-md select-none">

      <div className="space-y-5 flex flex-col items-center text-center">
        <div className="relative w-fit">
          <Image
            src={avatarSrc}
            width={100}
            height={100}
            objectFit="contain"
            alt="avatar"
          />
          <div className="absolute bottom-0 right-0">
            <Image
              src={'/images/quote-badge.svg'}
              width={28}
              height={28}
              alt="quote badge"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            {linkedin ? (
              <a href={linkedin}>
                <Text value={name} textStyle="TestimonialName" />
              </a>
            ) : (
              <Text value={name} textStyle="TestimonialName" />
            )}
            {company_website ? (
              <a href={company_website}>
                <Text value={company} textStyle="TestimonialCompany" />
              </a>
            ) : (
              <Text value={company} textStyle="TestimonialCompany" />
            )}
          </div>
          <Text value={testimony} textStyle="TestimonialDescription" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
