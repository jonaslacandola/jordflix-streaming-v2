"use client";

import { HiHome } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function handleNavigateToHome() {
    router.back();
  }

  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={handleNavigateToHome}
    >
      <HiHome className="text-xl" />
      <p>Back to Home</p>
    </div>
  );
}
