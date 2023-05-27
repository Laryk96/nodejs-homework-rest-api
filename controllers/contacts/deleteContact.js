const { HttpError } = require('../../helpers')
const { removeContact } = require('../../service/contactService')

const deleteContact = async (req, res) => {
	const { contactId } = req.params

	const { _id: owner } = req.user

	const result = await removeContact(contactId, owner)

	if (!result) {
		throw HttpError(404)
	}

	res.json({
		status: 'success',
		code: 204,
		result,
	})
}

module.exports = deleteContact
