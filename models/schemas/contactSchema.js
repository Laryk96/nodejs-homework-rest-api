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
			unique: true,
			match: dataRegExp.email,
			required: true,
		},
		phone: {
			type: String,
			unique: true,
			match: dataRegExp.phone,
			required: [true, 'phone is required'],
		},
		favorite: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
)

module.exports = contactSchema
