import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useFavourites = () => {
  const {data, error, isLoading, mutate} = useSWR("/api/favourites", fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnFocus: false
  })

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

export default useFavourites