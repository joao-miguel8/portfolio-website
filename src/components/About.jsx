

const About = () => {

  return (
    <div id="about" className=" flex flex-col gap-4" >
      <h2 className="mt-4 text-30 dark:text-white monoSlab" >👋 Hey, I'm João Miguel</h2>
      <p className="max-w-[500px] dark:text-white leading-7 font-light montserrat ">and I am Driven by an initial interest in game development, I embarked on a path that eventually led me to excel in frontend development as a web developer and software engineer.</p>
      <p className="max-w-[500px] dark:text-white leading-7 font-light montserrat ">My intimate familiarity with technology from a young age has been a key asset, allowing me to seamlessly immerse myself in the intricate world of web development. As a dedicated learner, I consistently embrace new challenges, refining my skills and staying at the forefront of industry trends to deliver impactful digital solutions.</p>
      <a download href="pdf.1" className="flex gap-2 items-center text-end text-16 robotoSlab dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#1A96C6] ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
 DOWNLOAD CV</a>
    </div>
  )
}

export default About