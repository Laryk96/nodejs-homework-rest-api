const { operation } = require('../helpers')

const listContacts = async () => {
	return operation.getContacts()
}

const getContactById = async contactId => {
	const contacts = await operation.getContacts(contactId)

	return contacts || null
}

const removeContact = async contactId => {
	const contacts = await operation.getContacts()
	const remoteContact = operation.removeContactById(contacts, contactId)

	return remoteContact
}

const addContact = async body => {
	const contacts = await operation.getContacts()
	const newContact = operation.createContact(contacts, body)

	return newContact
}

const updateContact = async (contactId, body) => {
	const contacts = await operation.getContacts()
	const updatedContact = await operation.updateContactById(
		contacts,
		contactId,
		body
	)

	return updatedContact
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
}
