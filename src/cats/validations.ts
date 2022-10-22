import type { Request, Response, NextFunction } from 'express'
import * as schemas from './schemas'
import { BadRequest } from './types'

export const post = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemas.post.validate(req.body)

  if (error) {
    const badRequestError: BadRequest = {
      status: 400,
      name: error.name || 'Bad request',
      message: error.message || 'Bad request',
      details: error.details,
    }
    throw badRequestError
  }

  next()
}

export const patch = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemas.patch.validate(req.body)

  if (error) {
    const badRequestError: BadRequest = {
      status: 400,
      name: error.name || 'Bad request',
      message: error.message || 'Bad request',
      details: error.details,
    }
    throw badRequestError
  }

  next()
}
