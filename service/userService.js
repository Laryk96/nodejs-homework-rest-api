const { User } = require('../models')

const createUser = body => {
	return User.create(body)
}

const findUserByEmail = email => {
	return User.findOne({ email })
}

const getUserById = userId => {
	return User.findById(userId, '-createdAt -updatedAt -password')
}

const userLogout = userId => {
	return User.findByIdAndUpdate({ _id: userId }, { token: null })
}

const setUserToken = (userId, token) => {
	return User.findByIdAndUpdate(userId, { token }, { new: true })
}

module.exports = {
	createUser,
	setUserToken,
	findUserByEmail,
	getUserById,
	userLogout,
}
