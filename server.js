const mongoose = require('mongoose')
const app = require('./app')
mongoose.Promise = global.Promise
const { PORT, DB_HOST } = process.env

const connection = mongoose.connect(DB_HOST, {
	// promiseLibrary: global.Promise,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
	// useFindAndModify: false,
})

connection
	.then(() => {
		app.listen(PORT, function () {
			console.log(`Database connection successful`)
		})
	})
	.catch(err => {
		console.log(`Server not running. Error message: ${err.message}`)
		process.exit(1)
	})
