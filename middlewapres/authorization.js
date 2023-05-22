const { findUserByEmail } = require('../service/userService')
const HttpError = require('../helpers/HttpError')
const { checkPassByHash } = require('../helpers/hashOperation')
const { ctrlWrapper } = require('../helpers')

const authorization = async (req, res, next) => {
	const { email, password } = req.body

	const user = await findUserByEmail(email)

	if (!user) {
		throw HttpError(401, 'Email or password is not valid')
	}

	const isValidPassword = await checkPassByHash(password, user.password)

	if (!isValidPassword) {
		throw HttpError(401, 'Email or password is not valid')
	}

	req.user = user

	next()
}

module.exports = ctrlWrapper(authorization)
