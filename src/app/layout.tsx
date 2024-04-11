import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { HiBars3 } from "react-icons/hi2";
import { Suspense } from "react";

import Modal, { Window, Open } from "./component/Modal";
import SideBar from "./component/SideBar";
import SearchBar from "./component/SearchBar";
import FallBack from "./component/FallBack";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordflix - Watch HD Movies and TV Series for free",
  description:
    "Jordflix is a free movies and tv series streaming application made with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen grid grid-rows-[auto_1fr] bg-gradient-to-t to-slate-900 from-slate-950 text-slate-50`}
      >
        <Modal>
          <nav className="flex justify-between items-center px-3 py-2">
            <Open window="sidebar">
              <button>
                <HiBars3 className="text-2xl" />
              </button>
            </Open>
            <SearchBar />
          </nav>
          <Window name="sidebar">
            <SideBar />
          </Window>

          <Suspense fallback={<FallBack />}>{children}</Suspense>
        </Modal>
      </body>
    </html>
  );
}
