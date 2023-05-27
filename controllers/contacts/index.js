const { ctrlWrapper } = require('../../helpers')
const createNewContact = require('./createNewContact')
const getContactById = require('./getContactById')
const deleteContact = require('./deleteContact')
const updateFavorite = require('./updateFavorite')
const getAllContacts = require('./getAllContacts')
const updateContactById = require('./updateContactById')

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactById: ctrlWrapper(getContactById),
	addNewContact: ctrlWrapper(createNewContact),
	deleteContact: ctrlWrapper(deleteContact),
	updateContactById: ctrlWrapper(updateContactById),
	UpdateFavorite: ctrlWrapper(updateFavorite),
}
