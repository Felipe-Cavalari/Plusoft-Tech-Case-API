import { alterUser } from '@/controllers/alter-user'
import { deleteUser } from '@/controllers/delete-user'
import { getAllUsers } from '@/controllers/get-allUsers'
import { getUserById } from '@/controllers/get-user-by-id'
import { registerUser } from '@/controllers/register-user'
import { Router } from 'express'

const router = Router()

export const getAllUsersRoute = router.get('/users/', getAllUsers)
export const getUserByIdRoute = router.get('/users/:id', getUserById)
export const registerRoute = router.post('/users', registerUser)
export const alterUserRoute = router.put('/users/:id', alterUser)
export const deleteUserRoute = router.delete('/users/', deleteUser)
