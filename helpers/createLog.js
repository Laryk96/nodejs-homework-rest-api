const fs = require('fs/promises')
const path = require('path')
const moment = require('moment')

const pathLogger = path.join(__dirname, '../', 'server.log')

const createLog = ({ method, url }, newPath = pathLogger) => {
	const date = moment().format('DD-MM-YYYY_hh:mm:ss')

	fs.appendFile(pathLogger, `\n${method}: ${url} | ${date}`)
}

module.exports = createLog
