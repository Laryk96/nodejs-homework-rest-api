const { HttpError, ctrlWrapper } = require('../helpers')
const { decodeToken } = require('../helpers/tokenOperation')
const { getUserById } = require('../service/userService')

const authenticate = async (req, res, next) => {
	const { authorization = '' } = req.headers
	const [bearer, token] = authorization.split(' ')

	if (bearer !== 'Bearer' || !token) {
		throw HttpError(401, 'Token type is not valid')
	}

	if (!token) {
		throw HttpError(401, 'No token provided')
	}

	const { id } = decodeToken(token)

	const user = await getUserById(id)

	req.user = user

	next()
}

module.exports = ctrlWrapper(authenticate)
