import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'
import {
  FiClock,
  FiCode,
  FiFigma,
  FiLayout,
  FiTrendingUp,
  FiZap,
  FiGlobe,
  FiMonitor,
  FiSmartphone,
} from 'react-icons/fi'
import randomString from 'utils/randomString'
import CardListIcon from 'components/molecules/Card/CardListIcon'

const AutomationSolutionServiceDetail = () => {
  const features: FeatureCardProps[] = [
    {
      title: 'Review architect',
      description: 'Review your current process flow. Suggest right framework with estimated cost.',
      icon: <FiMonitor />,
    },
    {
      title: 'Revision',
      description: `Before coding, you could adjust the workflow a few of times.`,
      icon: <FiClock />,
    },
    {
      title: 'Implement',
      description: `Deliver the app to run the process automatically.`,
      icon: <FiCode />,
    },
    {
      title: 'Warranty',
      description:
        'Supervise workflow for a period to ensure stability. Fixing if issue from our end.',
      icon: <FiLayout />,
    },
  ]
  return (
    <PageTemplate title="Process Automation - Service Detail - Your Tech Partner">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="Automation Solutions"
            title="We deliver expert consultations and proposals, dedicated to maximizing the automation of your workflows."
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/services/automation-solutions/api-integration.png'}
              layout="fill"
              objectFit="fill"
              alt="API Integration Service"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`API Integration services. We specialize in integrating advanced APIs, such as ChatGPT, Shopify, Jotform, CRMs, etc directly into Google Sheets, SQL or noSQL database, ensuring smooth, automated data flow and enhanced operational efficiency for your business.`}
                textStyle={'SectionParagraph'}
              />
            </div>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/services/automation-solutions/zapier.png'}
              layout="fill"
              objectFit="fill"
              alt="Zapier platform"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`No-Code Platform Support: Elevate your operational efficiency with our specialized services in platforms like Zapier, Make, and Pabbly Connect. We offer comprehensive consultation, strategic setup, and personalized workflow customization, aligning technology seamlessly with your business goals to ensure streamlined, automated success in your endeavors.`}
                textStyle={'SectionParagraph'}
              />
            </div>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/services/automation-solutions/live-dashboard.png'}
              layout="fill"
              objectFit="fill"
              alt="Live Dashboard"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Live Dashboard: Unlock real-time, data-driven decision-making with our tailor-made live dashboard services. Leveraging the power of Looker Data Studio, we facilitate a visual exploration of your real-time data, ensuring instant access to crucial metrics and insights. Our solutions enable you to navigate through your data effortlessly, enhancing strategic planning and operational agility in your business landscape.`}
                textStyle={'SectionParagraph'}
              />
            </div>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/services/automation-solutions/google-ads-script.jpg'}
              layout="fill"
              objectFit="fill"
              alt="Google Ads Script"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Google Ads Script:<br>Output Google Ads report to GoogleSheet<br>Automatically enable/disable campaigns based on customized criterias: total spent, daily spent, top impr, conversions, etc`}
                textStyle={'SectionParagraph'}
              />
            </div>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/services/automation-solutions/Web-scraping.png'}
              layout="fill"
              objectFit="fill"
              alt="Web Scraping"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Web Crawling, Scraping: Extract data from Government Websites, real estate websites, or shopping pages. The data extracted could be images, descriptions, prices, files, etc., saving this data into a database for further analysis.`}
                textStyle={'SectionParagraph'}
              />
            </div>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
    </PageTemplate>
  )
}

export default AutomationSolutionServiceDetail
