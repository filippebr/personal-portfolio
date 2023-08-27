
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
    <div className="w-full shadow-cardShadow flex flex-col items-center justify-center gap-4 py-8">
      {Icon && <Icon className="text-yellow text-5xl" />}
      <h1 className="text-xl font-semibold text-gray-100 uppercase tracking-[6px]">
        {title}
      </h1>
      <p className="text-xl text-grayMedium px-10 text-center leading-[32px]">
        {subTitle}
      </p>
    </div>
  )
}

export default OfferCard
