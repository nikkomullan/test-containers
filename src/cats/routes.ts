import express from 'express'
import * as handlers from './handlers'
import * as validations from './validations'

export const router = express.Router()

router.get('/', handlers.getAll)

router.get('/:id', handlers.getById)

router.post('/', validations.post, handlers.post)

router.patch('/:id', validations.patch, handlers.patch)

router.delete('/:id', handlers.deleteById)
