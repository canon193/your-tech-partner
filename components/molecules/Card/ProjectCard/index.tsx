import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
import Text from 'components/atoms/Text'
import Image from 'next/image'

interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
  hasImage?: boolean
  imageUrl?:string
}
const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 450,
  hasImage = false,
  imageUrl = ''
}: ProjectCardProps) => {
  let ImageContent = <div
      className={`w-full flex flex-col place-items-center place-content-between bg-cardDark rounded-md`}
    >
      <Image src={imageUrl} alt={title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
    </div>
  let Card = hasImage ? ImageContent : <LazyCard bottomSquareSize={bottomSquareSize} height={height} /> ;
  return (
    <div className="w-full">
      {Card}
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
