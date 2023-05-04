const Joi = require('joi')

const schemaAddContact = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'org'] },
		})
		.required(),
	phone: Joi.string().min(6).required(),
})

module.exports = schemaAddContact
