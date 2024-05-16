import { alterInterviewed } from '@/controllers/alter-interviewed'
import { createInterviewed } from '@/controllers/create-interviewed'
import {
  getInterviewed,
  getInterviewedById,
} from '@/controllers/get-interviewed'
import { Router } from 'express'

const router = Router()

export const createInterviewedRoute = router.post(
  '/intervieweds',
  createInterviewed,
)

export const alterInterviewedRoute = router.put(
  '/intervieweds/:id',
  alterInterviewed,
)

export const getInterviewedRoute = router.get('/intervieweds/', getInterviewed)
export const getInterviewedByIdRoute = router.get(
  '/intervieweds/:id',
  getInterviewedById,
)
