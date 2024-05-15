// iniciando a instancia do fastify
// import fastify from "fastify"
import express from 'express'
import { PrismaClient } from '@prisma/client'

export const app = express()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Felipe Cavalari',
    email: 'Felipe@gmail.com',
    password_hash: 'sdfsdfdfsdf',
  },
})
