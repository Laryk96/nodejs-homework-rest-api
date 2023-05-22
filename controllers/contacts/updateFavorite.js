const { HttpError } = require('../../helpers')
const { updateStatusContact } = require('../../service/contactService')

const updateFavorite = async (req, res) => {
	const { contactId } = req.params
	const { favorite } = req.body
	const { _id: owner } = req.user

	const result = updateStatusContact(contactId, owner, favorite)

	if (!result) {
		throw HttpError(404, `Not found contact with id: ${contactId}`)
	}
	res.json(result)

	res.code(200).json({
		status: 'success',
		code: 200,
		result,
	})
}

module.exports = updateFavorite
