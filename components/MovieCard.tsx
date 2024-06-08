import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import useModal from "@/hooks/useModals";

interface MovieCardProps {
  data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({data}) => {
  const router = useRouter();
  const {openModal} = useModal();


  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img 
      className="
        object-cover
        cursor-pointer
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      "
      src={data.thumbnailUrl} 
      alt="thumbnail" 
      />
      <div className="
      opacity-0 
      absolute 
      top-0 
      transition 
      duration-200 
      z-10 
      invisble 
      sm:visible 
      delay-300 
      w-full 
      scale-0
      group-hover:scale-110
      group-hover:-translate-y-[6vw]
      group-hover:translate-x-[2vw]
      group-hover:opacity-100
      "
      >
        <img className="
        curosr-pointer
        object-cover
        shadow-xl
        w-full
        h-[12vw]
        transition
        rounded-t-md
        "
        src={data.thumbnailUrl} 
        alt="thumbnail" /> 
        <div className="z-10 bg-zinc-900 p-2 w-full absolute shadow-md rounded-b-md lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div onClick={() => router.push(`/watch/${data.id}`)}
            className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full flex justify-center items-center bg-white hover:bg-neutral-300">
              <BsFillPlayFill className="ml-0.5" size={30} />
            </div>
            <FavouriteButton movieId={data?.id} />
            <div onClick={() => openModal(data?.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BiChevronDown className="text-white group-item-hover:text-neutral-300" size={30} />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2024</span>
          </p>
          <div className="flex flex-row items-center gap-4  mt-2">
            <p className="text-white text-[10px] lg:text-xl">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-4  mt-2">
            <p className="text-white text-[10px] lg:text-xl">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;