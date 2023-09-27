import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from "next/legacy/image"
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - Your Tech Partner">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              badge="CLIENT-DEVELOPMENT DRIVEN"
              title="We elicit. We deliver. We support."
              description="We discover and understand Client’s demand, suggest options that fit as much as possible. Timely delivering is our way. And our support will make you feel us as a partner."
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Contact us" href="/contact" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Understood"
              description="Your business idea will be grasped for tailored solutions through detailed requirement discussions."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="We efficiently execute projects with precise development and thorough testing, ensuring high-quality results."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship and Support"
              description="Upon project completion, we deliver all assets and extend ongoing support, serving as your dedicated tech partner."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                badge="Who We Are"
                title="Your Trusted Technology Partner"
                paragraph="We are a cohesive team of experienced software developers with a strong background in software outsourcing in Vietnam. Aiming to be your trusted technology partner, committed to delivering high-quality work promptly. These creative people work together to create maximum work results."
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2em" }}>
                <ButtonLink
                  value="See Our Teams"
                  href="/about#our-team"
                  size="small"
                  color="white"
                  style="light"
                />
                <ButtonLink
                  value="Explore our Upwork profile"
                  href="https://www.upwork.com/freelancers/leanhvu"
                  size="small"
                  color="white"
                  style="light"
                />
              </div>
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/home/how-we-work-illustration.png'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              badge="HOW WE WORK?"
              title="Everything is well planned, well designed and developed wholeheartedly"
              paragraph="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test thoroughly projects before they are shipped."
            />
          </aside>
        </section>
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              badge="PROJECTS"
              title="We have completed many amazing projects serving clients with diverse purposes."
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                hasImage={true}
                imageUrl="/images/home/project-1.png"
                title="Automation Process"
                description="Helps client to save time doing repetitive daily tasks."
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                hasImage={true}
                imageUrl="/images/home/project-2.png"
                title="Website"
                description="Where client can make e-commerce, or simply digital marketing."
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section>
        {/* Prices */}
        {/*<section className="flex flex-col gap-16 items-center">*/}
        {/*  <div*/}
        {/*    className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"*/}
        {/*    data-aos="zoom-in-up"*/}
        {/*  >*/}
        {/*    <SectionSentence*/}
        {/*      badge="GET STARTED"*/}
        {/*      title="What do you need? Choose a service that can help you"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">*/}
        {/*    <div data-aos="fade-up-right">*/}
        {/*      <PricingCard*/}
        {/*        price="500$"*/}
        {/*        title="UI Design"*/}
        {/*        features={[*/}
        {/*          '10 design pages',*/}
        {/*          'Well-documented',*/}
        {/*          '2 revisions',*/}
        {/*          '$100/additional page'*/}
        {/*        ]}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div data-aos="fade-up" data-aos-delay="300">*/}
        {/*      <PricingCard*/}
        {/*        price="5000$"*/}
        {/*        title="Development"*/}
        {/*        features={[*/}
        {/*          'Web & Mobile',*/}
        {/*          'Well-documented',*/}
        {/*          '4 revisions',*/}
        {/*          '$1000/additional feature'*/}
        {/*        ]}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div data-aos="fade-up-left">*/}
        {/*      <PricingCard*/}
        {/*        price="3000$"*/}
        {/*        title="Maintenance"*/}
        {/*        features={[*/}
        {/*          'Daily backup',*/}
        {/*          '3 hours of maintenance',*/}
        {/*          'Including fixing',*/}
        {/*          '$50/additional hour'*/}
        {/*        ]}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              badge="TESTIMONIAL"
              title="What do our clients say that we never let down?"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
