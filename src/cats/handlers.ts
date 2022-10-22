import type { Request, Response, NextFunction } from 'express'
// import { service } from './service'

export const getCats = async (_req: Request, res: Response, _next: NextFunction) => {
  res.send([{ name: 'Charly' }, { name: 'Jane' }])
}
