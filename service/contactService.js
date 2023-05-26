const { Contact } = require('../models')

const getAll = async (id, query) => {
	const { page = 1, limit = 20, favorite } = query

	const skip = (page - 1) * limit

	if (favorite)
		return Contact.find({ owner: id, favorite: favorite }, '', {
			skip,
			limit: +limit,
		}).populate('owner', '_id username email subscription')

	return Contact.find({ owner: id }, '', {
		skip,
		limit: +limit,
	}).populate('owner', '_id username email subscription')
}

const getById = (contactId, owner) => {
	return Contact.findById({ _id: contactId, owner })
}

const createContact = body => {
	return Contact.create(body)
}

const updateContact = (id, owner, body) => {
	return Contact.findByIdAndUpdate({ _id: id, owner }, body, { new: true })
}

const updateStatusContact = (id, owner, body) => {
	return Contact.findByIdAndUpdate(
		{ _id: id, owner },
		{ $set: { favorite: body } },
		{ new: true }
	)
}

const removeContact = (id, owner) => {
	return Contact.findByIdAndRemove({ _id: id, owner })
}

module.exports = {
	getAll,
	getById,
	createContact,
	updateContact,
	updateStatusContact,
	removeContact,
}
