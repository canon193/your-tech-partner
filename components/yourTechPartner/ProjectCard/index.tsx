import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import ImageCard, { ImageCardProps } from 'components/yourTechPartner/ImageCard'
import Text from 'components/atoms/Text'
interface ProjectCardProps extends ImageCardProps {
  title: string
  description: string
  linkDetail: string
  imageUrl: string
}
const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 450,
  linkDetail = '/project/detail',
  imageUrl = ''
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <ImageCard imageUrl={imageUrl} title={title} bottomSquareSize={bottomSquareSize} height={height} />
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
            href={linkDetail}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
