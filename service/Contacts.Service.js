const Contact = require('../models')

const getAll = async () => {
	return Contact.find({}, '-createdAt -updatedAt')
}

const getById = id => {
	return Contact.findById(id, '-createdAt -updatedAt')
}

const createContact = body => {
	return Contact.create(body)
}

const updateContact = (id, fields) => {
	return Contact.findByIdAndUpdate(id, fields, { new: true })
}

const removeContact = id => {
	return Contact.findByIdAndRemove(id)
}

module.exports = {
	getAll,
	getById,
	createContact,
	updateContact,
	removeContact,
}
