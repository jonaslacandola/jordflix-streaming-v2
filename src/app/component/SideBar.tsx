"use client";

import { HiArrowLeftOnRectangle, HiHome, HiXMark } from "react-icons/hi2";
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
      className="bg-slate-950 h-full w-[40%] md:w-[25%] lg:w-[20%] xl:w-[15%] p-2 flex flex-col justify-between"
      ref={ref}
    >
      <div className="flex flex-col gap-4 text-sm lg:text-base xl:gap-8">
        <button onClick={close}>
          <HiXMark className="text-lg md:text-xl lg:text-2xl" />
        </button>
        <div className="w-full flex flex-col px-2 xl:px-4">
          <Link
            href="/home"
            className={`hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300"
          >
            Movies
          </Link>
          <Link
            href="/series"
            className="hover:bg-slate-900 px-4 py-2 rounded-md transition-all duration-300"
          >
            Series
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
