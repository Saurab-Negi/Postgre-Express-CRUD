import express from  'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './src/config/db.js'

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

app.listen(port , () => {
    console.log(`Server listening on ${port}`)
})