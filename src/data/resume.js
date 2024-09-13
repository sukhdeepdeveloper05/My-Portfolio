import GithubIcon from "@/assets/icons/Github";
import projects from "./projects";
import LinkedinIcon from "@/assets/icons/Linkedin";
import GlobeIcon from "@/assets/icons/Globe";

const resumeData = {
  socials: [
    {
      title: "Github",
      handle: "@sukhdeepdeveloper05",
      link: "https://github.com/sukhdeepdeveloper05",
      icon: GithubIcon
    },
    {
      title: "Website",
      handle:"https://sukhdeepdeveloper.vercel.app",
      link: "https://sukhdeepdeveloper.vercel.app",
      icon: GlobeIcon,
    },
    {
      title: "LinkedIn",
      handle: "/sukhdeepdeveloper05",
      link: "https://www.linkedin.com/in/sukhdeepdeveloper05/",
      icon: LinkedinIcon,
    },
  ],
  skills: [
    {
      title: "Web Developement",
      description: "HTML, CSS, Tailwind, JavaScript, React JS, Next.Js",
    },
    {
      title: "Design Tools",
      description: "Figma, Adobe Photoshop, Canva",
    },
    {
      title: "Version Control",
      description: "Git, GitHub",
    },
    {
      title: "Other",
      description:
        "Responsive Design, UI Design, SEO Best Practices, Speed Optimization",
    },
  ],
  education: [
    {
      title:
        "Bachelor of Computer Application | Govt. College, Chunni Kalan (Affiliated to Punjabi University, Patiala)",
      year: "(2022 - 2025)",
    },
    {
      title: "XII (PSEB) | Govt. Sen. Sec. School Chunni Kalan",
      year: "83% | 2022",
    },
  ],
  projects: projects,
  achievements_hobbies: [
    {
      title: "achievements",
      description:
        "Earned a React Developer certification from Academind by Maximilian Schwarzmüller on Udemy.",
    },
    {
      title: "Hobbies",
      description:
        "In my free time, I'm either smashing boundaries on the cricket field or immersing myself in the world of anime and music to relax my mind and body.",
    },
  ],
};

export default resumeData;
