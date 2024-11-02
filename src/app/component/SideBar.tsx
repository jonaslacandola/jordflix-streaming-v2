"use client";

import {
  HiHome,
  HiPlayCircle,
  HiRectangleStack,
  HiXMark,
} from "react-icons/hi2";
import Link from "next/link";
import { ForwardedRef, forwardRef } from "react";
import { useModal } from "./Modal";

const SideBar = forwardRef(function SideBar(
  props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { close } = useModal();

  return (
    <div
      className="bg-slate-950 h-full w-3/4 md:w-[25%] p-2 flex flex-col justify-between"
      ref={ref}
    >
      <div className="flex flex-col gap-4 text-base md:text-lg xl:gap-8">
        <button onClick={close}>
          <HiXMark className="text-lg md:text-xl lg:text-2xl" />
        </button>
        <div className="w-full flex flex-col px-2 xl:px-4">
          <Link
            href="/home"
            className={`hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 md:gap-4`}
          >
            <HiHome className="text-xl md:text-2xl" />
            <span>Home</span>
          </Link>
          <Link
            href="/movies"
            className="hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 md:gap-4"
          >
            <HiPlayCircle className="text-xl md:text-2xl" />
            <span>Movies</span>
          </Link>
          <Link
            href="/series"
            className="hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 md:gap-4"
          >
            <HiRectangleStack className="text-xl md:text-2xl" />
            <span>Series</span>
          </Link>
        </div>
      </div>
      <Link href="/" className="p-4">
        <HiHome className="text-2xl" />
      </Link>
    </div>
  );
});

export default SideBar;
