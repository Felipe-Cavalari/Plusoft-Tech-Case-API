// iniciando a instancia do fastify
// import fastify from 'fastify'
import express from 'express'
import {
  alterUserRoute,
  deleteUserRoute,
  getAllUsersRoute,
  getUserByIdRoute,
  registerRoute,
} from './router/register-route'

export const app = express()

app.use(express.json())

// todas as rotas de users
app.use(registerRoute)
app.use(getAllUsersRoute)
app.use(getUserByIdRoute)
app.use(alterUserRoute)
app.use(deleteUserRoute)

// todas as rotas de interviewed
