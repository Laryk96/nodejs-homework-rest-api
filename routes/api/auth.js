const express = require('express')
const { registration, login } = require('../../controllers/authorization')
const { validateBody } = require('../../middlewapres')
const { schemaRegister, schemaLogin } = require('../../models/schemas/joi')
const authorization = require('../../middlewapres/authorization')
const router = express.Router()

router.post('/registration', validateBody(schemaRegister), registration)

router.post('/login', validateBody(schemaLogin), authorization, login)

module.exports = router
