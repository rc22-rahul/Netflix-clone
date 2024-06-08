import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";


interface FavouriteButtonProps {
  movieId: string
}
const FavouriteButton: React.FC<FavouriteButtonProps> = ({movieId}) => {
  const {mutate: mutateFavourites} = useFavourites()
  const {data: currentUser, mutate} = useCurrentUser()

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || []
    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavourites = useCallback(async () => {
    let response;

    if (isFavourite) {
      response = await axios.delete('/api/favourite', {data: {movieId}})
    } else {
      response = await axios.post('/api/favourite', {movieId})
    }

    const updatedFavouriteIds = response?.data.favouriteIds

    mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds
    })

    mutateFavourites();

  }, [currentUser, isFavourite, movieId, mutate, mutateFavourites])

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div className="
      cursor-pointer
      group/item
      w-6
      h-6
      lg:h-10
      lg:w-10
      border-white
      border-2
      rounded-full
      flex
      items-center
      justify-center
      hover:border-neutral-300
    "
    onClick={toggleFavourites}
    >
      <Icon className="text-white" size={20} />
    </div>
  )
}

export default FavouriteButton;