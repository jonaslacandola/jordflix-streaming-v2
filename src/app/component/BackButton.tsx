"use client";

import { HiHome } from "react-icons/hi2";
import { useRouter } from "next/navigation";

interface props {
  text: string;
}

export default function BackButton({ text }: props) {
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
      <p>{text}</p>
    </div>
  );
}
