const { writeFileSync, readFileSync } =  require('node:fs');
const path = require('path');

const home = '/home/bb/blueLake/server/data/questions/';

const difficulty = getDifficulty();
const solutions = getSolutions();



const questions = difficulty.map(c => {
  return {
    ...c,
    solutions: solutions[c.name].possible
  }
});


module.exports = { allQuestions: questions };


function getIndexes()
{
  const filePath = path.join(home, 'difficulty.dat');
  const data = readFileSync(filePath, { encoding: 'utf8', flag: 'r'});
  const p1 = data.split('\t').slice(1);

  const indexes = [];
  for(let i = 0; i < p1.length; i += 5) {
    indexes.push(p1[i]);
  }

  return indexes;
}


function getDifficulty()
{
  const filePath = path.join(home, 'difficulty.dat');
  const data = readFileSync(filePath, { encoding: 'utf8', flag: 'r'});
  const p1 = data.split('\t').slice(1);

  const ranking = [];
  let index = 0;
  for(let i = 0; i < p1.length; i += 5) {
    const name = p1[i];
    const time = p1[i+1];
    const solveRate = p1[i+2];
    const numbers = name.split(' ').map(c => Number(c));
    ranking.push({ _id: index++, name, numbers, time, solveRate });
  }

  return ranking;
}


function getSolutions()
{
  const filePath = path.join(home, 'solutions.dat')
  const data = readFileSync(filePath, { encoding: 'utf8', flag: 'r'});
  const result = {};

  data.split('\t    ').slice(1).map(c => c.split('\t')).forEach((c, i) => {
    let id = "";
    const possible = [];
    for(let i = 0; i < c.length; i++) {
      const text = c[i];
      const t = text.trim().replace(/\n.*$/, '');
      if(i === 0) id = t;
      else
        possible.push(t)
    }

    result[id] = {}
    result[id].possible = possible;  
  });

  return result;
}
