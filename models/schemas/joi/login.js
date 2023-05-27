const Joi = require('joi')

const schemaLogin = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'org'] },
		})
		.required(),
	password: Joi.string().min(6).required(),
})

module.exports = schemaLogin
