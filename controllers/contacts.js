const { HttpError, ctrlWrapper } = require('../helpers')
const {
	getAll,
	getById,
	createContact,
	removeContact,
	updateContact,
} = require('../service/schemas/mongoose')

const getAllContacts = async (req, res) => {
	const result = await getAll()

	res.status(200).json(result)
}

const getContactById = async (req, res) => {
	const { contactId } = req.params

	const results = await getById(contactId)

	if (results) {
		res.json({
			status: 'success',
			code: 200,
			data: {
				tasks: results,
			},
		})
	} else {
		res.status(404).json({
			status: 'error',
			code: 404,
			message: `Not found task id: ${contactId}`,
			data: 'Not Found',
		})
	}
}

const createNewContact = async (req, res) => {
	console.log(req.body)
	const result = await createContact(req.body)

	res.json({
		status: 'success',
		code: 201,
		data: {
			tasks: result,
		},
	})
}

const removeContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await removeContact(contactId)

	if (!result) {
		throw HttpError(404)
	}

	res.json({
		status: 'success',
		code: 204,
		data: {
			tasks: result,
		},
	})
}

const updateContactById = async (req, res) => {
	const { contactId } = req.params

	const result = await updateContact(contactId, req.body)

	if (!result) {
		throw HttpError(404)
	}

	res.json({
		status: 'success',
		code: 200,
		data: {
			tasks: result,
		},
	})
}
const UpdateFavorite = async (req, res) => {
	const { contactId } = req.params

	const result = await updateContact(contactId, req.body)

	if (!result) {
		throw HttpError(404)
	}

	res.json({
		status: 'success',
		code: 200,
		data: {
			tasks: result,
		},
	})
}

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactById: ctrlWrapper(getContactById),
	addNewContact: ctrlWrapper(createNewContact),
	removeContactById: ctrlWrapper(removeContactById),
	updateContactById: ctrlWrapper(updateContactById),
	UpdateFavorite: ctrlWrapper(UpdateFavorite),
}
