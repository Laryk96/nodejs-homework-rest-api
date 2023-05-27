const { default: mongoose } = require('mongoose')
const { handleMongooseError } = require('../helpers')
const userSchema = require('./schemas/userSchema')

userSchema.post('save', handleMongooseError)
const User = mongoose.model('user', userSchema)

module.exports = User
