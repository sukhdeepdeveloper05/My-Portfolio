import Image from "next/image";
import CustomLink from "../CustomLink";

import HomeIcon from "@/assets/icons/Home";
import profileImage from "@/assets/images/profile.png";
import ProjectsIcon from "@/assets/icons/Projects";
import ResumeIcon from "@/assets/icons/Resume";
import CoffeeIcon from "@/assets/icons/Coffee";
import MailIcon from "@/assets/icons/Mail";
import InstagramIcon from "@/assets/icons/Instagram";
import FacebookIcon from "@/assets/icons/Facebook";
import GithubIcon from "@/assets/icons/Github";
import LinkedinIcon from "@/assets/icons/Linkedin";
import TwitterIcon from "@/assets/icons/Twitter";
import SidebarWrapper from "./SidebarWrapper";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-start gap-4 p-3">
          <figure>
            <Image
              src={profileImage}
              width={40}
              height={40}
              alt="Profile image"
            />
          </figure>
          <div>
            <p className="text-sm font-medium">Sukhdeep Sohal</p>
            <p className="text-[#a7aab4] text-xs">Frontend Developer</p>
          </div>
        </div>
        <div>
          <p className="uppercase text-[10px] font-bold tracking-widest mb-3 px-3">
            Creations
          </p>
          <div className="flex flex-col gap-1">
            <CustomLink href="/">
              <HomeIcon fill="currentColor" />
              Home
            </CustomLink>
            <CustomLink href="/personal-projects">
              <ProjectsIcon />
              Personal Projects
            </CustomLink>
            <CustomLink href="/resume">
              <ResumeIcon />
              Resume
            </CustomLink>
            <CustomLink href="/contact">
              <CoffeeIcon />
              Let's Talk
            </CustomLink>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase text-[10px] font-bold tracking-widest mb-3 px-3">
          Socials
        </p>
        <div className="max-w-[180px] flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mx-auto w-full text-[#a7aab4]">
          <a
            target="_blank"
            href="mailto:sukhdeepdeveloper05@gmail.com"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <MailIcon />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/_sukhdeep_sohal_/"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/SukhdeepSohal05"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/sukhdeepdeveloper05"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sukhdeepdeveloper05/"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <LinkedinIcon />
          </a>
          <a
            target="_blank"
            href="https://x.com/SukhdeepDev"
            className="p-3 hover:bg-[#1a1b1e] hover:text-white rounded-lg transition-all"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </SidebarWrapper>
  );
}
