import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET'){
    res.status(405).end()
  }

  try {
    await serverAuth(req)

    const {movieId} = req.query

    if(!movieId || typeof movieId !== 'string'){
      throw new Error("Invalid ID")
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    })

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}