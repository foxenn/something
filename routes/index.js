var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Item = require('../models/model');


//add
router.get('/', function(req, res){
	Item.find({}, function(err, item){
		// console.log(item[0].name);
		res.render('addItem', {
			title: 'Add Item',
			itemname: item[0].name
		})
	})
})

router.post('/', function(req, res){
	var newItem = new Item;
	newItem.name = req.body.name;
	newItem.number = req.body.number;
	newItem.save(function(err){
		if (err) throw err;
		console.log(newItem);
		res.redirect('/');
	})
})

module.exports = router;