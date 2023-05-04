const Joi = require('joi')

const schemaUpdateFavoriteContact = Joi.object({
	favorite: Joi.boolean().required(),
})

module.exports = schemaUpdateFavoriteContact
