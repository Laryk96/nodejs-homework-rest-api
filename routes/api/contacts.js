const express = require('express')
const {
	getAllContacts,
	getContactById,
	addNewContact,
	removeContactById,
	updateContactById,
	UpdateFavorite,
} = require('../../controllers/contacts')
const { validateBody, isValidId } = require('../../middlewapres')
const {
	addContact,
	updateContact,
	UpdateFavoriteContact,
} = require('../../service/schemas/joi')

const router = express.Router()

router.get('/', getAllContacts)

router.get('/:contactId', isValidId, getContactById)

router.post('/', validateBody(addContact), addNewContact)

router.delete('/:contactId', isValidId, removeContactById)

router.put(
	'/:contactId',
	isValidId,
	validateBody(updateContact),
	updateContactById
)
router.patch(
	'/:contactId',
	isValidId,
	validateBody(UpdateFavoriteContact),
	UpdateFavorite
)

module.exports = router
