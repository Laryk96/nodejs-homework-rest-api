const Joi = require('joi')

const schemaUpdate = Joi.object({
	username: Joi.string().min(3).max(30),
	subscription: Joi.string().valid('starter', 'pro', 'business'),
})

module.exports = schemaUpdate
