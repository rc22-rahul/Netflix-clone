import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavourites from "@/hooks/useFavourites";
import useModal from "@/hooks/useModals";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const {data: movie=[]} = useMovieList();
  const {data: favourites=[]} = useFavourites();
  const {isOpen, closeModal} = useModal()
  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList data={movie} title="Trending Now"/>
        <MovieList data={favourites} title="My List"/>
      </div>
    </div>
  );
}
