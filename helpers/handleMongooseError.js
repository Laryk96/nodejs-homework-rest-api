const handleMongooseError = (error, data, next) => {
	const { name, code } = error
	error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400
	error.message = error.status === 409 ? 'Conflicting Reques' : 'bad request'
	next()
}

module.exports = handleMongooseError
