import usersRouter from '~/routes/users.routes'
import express, { Request, Response, NextFunction } from 'express'
import databaseService from './services/database.services'
const app = express()
const port = 3000

/* middleware handle login */
app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()
// run().catch(console.dir)
// we concentrate error in here exception validator because i don't see error.
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('error is ', err.message)
  res.status(400).json({ msg: err.message })
})
app.get('/', (req, res) => {
  res.send('initial server success')
})

app.listen(port, () => {
  console.log(` server run on port ${port}`)
})
