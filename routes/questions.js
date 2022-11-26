const { allQuestions } = require('../data/questions');


function getDailyQuestion() {
  const date = new Date();
  const index = date.getDate();
  console.log('index: ', index);
  return allQuestions[0];
}

module.exports = { getDailyQuestion };
