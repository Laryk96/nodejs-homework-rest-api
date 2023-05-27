const { findUserByEmail } = require('../service/userService')
const HttpError = require('./HttpError')

const checkingEmailForRegistration = email => {
	try {
		findUserByEmail(email)
		throw HttpError(401, `User with email '${email}' not found`)
	} catch (error) {
		return null
	}
}

module.exports = checkingEmailForRegistration
