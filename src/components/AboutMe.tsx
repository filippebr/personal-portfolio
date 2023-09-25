import AboutList from './AboutList'

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-grayMedium">
          I&apos;m{' '}
          <span className="font-bold tracking-wider text-white">
            Filippe Braga,
          </span>{' '}
          a freelancer{' '}
          <span className="font-bold text-white">
            Web Developer and 3D Creator.{' '}
          </span>
          I've been working on JavaScript projects for over 5 years and creating 3D projects 
          for more than 4 years. I have a passion for crafting new and inspiring creations 
          that motivate both myself and others to excel.
        </p>
        <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web Design" />
          <AboutList title="HTML" />
          <AboutList title="CSS" />
          <AboutList title="JavaScript" />
          <AboutList title="React" />
          <AboutList title="Nextjs" />
          <AboutList title="Prisma" />
          <AboutList title="SQL" />
          <AboutList title="Tailwind" />
          <AboutList title="Blender" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
