const bcrypt = require('bcrypt')

const createHashPass = async (pass, salt = 10) => {
	return await bcrypt.hash(pass, salt)
}

const checkPassByHash = async (pass, hashingPass) => {
	return await bcrypt.compare(pass, hashingPass)
}

module.exports = {
	createHashPass,
	checkPassByHash,
}
