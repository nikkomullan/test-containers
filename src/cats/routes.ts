import express from 'express'
import { getCats } from './handlers'

export const router = express.Router()

router.get('/', /* validateGet,*/ getCats)

// router.post('/', (req, res, next) => {
//   //
// })

// router.patch('/', (req, res, next) => {
//   //
// })

// router.delete('/', (req, res, next) => {
//   //
// })
