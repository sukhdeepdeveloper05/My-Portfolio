import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import MenuContextProvider from "@/store/MenuContext";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Sukhdeep Sohal",
  description: "Portfolio of frontend developer Sukhdeep Sohal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} text-white md:flex md:items-start md:justify-start min-h-svh`}
      >
        <MenuContextProvider>
          <Header />
          <Sidebar />
        </MenuContextProvider>
        <main className="md:h-svh h-[calc(100svh-72px)] w-full md:p-10 md:pl-0 flex-1">
          <div className="backdrop-blur-xl bg-[#1a1b1ee6] w-full h-full md:rounded-2xl relative">
            <div className="main-content h-full px-6 md:px-10 xl:px-16 overflow-auto scroll-smooth">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
