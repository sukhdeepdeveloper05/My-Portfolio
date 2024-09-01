"use client";

import CloseIcon from "@/assets/icons/Close";
import HamburgerMenuIcon from "@/assets/icons/HamburgerMenu";
import { menuCtx } from "@/store/MenuContext";
import React, { useContext } from "react";

export default function HamburgerBtn() {
  const { isMenuOpen, setIsMenuOpen } = useContext(menuCtx);
  return (
    <button
      className="px-1 py-[2px] bg-[#1a1b1e] border border-[#2f3037] rounded"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <span className={`${isMenuOpen ? "rotate-180" : "rotate-0"} flex transition-all`}>{isMenuOpen ? <CloseIcon /> : <HamburgerMenuIcon />}</span>
    </button>
  );
}
