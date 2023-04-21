const express = require('express')
const ctrl = require('../../controllers/contacts')

const { validateBody } = require('../../middlewapres')
const { schemaContact: schema } = require('../../schemas')

const router = express.Router()

router.get('/', ctrl.getAllContacts)

router.get('/:contactId', ctrl.getContactById)

router.post('/', validateBody(schema.schemaAddContact), ctrl.addNewContact)

router.delete('/:contactId', ctrl.removeContactById)

router.put(
	'/:contactId',
	validateBody(schema.schemaUpdateContact),
	ctrl.updateContactById
)

module.exports = router
