const { createHashPass } = require('../../helpers/hashOperation')
const { createUser } = require('../../service/userService')

const registration = async (req, res) => {
	const { password } = req.body

	const hashedPassword = await createHashPass(password)

	const result = await createUser({ ...req.body, password: hashedPassword })

	res.status(201).json({
		id: result._id,
		email: result.email,
	})
}

module.exports = registration
