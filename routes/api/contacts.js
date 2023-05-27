const express = require('express')

const { validateBody, isValidId, authenticate } = require('../../middlewapres')
const {
	addContact,
	updateContact,
	schemaUpdateFavoriteContact,
} = require('../../models/schemas/joi')
const {
	getAllContacts,
	getContactById,
	addNewContact,
	deleteContact,
	updateContactById,
	UpdateFavorite,
} = require('../../controllers/contacts')

const router = express.Router()

router.get('/', authenticate, getAllContacts)

router.get('/:contactId', authenticate, isValidId, getContactById)

router.post('/', authenticate, validateBody(addContact), addNewContact)

router.delete('/:contactId', authenticate, isValidId, deleteContact)

router.put(
	'/:contactId',
	authenticate,
	isValidId,
	validateBody(updateContact),
	updateContactById
)
router.patch(
	'/:contactId/favorite',
	authenticate,
	isValidId,
	validateBody(schemaUpdateFavoriteContact),
	UpdateFavorite
)

module.exports = router
