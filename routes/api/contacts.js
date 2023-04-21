const express = require('express')
const ctrl = require('../../controllers/contacts')

const { validateBody } = require('../../middlewapres')
const { addSchema } = require('../../schemas')

const router = express.Router()

router.get('/', ctrl.getAllContacts)

router.get('/:contactId', validateBody(addSchema), ctrl.getContactById)

router.post('/', ctrl.addNewContact)

router.delete('/:contactId', ctrl.removeContactById)

router.put('/:contactId', validateBody(addSchema), ctrl.updateContactById)

module.exports = router
