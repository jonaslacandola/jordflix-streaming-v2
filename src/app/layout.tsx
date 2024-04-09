import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HiBars3 } from "react-icons/hi2";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch HD Movies for free",
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
        <nav className="flex justify-between items-center px-3 py-2">
          <button>
            <HiBars3 className="text-2xl" />
          </button>
          <p>Search here</p>
        </nav>
        {children}
      </body>
    </html>
  );
}
