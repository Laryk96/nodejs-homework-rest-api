const { Schema } = require('mongoose')
const { dataRegExp } = require('../../helpers')

const contactSchema = new Schema(
	{
		name: {
			type: String,
			minlength: 2,
			required: [true, 'name is required'],
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: dataRegExp.email,
		},
		phone: {
			type: String,
			required: [true, 'phone is required'],
			unique: true,
			match: dataRegExp.phone,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamps: true }
)

module.exports = contactSchema
