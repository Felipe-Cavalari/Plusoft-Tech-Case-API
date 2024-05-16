import { z } from 'zod'
import { Request, Response } from 'express'
import { prisma } from '@/lib/prisma'

export async function createInterviewed(req: Request, res: Response) {
  const createInterviewedSchema = z.object({
    interviewedName: z.string(),
    interviewedEmail: z.string().email(),
    interviewedPhone: z.string(),
    description: z.string(),
    status: z.string(),
  })

  try {
    // Validar e extrair os dados do corpo da requisição
    const {
      interviewedName,
      interviewedEmail,
      interviewedPhone,
      description,
      status,
    } = createInterviewedSchema.parse(req.body)

    // Tentar criar um novo registro no banco de dados
    try {
      const interviewed = await prisma.interviewed.create({
        data: {
          interviewedName,
          interviewedEmail,
          interviewedPhone,
          description,
          status,
        },
      })

      console.log('Entrevistado criado:', interviewed)
      res.status(201).json('Entrevistado criado!')
    } catch (error: any) {
      if (error.code === 'P2002') {
        // Duplicidade de chave primária ou restrição única
        res
          .status(409)
          .json({ error: 'Esta pessoa já existe na base de entrevistado' })
      } else {
        console.error('Erro no Prisma:', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
      }
    }
  } catch (error: any) {
    // Capturar erros de validação do Zod
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }

    // Caso algum outro erro inesperado ocorra
    console.error('Erro de validação:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
}
