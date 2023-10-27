import type { Request, Response, NextFunction } from 'express'
export default function loginValidation(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'Missing email or password'
    })
  }

  next()
}
