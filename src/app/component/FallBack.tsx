"use client";
import Spinner from "./Spinner";

export default function FallBack() {
  return (
    <div className="absolute h-screen w-full flex justify-center items-center z-[1001]">
      <Spinner />
    </div>
  );
}
