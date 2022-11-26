const { Schema, model } = require('mongoose')

const QuestionsSchema = Schema({
	_id: Number,
  name: String,
  numbers: [Number],
  time: String,
  solveRate: String,
  solutions: [String]
})

module.exports = model('questions', QuestionsSchema);
