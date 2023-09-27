import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from "next/legacy/image"
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Your Tech Partner">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="We are creative, smart and hardworking people"
            description={`Our team consists of many talented and disciplined developers working many years in software outsourcing from Vietnam. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section id="our-team" className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/vule.jpg"
              job="Founder"
              name="Vu Le"
              linkedin="https://www.linkedin.com/in/le-anh-vu-ba770aa7/"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/longtran.jpg"
              job="Project Manager"
              name="Long Tran"
              linkedin="https://www.linkedin.com/in/long-tran26/"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/emmahuynh.jpg"
              job="UI Designer"
              name="Emma Huynh"
              linkedin="https://www.linkedin.com/in/myhuynhdesigner/"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/khanguyen.jpg"
              job="Software Engineer"
              name="Kha Nguyen"
              linkedin="https://www.linkedin.com/in/nguyễn-văn-kha-023b1bb0/"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/phongnguyen.jpg"
              job="Software Engineer"
              name="Phong Nguyen"
              linkedin="https://www.linkedin.com/in/phong-nguyen-556199158/"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/about/minhnguyen.jpg"
              job="DevOps Engineer"
              name="Minh Nguyen"
              linkedin="https://www.linkedin.com/in/minff/"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
