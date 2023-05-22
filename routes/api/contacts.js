const express = require('express')

const { validateBody, isValidId, authenticate } = require('../../middlewapres')
const {
	addContact,
	updateContact,
	UpdateFavoriteContact,
} = require('../../models/schemas/joi')
const {
	getAllContacts,
	getContactById,
	addNewContact,
	removeContactById,
	updateContactById,
	UpdateFavorite,
} = require('../../controllers/contacts')

const router = express.Router()

router.get('/', authenticate, getAllContacts)

router.get('/:contactId', authenticate, isValidId, getContactById)

router.post('/', authenticate, validateBody(addContact), addNewContact)

router.delete('/:contactId', authenticate, isValidId, removeContactById)

router.put(
	'/:contactId',
	authenticate,
	isValidId,
	validateBody(updateContact),
	updateContactById
)
router.patch(
	'/:contactId',
	authenticate,
	isValidId,
	validateBody(UpdateFavoriteContact),
	UpdateFavorite
)

module.exports = router
