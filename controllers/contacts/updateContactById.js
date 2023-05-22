const { HttpError } = require('../../helpers')
const { updateContact } = require('../../service/contactService')

const updateContactById = async (req, res) => {
	const { contactId } = req.params
	const { _id: owner } = req.user
	const result = await updateContact(contactId, owner, req.body)

	if (!result) {
		throw HttpError(404)
	}

	res.code(200).json({
		status: 'success',
		code: 200,
		result,
	})
}

module.exports = updateContactById
