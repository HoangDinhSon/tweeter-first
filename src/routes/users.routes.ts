import { Router } from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controllers/users.controllers'
import { registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const usersRouter = Router()
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * how to register
 * Path : /register
 * method : POST
 * Body {name :string , email :string , password :string , confirm_password :string , date_of_birth :ISO8601}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
export default usersRouter
