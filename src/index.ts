import usersRouter from '~/routes/users.routes'
import express from 'express'
import databaseService from './services/database.services'
const app = express()
const port = 3000

/* middleware handle login */
app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()
// run().catch(console.dir)
app.get('/', (req, res) => {
  res.send('initial server success')
})

app.listen(port, () => {
  console.log(` server run on port ${port}`)
})
