import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/yourTechPartner/ProjectCard'
import ImageCard from 'components/yourTechPartner/ImageCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'
import projectDetail from './projects.json'


const HMProjectDetail = () => {
  interface Project {
    title: string
    description: string
    imageUrl: string
    linkDetail: string
  }
  const projectList: Project[] = projectDetail

  return (
    <PageTemplate title='Project Detail - Your Tech Partner'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="Automotives Testing Tool"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <ImageCard imageUrl="/images/projects/vinfast-banner.png" title='Automotives Testing Tool' bottomSquareSize="big" height={400} />
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="The tool generates diagnostic reports for all Electronic Control Units (ECUs) within the vehicle, including hardware part numbers, software part numbers, and CAN dbc versions. These reports are then compared with expected values to determine if the vehicle is qualified or not-qualified, ensuring high-quality production"
          />
          <Text
            textStyle="SectionParagraph"
            value="The tool supports the reading and clearing of ECU Diagnostic Trouble Codes (DTCs), enabling technicians to identify and resolve issues promptly"
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Automotives" textStyle="ProjectDetailValue" />
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
