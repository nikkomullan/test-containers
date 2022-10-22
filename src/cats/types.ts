import { ValidationErrorItem } from 'joi'

export interface BadRequest extends Error {
  status: number
  message: string
  details: ValidationErrorItem[]
}
