import type { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.service'
export function loginController(req: Request, res: Response) {
  res.json({
    message: 'login success'
  })
}

export async function registerController(req: Request, res: Response) {
  const { email, password } = req.body
  try {
    const result = await usersService.register({ email, password })
    return res.json({
      message: 'register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed',
      error: error
    })
  }
}
