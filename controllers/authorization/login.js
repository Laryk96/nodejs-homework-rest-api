const login = async (req, res) => {
	const { email, subscription, token } = req.user

	res.json({ email, subscription, token })
}

module.exports = login
