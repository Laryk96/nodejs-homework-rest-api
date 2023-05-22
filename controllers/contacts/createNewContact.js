const { createContact } = require('../../service/contactService')

const createNewContact = async (req, res) => {
	const { _id: owner } = req.user
	const result = await createContact({ ...req.body, owner })

	res.json({
		status: 'success',
		code: 201,
		result,
	})
}

module.exports = createNewContact
