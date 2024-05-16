import { z } from 'zod'
import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function registerUser(req: Request, res: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(7),
  })

  const { name, email, password } = registerBodySchema.parse(req.body)

  const passwordHash = await hash(password, 6)

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    })

    res.status(201).json('Usuario criado com sucesso')
  } catch (error) {
    if (error.code === 'P2002') {
      // Duplicidade de chave primária ou restrição única
      res.status(409).json({ error: 'Este usuário já existe.' })
    }
  }
}
