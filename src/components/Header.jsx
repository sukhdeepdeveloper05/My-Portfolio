import Image from "next/image";
import Link from "next/link";
import profileImage from "@/assets/images/profile.png";
import HamburgerBtn from "./HamburgerBtn";

export default function Header() {
  return (
    <header className="bg-[#131415] flex md:hidden items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center justify-start gap-4">
        <figure>
          <Image src={profileImage} width={40} height={40} alt="Profile image" />
        </figure>
        <div>
          <p className="text-sm font-medium">Sukhdeep Sohal</p>
          <p className="text-[#a7aab4] text-xs">Web Developer</p>
        </div>
      </Link>
      <HamburgerBtn />
    </header>
  );
}
