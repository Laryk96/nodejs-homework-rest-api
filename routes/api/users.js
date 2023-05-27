const express = require('express')
const { getCurrentUser, logout } = require('../../controllers/users')
const { authenticate, validateBody } = require('../../middlewapres')
const { schemaUpdateFavoriteContact } = require('../../models/schemas/joi')
const router = express.Router()

router.get('/current', authenticate, getCurrentUser)
router.get('/logout', authenticate, logout)
router.patch('/', validateBody(schemaUpdateFavoriteContact), authenticate)

module.exports = router
