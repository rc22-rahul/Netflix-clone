import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
     const {currentUser} = await serverAuth(req);

     const favouriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favouriteIds
        }
      }
     })

     res.status(200).json(favouriteMovies)
  } catch(error) {
    console.log(error)
    res.status(400).end()
  }
}