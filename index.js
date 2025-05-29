import express from  'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './src/config/db.js'
import userRoute from './src/routes/userRoute.js'
import errorHandling from './src/middlewares/errorHandler.js'
import { createUserTable } from './src/data/createUserTable.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

//postgres connection
app.get('/', async (req, res) => {
    const result = await pool.query('SELECT current_database()')
    console.log('Database: ', result.rows[0].current_database)
})

//middlewares
app.use(express.json())
app.use(cors())

//error handling
app.use(errorHandling)

//create table before starting server
createUserTable()

//routes
app.use('/', userRoute)

app.listen(port , () => {
    console.log(`Server listening on ${port}`)
})