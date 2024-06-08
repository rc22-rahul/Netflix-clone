import useModal from "@/hooks/useModals"
import useMovies from "@/hooks/useMovies"
import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import PlayButton from "./PlayButton"
import FavouriteButton from "./FavouriteButton"

interface InfoModalprops {
  visible?: boolean,
  onClose: any
}

const InfoModal : React.FC<InfoModalprops> = ({visible, onClose}) => {
  const [isVisible, setIsVisible] = useState(!!visible)

  const {movieId} = useModal();
  const {data ={}} = useMovies(movieId);

  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose])

  if (!visible) {
    return null
  }
  return (
    <div className="
      z-50
      transition
      duration-300
      bg-black
      bg-opacity-80
      flex
      justify-center
      overflow-x-hidden
      overflow-y-auto
      items-center
      fixed
      inset-0
    ">
      <div className="
        relative
        w-auto
        mx-auto
        max-w-3xl
        rounded-md
        overflow-hidden
      ">
        <div className={`
            ${isVisible? 'scale-100': 'scale-0'}
            transform
            duration-300
            flex-auto
            bg-zinc-900
            drop-shadow-md
            relative
          `}
          >
            <div className="relative h-96">
              <video className="w-full object-cover h-full brightness-[60%]"
              src={data?.videoUrl} 
              poster={data?.thumbnailUrl} 
              autoPlay muted loop 
              >
                
              </video>
              <div className="cursor-pointer absolute top-3 w-10 h-10 right-3 bg-black rounded-full bg-opacity-70 flex items-center justify-center">
                <AiOutlineClose onClick={handleClose} className="text-white" size={20}/>
              </div>

              <div className="absolute bottom-[10%] left-10">
                <p className="text-white text-3xl md:text-4xl lg:text-5xl h-full font-bold mb-8">
                  {data.title}
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <PlayButton movieId={data?.id} />
                  <FavouriteButton movieId={data?.id} />
                </div>
              </div>
            </div>
            <div className="px-12 py-8">
              <p className="text-green-600 font-semibole">
                New
              </p>
              <p className="text-white text-lg">
                {data?.duration}
              </p>
              <p className="text-white text-lg">
                {data?.genre}
              </p><p className="text-white text-lg">
                {data?.description}
              </p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default InfoModal;