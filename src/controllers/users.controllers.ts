import type { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersService from '~/services/users.service'
export function loginController(req: Request, res: Response) {
  res.json({
    message: 'login success'
  })
}

export async function registerController(
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) {
  const result = await usersService.register(req.body)
  return res.json({
    message: 'register success',
    result
  })
}
