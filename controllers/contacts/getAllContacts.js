const { getAll } = require('../../service/contactService')

const getAllContacts = async (req, res) => {
	const { _id: owner } = req.user

	const result = await getAll(owner, req.query)

	res.status(200).json(result)
}

module.exports = getAllContacts
