"use client";
import { HiArrowRightOnRectangle, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { ForwardedRef, forwardRef, RefObject } from "react";

const SideBar = forwardRef(function SideBar(
  { onClose }: Readonly<{ onClose: Function }>,
  ref: ForwardedRef<HTMLDivElement>
) {
  function handleClose() {
    onClose();
  }

  return (
    <div
      ref={ref}
      className="bg-slate-950 h-full w-[40%] md:w-[25%] lg:w-[20%] xl:w-[15%] p-2 flex flex-col justify-between"
    >
      <div>
        <button onClick={handleClose}>
          <HiXMark className="text-xl" />
        </button>
        <div className="flex flex-col text-center gap-2 text-sm lg:text-base">
          <Link href="/home">Home</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/series">TV Series</Link>
        </div>
      </div>
      <Link href="/">
        <HiArrowRightOnRectangle className="text-xl" />
      </Link>
    </div>
  );
});

export default SideBar;
