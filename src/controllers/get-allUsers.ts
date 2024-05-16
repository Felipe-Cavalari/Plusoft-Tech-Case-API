import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
}
