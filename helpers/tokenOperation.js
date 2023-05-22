const jwt = require('jsonwebtoken')
const HttpError = require('./HttpError')
const { SECRET_KEY } = process.env

const createToken = payload => {
	return jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' })
}

const decodeToken = token => {
	try {
		const payload = jwt.verify(token, SECRET_KEY)

		return payload
	} catch (error) {
		throw HttpError(401, 'Not authorized')
	}
}

module.exports = {
	createToken,
	decodeToken,
}
