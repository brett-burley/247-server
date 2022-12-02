const { indexes, allQuestions } = require('./questionsData');


async function getQuestions(date)
{
  try {
    return await readQuestions(date)
  } catch(err) {
    return [];
  }
}


async function readQuestions(date)
{
  return indexes[date].map(index => allQuestions[index]);
}


module.exports = { getQuestions };
