var starwarsNames = require('./starwars-names');
var uniqueRandomArray = require('unique-random-array');
module.exports = {
	all:starwarsNames,
	random:uniqueRandomArray(starwarsNames)	
}