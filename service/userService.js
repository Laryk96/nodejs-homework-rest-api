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

module.exports = {
	createUser,
	findUserByEmail,
	getUserById,
}
