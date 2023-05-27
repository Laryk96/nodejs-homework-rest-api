const { default: mongoose } = require('mongoose')
const { handleMongooseError } = require('../helpers')
const contactSchema = require('./schemas/contactSchema')

contactSchema.post('save', handleMongooseError)
const Contact = mongoose.model('contact', contactSchema)

module.exports = Contact
