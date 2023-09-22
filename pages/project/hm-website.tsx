import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/yourTechPartner/ProjectCard'
import ImageCard from 'components/yourTechPartner/ImageCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const HMProjectDetail = () => {
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'Ralph Lauren Website',
      description: 'E-commerce brand website',
      imageUrl: '/images/projects/ralphlauren.jpg',
      linkDetail: '/project/ralph-lauren-website'
    },
    {
      title: 'Vinfast Automotives Applications',
      description: 'A landing page for mobile app',
      imageUrl: '/images/projects/vinfast.png',
      linkDetail: '/project/vinfast-automotives-applications'
    },
  ]
  return (
    <PageTemplate title='Project Detail - Your Tech Partner'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="H&M E-commerce Website"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <ImageCard imageUrl="/images/projects/hm-banner.png" title='H&M E-commerce Website' bottomSquareSize="big" height={400} />
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="H&M website is a massively complicated e-commerce site where it is combine distinct content management, order management, warehouse and product management system."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Website Design and Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="H&M" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="JavaScript, HTML, CSS, PHP, KnockJS."
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="PROJECTS"
            title="Other Amazing Projects"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  linkDetail={project.linkDetail}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageTemplate>
  )
}

export default HMProjectDetail
