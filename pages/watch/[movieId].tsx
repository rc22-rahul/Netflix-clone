import React from "react";

import useMovies from "@/hooks/useMovies";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();

  const {movieId} = router.query;

  const {data: movie} = useMovies(movieId as string)

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full z-10 p-4 flex flex-row gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft onClick={() => router.push("/") } className="text-white cursor-pointer" size={30} />
        <p className="text-white font-bold text-xl lg:text-3xl">
          Watching :
          <span className="ml-2 font-light">{movie?.title}</span>
        </p>
      </nav>
      <video className="h-full w-full"
        src={movie?.videoUrl}
        autoPlay
        controls
        >

        </video>
    </div>
  )

}
export default Watch;