import { FunctionComponent } from 'react'

type Props = {
  Icon: React.ElementType
  title: string
  subTitle: string
}

function OfferCard({
  Icon,
  title,
  subTitle,
}: Props): React.ReactElement<Props> {
  return (
    <div className="w-full shadow-cardShadow flex flex-col items-center justify-center gap-10 py-16">
      {Icon && <Icon className="text-designColor text-7xl" />}
      <h1 className="text-2xl font-semibold text-gray-100 uppercase tracking-[10px]">
        {title}
      </h1>
      <p className="text-2xl text-textColor px-10 text-center leading-[40px]">
        {subTitle}
      </p>
    </div>
  )
}

export default OfferCard
