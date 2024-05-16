// iniciando a instancia do fastify
// import fastify from 'fastify'
import express from 'express'
import cors from 'cors'
import {
  alterUserRoute,
  deleteUserRoute,
  getAllUsersRoute,
  getUserByIdRoute,
  registerRoute,
} from './router/users-route'
import {
  alterInterviewedRoute,
  createInterviewedRoute,
  getInterviewedByIdRoute,
  getInterviewedRoute,
} from './router/interviewed-route'

export const app = express()

app.use(express.json())
app.use(cors())

// todas as rotas de users
app.use(registerRoute)
app.use(getAllUsersRoute)
app.use(getUserByIdRoute)
app.use(alterUserRoute)
app.use(deleteUserRoute)

// todas as rotas de interviewed
app.use(createInterviewedRoute)
app.use(getInterviewedRoute)
app.use(getInterviewedByIdRoute)
app.use(alterInterviewedRoute)
