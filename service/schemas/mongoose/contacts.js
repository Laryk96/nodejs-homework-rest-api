const { default: mongoose, Schema } = require('mongoose')
const { handleMongooseError, dataRegExp } = require('../../../helpers')

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

contactSchema.post('save', handleMongooseError)
const Contacts = mongoose.model('Contact', contactSchema)

module.exports = Contacts
