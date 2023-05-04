const Joi = require('joi')
const { dataRegExp } = require('../../../helpers')

const schemaAddContact = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net', 'org'] },
		})
		.required(),
	phone: Joi.string().min(6).pattern(dataRegExp.phone).required(),
	favorite: Joi.boolean(),
})

module.exports = schemaAddContact
