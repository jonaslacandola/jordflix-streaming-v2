"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Slideshow({
  images,
}: Readonly<{ images: Array<any> }>) {
  const ref = useRef<Array<any>>(images);
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((curr) =>
        curr >= ref.current.length - 1 ? 0 : curr + 1
      );
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [ref.current.length]);

  return (
    <div className="relative aspect-[10/4] bg-slate-900 bg-opacity-50 transition-all duration-300 hover:bg-opacity-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-6 backdrop-blur-sm">
        <Link href={`/movies/watch/${ref.current[currentImage].id}`}>
          {ref.current[currentImage].title}
        </Link>
        <h1 className="text-6xl font-black text-blue-600 xl:text-8xl">
          jordflix
        </h1>
        <p className="uppercase">Watch hd movies and series for free</p>
      </div>
      <Image
        alt="Jordflix Slideshow"
        fill
        src={`https://image.tmdb.org/t/p/w500/${ref.current[currentImage].image}`}
        className="object-cover z-[-1]"
      />
    </div>
  );
}
