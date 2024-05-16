import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function getUserById(req: Request, res: Response) {
  const getUserParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = getUserParamsSchema.parse(req.params)

  try {
    const users = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
}
