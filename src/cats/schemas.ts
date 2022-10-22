import Joi from 'joi'

export const post = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
})

export const patch = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
})
