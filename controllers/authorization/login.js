const { createToken } = require('../../helpers/tokenOperation')

const login = async (req, res) => {
	const { _id, email, subscription, password } = req.user

	const token = await createToken({ id: _id })

	res.json({
		id: _id,
		email,
		password,
		subscription,
		token,
	})
}

module.exports = login
