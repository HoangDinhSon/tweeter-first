import User from '~/models/schemas/User.schema'
import databaseService from './database.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
class UserService {
  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        // because in type date_of_birth in User is Date , but payload.date_of_birth is string
        // we need replace by follow bellow
        date_of_birth: new Date(payload.date_of_birth)
      })
    )
    return result
  }
  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
}
const usersService = new UserService()
export default usersService
