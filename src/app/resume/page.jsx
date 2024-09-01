import resumeData from "@/data/resume";

export default function ResumePage() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="uppercase text-2xl leading-6 font-bold text-[#4A86E8]">
          Sukhdeep Singh
        </h1>
        <p className="text-gray-100 text-xs xl:text-base">
          sukhdeepsohal05@gmail.com | (+91) 70097-58566
        </p>
      </div>

      {/* Social Links */}
      <article className="my-4 md:my-6">
        <h1 className="sm:hidden uppercase font-bold tracking-wider text-[#4A86E8] text-lg">
          Socials
        </h1>
        <div className="flex flex-wrap max-sm:flex-col sm:justify-center sm:items-center sm:gap-x-8 gap-2 text-gray-200 px-4 py-2 sm:px-0 sm:py-0">
          {resumeData.socials.map((social) => {
            return (
              <a
                key={social.title}
                href={social.link}
                className="flex items-center gap-1 hover:text-white text-xs xl:text-base transition"
              >
                {social.icon()}
                <span>{social.handle}</span>
              </a>
            );
          })}
        </div>
      </article>

      {/* Skills */}
      <article className="my-4 md:my-6">
        <h1 className="uppercase font-bold tracking-wider text-[#4A86E8] text-lg">
          Skills
        </h1>
        <ul className="list-disc list-inside px-4 py-2">
          {resumeData.skills.map((skill) => {
            return (
              <li
                key={skill.title}
                className="relative block pl-5 mb-2 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-2 xl:before:top-[10px] before:left-0 text-sm xl:text-base"
              >
                <span className="font-bold tracking-wider mr-2 whitespace-nowrap">
                  {skill.title}:
                </span>
                <span className="text-gray-100 font-light">
                  {skill.description}
                </span>
              </li>
            );
          })}
        </ul>
      </article>

      {/* Education */}
      <article className="my-4 md:my-6">
        <h1 className="uppercase font-bold tracking-wider text-[#4A86E8] text-lg">
          Education
        </h1>
        <ul className="list-disc list-inside px-4 py-2">
          {resumeData.education.map((education) => {
            return (
              <li
                key={education.title}
                className="relative w-full block min-[500px]:flex justify-between pl-5 mb-2 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-2 xl:before:top-[10px] before:left-0 text-sm xl:text-base"
              >
                <span className="tracking-wider mr-2">{education.title}</span>
                <span className="text-gray-200 font-light whitespace-nowrap">
                  {education.year}
                </span>
              </li>
            );
          })}
        </ul>
      </article>

      {/* Projects */}
      <article className="my-4 md:my-6">
        <h1 className="uppercase font-bold tracking-wider text-[#4A86E8] text-lg">
          Projects
        </h1>
        <ul className="list-disc list-inside px-4 py-2">
          {resumeData.projects.map((project, i) => {
            return (
              i < 5 && (
                <li
                  key={project.title}
                  className="relative w-full flex flex-col justify-between pl-5 last:mb-0 mb-4 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-2 xl:before:top-[10px] before:left-0 text-sm xl:text-base"
                >
                  <p className="flex justify-between items-center mb-1">
                    <span className="font-bold tracking-wider mr-2">
                      {project.title}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-gray-200 hover:text-white font-extralight transition whitespace-nowrap flex"
                    >
                      <span className="hidden md:inline-block">
                        {project.link}
                      </span>
                      <span className="inline-block md:hidden px-2 py-[2px] border border-[#2f3037] rounded">
                        Visit
                      </span>
                    </a>
                  </p>
                  <p className="md:max-w-[80%] font-light">
                    {project.description}
                  </p>
                </li>
              )
            );
          })}
        </ul>
      </article>

      {/* Achievements / Hobbies */}
      <article className="my-4 md:my-6">
        <h1 className="uppercase font-bold tracking-wider text-[#4A86E8] text-lg">
          Achievements / Hobbies
        </h1>
        <ul className="list-disc list-inside px-4 py-2">
          <li className="relative w-full block mb-2 pl-5 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-2 xl:before:top-[10px] before:left-0 text-sm xl:text-base">
            <span className="font-bold tracking-wider mr-2">Achievenemts:</span>
            <span className="text-gray-100 font-light max-w-[75%]">
              Earned a React Developer certification from Academind by
              Maximilian Schwarzmüller on Udemy.
            </span>
          </li>
          <li className="relative w-full block mb-2 pl-5 before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:absolute before:top-2 xl:before:top-[10px] before:left-0 text-sm xl:text-base">
            <span className="font-bold tracking-wider mr-2">Hobbies:</span>
            <span className="text-gray-100 font-light max-w-[75%]">
              In my free time, I'm either smashing boundaries on the cricket
              field or immersing myself in the world of anime and music to relax
              my mind and body.
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
}
