"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Slideshow({
  images,
}: Readonly<{ images: Array<any> }>) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((curr) => (curr >= images?.length - 1 ? 0 : curr + 1));
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images?.length]);

  return (
    <div className="relative aspect-[12/8] md:aspect-[12/4] lg:aspect-[12/4] bg-slate-900 bg-opacity-50 transition-all duration-300 hover:bg-opacity-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 backdrop-blur-sm">
        <Link
          href={`/movies/watch/${images[currentImage].id}`}
          className="text-[12px] lg:text-base"
        >
          {images[currentImage].title}
        </Link>
        <h1 className="text-4xl font-black text-blue-600 xl:text-8xl">
          jordflix
        </h1>
        <p className="text-[10px] lg:text-base uppercase">
          Watch hd movies and series for free
        </p>
      </div>
      <Image
        alt="Jordflix Slideshow"
        fill
        src={`https://image.tmdb.org/t/p/w500/${images[currentImage].image}`}
        className="object-cover z-[-1]"
      />
    </div>
  );
}
