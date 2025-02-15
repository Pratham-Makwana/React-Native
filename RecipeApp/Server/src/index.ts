import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToDB from './config/db'
import authRoutes from './routes/auth'
dotenv.config()
const app = express()

connectToDB()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
