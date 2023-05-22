const { createToken } = require('../../helpers/tokenOperation')

const login = async (req, res) => {
	const { _id, email, subscription } = req.user

	const token = await createToken({ id: _id })

	res.json({
		token,
		user: { email, subscription },
	})
}

module.exports = login
