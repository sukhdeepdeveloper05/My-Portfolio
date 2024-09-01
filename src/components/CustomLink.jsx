"use client";

import { menuCtx } from "@/store/MenuContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function CustomLink({ href, children, ...props }) {
  const pathname = usePathname();
  const router = useRouter();
  const { setIsMenuOpen } = useContext(menuCtx);

  async function handleTransition(e) {
    e.preventDefault();

    document.querySelector(".main-content").classList.add("page-transition");
    await sleep(300);

    router.push(href);

    await sleep(300);
    document.querySelector(".main-content").classList.remove("page-transition");
  }

  return (
    <Link
      href={href}
      onClick={(e) => {
        setIsMenuOpen(false);
        handleTransition(e);
      }}
      prefetch
      {...props}
      className={`rounded-lg py-2 px-3 text-sm leading-6 flex items-center gap-3 transition ${
        pathname === href ? "text-white bg-[#1a1b1e]" : "text-[#a7aab4]"
      }`}
    >
      {children}
    </Link>
  );
}
