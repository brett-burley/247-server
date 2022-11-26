const { readFileSync } =  require('node:fs');

const difficulty = getDifficulty();
const solutions = getSolutions();

const questions = difficulty.map(c => {
  return {
    ...c,
    solutions: solutions[c._id].possible
  }
});


module.exports = questions;



function getDifficulty()
{
  const data = readFileSync('data/questions/difficulty.dat', { encoding: 'utf8', flag: 'r'});
  const p1 = data.split('\t').slice(1);

  const ranking = [];
  for(let i = 0; i < p1.length; i += 5) {
    const id = p1[i];
    const time = p1[i+1];
    const solveRate = p1[i+2];
    const numbers = id.split(' ').map(c => Number(c));
    ranking.push({ _id: id, numbers, time, solveRate });
  }

  return ranking;
}


function getSolutions()
{
  const data = readFileSync('data/questions/solutions.dat', { encoding: 'utf8', flag: 'r'});
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

