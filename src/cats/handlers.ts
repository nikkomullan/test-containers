import type { Request, Response, NextFunction } from 'express'

export const getAll = async (_req: Request, res: Response, _next: NextFunction) => {
  res.send([{ name: 'Charly' }, { name: 'Jane' }])
}

export const getById = async (_req: Request, res: Response, _next: NextFunction) => {
  res.send({ name: 'Charly' })
}

export const post = async (_req: Request, res: Response, _next: NextFunction) => {
  res.status(201).setHeader('Content-Location', '/:id').end()
}

export const patch = async (_req: Request, res: Response, _next: NextFunction) => {
  res.status(204).setHeader('Content-Location', '/:id').end()
}

export const deleteById = async (_req: Request, res: Response, _next: NextFunction) => {
  res.status(204).end()
}
