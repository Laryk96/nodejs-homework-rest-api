const Joi = require('joi')

const schemaUpdateFavoriteContact = Joi.object({
	favorite: Joi.boolean().required().messages({
		'any.required': 'missing field favorite',
	}),
})

module.exports = schemaUpdateFavoriteContact
