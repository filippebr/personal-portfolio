import AboutList from './AboutList'

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-grayMedium">
          I&apos;m{' '}
          <span className="font-bold tracking-wider text-white">
            Filippe Braga
          </span>{' '}
          and I&apos;m a freelancer{' '}
          <span className="font-bold text-white">
            Web Developer and a 3D Creator
          </span>
          . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          voluptates tempora doloribus mollitia! Neque tempore eum non maiores
          dolore vitae amet assumenda a quisquam! Voluptate dignissimos unde
          deleniti optio aperiam?
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
