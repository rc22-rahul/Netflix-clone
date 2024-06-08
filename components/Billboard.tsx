import useBillboard from "@/hooks/useBillboard";
import { AiOutlineCiCircle, AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useModal from "@/hooks/useModals";

export default function Billboard() {
  const {data: movie} = useBillboard();
  const {openModal} = useModal();

  const handleOpenModal = useCallback(() => {
    openModal(movie?.id)
  }, [openModal, movie?.id])
  return (
    <div className="relative h-[56.25vw]">
      <video
        src={movie?.videoUrl}
        poster={movie?.thumbnailUrl}
        autoPlay
        muted
        loop
        className="w-full object-cover brightness-[60%]"
      >
        {movie?.videoUrl}
      </video>
      <div className="absolute top-[20%] md:top-[30%] ml-8 md:ml-16 transition">
        <p className="text-white text-3xl h-full md:text-5xl lg:text-6xl font-bold md:font-extrabold drop-shadow-xl">{movie?.title}</p>
        <p className="text-white text-[9px] md:text-xs mt-3 md:mt-8 w-[90%] md:w-[90%] lg:w-[50%] drop-shadow-xl">{movie?.description}</p>
        <div className="flex flex-row items-center gap-3 mt-3">
          {movie?.videoUrl && (
            <>
              <PlayButton movieId={movie?.id} />
              <button onClick={handleOpenModal} className="text-white bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs md:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
                <AiOutlineInfoCircle className="mr-1"/>
                More Info
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}