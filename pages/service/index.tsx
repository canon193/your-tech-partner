import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from "next/legacy/image"
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Service - Your Tech Partner'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="SERVICES"
              title="We are here to help individuals or SME client for challenging demands."
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-auto h-[311px] relative">
              <Image
                src={'/images/sevices/UI-UX-Design.png'}
                layout="intrinsic"
                width={429}
                height={311}
                objectFit="fill"
                alt='UI Design'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="UI/UX DESIGN"
                title="Convey your ideas to realistic but interesting interface"
                paragraph="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Beautiful Design"
                  description="Create a modern design for your idea."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Card Name"
                  description="Create vivid prototypes for your designs."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Automation Solutions"
                title="We implement processes that automate client’s workflow"
                paragraph="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Gsuit"
                />
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Python"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Google App Script"
                />
                <CardListIcon icon={<FiGlobe />} title="Google Ads Script" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[430px] relative">
              <Image
                src={'/images/sevices/Automation-Solutions.png'}
                layout="intrinsic"
                width={401}
                height={430}
                objectFit="fill"
                alt='Automation Solutions'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[543px] relative">
              <Image
                src={'/images/sevices/websites.png'}
                layout="intrinsic"
                width={559}
                height={543}
                objectFit="fill"
                alt='Websites'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Websites"
                title="We create various types of website: E-commerce, landing pages, Web-Application."
                paragraph="Frameworks: Magento, WordPress, Shopify, CMS. "
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='Back up every day' />
                <IconListItem icon={<FiArrowUp />} value='Upgrade' />
                <IconListItem icon={<FiRefreshCcw />} value='Change Request' />
                <IconListItem icon={<FiCheckCircle />} value='Fixing error' />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Embedded System"
                title="Create solutions for software, middleware to serve electronic system."
                paragraph="Tell us your problem, we worked in automotive industry for years to solve its software demands."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Linux"
                />
                <CardListIcon icon={<FiGlobe />} title="Automotives" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-auto h-[430px] relative">
              <Image
                src={'/images/sevices/embedded-system.png'}
                layout="intrinsic"
                width={401}
                height={430}
                objectFit="fill"
                alt='Automation Solutions'
              />
            </figure>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
