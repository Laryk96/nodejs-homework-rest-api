const fs = require('fs/promises')
const path = require('path')
const { nanoid } = require('nanoid')

const contactsPath = path.join(__dirname, '../', '/models', 'contacts.json')

const getContacts = async contactId => {
	console.log(contactsPath)
	const result = await fs.readFile(contactsPath)
	const contacts = JSON.parse(result)

	if (contactId) {
		return contacts.find(({ id }) => id === contactId)
	}
	return contacts
}

const removeContactById = async (contacts, contactId) => {
	const index = contacts.findIndex(({ id }) => id === contactId)

	if (index === -1) return null

	const [result] = contacts.splice(index, 1)
	fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
	return result
}

const createContact = async (contacts, body) => {
	const newContact = { ...body, id: nanoid() }

	contacts.push(newContact)

	fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

	return newContact
}
const updateContactById = async (contacts, contactId, data) => {
	const index = contacts.findIndex(({ id }) => id === contactId)

	if (index === -1) {
		return null
	}

	contacts[index] = { id: contactId, ...data }
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

	return contacts[index]
}

module.exports = {
	getContacts,
	removeContactById,
	createContact,
	updateContactById,
}
