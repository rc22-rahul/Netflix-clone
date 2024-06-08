import { useRouter } from "next/router";
import React from "react"
import { BsFillPlayFill } from "react-icons/bs";
interface PlayButtonProps {
  movieId : string
}

const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter();
  return (
    <button className="
    bg-white
    rounded-md
    h-auto
    font-semibold
    flex
    flex-row
    items-center
    hover:bg-neutral-300
    w-auto
    px-2 md:py-3
    py-1 md:px-5
    text-xs lg:text-lg
    transition
    "
    onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={20} />
      Play
    </button>
  )
}

export default PlayButton;