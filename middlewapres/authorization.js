const { findUserByEmail, setUserToken } = require('../service/userService')
const HttpError = require('../helpers/HttpError')
const { checkPassByHash } = require('../helpers/hashOperation')
const { ctrlWrapper } = require('../helpers')
const { createToken } = require('../helpers/tokenOperation')

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

	const token = await createToken({ _id: user._id })
	const userWithToken = await setUserToken(user._id, token)
	console.log(user._id)

	req.user = userWithToken

	next()
}

module.exports = ctrlWrapper(authorization)
