import { z } from 'zod'
import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'

export async function getInterviewed(req: Request, res: Response) {
  try {
    const intervieweds = await prisma.interviewed.findMany()

    res.status(200).json(intervieweds)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    console.log(error)
    res.status(500).json({ error })
  }
}

export async function getInterviewedById(req: Request, res: Response) {
  const getInterviewedSchema = z.object({
    id: z.string().uuid(), // Validando userId como UUID
  })

  try {
    const { id } = getInterviewedSchema.parse(req.params)
    const intervieweds = await prisma.interviewed.findMany({
      where: {
        id,
      },
    })

    res.status(200).json(intervieweds)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    console.log(error)
    res.status(500).json({ error })
  }
}
