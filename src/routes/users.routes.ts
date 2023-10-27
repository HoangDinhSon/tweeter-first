import { Router } from 'express'
import loginValidation from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controllers/users.controllers'
const usersRouter = Router()
// usersRouter.use((req, res, next) => loginValidation(req, res, next))
usersRouter.post('/login', loginValidation, loginController)
usersRouter.post('/register', registerController)
export default usersRouter
