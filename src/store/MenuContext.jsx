"use client";

import { createContext, useState } from "react";

export const menuCtx = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export default function MenuContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return <menuCtx.Provider value={contextValue}>{children}</menuCtx.Provider>;
}
