import { HiChevronDoubleRight } from 'react-icons/hi'

type Props = {
  title: string
}

function AboutList({ title }: Props) {
  return (
    <h4 className="text-2xl font-semibold flex items-center gap-4">
      <span className="text-yellow">
        <HiChevronDoubleRight />
      </span>
      {title}
    </h4>
  )
}

export default AboutList
