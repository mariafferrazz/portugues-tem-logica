import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import moduleRoutes from './routes/moduleRoutes.js'
import lessonRoutes from './routes/lessonRoutes.js'
import progressRoutes from './routes/progressRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/courses', courseRoutes)
app.use('/modules', moduleRoutes)
app.use('/lessons', lessonRoutes)
app.use('/progress', progressRoutes)
app.use('/payment', paymentRoutes)


app.get('/', (req, res) => {
  res.json({
    message: 'API Português Tem Lógica'
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})