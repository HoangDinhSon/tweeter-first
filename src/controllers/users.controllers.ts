import type { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersService from '~/services/users.service'
export function loginController(req: Request, res: Response) {
  res.json({
    message: 'login success'
  })
}

export async function registerController(req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) {
  try {
    const result = await usersService.register(req.body)
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
