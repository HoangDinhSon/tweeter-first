// make token and refresh token
// use algorithm RS256
// read doc jwt we transport synch to  async
import jwt from 'jsonwebtoken'
const PRIVATE_KEY = process.env.JWT_SECRET || 'secrete_key_when_load_variant_env'
interface SignTokenParameter {
  payload: string | object | Buffer
  privateKey?: string
  options?: jwt.SignOptions
}
const signToken = ({
  payload,
  privateKey = PRIVATE_KEY,
  options = {
    algorithm: 'HS256'
  }
}: SignTokenParameter) => {
  return new Promise<string>(function (resolve, reject) {
    jwt.sign(payload, privateKey, options, function (error, token) {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}
export { signToken }
