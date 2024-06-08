import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  try {
    await serverAuth(req)

    const movies = await prismadb.movie.findMany({})
    res.status(200).json(movies)
  } catch (error) {
    res.status(400).end()
  }
}