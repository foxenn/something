var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	number: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Item', itemSchema);