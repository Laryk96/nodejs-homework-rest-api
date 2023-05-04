const Joi = require('joi')

const schemaUpdateContact = Joi.object({
	name: Joi.string().min(3),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net', 'org'] },
	}),
	phone: Joi.string().min(6),
})

module.exports = schemaUpdateContact
