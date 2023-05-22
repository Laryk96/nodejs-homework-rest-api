const { ctrlWrapper } = require('../../helpers')
const createNewContact = require('./createNewContact')
const getContactById = require('./getContactById')
const removeContactById = require('./removeContactById')
const updateFavorite = require('./updateFavorite')
const getAllContacts = require('./getAllContacts')
const updateContactById = require('./updateContactById')

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactById: ctrlWrapper(getContactById),
	addNewContact: ctrlWrapper(createNewContact),
	removeContactById: ctrlWrapper(removeContactById),
	updateContactById: ctrlWrapper(updateContactById),
	UpdateFavorite: ctrlWrapper(updateFavorite),
}
