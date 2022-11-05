import type { Request, Response, NextFunction } from 'express'
import * as service from './service'

export const getAll = async (_req: Request, res: Response, _next: NextFunction) => {
  const cats = await service.getAll()
  console.log('✅✅✅ GET (all)', { cats })
  res.send(cats)
}

export const getById = async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params
  console.log('✅✅✅ GET', { id })
  const cat = await service.getById(id)
  if (!cat) {
    return res.status(404).end()
  }
  res.send(cat)
}

type PostParams = service.CatCreateParams

export const post = async (req: Request<{}, {}, PostParams>, res: Response, _next: NextFunction) => {
  const { name, age } = req.body
  await service.create({ name, age })
  console.log('✅✅✅ POST')
  res.status(201).setHeader('Content-Location', '/:id').end()
}

export const patch = async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params
  console.log('✅✅✅ PATCH', { id })
  res.status(204).setHeader('Content-Location', '/:id').end()
}

export const deleteById = async (_req: Request, res: Response, _next: NextFunction) => {
  const { id } = _req.params
  console.log('✅✅✅ DELETE', { id })
  res.status(204).end()
}
