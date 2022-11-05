import 'reflect-metadata'
import express, { json } from 'express'
import { errorHandler } from './middlewares/errorHandler'
import { router as catsRouter } from './cats/routes'

const app = express()

app.use(json())

app.use('/cats', catsRouter)

app.use(errorHandler())

export { app }
