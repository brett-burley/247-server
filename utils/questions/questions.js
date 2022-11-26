const { readFileSync } = require('node:fs');

let questions;

async function getQuestions(index)
{
  try {
    return await readQuestions(index)
  } catch(err) {
    return [];
  }
}


async function readQuestions(index)
{
  const questionsJson = await readFileSync('./utils/questions/allQuestions.json');
  const indexesJson = await readFileSync('./utils/questions/indexes.json');
  const allQuestions = JSON.parse(questionsJson);
  const indexes = JSON.parse(indexesJson);

  return indexes[index].map(i => allQuestions[i])
}


module.exports = { getQuestions };
