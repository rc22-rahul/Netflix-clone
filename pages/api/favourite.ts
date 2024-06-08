import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { without } from "lodash";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    
    if (req.method === 'POST') {
      const {currentUser} = await serverAuth(req);
      const {movieId} = req.body

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      })

      if (!existingMovie) {
        throw new Error("Movie not exists!!")
      }

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || ""
        },
        data: {
          favouriteIds: {
            push: movieId
          }
        }
      })

      res.status(200).json(updatedUser)
    }

    if (req.method === 'DELETE') {
        const { currentUser } = await serverAuth(req)
        const { movieId } = req.body

        const existingMovie = await prismadb.movie.findUnique({
          where: {
            id: movieId
          }
        })

        if (!existingMovie) {
          throw new Error("Not Exist!!!")
        }

        const updatedFavouriteIds = without(currentUser.favouriteIds, movieId)

        const updatedUser = await prismadb.user.update({
          where: {
            email: currentUser.email || ""
          },
          data: {
            favouriteIds: updatedFavouriteIds
          }
        })

        res.status(200).json(updatedUser)
    }

    res.status(200).end();

  } catch (error) {
    console.log(error) 
    res.status(400).end();
  }
}