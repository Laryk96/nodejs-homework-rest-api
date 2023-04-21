const contacts = require('../models/contacts')
const { HttpError, ctrlWrapper } = require('../helpers')

const getAllContacts = async (req, res) => {
	const result = await contacts.listContacts()

	res.json(result)
}

const getContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await contacts.getContactById(contactId)

	if (!result) {
		throw HttpError(404, 'Not found')
	}

	res.json(result)
}

const addNewContact = async (req, res) => {
	const result = await contacts.addContact(req.body)

	res.status(201).json(result)
}

const removeContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await contacts.removeContact(contactId)

	if (!result) {
		throw HttpError(404, 'Not found')
	}

	res.json({
		status: { message: 'Delete success', code: 204 },
		data: { ...result },
	})
}

const updateContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await contacts.updateContact(contactId, req.body)

	if (!result) {
		throw HttpError(404, 'Not found')
	}

	res.json(result)
}

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactById: ctrlWrapper(getContactById),
	addNewContact: ctrlWrapper(addNewContact),
	removeContactById: ctrlWrapper(removeContactById),
	updateContactById: ctrlWrapper(updateContactById),
}
