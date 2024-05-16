import { z } from 'zod'
import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function alterUser(req: Request, res: Response) {
  const updateBodySchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().min(7).optional(),
  })

  const updateParamsSchema = z.object({
    id: z.string(),
  })

  const { name, email, password } = updateBodySchema.parse(req.body)
  const { id } = updateParamsSchema.parse(req.params)

  try {
    let passwordHash

    if (password) {
      // Verificando se a senha foi fornecida
      passwordHash = await hash(password, 6) // Hashing da senha apenas se ela for fornecida
    }

    await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        passwordHash,
      },
    })

    res.status(200).json(`Sua conta foi atualizado com sucesso`)
  } catch (error) {
    res.status(500).json({ error })
  }
}
