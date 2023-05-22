const Joi = require('joi')

const schemaRegister = Joi.object({
	username: Joi.string().min(3).max(30).required(),
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'org'] },
		})
		.required(),
	password: Joi.string().min(7).required(),
	subscription: Joi.string(),
})

module.exports = schemaRegister
