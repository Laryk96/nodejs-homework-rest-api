const mongoose = require('mongoose')
const app = require('./app')
mongoose.Promise = global.Promise
const { PORT, DB_HOST } = process.env

const connection = mongoose.connect(DB_HOST)

connection
	.then(() => {
		console.log(`Database connection successful`)
		app.listen(PORT, () => console.log(`Server is launched. PORT: ${PORT}`))
	})
	.catch(err => {
		console.log(`Server not running. Error message: ${err.message}`)
		process.exit(1)
	})
