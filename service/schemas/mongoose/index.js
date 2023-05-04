const Contacts = require('./contacts')

const getAll = async () => {
	return Contacts.find({}, '-createdAt -updatedAt')
}

const getById = id => {
	return Contacts.findById(id, '-createdAt -updatedAt')
}

const createContact = body => {
	return Contacts.create(body)
}

const updateContact = (id, fields) => {
	return Contacts.findByIdAndUpdate(id, fields, { new: true })
}

const removeContact = id => {
	return Contacts.findByIdAndRemove(id)
}

module.exports = {
	getAll,
	getById,
	createContact,
	updateContact,
	removeContact,
}
