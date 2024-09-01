"use client";

import { menuCtx } from "@/store/MenuContext";
import { useContext } from "react";

export default function SidebarWrapper({ children }) {
  const { isMenuOpen } = useContext(menuCtx);

  return (
    <div
      className={`${
        isMenuOpen
          ? "bg-[#131415] backdrop-blur-lg translate-x-0"
          : "max-md:-translate-x-full rounded-xl"
      } max-md:absolute top-0 left-0 bottom-0 z-10 flex justify-between flex-col h-svh min-w-[268px] transition-all duration-300 px-10 md:py-16 max-md:px-3 pt-1 pb-10`}
    >
      {children}
    </div>
  );
}
