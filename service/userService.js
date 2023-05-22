const { User } = require('../models')

const createUser = body => {
	return User.create(body)
}

const findUserByEmail = email => {
	return User.findOne({ email })
}

const getUserById = id => {
	return User.findById(id, '-createdAt -updatedAt -password')
}

const userLogout = id => {
	return User.findByIdAndUpdate({ _id: id }, { token: null })
}

module.exports = {
	createUser,
	findUserByEmail,
	getUserById,
	userLogout,
}
