import { z } from 'zod'
import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'

export async function deleteUser(req: Request, res: Response) {
  const updateBodySchema = z.object({
    id: z.string(),
  })

  const { id } = updateBodySchema.parse(req.body)

  try {
    await prisma.user.delete({
      where: { id },
    })

    res.status(200).json(`Usuário deletado com sucesso`)
  } catch (error) {
    res.status(500).json({ error })
  }
}
