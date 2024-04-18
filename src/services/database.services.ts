import { MongoClient, Db, Collection } from 'mongodb'
import dotenv from 'dotenv'
import User from '~/models/schemas/User.schema'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
dotenv.config()
const account = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const userCollection = process.env.USERS_COLLECTION as string
const refreshToken = process.env.DB_REFRESH_TOKEN_COLLECTION as string
const uri = `mongodb+srv://${account}:${password}@cluster0.n4g5bij.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(dbName)
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      // Ensures that the client will close when you finish/error
      // await this.client.close()
      console.log(error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(userCollection)
  }
  get refreshToken(): Collection<RefreshToken> {
    return this.db.collection(refreshToken)
  }
}
// tao5 object tu class
const databaseService = new DatabaseService()
export default databaseService
