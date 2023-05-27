const { Schema } = require('mongoose')
const { dataRegExp } = require('../../helpers')

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		email: {
			type: String,
			match: dataRegExp.email,
			unique: true,
			required: [true, 'Email is required'],
		},
		subscription: {
			type: String,
			enum: ['starter', 'pro', 'business'],
			default: 'starter',
		},
		token: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false, timestamps: true }
)

module.exports = userSchema
