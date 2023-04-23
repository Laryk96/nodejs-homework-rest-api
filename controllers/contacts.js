const contactsApi = require('../models/contacts')
const { HttpError, ctrlWrapper } = require('../helpers')

const getAllContacts = async (req, res) => {
	const result = await contactsApi.listContacts()

	res.status(200).json(result)
}

const getContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await contactsApi.getById(contactId)

	if (!result) {
		throw HttpError(404, 'Not found')
	}

	res.status(200).json(result)
}

const addNewContact = async (req, res) => {
	const result = await contactsApi.addContact(req.body)

	res.status(201).json(result)
}

const removeContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await contactsApi.removeContact(contactId)

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

	const result = await contactsApi.updateContact(contactId, req.body)

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
