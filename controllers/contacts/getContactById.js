const { getById } = require('../../service/contactService')

const getContactById = async (req, res) => {
	const { contactId } = req.params
	const { _id: owner } = req.user

	const results = await getById(contactId, owner)

	if (results) {
		res.json({
			status: 'success',
			code: 200,
			data: {
				tasks: results,
			},
		})
	} else {
		res.status(404).json({
			status: 'error',
			code: 404,
			message: `Not found task id: ${contactId}`,
			data: 'Not Found',
		})
	}
}

module.exports = getContactById
