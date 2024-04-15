import type { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersService from '~/services/users.service'
import { USERS_MESSAGE } from '~/constants/message'
export async function loginController(req: Request, res: Response) {
  const user_id = req.user?._id as ObjectId
  const result = await usersService.login(user_id.toString())
  return res.json({
    message: USERS_MESSAGE.LOGIN_SUCCESS,
    result
  })
}

export async function registerController(
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) {
  const result = await usersService.register(req.body)
  return res.json({
    message: USERS_MESSAGE.REGISTER_SUCCESS,
    result
  })
}
