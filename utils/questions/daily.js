const { writeFileSync, readFileSync } = require('node:fs');
const indexes = require('../../utils/questions/indexes.json');

const daysInYear = 365;
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const accumulatedDays = [0, 31,  59,  90, 120, 151, 181, 212, 243, 273, 304, 334];

const date = new Date();
let year = date.getFullYear();
const month = accumulatedDays[date.getMonth()];
const day = date.getDate();


getIndexes();


async function getIndexes()
{
  const numbers = await readQuestions();
  const years = 5; 
  const end = daysInYear * years;

  let allQuestions = [];
  for(let i = 0; i < end; i++) {
    allQuestions.push(getRandomQuestions(numbers));
  }
  
  await writeFileSync('indexes.json', JSON.stringify(allQuestions));
}


function getRandomQuestions(numbers)
{
  const numIndexes = 7;
  let indexes = [];

  for(let i = 0; i < numIndexes; i++) {
    const rand = (Math.random() * 194) + (i * 195)
    let num = Math.floor(rand);
    if(num < 0)
      num = 0;
    if(num > 1361)
      num = 1361;

    indexes.push(num);
  }

  return indexes;
}

async function readQuestions()
{
  const data = await readFileSync('../../utils/questions/indexes.json');
  return JSON.parse(data);
}
