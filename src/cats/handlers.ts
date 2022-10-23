import type { Request, Response, NextFunction } from 'express'

export const getAll = async (_req: Request, res: Response, _next: NextFunction) => {
  console.log('✅✅✅ GET (all)')
  res.send([{ name: 'Charly' }, { name: 'Jane' }])
}

export const getById = async (_req: Request, res: Response, _next: NextFunction) => {
  const { id } = _req.params
  console.log('✅✅✅ GET', { id })
  res.send({ name: 'Charly' })
}

export const post = async (_req: Request, res: Response, _next: NextFunction) => {
  console.log('✅✅✅ POST')
  res.status(201).setHeader('Content-Location', '/:id').end()
}

export const patch = async (_req: Request, res: Response, _next: NextFunction) => {
  const { id } = _req.params
  console.log('✅✅✅ PATCH', { id })
  res.status(204).setHeader('Content-Location', '/:id').end()
}

export const deleteById = async (_req: Request, res: Response, _next: NextFunction) => {
  const { id } = _req.params
  console.log('✅✅✅ DELETE', { id })
  res.status(204).end()
}
