import { Request, Response, NextFunction } from 'express'

const genericErrorMessage = 'Something went wrong'

export const errorHandler = () => (error: Error | any, _req: Request, res: Response, _next: NextFunction) => {
  console.error({ message: error.message || genericErrorMessage, error })

  if (error.status) {
    return res.status(error.status).json({
      type: error.name,
      message: error.message,
      errors: error.details,
    })
  }

  return res.status(500).json({ message: genericErrorMessage })
}
