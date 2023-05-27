const { userLogout } = require('../../service/userService')

const logout = async (req, res) => {
	await userLogout(req.user._id)
	res.status(204).json()
}

module.exports = logout
