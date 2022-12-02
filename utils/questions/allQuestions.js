const { writeFileSync } = require('node:fs');

const allQuestions = [
{
  _id: '1 1 4 6',
  numbers: [ 1, 1, 4, 6 ],
  time: '4.38',
  solveRate: '99.2%',
  solutions: [ '6×4+1-1' ],
  index: 0
}
{
  _id: '1 1 11 11',
  numbers: [ 1, 1, 11, 11 ],
  time: '4.4',
  solveRate: '99.6%',
  solutions: [ '11+11+1+1' ],
  index: 1
}
{
  _id: '1 1 3 8',
  numbers: [ 1, 1, 3, 8 ],
  time: '4.43',
  solveRate: '99.2%',
  solutions: [ '8×3+1-1' ],
  index: 2
}
{
  _id: '1 1 1 8',
  numbers: [ 1, 1, 1, 8 ],
  time: '4.44',
  solveRate: '98.9%',
  solutions: [ '(1+1+1)×8' ],
  index: 3
}
{
  _id: '6 6 6 6',
  numbers: [ 6, 6, 6, 6 ],
  time: '4.58',
  solveRate: '99.5%',
  solutions: [ '6+6+6+6', '6×6-6-6' ],
  index: 4
}
{
  _id: '1 1 2 12',
  numbers: [ 1, 1, 2, 12 ],
  time: '4.59',
  solveRate: '99.1%',
  solutions: [ '12×2+1-1', '12/(1-1/2)' ],
  index: 5
}
{
  _id: '1 2 2 6',
  numbers: [ 1, 2, 2, 6 ],
  time: '4.78',
  solveRate: '99.2%',
  solutions: [ '(6+2)×(2+1)', '6×2×2×1', '(2+2)×6×1' ],
  index: 6
}
{
  _id: '1 1 10 12',
  numbers: [ 1, 1, 10, 12 ],
  time: '4.79',
  solveRate: '99.1%',
  solutions: [ '12+10+1+1' ],
  index: 7
}
{
  _id: '1 1 1 12',
  numbers: [ 1, 1, 1, 12 ],
  time: '4.82',
  solveRate: '99.2%',
  solutions: [ '(1+1)×12×1' ],
  index: 8
}
{
  _id: '2 2 10 10',
  numbers: [ 2, 2, 10, 10 ],
  time: '4.82',
  solveRate: '98.2%',
  solutions: [ '10+10+2+2', '2×2+10+10' ],
  index: 9
}
{
  _id: '1 1 2 8',
  numbers: [ 1, 1, 2, 8 ],
  time: '4.93',
  solveRate: '97.8%',
  solutions: [ '(2+1)×8×1' ],
  index: 10
}
{
  _id: '1 1 4 8',
  numbers: [ 1, 1, 4, 8 ],
  time: '4.95',
  solveRate: '98.2%',
  solutions: [ '(8+4)×(1+1)', '(8-1-1)×4', '(4-1)×8×1' ],
  index: 11
}
{
  _id: '4 6 11 11',
  numbers: [ 4, 6, 11, 11 ],
  time: '4.96',
  solveRate: '98.9%',
  solutions: [ '6×4+11-11', '11+11+6-4' ],
  index: 12
}
{
  _id: '1 1 5 8',
  numbers: [ 1, 1, 5, 8 ],
  time: '4.97',
  solveRate: '96.5%',
  solutions: [ '(5-1-1)×8' ],
  index: 13
}
{
  _id: '1 1 12 12',
  numbers: [ 1, 1, 12, 12 ],
  time: '4.99',
  solveRate: '99.3%',
  solutions: [ '12+12+1-1' ],
  index: 14
}
{
  _id: '1 1 3 12',
  numbers: [ 1, 1, 3, 12 ],
  time: '5',
  solveRate: '97.4%',
  solutions: [ '(3-1)×12×1' ],
  index: 15
}
{
  _id: '1 1 4 12',
  numbers: [ 1, 1, 4, 12 ],
  time: '5',
  solveRate: '97.5%',
  solutions: [ '12×4/(1+1)', '(4-1-1)×12' ],
  index: 16
}
{
  _id: '3 3 3 8',
  numbers: [ 3, 3, 3, 8 ],
  time: '5',
  solveRate: '97.9%',
  solutions: [ '8×3+3-3' ],
  index: 17
}
{
  _id: '2 2 2 12',
  numbers: [ 2, 2, 2, 12 ],
  time: '5.01',
  solveRate: '99.1%',
  solutions: [ '(2+2)×12/2', '(2×2-2)×12', '12×2+2-2' ],
  index: 18
}
{
  _id: '1 1 2 6',
  numbers: [ 1, 1, 2, 6 ],
  time: '5.05',
  solveRate: '98.4%',
  solutions: [ '(1+1)×6×2', '(2+1+1)×6' ],
  index: 19
}
{
  _id: '11 11 12 12',
  numbers: [ 11, 11, 12, 12 ],
  time: '5.05',
  solveRate: '98.7%',
  solutions: [ '12+12+11-11' ],
  index: 20
}
{
  _id: '1 1 2 11',
  numbers: [ 1, 1, 2, 11 ],
  time: '5.08',
  solveRate: '98.9%',
  solutions: [ '11×2+1+1', '(1+1)×11+2', '(11+1)×2×1' ],
  index: 21
}
{
  _id: '1 2 3 4',
  numbers: [ 1, 2, 3, 4 ],
  time: '5.08',
  solveRate: '99.1%',
  solutions: [ '(3+2+1)×4', '4×3×2×1', '(4+2)×(3+1)' ],
  index: 22
}
{
  _id: '3 7 7 8',
  numbers: [ 3, 7, 7, 8 ],
  time: '5.08',
  solveRate: '96.7%',
  solutions: [ '8×3+7-7' ],
  index: 23
}
{
  _id: '1 1 2 13',
  numbers: [ 1, 1, 2, 13 ],
  time: '5.13',
  solveRate: '98.7%',
  solutions: [ '13×2-1-1', '(1+1)×13-2', '(13-1)×2×1' ],
  index: 24
}
{
  _id: '1 1 13 13',
  numbers: [ 1, 1, 13, 13 ],
  time: '5.13',
  solveRate: '99.3%',
  solutions: [ '13+13-1-1' ],
  index: 25
}
{
  _id: '1 2 4 12',
  numbers: [ 1, 2, 4, 12 ],
  time: '5.13',
  solveRate: '97.7%',
  solutions: [
    '(12-4)×(2+1)',
    '(2+1)×4+12',
    '12×4×1/2',
    '(4-2)×12×1',
    '12/(1-2/4)'
  ],
  index: 26
}
{
  _id: '7 7 12 12',
  numbers: [ 7, 7, 12, 12 ],
  time: '5.13',
  solveRate: '98.6%',
  solutions: [ '(7+7-12)×12', '12+12+7-7' ],
  index: 27
}
{
  _id: '1 1 3 6',
  numbers: [ 1, 1, 3, 6 ],
  time: '5.15',
  solveRate: '97.7%',
  solutions: [ '(6+1+1)×3', '(3+1)×6×1' ],
  index: 28
}
{
  _id: '1 1 3 9',
  numbers: [ 1, 1, 3, 9 ],
  time: '5.15',
  solveRate: '97.1%',
  solutions: [ '(9+3)×(1+1)', '(9-1)×3×1' ],
  index: 29
}
{
  _id: '4 6 7 7',
  numbers: [ 4, 6, 7, 7 ],
  time: '5.15',
  solveRate: '98.6%',
  solutions: [ '7+7+6+4', '6×4+7-7' ],
  index: 30
}
{
  _id: '1 1 5 6',
  numbers: [ 1, 1, 5, 6 ],
  time: '5.16',
  solveRate: '96.8%',
  solutions: [ '(5-1)×6×1', '(6-1)×5-1' ],
  index: 31
}
{
  _id: '1 1 11 13',
  numbers: [ 1, 1, 11, 13 ],
  time: '5.2',
  solveRate: '99%',
  solutions: [ '13+11+1-1' ],
  index: 32
}
{
  _id: '4 5 12 12',
  numbers: [ 4, 5, 12, 12 ],
  time: '5.2',
  solveRate: '96.9%',
  solutions: [ '(12+12)×(5-4)', '(5-12/4)×12', '(12/12+5)×4' ],
  index: 33
}
{
  _id: '2 11 11 12',
  numbers: [ 2, 11, 11, 12 ],
  time: '5.21',
  solveRate: '97.1%',
  solutions: [ '12×2+11-11' ],
  index: 34
}
{
  _id: '4 6 13 13',
  numbers: [ 4, 6, 13, 13 ],
  time: '5.21',
  solveRate: '98.7%',
  solutions: [ '6×4+13-13', '13+13+4-6' ],
  index: 35
}
{
  _id: '1 6 6 12',
  numbers: [ 1, 6, 6, 12 ],
  time: '5.22',
  solveRate: '98.7%',
  solutions: [ '(12+6+6)×1', '(6×6-12)×1', '(6/6+1)×12' ],
  index: 36
}
{
  _id: '4 4 4 6',
  numbers: [ 4, 4, 4, 6 ],
  time: '5.22',
  solveRate: '98.1%',
  solutions: [ '6×4+4-4' ],
  index: 37
}
{
  _id: '12 12 12 12',
  numbers: [ 12, 12, 12, 12 ],
  time: '5.23',
  solveRate: '99.3%',
  solutions: [ '12+12+12-12' ],
  index: 38
}
{
  _id: '1 1 1 11',
  numbers: [ 1, 1, 1, 11 ],
  time: '5.24',
  solveRate: '97.3%',
  solutions: [ '(11+1)×(1+1)' ],
  index: 39
}
{
  _id: '2 7 7 12',
  numbers: [ 2, 7, 7, 12 ],
  time: '5.25',
  solveRate: '98.7%',
  solutions: [ '12+7+7-2', '12×2+7-7' ],
  index: 40
}
{
  _id: '1 1 11 12',
  numbers: [ 1, 1, 11, 12 ],
  time: '5.26',
  solveRate: '99.3%',
  solutions: [ '(12+11+1)×1' ],
  index: 41
}
{
  _id: '1 5 7 12',
  numbers: [ 1, 5, 7, 12 ],
  time: '5.27',
  solveRate: '98.3%',
  solutions: [ '(7-5)×12×1', '7×5+1-12', '(12+7+5)×1', '(12-7)×5-1' ],
  index: 42
}
{
  _id: '10 10 12 12',
  numbers: [ 10, 10, 12, 12 ],
  time: '5.27',
  solveRate: '98.6%',
  solutions: [ '12+12+10-10' ],
  index: 43
}
{
  _id: '1 8 8 8',
  numbers: [ 1, 8, 8, 8 ],
  time: '5.29',
  solveRate: '97.7%',
  solutions: [ '(8+8+8)×1' ],
  index: 44
}
{
  _id: '2 9 9 12',
  numbers: [ 2, 9, 9, 12 ],
  time: '5.29',
  solveRate: '97.3%',
  solutions: [ '12×2+9-9', '12/2+9+9', '(9+9)×2-12' ],
  index: 45
}
{
  _id: '3 8 13 13',
  numbers: [ 3, 8, 13, 13 ],
  time: '5.29',
  solveRate: '94.9%',
  solutions: [ '8×3+13-13' ],
  index: 46
}
{
  _id: '11 11 11 12',
  numbers: [ 11, 11, 11, 12 ],
  time: '5.29',
  solveRate: '94.8%',
  solutions: [ '(11+11)×12/11', '11/11+12+11' ],
  index: 47
}
{
  _id: '2 2 3 8',
  numbers: [ 2, 2, 3, 8 ],
  time: '5.31',
  solveRate: '98.1%',
  solutions: [ '8×3+2-2', '(8+3)×2+2' ],
  index: 48
}
{
  _id: '9 9 12 12',
  numbers: [ 9, 9, 12, 12 ],
  time: '5.31',
  solveRate: '98.4%',
  solutions: [ '12+12+9-9' ],
  index: 49
}
{
  _id: '1 1 4 5',
  numbers: [ 1, 1, 4, 5 ],
  time: '5.33',
  solveRate: '97.7%',
  solutions: [ '(4+1)×5-1', '(5+1)×4×1' ],
  index: 50
}
{
  _id: '1 1 5 5',
  numbers: [ 1, 1, 5, 5 ],
  time: '5.33',
  solveRate: '99.1%',
  solutions: [ '(5+1)×(5-1)', '(5×5-1)×1' ],
  index: 51
}
{
  _id: '12 12 13 13',
  numbers: [ 12, 12, 13, 13 ],
  time: '5.33',
  solveRate: '98.6%',
  solutions: [ '13+12+12-13' ],
  index: 52
}
{
  _id: '3 3 12 12',
  numbers: [ 3, 3, 12, 12 ],
  time: '5.34',
  solveRate: '98.7%',
  solutions: [ '12×12/(3+3)', '12+12+3-3', '(12-12/3)×3' ],
  index: 53
}
{
  _id: '8 8 12 12',
  numbers: [ 8, 8, 12, 12 ],
  time: '5.34',
  solveRate: '98.5%',
  solutions: [ '12+12+8-8', '12×8/(12-8)' ],
  index: 54
}
{
  _id: '1 6 8 12',
  numbers: [ 1, 6, 8, 12 ],
  time: '5.35',
  solveRate: '97%',
  solutions: [ '(12-8)×6×1', '(8-6)×12×1', '(12/6+1)×8' ],
  index: 55
}
{
  _id: '5 6 12 12',
  numbers: [ 5, 6, 12, 12 ],
  time: '5.37',
  solveRate: '97.1%',
  solutions: [ '(12+12)×(6-5)', '(5-12/12)×6' ],
  index: 56
}
{
  _id: '11 12 12 12',
  numbers: [ 11, 12, 12, 12 ],
  time: '5.38',
  solveRate: '97.7%',
  solutions: [ '12/12+12+11', '(12+12)×(12-11)' ],
  index: 57
}
{
  _id: '1 3 5 12',
  numbers: [ 1, 3, 5, 12 ],
  time: '5.39',
  solveRate: '96.4%',
  solutions: [ '(5+1)×12/3', '(12+1-5)×3', '(5-1)×3+12', '(5-3)×12×1' ],
  index: 58
}
{
  _id: '1 9 9 12',
  numbers: [ 1, 9, 9, 12 ],
  time: '5.39',
  solveRate: '95.5%',
  solutions: [ '(9-1)×(12-9)', '(9/9+1)×12' ],
  index: 59
}
{
  _id: '3 8 11 11',
  numbers: [ 3, 8, 11, 11 ],
  time: '5.39',
  solveRate: '95.9%',
  solutions: [ '8×3+11-11', '(11-3)×(11-8)' ],
  index: 60
}
{
  _id: '1 1 12 13',
  numbers: [ 1, 1, 12, 13 ],
  time: '5.4',
  solveRate: '98.7%',
  solutions: [ '(13+12-1)×1' ],
  index: 61
}
{
  _id: '5 5 12 12',
  numbers: [ 5, 5, 12, 12 ],
  time: '5.4',
  solveRate: '98.6%',
  solutions: [ '(12-5-5)×12', '5×5-12/12', '12+12+5-5' ],
  index: 62
}
{
  _id: '3 4 4 8',
  numbers: [ 3, 4, 4, 8 ],
  time: '5.41',
  solveRate: '98.2%',
  solutions: [ '4×3+8+4', '8×3+4-4', '(8-3)×4+4', '(4×4-8)×3' ],
  index: 63
}
{
  _id: '3 8 10 10',
  numbers: [ 3, 8, 10, 10 ],
  time: '5.41',
  solveRate: '95.7%',
  solutions: [ '8×3+10-10' ],
  index: 64
}
{
  _id: '3 8 9 9',
  numbers: [ 3, 8, 9, 9 ],
  time: '5.42',
  solveRate: '97%',
  solutions: [ '8×3+9-9' ],
  index: 65
}
{
  _id: '11 11 11 13',
  numbers: [ 11, 11, 11, 13 ],
  time: '5.42',
  solveRate: '98.4%',
  solutions: [ '13+11+11-11' ],
  index: 66
}
{
  _id: '2 5 5 12',
  numbers: [ 2, 5, 5, 12 ],
  time: '5.43',
  solveRate: '98.8%',
  solutions: [ '12+5+5+2', '12×2+5-5' ],
  index: 67
}
{
  _id: '2 3 3 12',
  numbers: [ 2, 3, 3, 12 ],
  time: '5.44',
  solveRate: '98.5%',
  solutions: [ '12×2+3-3', '(3+3)×2+12' ],
  index: 68
}
{
  _id: '2 12 13 13',
  numbers: [ 2, 12, 13, 13 ],
  time: '5.44',
  solveRate: '97.3%',
  solutions: [ '12×2+13-13' ],
  index: 69
}
{
  _id: '7 7 11 12',
  numbers: [ 7, 7, 11, 12 ],
  time: '5.44',
  solveRate: '93.7%',
  solutions: [ '7/7+12+11', '(12-7)×7-11' ],
  index: 70
}
{
  _id: '1 4 10 10',
  numbers: [ 1, 4, 10, 10 ],
  time: '5.46',
  solveRate: '97.8%',
  solutions: [ '(10+10+4)×1', '10×10/4-1' ],
  index: 71
}
{
  _id: '1 8 9 12',
  numbers: [ 1, 8, 9, 12 ],
  time: '5.47',
  solveRate: '96.5%',
  solutions: [ '(12-9)×8×1', '(9+1-8)×12', '8/(12/9-1)' ],
  index: 72
}
{
  _id: '4 4 12 12',
  numbers: [ 4, 4, 12, 12 ],
  time: '5.47',
  solveRate: '98.5%',
  solutions: [ '12+12+4-4', '(12-4)×12/4' ],
  index: 73
}
{
  _id: '1 2 5 8',
  numbers: [ 1, 2, 5, 8 ],
  time: '5.48',
  solveRate: '95.5%',
  solutions: [ '(5+1)×8/2', '(8+5-1)×2', '(8-2)×(5-1)', '(5-2)×8×1' ],
  index: 74
}
{
  _id: '5 5 11 12',
  numbers: [ 5, 5, 11, 12 ],
  time: '5.48',
  solveRate: '96.6%',
  solutions: [ '5×5+11-12', '5/5+12+11', '(12-5)×5-11' ],
  index: 75
}
{
  _id: '1 1 3 7',
  numbers: [ 1, 1, 3, 7 ],
  time: '5.5',
  solveRate: '96.8%',
  solutions: [ '(7-1)×(3+1)', '(7+1)×3×1' ],
  index: 76
}
{
  _id: '1 3 4 12',
  numbers: [ 1, 3, 4, 12 ],
  time: '5.5',
  solveRate: '98.6%',
  solutions: [ '(12-4)×3×1', '(4+1-3)×12', '12×4/(3-1)', '(4×3+12)×1' ],
  index: 77
}
{
  _id: '1 8 8 12',
  numbers: [ 1, 8, 8, 12 ],
  time: '5.5',
  solveRate: '96.3%',
  solutions: [ '(12-8-1)×8', '(8/8+1)×12', '8/(1-8/12)' ],
  index: 78
}
{
  _id: '1 6 7 12',
  numbers: [ 1, 6, 7, 12 ],
  time: '5.51',
  solveRate: '98.6%',
  solutions: [ '12+7+6-1', '(7+1-6)×12', '(12-7-1)×6', '(7-1)×6-12' ],
  index: 79
}
{
  _id: '2 2 4 6',
  numbers: [ 2, 2, 4, 6 ],
  time: '5.51',
  solveRate: '98.9%',
  solutions: [ '6×4+2-2', '(4+2)×(6-2)', '(6+4+2)×2', '(4-2)×6×2', '(4/2+2)×6' ],
  index: 80
}
{
  _id: '1 1 1 13',
  numbers: [ 1, 1, 1, 13 ],
  time: '5.53',
  solveRate: '97.4%',
  solutions: [ '(13-1)×(1+1)' ],
  index: 81
}
{
  _id: '2 3 3 8',
  numbers: [ 2, 3, 3, 8 ],
  time: '5.54',
  solveRate: '96.9%',
  solutions: [ '(3×2-3)×8', '(3-2)×8×3', '(3+3)×8/2', '(3/3+2)×8' ],
  index: 82
}
{
  _id: '3 5 5 8',
  numbers: [ 3, 5, 5, 8 ],
  time: '5.54',
  solveRate: '96.9%',
  solutions: [ '(5+3)×(8-5)', '8×3+5-5' ],
  index: 83
}
{
  _id: '6 7 12 12',
  numbers: [ 6, 7, 12, 12 ],
  time: '5.54',
  solveRate: '95.6%',
  solutions: [ '(12+12)×(7-6)' ],
  index: 84
}
{
  _id: '1 4 7 12',
  numbers: [ 1, 4, 7, 12 ],
  time: '5.55',
  solveRate: '98.3%',
  solutions: [ '12+7+4+1', '(7-4-1)×12', '(7+1)×12/4', '(12+1-7)×4' ],
  index: 85
}
{
  _id: '1 3 10 10',
  numbers: [ 1, 3, 10, 10 ],
  time: '5.56',
  solveRate: '97.4%',
  solutions: [ '10+10+3+1' ],
  index: 86
}
{
  _id: '8 8 11 13',
  numbers: [ 8, 8, 11, 13 ],
  time: '5.56',
  solveRate: '97%',
  solutions: [ '13+11+8-8', '(13-11)×8+8' ],
  index: 87
}
{
  _id: '2 3 12 12',
  numbers: [ 2, 3, 12, 12 ],
  time: '5.57',
  solveRate: '97.4%',
  solutions: [ '12×12/3/2', '(12+12)×(3-2)', '(12×3+12)/2', '(12/3-2)×12' ],
  index: 88
}
{
  _id: '1 1 10 13',
  numbers: [ 1, 1, 10, 13 ],
  time: '5.58',
  solveRate: '97.9%',
  solutions: [ '(13+10+1)×1' ],
  index: 89
}
{
  _id: '1 3 3 4',
  numbers: [ 1, 3, 3, 4 ],
  time: '5.58',
  solveRate: '97.5%',
  solutions: [ '(4+3+1)×3', '(3-1)×4×3', '(3+3)×4×1' ],
  index: 90
}
{
  _id: '3 7 8 8',
  numbers: [ 3, 7, 8, 8 ],
  time: '5.58',
  solveRate: '95.9%',
  solutions: [ '(7-3)×8-8', '(8-7)×8×3', '(8/8+7)×3' ],
  index: 91
}
{
  _id: '1 1 4 7',
  numbers: [ 1, 1, 4, 7 ],
  time: '5.59',
  solveRate: '97%',
  solutions: [ '(7-1)×4×1', '(7+1)×(4-1)' ],
  index: 92
}
{
  _id: '9 9 11 12',
  numbers: [ 9, 9, 11, 12 ],
  time: '5.59',
  solveRate: '94%',
  solutions: [ '9/9+12+11', '(12-9)×11-9' ],
  index: 93
}
{
  _id: '2 7 7 8',
  numbers: [ 2, 7, 7, 8 ],
  time: '5.6',
  solveRate: '96.8%',
  solutions: [ '8+7+7+2', '(7/7+2)×8' ],
  index: 94
}
{
  _id: '5 5 7 7',
  numbers: [ 5, 5, 7, 7 ],
  time: '5.6',
  solveRate: '97.9%',
  solutions: [ '7+7+5+5', '7×7-5×5', '5×5-7/7', '(7+5)×(7-5)' ],
  index: 95
}
{
  _id: '7 8 12 12',
  numbers: [ 7, 8, 12, 12 ],
  time: '5.6',
  solveRate: '96.2%',
  solutions: [ '(12+12)×(8-7)' ],
  index: 96
}
{
  _id: '4 4 11 13',
  numbers: [ 4, 4, 11, 13 ],
  time: '5.61',
  solveRate: '97.9%',
  solutions: [ '13+11+4-4', '(13+4-11)×4' ],
  index: 97
}
{
  _id: '1 2 5 12',
  numbers: [ 1, 2, 5, 12 ],
  time: '5.62',
  solveRate: '95.4%',
  solutions: [ '(5-2-1)×12', '(5+1)×2+12', '(5-1)×12/2' ],
  index: 98
}
{
  _id: '1 6 9 12',
  numbers: [ 1, 6, 9, 12 ],
  time: '5.62',
  solveRate: '95.4%',
  solutions: [ '(9-6-1)×12', '(12+1-9)×6', '12/(9/6-1)', '6/(1-9/12)' ],
  index: 99
}
{
  _id: '4 6 6 6',
  numbers: [ 4, 6, 6, 6 ],
  time: '5.63',
  solveRate: '98.3%',
  solutions: [ '6×4+6-6', '(6+6)×(6-4)' ],
  index: 100
}
{
  _id: '1 2 2 10',
  numbers: [ 1, 2, 2, 10 ],
  time: '5.64',
  solveRate: '96.6%',
  solutions: [ '(10-2)×(2+1)', '(10+2)×2×1', '(10+1)×2+2' ],
  index: 101
}
{
  _id: '1 7 9 12',
  numbers: [ 1, 7, 9, 12 ],
  time: '5.64',
  solveRate: '95.9%',
  solutions: [ '(7+1)×(12-9)', '(9-7)×12×1' ],
  index: 102
}
{
  _id: '4 5 11 12',
  numbers: [ 4, 5, 11, 12 ],
  time: '5.64',
  solveRate: '97.5%',
  solutions: [ '(11-5-4)×12', '12+11+5-4', '(12+5-11)×4' ],
  index: 103
}
{
  _id: '1 1 2 10',
  numbers: [ 1, 1, 2, 10 ],
  time: '5.66',
  solveRate: '95.6%',
  solutions: [ '(10+2)×(1+1)', '(10+1+1)×2' ],
  index: 104
}
{
  _id: '1 6 6 11',
  numbers: [ 1, 6, 6, 11 ],
  time: '5.66',
  solveRate: '98.3%',
  solutions: [ '11+6+6+1', '(11-6-1)×6', '6×6-11-1' ],
  index: 105
}
{
  _id: '2 2 12 12',
  numbers: [ 2, 2, 12, 12 ],
  time: '5.66',
  solveRate: '98.7%',
  solutions: [ '12+12+2-2', '(12×2-12)×2' ],
  index: 106
}
{
  _id: '3 3 11 12',
  numbers: [ 3, 3, 11, 12 ],
  time: '5.66',
  solveRate: '94.8%',
  solutions: [ '(11-3×3)×12', '3/3+12+11', '11×3+3-12' ],
  index: 107
}
{
  _id: '4 5 5 6',
  numbers: [ 4, 5, 5, 6 ],
  time: '5.66',
  solveRate: '97.3%',
  solutions: [ '6×4+5-5' ],
  index: 108
}
{
  _id: '1 7 7 10',
  numbers: [ 1, 7, 7, 10 ],
  time: '5.67',
  solveRate: '97.8%',
  solutions: [ '(7+1)×(10-7)', '(10+7+7)×1' ],
  index: 109
}
{
  _id: '3 7 7 7',
  numbers: [ 3, 7, 7, 7 ],
  time: '5.67',
  solveRate: '97.5%',
  solutions: [ '7+7+7+3', '(7/7+7)×3' ],
  index: 110
}
{
  _id: '4 4 11 12',
  numbers: [ 4, 4, 11, 12 ],
  time: '5.67',
  solveRate: '92%',
  solutions: [ '4/4+12+11' ],
  index: 111
}
{
  _id: '4 8 11 11',
  numbers: [ 4, 8, 11, 11 ],
  time: '5.67',
  solveRate: '95.4%',
  solutions: [ '8/4+11+11', '(4-11/11)×8' ],
  index: 112
}
{
  _id: '1 5 8 8',
  numbers: [ 1, 5, 8, 8 ],
  time: '5.68',
  solveRate: '95%',
  solutions: [ '(5-1)×8-8', '(8-5)×8×1' ],
  index: 113
}
{
  _id: '3 3 4 6',
  numbers: [ 3, 3, 4, 6 ],
  time: '5.68',
  solveRate: '97.7%',
  solutions: [ '6×4+3-3' ],
  index: 114
}
{
  _id: '2 8 9 9',
  numbers: [ 2, 8, 9, 9 ],
  time: '5.69',
  solveRate: '96.3%',
  solutions: [ '9+9+8-2', '(9/9+2)×8' ],
  index: 115
}
{
  _id: '3 6 11 11',
  numbers: [ 3, 6, 11, 11 ],
  time: '5.69',
  solveRate: '94.3%',
  solutions: [ '6/3+11+11', '(11/11+3)×6' ],
  index: 116
}
{
  _id: '12 12 12 13',
  numbers: [ 12, 12, 12, 13 ],
  time: '5.69',
  solveRate: '97.4%',
  solutions: [ '(12+12)×(13-12)', '13+12-12/12' ],
  index: 117
}
{
  _id: '6 6 12 12',
  numbers: [ 6, 6, 12, 12 ],
  time: '5.7',
  solveRate: '98.4%',
  solutions: [ '12+12+6-6', '(12-6)×6-12' ],
  index: 118
}
{
  _id: '8 9 12 12',
  numbers: [ 8, 9, 12, 12 ],
  time: '5.7',
  solveRate: '96.2%',
  solutions: [ '(12+12)×(9-8)', '(12-8)×9-12', '12×12/9+8' ],
  index: 119
}
{
  _id: '1 2 2 12',
  numbers: [ 1, 2, 2, 12 ],
  time: '5.71',
  solveRate: '97.7%',
  solutions: [ '(2-1)×12×2', '(12+1)×2-2', '(12-1)×2+2', '(2/2+1)×12' ],
  index: 120
}
{
  _id: '3 8 8 8',
  numbers: [ 3, 8, 8, 8 ],
  time: '5.71',
  solveRate: '97.5%',
  solutions: [ '8×3+8-8', '(8×8+8)/3' ],
  index: 121
}
{
  _id: '2 2 2 3',
  numbers: [ 2, 2, 2, 3 ],
  time: '5.72',
  solveRate: '99%',
  solutions: [ '(2+2)×3×2', '3×2×2×2' ],
  index: 122
}
{
  _id: '3 4 4 6',
  numbers: [ 3, 4, 4, 6 ],
  time: '5.73',
  solveRate: '97.4%',
  solutions: [
    '(6-4)×4×3',
    '(4×3-6)×4',
    '(4-3)×6×4',
    '(4+4)×(6-3)',
    '(6/3+4)×4',
    '(4/4+3)×6'
  ],
  index: 123
}
{
  _id: '1 4 4 12',
  numbers: [ 1, 4, 4, 12 ],
  time: '5.75',
  solveRate: '95.6%',
  solutions: [ '(12-4)×(4-1)', '(4-1)×4+12', '(4/4+1)×12' ],
  index: 124
}
{
  _id: '1 4 6 12',
  numbers: [ 1, 4, 6, 12 ],
  time: '5.75',
  solveRate: '96.7%',
  solutions: [
    '(12-6)×4×1',
    '12×6/(4-1)',
    '(6-4)×12×1',
    '12/(6/4-1)',
    '(12/4+1)×6'
  ],
  index: 125
}
{
  _id: '2 2 3 12',
  numbers: [ 2, 2, 3, 12 ],
  time: '5.75',
  solveRate: '98%',
  solutions: [
    '(2+2)×3+12',
    '(12-2-2)×3',
    '3×2×2+12',
    '(12-2×2)×3',
    '(3-2/2)×12',
    '(3-2)×12×2',
    '12/(2-3/2)',
    '(12/2+2)×3'
  ],
  index: 126
}
{
  _id: '7 7 11 13',
  numbers: [ 7, 7, 11, 13 ],
  time: '5.75',
  solveRate: '97.3%',
  solutions: [ '13+11+7-7', '(13-7)×(11-7)' ],
  index: 127
}
{
  _id: '1 8 10 12',
  numbers: [ 1, 8, 10, 12 ],
  time: '5.76',
  solveRate: '95.5%',
  solutions: [ '(12+1-10)×8', '(10-8)×12×1' ],
  index: 128
}
{
  _id: '3 8 12 13',
  numbers: [ 3, 8, 12, 13 ],
  time: '5.76',
  solveRate: '96%',
  solutions: [ '(13-8-3)×12', '(13-12)×8×3', '(13+3)×12/8' ],
  index: 129
}
{
  _id: '6 6 11 13',
  numbers: [ 6, 6, 11, 13 ],
  time: '5.76',
  solveRate: '97.8%',
  solutions: [ '(6+6)×(13-11)', '13+11+6-6', '(11+6-13)×6' ],
  index: 130
}
{
  _id: '9 9 11 13',
  numbers: [ 9, 9, 11, 13 ],
  time: '5.77',
  solveRate: '96.7%',
  solutions: [ '13+11+9-9' ],
  index: 131
}
{
  _id: '1 5 6 12',
  numbers: [ 1, 5, 6, 12 ],
  time: '5.8',
  solveRate: '98.5%',
  solutions: [ '12+6+5+1', '(5+1)×6-12', '(6+1-5)×12', '(12-6)×(5-1)' ],
  index: 132
}
{
  _id: '4 6 9 9',
  numbers: [ 4, 6, 9, 9 ],
  time: '5.8',
  solveRate: '96.3%',
  solutions: [ '6×4+9-9' ],
  index: 133
}
{
  _id: '4 8 10 10',
  numbers: [ 4, 8, 10, 10 ],
  time: '5.82',
  solveRate: '97.5%',
  solutions: [ '10+10+8-4', '(10-8)×10+4', '(4-10/10)×8' ],
  index: 134
}
{
  _id: '11 13 13 13',
  numbers: [ 11, 13, 13, 13 ],
  time: '5.82',
  solveRate: '97.8%',
  solutions: [ '13+13+11-13' ],
  index: 135
}
{
  _id: '3 4 11 13',
  numbers: [ 3, 4, 11, 13 ],
  time: '5.83',
  solveRate: '96.3%',
  solutions: [ '(13-11)×4×3', '(13+11)×(4-3)', '11×3+4-13', '13×3-11-4' ],
  index: 136
}
{
  _id: '4 6 6 7',
  numbers: [ 4, 6, 6, 7 ],
  time: '5.83',
  solveRate: '96.4%',
  solutions: [ '(7-6)×6×4', '(7-4)×6+6', '(7-6/6)×4' ],
  index: 137
}
{
  _id: '6 6 10 13',
  numbers: [ 6, 6, 10, 13 ],
  time: '5.83',
  solveRate: '93.9%',
  solutions: [ '6/6+13+10', '(13-10)×6+6' ],
  index: 138
}
{
  _id: '1 3 6 12',
  numbers: [ 1, 3, 6, 12 ],
  time: '5.84',
  solveRate: '96.8%',
  solutions: [
    '(12-6)×(3+1)',
    '(6-3-1)×12',
    '12×6×1/3',
    '(3-1)×6+12',
    '12/(1-3/6)'
  ],
  index: 139
}
{
  _id: '2 4 4 12',
  numbers: [ 2, 4, 4, 12 ],
  time: '5.84',
  solveRate: '98.5%',
  solutions: [ '(12-4-2)×4', '4×2+12+4', '12×4/(4-2)', '(4-4/2)×12', '12×2+4-4' ],
  index: 140
}
{
  _id: '2 4 11 11',
  numbers: [ 2, 4, 11, 11 ],
  time: '5.84',
  solveRate: '96.1%',
  solutions: [ '11+11+4-2', '4/2+11+11' ],
  index: 141
}
{
  _id: '3 6 7 7',
  numbers: [ 3, 6, 7, 7 ],
  time: '5.85',
  solveRate: '93.4%',
  solutions: [ '(7+7-6)×3', '(7/7+3)×6' ],
  index: 142
}
{
  _id: '10 11 12 12',
  numbers: [ 10, 11, 12, 12 ],
  time: '5.85',
  solveRate: '95.9%',
  solutions: [ '(12+12)×(11-10)', '(12+10)×12/11' ],
  index: 143
}
{
  _id: '1 6 12 12',
  numbers: [ 1, 6, 12, 12 ],
  time: '5.86',
  solveRate: '94.6%',
  solutions: [ '12×12×1/6', '12/(1-6/12)' ],
  index: 144
}
{
  _id: '1 11 11 12',
  numbers: [ 1, 11, 11, 12 ],
  time: '5.86',
  solveRate: '93.5%',
  solutions: [ '(11/11+1)×12' ],
  index: 145
}
{
  _id: '4 6 8 8',
  numbers: [ 4, 6, 8, 8 ],
  time: '5.86',
  solveRate: '96.8%',
  solutions: [ '6×4+8-8', '(6-4)×8+8', '(8+8)×6/4', '(8+4)×(8-6)' ],
  index: 146
}
{
  _id: '1 4 5 12',
  numbers: [ 1, 4, 5, 12 ],
  time: '5.87',
  solveRate: '95.7%',
  solutions: [ '(5+1-4)×12', '(12-5-1)×4' ],
  index: 147
}
{
  _id: '1 4 8 12',
  numbers: [ 1, 4, 8, 12 ],
  time: '5.87',
  solveRate: '97.4%',
  solutions: [ '12×8×1/4', '(8+1)×4-12', '(12+8+4)×1', '12/(1-4/8)' ],
  index: 148
}
{
  _id: '4 5 12 13',
  numbers: [ 4, 5, 12, 13 ],
  time: '5.87',
  solveRate: '97.6%',
  solutions: [ '13+12+4-5', '(13-5)×12/4', '(13+5-12)×4' ],
  index: 149
}
{
  _id: '4 6 10 11',
  numbers: [ 4, 6, 10, 11 ],
  time: '5.87',
  solveRate: '94.5%',
  solutions: [ '(11-10)×6×4' ],
  index: 150
}
{
  _id: '1 3 6 8',
  numbers: [ 1, 3, 6, 8 ],
  time: '5.88',
  solveRate: '95.4%',
  solutions: [ '(8-3-1)×6', '8×6/(3-1)', '(6-3)×8×1', '(6/3+1)×8' ],
  index: 151
}
{
  _id: '2 10 10 12',
  numbers: [ 2, 10, 10, 12 ],
  time: '5.88',
  solveRate: '97.1%',
  solutions: [ '(10+2)×(12-10)', '12×2+10-10' ],
  index: 152
}
{
  _id: '1 2 11 11',
  numbers: [ 1, 2, 11, 11 ],
  time: '5.89',
  solveRate: '97.3%',
  solutions: [ '(11+11+2)×1' ],
  index: 153
}
{
  _id: '1 3 3 12',
  numbers: [ 1, 3, 3, 12 ],
  time: '5.89',
  solveRate: '95.3%',
  solutions: [ '(3+1)×3+12', '(12-3-1)×3', '(3/3+1)×12' ],
  index: 154
}
{
  _id: '1 12 13 13',
  numbers: [ 1, 12, 13, 13 ],
  time: '5.89',
  solveRate: '94.3%',
  solutions: [ '(13/13+1)×12' ],
  index: 155
}
{
  _id: '3 6 13 13',
  numbers: [ 3, 6, 13, 13 ],
  time: '5.89',
  solveRate: '94.7%',
  solutions: [ '13+13-6/3', '(13/13+3)×6' ],
  index: 156
}
{
  _id: '3 8 10 11',
  numbers: [ 3, 8, 10, 11 ],
  time: '5.89',
  solveRate: '94.5%',
  solutions: [ '(11-10)×8×3' ],
  index: 157
}
{
  _id: '5 6 11 12',
  numbers: [ 5, 6, 11, 12 ],
  time: '5.89',
  solveRate: '97.2%',
  solutions: [ '12+11+6-5', '(11+5-12)×6', '(11-5)×6-12' ],
  index: 158
}
{
  _id: '10 10 11 13',
  numbers: [ 10, 10, 11, 13 ],
  time: '5.89',
  solveRate: '97.6%',
  solutions: [ '13+11+10-10' ],
  index: 159
}
{
  _id: '1 1 3 13',
  numbers: [ 1, 1, 3, 13 ],
  time: '5.9',
  solveRate: '95.1%',
  solutions: [ '(13-1)×(3-1)' ],
  index: 160
}
{
  _id: '1 6 7 10',
  numbers: [ 1, 6, 7, 10 ],
  time: '5.9',
  solveRate: '98.6%',
  solutions: [ '10+7+6+1', '(10+1-7)×6', '(7-1)×(10-6)' ],
  index: 161
}
{
  _id: '1 7 8 9',
  numbers: [ 1, 7, 8, 9 ],
  time: '5.9',
  solveRate: '97.1%',
  solutions: [ '(9+1-7)×8', '(9+8+7)×1' ],
  index: 162
}
{
  _id: '3 6 6 8',
  numbers: [ 3, 6, 6, 8 ],
  time: '5.9',
  solveRate: '97%',
  solutions: [ '8×3+6-6', '(8-3)×6-6' ],
  index: 163
}
{
  _id: '3 7 10 10',
  numbers: [ 3, 7, 10, 10 ],
  time: '5.9',
  solveRate: '97.3%',
  solutions: [ '10+10+7-3', '(10/10+7)×3' ],
  index: 164
}
{
  _id: '2 8 10 10',
  numbers: [ 2, 8, 10, 10 ],
  time: '5.91',
  solveRate: '95.4%',
  solutions: [ '8/2+10+10', '(10+2)×(10-8)', '(10+10-8)×2', '(10/10+2)×8' ],
  index: 165
}
{
  _id: '5 5 5 5',
  numbers: [ 5, 5, 5, 5 ],
  time: '5.91',
  solveRate: '95.3%',
  solutions: [ '5×5-5/5' ],
  index: 166
}
{
  _id: '9 10 12 12',
  numbers: [ 9, 10, 12, 12 ],
  time: '5.91',
  solveRate: '95.7%',
  solutions: [ '(12+12)×(10-9)' ],
  index: 167
}
{
  _id: '2 8 8 12',
  numbers: [ 2, 8, 8, 12 ],
  time: '5.92',
  solveRate: '97.5%',
  solutions: [ '(8-2)×(12-8)', '8/2+12+8', '12×2+8-8' ],
  index: 168
}
{
  _id: '1 2 6 6',
  numbers: [ 1, 2, 6, 6 ],
  time: '5.93',
  solveRate: '97.4%',
  solutions: [ '(2+1)×6+6', '(6+6)×2×1', '(6-2)×6×1', '(6/2+1)×6' ],
  index: 169
}
{
  _id: '4 6 10 10',
  numbers: [ 4, 6, 10, 10 ],
  time: '5.93',
  solveRate: '96.4%',
  solutions: [ '6×4+10-10', '10×4-10-6', '(10-4)×(10-6)' ],
  index: 170
}
{
  _id: '1 1 4 4',
  numbers: [ 1, 1, 4, 4 ],
  time: '5.94',
  solveRate: '94.5%',
  solutions: [ '(4+1+1)×4' ],
  index: 171
}
{
  _id: '1 7 8 10',
  numbers: [ 1, 7, 8, 10 ],
  time: '5.95',
  solveRate: '97.5%',
  solutions: [ '10+8+7-1', '(10-7)×8×1' ],
  index: 172
}
{
  _id: '4 5 5 5',
  numbers: [ 4, 5, 5, 5 ],
  time: '5.95',
  solveRate: '97.5%',
  solutions: [ '5×5+4-5', '(5/5+5)×4' ],
  index: 173
}
{
  _id: '1 2 4 4',
  numbers: [ 1, 2, 4, 4 ],
  time: '5.96',
  solveRate: '97.1%',
  solutions: [ '(4+4)×(2+1)', '(4+2)×4×1', '(4-1)×4×2' ],
  index: 174
}
{
  _id: '1 2 6 12',
  numbers: [ 1, 2, 6, 12 ],
  time: '5.96',
  solveRate: '96.7%',
  solutions: [ '12×6/(2+1)', '(6×2+12)×1', '(6/2-1)×12' ],
  index: 175
}
{
  _id: '1 2 10 12',
  numbers: [ 1, 2, 10, 12 ],
  time: '5.97',
  solveRate: '97.4%',
  solutions: [ '(12+10+2)×1' ],
  index: 176
}
{
  _id: '1 5 8 12',
  numbers: [ 1, 5, 8, 12 ],
  time: '5.97',
  solveRate: '98.1%',
  solutions: [ '(5+1)×(12-8)', '(8-5-1)×12', '12+8+5-1', '12×8/(5-1)' ],
  index: 177
}
{
  _id: '1 6 8 9',
  numbers: [ 1, 6, 8, 9 ],
  time: '5.98',
  solveRate: '98.1%',
  solutions: [ '9+8+6+1', '(9-6)×8×1', '8/(1-6/9)' ],
  index: 178
}
{
  _id: '2 2 11 13',
  numbers: [ 2, 2, 11, 13 ],
  time: '5.98',
  solveRate: '98.1%',
  solutions: [ '13+11+2-2' ],
  index: 179
}
{
  _id: '1 2 4 8',
  numbers: [ 1, 2, 4, 8 ],
  time: '5.99',
  solveRate: '96.5%',
  solutions: [ '(8+4)×2×1', '(4+1-2)×8', '(8-2)×4×1', '(4/2+1)×8' ],
  index: 180
}
{
  _id: '1 5 7 11',
  numbers: [ 1, 5, 7, 11 ],
  time: '5.99',
  solveRate: '98.5%',
  solutions: [ '11+7+5+1', '(5+1)×(11-7)', '(11+1)×(7-5)', '(7×5-11)×1' ],
  index: 181
}
{
  _id: '1 10 10 12',
  numbers: [ 1, 10, 10, 12 ],
  time: '5.99',
  solveRate: '92.3%',
  solutions: [ '(10/10+1)×12' ],
  index: 182
}
{
  _id: '3 8 12 12',
  numbers: [ 3, 8, 12, 12 ],
  time: '5.99',
  solveRate: '96.5%',
  solutions: [ '8×3+12-12', '12/3+12+8', '(12-8)×3+12' ],
  index: 183
}
{
  _id: '3 9 9 9',
  numbers: [ 3, 9, 9, 9 ],
  time: '6',
  solveRate: '97.7%',
  solutions: [ '9+9+9-3', '(9×9-9)/3', '(9-9/9)×3' ],
  index: 184
}
{
  _id: '4 8 13 13',
  numbers: [ 4, 8, 13, 13 ],
  time: '6',
  solveRate: '94.6%',
  solutions: [ '13+13-8/4', '(4-13/13)×8' ],
  index: 185
}
{
  _id: '1 1 3 4',
  numbers: [ 1, 1, 3, 4 ],
  time: '6.02',
  solveRate: '98.1%',
  solutions: [ '(1+1)×4×3' ],
  index: 186
}
{
  _id: '1 1 6 6',
  numbers: [ 1, 1, 6, 6 ],
  time: '6.03',
  solveRate: '97.1%',
  solutions: [ '(6+6)×(1+1)', '(6-1-1)×6' ],
  index: 187
}
{
  _id: '1 2 6 8',
  numbers: [ 1, 2, 6, 8 ],
  time: '6.03',
  solveRate: '95.9%',
  solutions: [ '(6-2-1)×8', '8×6×1/2', '(8+1)×2+6' ],
  index: 188
}
{
  _id: '1 3 9 12',
  numbers: [ 1, 3, 9, 12 ],
  time: '6.03',
  solveRate: '96.3%',
  solutions: [ '(3+1)×9-12', '(12-1)×3-9', '(12+9+3)×1', '(9/3-1)×12' ],
  index: 189
}
{
  _id: '4 7 12 12',
  numbers: [ 4, 7, 12, 12 ],
  time: '6.03',
  solveRate: '88.5%',
  solutions: [ '(7-4)×12-12', '(12×7+12)/4', '(7-12/12)×4' ],
  index: 190
}
{
  _id: '1 1 9 13',
  numbers: [ 1, 1, 9, 13 ],
  time: '6.04',
  solveRate: '97.2%',
  solutions: [ '13+9+1+1' ],
  index: 191
}
{
  _id: '2 11 12 12',
  numbers: [ 2, 11, 12, 12 ],
  time: '6.04',
  solveRate: '95.4%',
  solutions: [ '(12-11)×12×2', '(12/12+11)×2' ],
  index: 192
}
{
  _id: '3 4 12 12',
  numbers: [ 3, 4, 12, 12 ],
  time: '6.04',
  solveRate: '94.3%',
  solutions: [ '(12+12)×(4-3)', '(12-3)×4-12' ],
  index: 193
}
{
  _id: '3 8 11 12',
  numbers: [ 3, 8, 11, 12 ],
  time: '6.04',
  solveRate: '94.3%',
  solutions: [ '(12-11)×8×3' ],
  index: 194
}
{
  _id: '1 7 8 8',
  numbers: [ 1, 7, 8, 8 ],
  time: '6.05',
  solveRate: '96.6%',
  solutions: [ '8+8+7+1' ],
  index: 195
}
{
  _id: '2 8 13 13',
  numbers: [ 2, 8, 13, 13 ],
  time: '6.05',
  solveRate: '90.3%',
  solutions: [ '(13/13+2)×8' ],
  index: 196
}
{
  _id: '2 11 11 11',
  numbers: [ 2, 11, 11, 11 ],
  time: '6.05',
  solveRate: '90%',
  solutions: [ '(11/11+11)×2' ],
  index: 197
}
{
  _id: '3 3 4 8',
  numbers: [ 3, 3, 4, 8 ],
  time: '6.06',
  solveRate: '96.3%',
  solutions: [ '(3+3)×(8-4)', '(4-3/3)×8', '(4-3)×8×3' ],
  index: 198
}
{
  _id: '2 13 13 13',
  numbers: [ 2, 13, 13, 13 ],
  time: '6.07',
  solveRate: '91.3%',
  solutions: [ '(13-13/13)×2' ],
  index: 199
}
{
  _id: '5 6 12 13',
  numbers: [ 5, 6, 12, 13 ],
  time: '6.07',
  solveRate: '97.4%',
  solutions: [ '(13-6-5)×12', '13+12+5-6', '(12+5-13)×6' ],
  index: 200
}
{
  _id: '2 2 11 12',
  numbers: [ 2, 2, 11, 12 ],
  time: '6.08',
  solveRate: '92.4%',
  solutions: [ '2/2+12+11' ],
  index: 201
}
{
  _id: '4 7 7 8',
  numbers: [ 4, 7, 7, 8 ],
  time: '6.08',
  solveRate: '93.8%',
  solutions: [ '(7+7-8)×4', '(4-7/7)×8' ],
  index: 202
}
{
  _id: '3 3 11 13',
  numbers: [ 3, 3, 11, 13 ],
  time: '6.09',
  solveRate: '96.9%',
  solutions: [ '13+11+3-3' ],
  index: 203
}
{
  _id: '10 13 13 13',
  numbers: [ 10, 13, 13, 13 ],
  time: '6.09',
  solveRate: '93.3%',
  solutions: [ '13/13+13+10' ],
  index: 204
}
{
  _id: '1 2 3 10',
  numbers: [ 1, 2, 3, 10 ],
  time: '6.11',
  solveRate: '98.4%',
  solutions: [ '10×2+3+1', '(10-2)×3×1', '(10+3-1)×2', '(10+2)×(3-1)' ],
  index: 205
}
{
  _id: '1 4 6 8',
  numbers: [ 1, 4, 6, 8 ],
  time: '6.11',
  solveRate: '94.6%',
  solutions: [ '(6+1-4)×8', '(8-4)×6×1', '8/(1-4/6)' ],
  index: 206
}
{
  _id: '1 10 12 12',
  numbers: [ 1, 10, 12, 12 ],
  time: '6.11',
  solveRate: '95.8%',
  solutions: [ '(12-10)×12×1' ],
  index: 207
}
{
  _id: '4 4 10 13',
  numbers: [ 4, 4, 10, 13 ],
  time: '6.11',
  solveRate: '93.6%',
  solutions: [ '(4+4)×(13-10)', '4/4+13+10' ],
  index: 208
}
{
  _id: '5 5 11 13',
  numbers: [ 5, 5, 11, 13 ],
  time: '6.11',
  solveRate: '96.1%',
  solutions: [ '13+11+5-5' ],
  index: 209
}
{
  _id: '5 5 12 13',
  numbers: [ 5, 5, 12, 13 ],
  time: '6.12',
  solveRate: '95.6%',
  solutions: [ '5×5+12-13', '13+12-5/5' ],
  index: 210
}
{
  _id: '1 7 7 12',
  numbers: [ 1, 7, 7, 12 ],
  time: '6.13',
  solveRate: '88.9%',
  solutions: [ '(7/7+1)×12' ],
  index: 211
}
{
  _id: '1 4 7 8',
  numbers: [ 1, 4, 7, 8 ],
  time: '6.14',
  solveRate: '96.6%',
  solutions: [ '8×4-7-1', '(7+1)×4-8', '(7-1)×(8-4)', '(7-4)×8×1' ],
  index: 212
}
{
  _id: '1 5 7 13',
  numbers: [ 1, 5, 7, 13 ],
  time: '6.14',
  solveRate: '97.8%',
  solutions: [ '13+7+5-1', '(13-7)×(5-1)', '(13-1)×(7-5)' ],
  index: 213
}
{
  _id: '2 3 11 12',
  numbers: [ 2, 3, 11, 12 ],
  time: '6.14',
  solveRate: '94.7%',
  solutions: [ '12+11+3-2' ],
  index: 214
}
{
  _id: '3 3 3 6',
  numbers: [ 3, 3, 3, 6 ],
  time: '6.14',
  solveRate: '97.8%',
  solutions: [ '6×3+3+3', '(3+3)×3+6', '(3/3+3)×6', '(6+3)×3-3' ],
  index: 215
}
{
  _id: '7 7 12 13',
  numbers: [ 7, 7, 12, 13 ],
  time: '6.14',
  solveRate: '94.1%',
  solutions: [ '7×7-13-12', '13+12-7/7' ],
  index: 216
}
{
  _id: '10 10 11 12',
  numbers: [ 10, 10, 11, 12 ],
  time: '6.14',
  solveRate: '93.5%',
  solutions: [ '10/10+12+11' ],
  index: 217
}
{
  _id: '1 5 5 12',
  numbers: [ 1, 5, 5, 12 ],
  time: '6.15',
  solveRate: '90.6%',
  solutions: [ '(5/5+1)×12' ],
  index: 218
}
{
  _id: '1 2 13 13',
  numbers: [ 1, 2, 13, 13 ],
  time: '6.16',
  solveRate: '97.2%',
  solutions: [ '(13+13-2)×1' ],
  index: 219
}
{
  _id: '1 4 8 8',
  numbers: [ 1, 4, 8, 8 ],
  time: '6.17',
  solveRate: '96.5%',
  solutions: [ '(8-4-1)×8', '(8×4-8)×1', '(8/4+1)×8' ],
  index: 220
}
{
  _id: '2 2 4 5',
  numbers: [ 2, 2, 4, 5 ],
  time: '6.17',
  solveRate: '98.2%',
  solutions: [
    '5×4+2+2',
    '(2+2)×5+4',
    '5×4+2×2',
    '5×2×2+4',
    '(2/2+5)×4',
    '(5-2)×4×2'
  ],
  index: 221
}
{
  _id: '3 3 3 12',
  numbers: [ 3, 3, 3, 12 ],
  time: '6.17',
  solveRate: '96.8%',
  solutions: [ '(3+3)×12/3', '3×3+12+3', '(3-3/3)×12', '(12-3)×3-3' ],
  index: 222
}
{
  _id: '8 8 11 12',
  numbers: [ 8, 8, 11, 12 ],
  time: '6.17',
  solveRate: '90.5%',
  solutions: [ '8/8+12+11' ],
  index: 223
}
{
  _id: '1 2 3 8',
  numbers: [ 1, 2, 3, 8 ],
  time: '6.18',
  solveRate: '97%',
  solutions: [ '(2-1)×8×3', '(8-2)×(3+1)', '(8+3+1)×2', '8/(1-2/3)' ],
  index: 224
}
{
  _id: '1 2 3 12',
  numbers: [ 1, 2, 3, 12 ],
  time: '6.19',
  solveRate: '96.4%',
  solutions: [ '(3+1-2)×12', '(3+1)×12/2', '12/(3/2-1)' ],
  index: 225
}
{
  _id: '5 5 5 6',
  numbers: [ 5, 5, 5, 6 ],
  time: '6.19',
  solveRate: '96.1%',
  solutions: [ '5×5+5-6', '(5-5/5)×6' ],
  index: 226
}
{
  _id: '11 12 13 13',
  numbers: [ 11, 12, 13, 13 ],
  time: '6.19',
  solveRate: '95.1%',
  solutions: [ '13/13+12+11', '(13+11)×(13-12)' ],
  index: 227
}
{
  _id: '1 1 5 7',
  numbers: [ 1, 1, 5, 7 ],
  time: '6.2',
  solveRate: '96.4%',
  solutions: [ '(7+5)×(1+1)', '(7-1)×(5-1)' ],
  index: 228
}
{
  _id: '1 8 10 13',
  numbers: [ 1, 8, 10, 13 ],
  time: '6.2',
  solveRate: '94.8%',
  solutions: [ '(13-10)×8×1', '(13-1)×(10-8)' ],
  index: 229
}
{
  _id: '1 2 2 8',
  numbers: [ 1, 2, 2, 8 ],
  time: '6.21',
  solveRate: '93.3%',
  solutions: [ '(2+2-1)×8', '(2×2-1)×8' ],
  index: 230
}
{
  _id: '3 11 11 12',
  numbers: [ 3, 11, 11, 12 ],
  time: '6.21',
  solveRate: '91.5%',
  solutions: [ '(3-11/11)×12' ],
  index: 231
}
{
  _id: '1 3 11 11',
  numbers: [ 1, 3, 11, 11 ],
  time: '6.22',
  solveRate: '97.3%',
  solutions: [ '11+11+3-1' ],
  index: 232
}
{
  _id: '1 3 8 9',
  numbers: [ 1, 3, 8, 9 ],
  time: '6.23',
  solveRate: '92.2%',
  solutions: [ '9×8×1/3', '3/(9/8-1)' ],
  index: 233
}
{
  _id: '1 4 4 5',
  numbers: [ 1, 4, 4, 5 ],
  time: '6.23',
  solveRate: '97%',
  solutions: [ '(5×4+4)×1' ],
  index: 234
}
{
  _id: '2 2 2 8',
  numbers: [ 2, 2, 2, 8 ],
  time: '6.23',
  solveRate: '96.4%',
  solutions: [ '(8-2)×(2+2)', '(8+2+2)×2', '(8-2)×2×2', '(2×2+8)×2', '(2/2+2)×8' ],
  index: 235
}
{
  _id: '4 6 12 13',
  numbers: [ 4, 6, 12, 13 ],
  time: '6.23',
  solveRate: '93.7%',
  solutions: [ '(13-12)×6×4' ],
  index: 236
}
{
  _id: '7 9 11 11',
  numbers: [ 7, 9, 11, 11 ],
  time: '6.23',
  solveRate: '95.7%',
  solutions: [ '11+11+9-7' ],
  index: 237
}
{
  _id: '4 4 5 6',
  numbers: [ 4, 4, 5, 6 ],
  time: '6.24',
  solveRate: '95.8%',
  solutions: [ '(5-4/4)×6', '(5-4)×6×4' ],
  index: 238
}
{
  _id: '1 5 8 9',
  numbers: [ 1, 5, 8, 9 ],
  time: '6.25',
  solveRate: '94%',
  solutions: [ '(9-5-1)×8', '(9-1)×(8-5)', '9/(1-5/8)' ],
  index: 239
}
{
  _id: '1 4 12 12',
  numbers: [ 1, 4, 12, 12 ],
  time: '6.26',
  solveRate: '91%',
  solutions: [ '(4-1)×12-12', '(12/4-1)×12' ],
  index: 240
}
{
  _id: '1 5 10 10',
  numbers: [ 1, 5, 10, 10 ],
  time: '6.26',
  solveRate: '97.3%',
  solutions: [ '10+10+5-1' ],
  index: 241
}
{
  _id: '2 7 8 12',
  numbers: [ 2, 7, 8, 12 ],
  time: '6.26',
  solveRate: '95%',
  solutions: [ '(12-7-2)×8', '(8-7)×12×2' ],
  index: 242
}
{
  _id: '6 7 11 12',
  numbers: [ 6, 7, 11, 12 ],
  time: '6.26',
  solveRate: '96.8%',
  solutions: [ '(7+6-11)×12', '12+11+7-6', '(12-6)×(11-7)' ],
  index: 243
}
{
  _id: '1 8 8 9',
  numbers: [ 1, 8, 8, 9 ],
  time: '6.27',
  solveRate: '96.3%',
  solutions: [ '9+8+8-1' ],
  index: 244
}
{
  _id: '2 12 12 13',
  numbers: [ 2, 12, 12, 13 ],
  time: '6.27',
  solveRate: '95.7%',
  solutions: [ '(13-12)×12×2', '(13-12/12)×2' ],
  index: 245
}
{
  _id: '4 8 9 9',
  numbers: [ 4, 8, 9, 9 ],
  time: '6.27',
  solveRate: '90.7%',
  solutions: [ '(4-9/9)×8' ],
  index: 246
}
{
  _id: '8 8 8 10',
  numbers: [ 8, 8, 8, 10 ],
  time: '6.27',
  solveRate: '90.6%',
  solutions: [ '(10-8)×8+8' ],
  index: 247
}
{
  _id: '1 2 10 11',
  numbers: [ 1, 2, 10, 11 ],
  time: '6.29',
  solveRate: '97.6%',
  solutions: [ '11+10+2+1' ],
  index: 248
}
{
  _id: '2 8 11 11',
  numbers: [ 2, 8, 11, 11 ],
  time: '6.29',
  solveRate: '88.8%',
  solutions: [ '(11/11+2)×8' ],
  index: 249
}
{
  _id: '9 9 12 13',
  numbers: [ 9, 9, 12, 13 ],
  time: '6.29',
  solveRate: '94.2%',
  solutions: [ '13+12-9/9', '(13-9)×9-12' ],
  index: 250
}
{
  _id: '1 5 7 8',
  numbers: [ 1, 5, 7, 8 ],
  time: '6.31',
  solveRate: '94.8%',
  solutions: [ '(7+1-5)×8', '(7+1)×(8-5)' ],
  index: 251
}
{
  _id: '4 5 13 13',
  numbers: [ 4, 5, 13, 13 ],
  time: '6.31',
  solveRate: '87.9%',
  solutions: [ '(13/13+5)×4' ],
  index: 252
}
{
  _id: '1 2 8 8',
  numbers: [ 1, 2, 8, 8 ],
  time: '6.32',
  solveRate: '96%',
  solutions: [ '(8×2+8)×1', '(8/2-1)×8' ],
  index: 253
}
{
  _id: '2 11 13 13',
  numbers: [ 2, 11, 13, 13 ],
  time: '6.33',
  solveRate: '94.2%',
  solutions: [ '13×2+11-13', '(13-11)×13-2', '(13+13)/2+11', '(13/13+11)×2' ],
  index: 254
}
{
  _id: '3 6 7 8',
  numbers: [ 3, 6, 7, 8 ],
  time: '6.33',
  solveRate: '97.8%',
  solutions: [ '8+7+6+3', '(8+3-7)×6', '(7-6)×8×3' ],
  index: 255
}
{
  _id: '1 2 12 12',
  numbers: [ 1, 2, 12, 12 ],
  time: '6.35',
  solveRate: '95.8%',
  solutions: [ '(2+1)×12-12', '(12+12)×(2-1)' ],
  index: 256
}
{
  _id: '1 3 6 6',
  numbers: [ 1, 3, 6, 6 ],
  time: '6.35',
  solveRate: '97.2%',
  solutions: [ '(6+1-3)×6', '(6+6)×(3-1)', '(6×3+6)×1' ],
  index: 257
}
{
  _id: '1 6 7 11',
  numbers: [ 1, 6, 7, 11 ],
  time: '6.35',
  solveRate: '97.4%',
  solutions: [ '(11-7)×6×1', '(6-1)×7-11', '(11+7+6)×1' ],
  index: 258
}
{
  _id: '2 8 10 11',
  numbers: [ 2, 8, 10, 11 ],
  time: '6.35',
  solveRate: '94.8%',
  solutions: [
    '(11+2-10)×8',
    '(10-2)×(11-8)',
    '10/2+11+8',
    '11×2+10-8',
    '(10-8)×11+2'
  ],
  index: 259
}
{
  _id: '2 12 12 12',
  numbers: [ 2, 12, 12, 12 ],
  time: '6.35',
  solveRate: '98.4%',
  solutions: [ '12×2+12-12', '(12+12)/2+12' ],
  index: 260
}
{
  _id: '10 10 10 13',
  numbers: [ 10, 10, 10, 13 ],
  time: '6.35',
  solveRate: '93.1%',
  solutions: [ '10/10+13+10' ],
  index: 261
}
{
  _id: '1 3 3 7',
  numbers: [ 1, 3, 3, 7 ],
  time: '6.37',
  solveRate: '96%',
  solutions: [ '(7×3+3)×1' ],
  index: 262
}
{
  _id: '1 6 9 9',
  numbers: [ 1, 6, 9, 9 ],
  time: '6.37',
  solveRate: '97.5%',
  solutions: [ '(9-1)×(9-6)', '(9+9+6)×1' ],
  index: 263
}
{
  _id: '1 7 8 12',
  numbers: [ 1, 7, 8, 12 ],
  time: '6.37',
  solveRate: '95.6%',
  solutions: [ '(8+1-7)×12', '(7-1)×(12-8)' ],
  index: 264
}
{
  _id: '4 4 4 4',
  numbers: [ 4, 4, 4, 4 ],
  time: '6.37',
  solveRate: '97.7%',
  solutions: [ '4×4+4+4' ],
  index: 265
}
{
  _id: '4 5 9 9',
  numbers: [ 4, 5, 9, 9 ],
  time: '6.37',
  solveRate: '88.3%',
  solutions: [ '(9/9+5)×4' ],
  index: 266
}
{
  _id: '1 6 6 13',
  numbers: [ 1, 6, 6, 13 ],
  time: '6.38',
  solveRate: '97.2%',
  solutions: [ '13+6+6-1', '6×6+1-13' ],
  index: 267
}
{
  _id: '2 5 6 12',
  numbers: [ 2, 5, 6, 12 ],
  time: '6.38',
  solveRate: '95%',
  solutions: [ '12×6/(5-2)', '12×5/2-6', '(5-6/2)×12', '(6-5)×12×2', '6×5-12/2' ],
  index: 268
}
{
  _id: '3 6 10 11',
  numbers: [ 3, 6, 10, 11 ],
  time: '6.38',
  solveRate: '95.7%',
  solutions: [ '11+10+6-3', '(11+3-10)×6' ],
  index: 269
}
{
  _id: '2 6 6 12',
  numbers: [ 2, 6, 6, 12 ],
  time: '6.4',
  solveRate: '97.7%',
  solutions: [
    '(12-6-2)×6',
    '(12-6)×(6-2)',
    '12×2+6-6',
    '(6×6+12)/2',
    '(12/6+2)×6'
  ],
  index: 270
}
{
  _id: '3 7 9 9',
  numbers: [ 3, 7, 9, 9 ],
  time: '6.4',
  solveRate: '91.2%',
  solutions: [ '(9+3)×(9-7)', '(9×7+9)/3', '(9/9+7)×3' ],
  index: 271
}
{
  _id: '1 4 4 7',
  numbers: [ 1, 4, 4, 7 ],
  time: '6.41',
  solveRate: '96%',
  solutions: [ '4×4+7+1', '(7×4-4)×1' ],
  index: 272
}
{
  _id: '1 3 5 8',
  numbers: [ 1, 3, 5, 8 ],
  time: '6.42',
  solveRate: '95.2%',
  solutions: [ '(5+1-3)×8', '5×3+8+1', '(8-3)×5-1' ],
  index: 273
}
{
  _id: '2 3 11 13',
  numbers: [ 2, 3, 11, 13 ],
  time: '6.42',
  solveRate: '92%',
  solutions: [ '(13+11)×(3-2)' ],
  index: 274
}
{
  _id: '3 12 13 13',
  numbers: [ 3, 12, 13, 13 ],
  time: '6.43',
  solveRate: '91.2%',
  solutions: [ '(3-13/13)×12' ],
  index: 275
}
{
  _id: '6 6 11 12',
  numbers: [ 6, 6, 11, 12 ],
  time: '6.43',
  solveRate: '89%',
  solutions: [ '6/6+12+11' ],
  index: 276
}
{
  _id: '1 1 3 11',
  numbers: [ 1, 1, 3, 11 ],
  time: '6.44',
  solveRate: '94.2%',
  solutions: [ '(11+1)×(3-1)' ],
  index: 277
}
{
  _id: '1 3 3 5',
  numbers: [ 1, 3, 3, 5 ],
  time: '6.44',
  solveRate: '95.1%',
  solutions: [ '(5+3)×3×1', '(3+3)×(5-1)' ],
  index: 278
}
{
  _id: '1 9 12 12',
  numbers: [ 1, 9, 12, 12 ],
  time: '6.45',
  solveRate: '92.6%',
  solutions: [ '(12-9-1)×12' ],
  index: 279
}
{
  _id: '1 4 6 13',
  numbers: [ 1, 4, 6, 13 ],
  time: '6.46',
  solveRate: '97.5%',
  solutions: [ '13+6+4+1', '(13-6-1)×4', '(13-1)×(6-4)' ],
  index: 280
}
{
  _id: '6 10 10 10',
  numbers: [ 6, 10, 10, 10 ],
  time: '6.46',
  solveRate: '95.7%',
  solutions: [ '10+10+10-6' ],
  index: 281
}
{
  _id: '1 4 7 13',
  numbers: [ 1, 4, 7, 13 ],
  time: '6.47',
  solveRate: '96.6%',
  solutions: [ '(13-7)×4×1', '(13+7+4)×1' ],
  index: 282
}
{
  _id: '2 2 2 11',
  numbers: [ 2, 2, 2, 11 ],
  time: '6.47',
  solveRate: '92.2%',
  solutions: [ '(2/2+11)×2', '(11+2)×2-2' ],
  index: 283
}
{
  _id: '3 4 5 8',
  numbers: [ 3, 4, 5, 8 ],
  time: '6.47',
  solveRate: '96.1%',
  solutions: [
    '8×4-5-3',
    '(5+3)×4-8',
    '(8+3-5)×4',
    '(8+4)×(5-3)',
    '(5-4)×8×3',
    '(5+4)×8/3'
  ],
  index: 284
}
{
  _id: '3 7 11 11',
  numbers: [ 3, 7, 11, 11 ],
  time: '6.47',
  solveRate: '88%',
  solutions: [ '(11/11+7)×3' ],
  index: 285
}
{
  _id: '4 5 6 6',
  numbers: [ 4, 5, 6, 6 ],
  time: '6.47',
  solveRate: '95.3%',
  solutions: [ '(6-5)×6×4', '(6/6+5)×4' ],
  index: 286
}
{
  _id: '12 13 13 13',
  numbers: [ 12, 13, 13, 13 ],
  time: '6.47',
  solveRate: '94.5%',
  solutions: [ '13+12-13/13', '(13+13)×12/13' ],
  index: 287
}
{
  _id: '1 2 4 6',
  numbers: [ 1, 2, 4, 6 ],
  time: '6.48',
  solveRate: '95.8%',
  solutions: [ '(2-1)×6×4', '(6+2)×(4-1)' ],
  index: 288
}
{
  _id: '4 6 7 8',
  numbers: [ 4, 6, 7, 8 ],
  time: '6.48',
  solveRate: '95.8%',
  solutions: [ '(6+4-7)×8', '(8-7)×6×4' ],
  index: 289
}
{
  _id: '1 5 8 10',
  numbers: [ 1, 5, 8, 10 ],
  time: '6.49',
  solveRate: '96.4%',
  solutions: [ '10+8+5+1', '(10/5+1)×8' ],
  index: 290
}
{
  _id: '1 5 10 12',
  numbers: [ 1, 5, 10, 12 ],
  time: '6.49',
  solveRate: '92.1%',
  solutions: [ '12×10×1/5', '12/(1-5/10)' ],
  index: 291
}
{
  _id: '2 8 8 13',
  numbers: [ 2, 8, 8, 13 ],
  time: '6.5',
  solveRate: '93%',
  solutions: [ '(13-8-2)×8', '(8×2-13)×8', '(13-8/8)×2' ],
  index: 292
}
{
  _id: '3 7 13 13',
  numbers: [ 3, 7, 13, 13 ],
  time: '6.5',
  solveRate: '87.3%',
  solutions: [ '(13/13+7)×3' ],
  index: 293
}
{
  _id: '7 8 11 12',
  numbers: [ 7, 8, 11, 12 ],
  time: '6.5',
  solveRate: '96.3%',
  solutions: [ '12+11+8-7', '12×8/(11-7)' ],
  index: 294
}
{
  _id: '1 2 5 6',
  numbers: [ 1, 2, 5, 6 ],
  time: '6.51',
  solveRate: '94.6%',
  solutions: [ '(5+1-2)×6', '(5+1)×(6-2)', '(6+5+1)×2' ],
  index: 295
}
{
  _id: '1 7 7 11',
  numbers: [ 1, 7, 7, 11 ],
  time: '6.51',
  solveRate: '96.8%',
  solutions: [ '11+7+7-1', '(7-1)×(11-7)' ],
  index: 296
}
{
  _id: '2 4 5 12',
  numbers: [ 2, 4, 5, 12 ],
  time: '6.51',
  solveRate: '94.6%',
  solutions: [ '(12-4)×(5-2)', '(5-2)×4+12', '(5-4)×12×2' ],
  index: 297
}
{
  _id: '2 10 11 12',
  numbers: [ 2, 10, 11, 12 ],
  time: '6.51',
  solveRate: '96%',
  solutions: [ '11×2+12-10', '(11-10)×12×2', '(12-10)×11+2' ],
  index: 298
}
{
  _id: '3 9 9 12',
  numbers: [ 3, 9, 9, 12 ],
  time: '6.51',
  solveRate: '94.9%',
  solutions: [ '9×3+9-12', '9/3+12+9', '(3-9/9)×12', '(12-9)×9-3' ],
  index: 299
}
{
  _id: '10 11 11 13',
  numbers: [ 10, 11, 11, 13 ],
  time: '6.51',
  solveRate: '94.7%',
  solutions: [ '(13+11)×(11-10)', '11/11+13+10' ],
  index: 300
}
{
  _id: '1 3 3 9',
  numbers: [ 1, 3, 3, 9 ],
  time: '6.52',
  solveRate: '96.8%',
  solutions: [ '(9-3)×(3+1)', '(9+3)×(3-1)', '(3-1/3)×9', '(9×3-3)×1' ],
  index: 301
}
{
  _id: '1 6 8 10',
  numbers: [ 1, 6, 8, 10 ],
  time: '6.52',
  solveRate: '97.1%',
  solutions: [ '(10-6-1)×8', '(10+8+6)×1', '6/(10/8-1)' ],
  index: 302
}
{
  _id: '3 5 11 11',
  numbers: [ 3, 5, 11, 11 ],
  time: '6.52',
  solveRate: '94.6%',
  solutions: [ '11+11+5-3' ],
  index: 303
}
{
  _id: '4 6 12 12',
  numbers: [ 4, 6, 12, 12 ],
  time: '6.52',
  solveRate: '96.8%',
  solutions: [ '(12-6-4)×12', '6×4+12-12', '12×6-12×4', '(4-12/6)×12' ],
  index: 304
}
{
  _id: '5 6 6 7',
  numbers: [ 5, 6, 6, 7 ],
  time: '6.52',
  solveRate: '97.9%',
  solutions: [ '7+6+6+5', '(6+5-7)×6', '6×6-7-5', '(6+6)×(7-5)' ],
  index: 305
}
{
  _id: '1 3 13 13',
  numbers: [ 1, 3, 13, 13 ],
  time: '6.53',
  solveRate: '96.9%',
  solutions: [ '13+13+1-3' ],
  index: 306
}
{
  _id: '1 9 11 12',
  numbers: [ 1, 9, 11, 12 ],
  time: '6.54',
  solveRate: '93.7%',
  solutions: [ '(11-9)×12×1' ],
  index: 307
}
{
  _id: '4 6 11 12',
  numbers: [ 4, 6, 11, 12 ],
  time: '6.54',
  solveRate: '93%',
  solutions: [ '(12-11)×6×4' ],
  index: 308
}
{
  _id: '2 2 8 12',
  numbers: [ 2, 2, 8, 12 ],
  time: '6.55',
  solveRate: '98%',
  solutions: [
    '12+8+2+2',
    '12×8/(2+2)',
    '12×8/2/2',
    '2×2+12+8',
    '(8-2)×2+12',
    '(8/2-2)×12'
  ],
  index: 309
}
{
  _id: '3 8 9 10',
  numbers: [ 3, 8, 9, 10 ],
  time: '6.56',
  solveRate: '96.2%',
  solutions: [ '(10-9)×8×3', '10+9+8-3', '(9+3)×(10-8)' ],
  index: 310
}
{
  _id: '3 10 10 12',
  numbers: [ 3, 10, 10, 12 ],
  time: '6.56',
  solveRate: '94.2%',
  solutions: [ '12/3+10+10', '(10+10-12)×3', '(3-10/10)×12' ],
  index: 311
}
{
  _id: '1 10 11 12',
  numbers: [ 1, 10, 11, 12 ],
  time: '6.57',
  solveRate: '94.6%',
  solutions: [ '(11+1-10)×12', '(11+1)×(12-10)' ],
  index: 312
}
{
  _id: '3 3 3 3',
  numbers: [ 3, 3, 3, 3 ],
  time: '6.57',
  solveRate: '96.2%',
  solutions: [ '3×3×3-3' ],
  index: 313
}
{
  _id: '4 4 12 13',
  numbers: [ 4, 4, 12, 13 ],
  time: '6.57',
  solveRate: '92.1%',
  solutions: [ '13+12-4/4', '(13-4)×4-12' ],
  index: 314
}
{
  _id: '1 2 10 13',
  numbers: [ 1, 2, 10, 13 ],
  time: '6.58',
  solveRate: '97%',
  solutions: [ '13+10+2-1' ],
  index: 315
}
{
  _id: '2 3 4 6',
  numbers: [ 2, 3, 4, 6 ],
  time: '6.58',
  solveRate: '97.7%',
  solutions: [
    '(3-2)×6×4', '6×3+4+2',
    '(4+2)×3+6', '(6-3)×4×2',
    '(6+4-2)×3', '(4/2+6)×3',
    '6×2+4×3',   '(6×2-4)×3',
    '(6/2+3)×4'
  ],
  index: 316
}
{
  _id: '2 8 9 12',
  numbers: [ 2, 8, 9, 12 ],
  time: '6.59',
  solveRate: '94.9%',
  solutions: [ '9×8/2-12', '(9-8)×12×2', '(9-12/2)×8', '(8/12+2)×9' ],
  index: 317
}
{
  _id: '2 5 6 11',
  numbers: [ 2, 5, 6, 11 ],
  time: '6.6',
  solveRate: '96.4%',
  solutions: [ '11+6+5+2', '(11-5-2)×6', '(11-5)×(6-2)', '(11+6-5)×2' ],
  index: 318
}
{
  _id: '3 4 10 13',
  numbers: [ 3, 4, 10, 13 ],
  time: '6.6',
  solveRate: '96.5%',
  solutions: [ '13+10+4-3', '(13+3-10)×4', '10×4-13-3' ],
  index: 319
}
{
  _id: '5 6 7 7',
  numbers: [ 5, 6, 7, 7 ],
  time: '6.6',
  solveRate: '87.8%',
  solutions: [ '(5-7/7)×6' ],
  index: 320
}
{
  _id: '1 2 3 6',
  numbers: [ 1, 2, 3, 6 ],
  time: '6.62',
  solveRate: '97.1%',
  solutions: [ '(3+2-1)×6', '(6+2)×3×1', '(3-1)×6×2' ],
  index: 321
}
{
  _id: '1 2 5 5',
  numbers: [ 1, 2, 5, 5 ],
  time: '6.62',
  solveRate: '95.1%',
  solutions: [ '5×5+1-2' ],
  index: 322
}
{
  _id: '6 7 12 13',
  numbers: [ 6, 7, 12, 13 ],
  time: '6.62',
  solveRate: '95.4%',
  solutions: [ '13+12+6-7', '(13-7)×6-12' ],
  index: 323
}
{
  _id: '1 4 8 13',
  numbers: [ 1, 4, 8, 13 ],
  time: '6.63',
  solveRate: '97.4%',
  solutions: [ '13+8+4-1', '(13+1-8)×4', '(13-1)×8/4' ],
  index: 324
}
{
  _id: '2 2 5 5',
  numbers: [ 2, 2, 5, 5 ],
  time: '6.63',
  solveRate: '93.2%',
  solutions: [ '5×5-2/2', '(5+5+2)×2' ],
  index: 325
}
{
  _id: '3 6 6 7',
  numbers: [ 3, 6, 6, 7 ],
  time: '6.63',
  solveRate: '93.6%',
  solutions: [ '7×6-6×3', '(7+3-6)×6', '(6/6+7)×3' ],
  index: 326
}
{
  _id: '3 7 7 12',
  numbers: [ 3, 7, 7, 12 ],
  time: '6.63',
  solveRate: '89.9%',
  solutions: [ '(3-7/7)×12' ],
  index: 327
}
{
  _id: '1 1 6 12',
  numbers: [ 1, 1, 6, 12 ],
  time: '6.64',
  solveRate: '91.1%',
  solutions: [ '(1+1)×6+12' ],
  index: 328
}
{
  _id: '2 2 2 13',
  numbers: [ 2, 2, 2, 13 ],
  time: '6.64',
  solveRate: '93.5%',
  solutions: [ '(13-2/2)×2', '(13-2)×2+2' ],
  index: 329
}
{
  _id: '5 7 10 12',
  numbers: [ 5, 7, 10, 12 ],
  time: '6.64',
  solveRate: '96.8%',
  solutions: [ '(7+5)×(12-10)', '(7+5-10)×12', '12+10+7-5' ],
  index: 330
}
{
  _id: '1 5 6 6',
  numbers: [ 1, 5, 6, 6 ],
  time: '6.65',
  solveRate: '93.6%',
  solutions: [ '(6×5-6)×1' ],
  index: 331
}
{
  _id: '1 12 12 12',
  numbers: [ 1, 12, 12, 12 ],
  time: '6.65',
  solveRate: '93.6%',
  solutions: [ '(12/12+1)×12' ],
  index: 332
}
{
  _id: '1 1 2 7',
  numbers: [ 1, 1, 2, 7 ],
  time: '6.66',
  solveRate: '95.4%',
  solutions: [ '(7+1)×(2+1)' ],
  index: 333
}
{
  _id: '1 3 3 3',
  numbers: [ 1, 3, 3, 3 ],
  time: '6.66',
  solveRate: '95.6%',
  solutions: [ '(3+3)×(3+1)', '(3×3-1)×3' ],
  index: 334
}
{
  _id: '4 4 5 5',
  numbers: [ 4, 4, 5, 5 ],
  time: '6.66',
  solveRate: '93.2%',
  solutions: [ '5×5-4/4', '(5+5-4)×4', '(4/5+4)×5' ],
  index: 335
}
{
  _id: '4 5 11 11',
  numbers: [ 4, 5, 11, 11 ],
  time: '6.66',
  solveRate: '87.3%',
  solutions: [ '(11-4)×5-11', '(11/11+5)×4' ],
  index: 336
}
{
  _id: '6 8 10 12',
  numbers: [ 6, 8, 10, 12 ],
  time: '6.68',
  solveRate: '97.3%',
  solutions: [
    '8×6/(12-10)',
    '12+10+8-6',
    '(10+6)×12/8',
    '12×8/(10-6)',
    '(10-8)×6+12'
  ],
  index: 337
}
{
  _id: '9 9 10 13',
  numbers: [ 9, 9, 10, 13 ],
  time: '6.68',
  solveRate: '91.1%',
  solutions: [ '9/9+13+10' ],
  index: 338
}
{
  _id: '1 2 5 7',
  numbers: [ 1, 2, 5, 7 ],
  time: '6.69',
  solveRate: '95.1%',
  solutions: [ '(7+5)×2×1', '(7+1)×(5-2)', '(7-2)×5-1' ],
  index: 339
}
{
  _id: '1 6 6 10',
  numbers: [ 1, 6, 6, 10 ],
  time: '6.7',
  solveRate: '93.8%',
  solutions: [ '(10-6)×6×1' ],
  index: 340
}
{
  _id: '3 3 12 13',
  numbers: [ 3, 3, 12, 13 ],
  time: '6.71',
  solveRate: '93.4%',
  solutions: [ '13+12-3/3', '13×3-12-3' ],
  index: 341
}
{
  _id: '7 7 10 13',
  numbers: [ 7, 7, 10, 13 ],
  time: '6.71',
  solveRate: '89.6%',
  solutions: [ '7/7+13+10' ],
  index: 342
}
{
  _id: '4 5 7 7',
  numbers: [ 4, 5, 7, 7 ],
  time: '6.72',
  solveRate: '91.2%',
  solutions: [ '7×5-7-4', '(7/7+5)×4' ],
  index: 343
}
{
  _id: '5 6 13 13',
  numbers: [ 5, 6, 13, 13 ],
  time: '6.72',
  solveRate: '87.1%',
  solutions: [ '(5-13/13)×6' ],
  index: 344
}
{
  _id: '2 2 2 4',
  numbers: [ 2, 2, 2, 4 ],
  time: '6.73',
  solveRate: '95.9%',
  solutions: [ '(4+2)×(2+2)', '(2+2+2)×4', '(4+2)×2×2', '(2×2+2)×4' ],
  index: 345
}
{
  _id: '2 3 12 13',
  numbers: [ 2, 3, 12, 13 ],
  time: '6.74',
  solveRate: '95.9%',
  solutions: [ '13+12+2-3' ],
  index: 346
}
{
  _id: '2 4 4 8',
  numbers: [ 2, 4, 4, 8 ],
  time: '6.74',
  solveRate: '96.4%',
  solutions: [
    '(4+2)×(8-4)', '8×4-4×2',
    '4×4×2-8',     '(8+2-4)×4',
    '(8+4)×(4-2)', '(8+4)×4/2',
    '(8-4/2)×4',   '8×2+4+4',
    '(4+4)×2+8',   '(4/4+2)×8'
  ],
  index: 347
}
{
  _id: '2 11 11 13',
  numbers: [ 2, 11, 11, 13 ],
  time: '6.74',
  solveRate: '94.9%',
  solutions: [ '11×2+13-11', '(11+11)/2+13', '(13-11/11)×2', '(13-11)×11+2' ],
  index: 348
}
{
  _id: '4 7 7 7',
  numbers: [ 4, 7, 7, 7 ],
  time: '6.75',
  solveRate: '89%',
  solutions: [ '(7-7/7)×4' ],
  index: 349
}
{
  _id: '4 7 13 13',
  numbers: [ 4, 7, 13, 13 ],
  time: '6.75',
  solveRate: '87.9%',
  solutions: [ '(7-13/13)×4' ],
  index: 350
}
{
  _id: '4 8 8 8',
  numbers: [ 4, 8, 8, 8 ],
  time: '6.75',
  solveRate: '94.6%',
  solutions: [ '(8-4)×8-8', '8×8/4+8', '(4-8/8)×8' ],
  index: 351
}
{
  _id: '1 2 11 13',
  numbers: [ 1, 2, 11, 13 ],
  time: '6.76',
  solveRate: '93.8%',
  solutions: [ '(13+11)×(2-1)' ],
  index: 352
}
{
  _id: '3 3 5 6',
  numbers: [ 3, 3, 5, 6 ],
  time: '6.76',
  solveRate: '96.1%',
  solutions: [
    '6×5-3-3',
    '(3+3)×5-6',
    '(3×3-5)×6',
    '(5-3/3)×6',
    '(5+3)×(6-3)',
    '5×3+6+3',
    '(6+5-3)×3'
  ],
  index: 353
}
{
  _id: '3 4 5 7',
  numbers: [ 3, 4, 5, 7 ],
  time: '6.76',
  solveRate: '96.7%',
  solutions: [
    '4×3+7+5',
    '(7-5)×4×3',
    '(5+3)×(7-4)',
    '5×4+7-3',
    '(7-3)×5+4',
    '(7+5-4)×3'
  ],
  index: 354
}
{
  _id: '2 6 6 8',
  numbers: [ 2, 6, 6, 8 ],
  time: '6.77',
  solveRate: '95.5%',
  solutions: [ '(8-6)×6×2', '(6×2-8)×6', '(8+2-6)×6', '(6-6/2)×8', '(6/6+2)×8' ],
  index: 355
}
{
  _id: '5 7 11 11',
  numbers: [ 5, 7, 11, 11 ],
  time: '6.77',
  solveRate: '96%',
  solutions: [ '11+11+7-5', '(11-5)×(11-7)' ],
  index: 356
}
{
  _id: '8 9 11 12',
  numbers: [ 8, 9, 11, 12 ],
  time: '6.77',
  solveRate: '95.4%',
  solutions: [ '12+11+9-8' ],
  index: 357
}
{
  _id: '11 12 12 13',
  numbers: [ 11, 12, 12, 13 ],
  time: '6.77',
  solveRate: '96.9%',
  solutions: [ '13+12+11-12', '13×12-12×11' ],
  index: 358
}
{
  _id: '1 3 4 4',
  numbers: [ 1, 3, 4, 4 ],
  time: '6.78',
  solveRate: '93.2%',
  solutions: [ '(4+4)×3×1', '(4+3-1)×4' ],
  index: 359
}
{
  _id: '2 4 13 13',
  numbers: [ 2, 4, 13, 13 ],
  time: '6.78',
  solveRate: '95.6%',
  solutions: [ '13+13+2-4', '13+13-4/2' ],
  index: 360
}
{
  _id: '2 5 5 8',
  numbers: [ 2, 5, 5, 8 ],
  time: '6.78',
  solveRate: '88.3%',
  solutions: [ '(5/5+2)×8' ],
  index: 361
}
{
  _id: '7 9 13 13',
  numbers: [ 7, 9, 13, 13 ],
  time: '6.78',
  solveRate: '96.3%',
  solutions: [ '13+13+7-9', '(13-7)×(13-9)' ],
  index: 362
}
{
  _id: '1 1 2 9',
  numbers: [ 1, 1, 2, 9 ],
  time: '6.79',
  solveRate: '94.7%',
  solutions: [ '(9-1)×(2+1)' ],
  index: 363
}
{
  _id: '1 9 10 12',
  numbers: [ 1, 9, 10, 12 ],
  time: '6.79',
  solveRate: '93.8%',
  solutions: [ '(10+1-9)×12' ],
  index: 364
}
{
  _id: '1 3 10 11',
  numbers: [ 1, 3, 10, 11 ],
  time: '6.8',
  solveRate: '96.6%',
  solutions: [ '11×3+1-10', '(11+10+3)×1' ],
  index: 365
}
{
  _id: '4 4 4 8',
  numbers: [ 4, 4, 4, 8 ],
  time: '6.8',
  solveRate: '96.4%',
  solutions: [ '8×4-4-4', '(4+4)×4-8', '(4-4/4)×8', '(8/4+4)×4' ],
  index: 366
}
{
  _id: '6 8 11 11',
  numbers: [ 6, 8, 11, 11 ],
  time: '6.8',
  solveRate: '94.1%',
  solutions: [ '11+11+8-6' ],
  index: 367
}
{
  _id: '9 11 11 11',
  numbers: [ 9, 11, 11, 11 ],
  time: '6.8',
  solveRate: '95.3%',
  solutions: [ '11+11+11-9' ],
  index: 368
}
{
  _id: '1 6 8 11',
  numbers: [ 1, 6, 8, 11 ],
  time: '6.81',
  solveRate: '97.7%',
  solutions: [ '11+8+6-1', '(11+1-8)×6', '(11+1)×(8-6)' ],
  index: 369
}
{
  _id: '6 9 12 12',
  numbers: [ 6, 9, 12, 12 ],
  time: '6.81',
  solveRate: '89.1%',
  solutions: [ '(9-6)×12-12', '(12+6)×12/9', '12×6/(12-9)' ],
  index: 370
}
{
  _id: '1 1 3 5',
  numbers: [ 1, 1, 3, 5 ],
  time: '6.82',
  solveRate: '95.2%',
  solutions: [ '(5+1)×(3+1)' ],
  index: 371
}
{
  _id: '3 3 3 10',
  numbers: [ 3, 3, 3, 10 ],
  time: '6.82',
  solveRate: '94.3%',
  solutions: [ '10×3-3-3', '(10-3)×3+3' ],
  index: 372
}
{
  _id: '8 9 10 13',
  numbers: [ 8, 9, 10, 13 ],
  time: '6.82',
  solveRate: '95.8%',
  solutions: [ '9×8/(13-10)', '13+10+9-8' ],
  index: 373
}
{
  _id: '2 5 12 12',
  numbers: [ 2, 5, 12, 12 ],
  time: '6.83',
  solveRate: '83.4%',
  solutions: [ '(12-5×2)×12', '(5-2)×12-12', '(12-2)×12/5', '(12×5-12)/2' ],
  index: 374
}
{
  _id: '3 3 3 7',
  numbers: [ 3, 3, 3, 7 ],
  time: '6.83',
  solveRate: '92.4%',
  solutions: [ '(3+3)×(7-3)', '(3/3+7)×3' ],
  index: 375
}
{
  _id: '5 5 10 10',
  numbers: [ 5, 5, 10, 10 ],
  time: '6.83',
  solveRate: '87.2%',
  solutions: [ '5×5-10/10' ],
  index: 376
}
{
  _id: '5 6 11 11',
  numbers: [ 5, 6, 11, 11 ],
  time: '6.84',
  solveRate: '87.5%',
  solutions: [ '(5-11/11)×6' ],
  index: 377
}
{
  _id: '1 1 4 9',
  numbers: [ 1, 1, 4, 9 ],
  time: '6.85',
  solveRate: '93.4%',
  solutions: [ '(9-1)×(4-1)' ],
  index: 378
}
{
  _id: '2 8 12 12',
  numbers: [ 2, 8, 12, 12 ],
  time: '6.85',
  solveRate: '95%',
  solutions: [
    '(12-8-2)×12',
    '12×12/(8-2)',
    '(12-8)×12/2',
    '(8-12/2)×12',
    '12/(2-12/8)',
    '(12/12+2)×8'
  ],
  index: 379
}
{
  _id: '4 5 10 10',
  numbers: [ 4, 5, 10, 10 ],
  time: '6.85',
  solveRate: '91.1%',
  solutions: [ '10×10/5+4', '(10/10+5)×4' ],
  index: 380
}
{
  _id: '4 6 9 10',
  numbers: [ 4, 6, 9, 10 ],
  time: '6.85',
  solveRate: '93.5%',
  solutions: [ '(10-9)×6×4', '10×6/4+9', '10×6-9×4', '(10×9+6)/4' ],
  index: 381
}
{
  _id: '4 7 10 11',
  numbers: [ 4, 7, 10, 11 ],
  time: '6.85',
  solveRate: '97%',
  solutions: [ '11+10+7-4', '(10-4)×(11-7)', '(10+7-11)×4' ],
  index: 382
}
{
  _id: '7 8 12 13',
  numbers: [ 7, 8, 12, 13 ],
  time: '6.85',
  solveRate: '96.4%',
  solutions: [ '(8+7-13)×12', '13+12+7-8', '(13-7)×(12-8)' ],
  index: 383
}
{
  _id: '1 3 6 7',
  numbers: [ 1, 3, 6, 7 ],
  time: '6.86',
  solveRate: '96%',
  solutions: [ '(7-3)×6×1', '(7+1)×(6-3)', '6×3+7-1', '(7-1)×3+6' ],
  index: 384
}
{
  _id: '8 9 12 13',
  numbers: [ 8, 9, 12, 13 ],
  time: '6.86',
  solveRate: '96.1%',
  solutions: [ '13+12+8-9', '12×8/(13-9)' ],
  index: 385
}
{
  _id: '9 10 11 12',
  numbers: [ 9, 10, 11, 12 ],
  time: '6.86',
  solveRate: '96.1%',
  solutions: [ '12+11+10-9', '(11+9)×12/10' ],
  index: 386
}
{
  _id: '1 2 7 10',
  numbers: [ 1, 2, 7, 10 ],
  time: '6.87',
  solveRate: '91%',
  solutions: [ '(7×2+10)×1' ],
  index: 387
}
{
  _id: '1 11 12 12',
  numbers: [ 1, 11, 12, 12 ],
  time: '6.87',
  solveRate: '94.1%',
  solutions: [ '(12+1-11)×12' ],
  index: 388
}
{
  _id: '2 4 5 8',
  numbers: [ 2, 4, 5, 8 ],
  time: '6.87',
  solveRate: '94.9%',
  solutions: [
    '(8-5)×4×2',
    '(4×2-5)×8',
    '(5+2-4)×8',
    '(5-4/2)×8',
    '8×5/2+4',
    '5×4+8/2',
    '(5×4-8)×2'
  ],
  index: 389
}
{
  _id: '2 5 5 13',
  numbers: [ 2, 5, 5, 13 ],
  time: '6.87',
  solveRate: '92.2%',
  solutions: [ '(13-5)×(5-2)', '(5×5-13)×2', '(13-5/5)×2' ],
  index: 390
}
{
  _id: '4 7 8 8',
  numbers: [ 4, 7, 8, 8 ],
  time: '6.87',
  solveRate: '94.3%',
  solutions: [ '(7+4-8)×8', '8×7-8×4', '(7-8/8)×4' ],
  index: 391
}
{
  _id: '1 8 8 11',
  numbers: [ 1, 8, 8, 11 ],
  time: '6.88',
  solveRate: '93.5%',
  solutions: [ '(11-8)×8×1' ],
  index: 392
}
{
  _id: '6 8 8 8',
  numbers: [ 6, 8, 8, 8 ],
  time: '6.88',
  solveRate: '88.2%',
  solutions: [ '(8-6)×8+8' ],
  index: 393
}
{
  _id: '1 2 2 11',
  numbers: [ 1, 2, 2, 11 ],
  time: '6.89',
  solveRate: '97%',
  solutions: [ '(11+2-1)×2', '(11×2+2)×1' ],
  index: 394
}
{
  _id: '8 8 10 13',
  numbers: [ 8, 8, 10, 13 ],
  time: '6.89',
  solveRate: '90.5%',
  solutions: [ '8/8+13+10', '13×8-10×8' ],
  index: 395
}
{
  _id: '9 12 12 12',
  numbers: [ 9, 12, 12, 12 ],
  time: '6.89',
  solveRate: '82.6%',
  solutions: [ '(12-9)×12-12' ],
  index: 396
}
{
  _id: '1 7 8 11',
  numbers: [ 1, 7, 8, 11 ],
  time: '6.9',
  solveRate: '92.5%',
  solutions: [ '(7+1)×(11-8)', '(11-7-1)×8' ],
  index: 397
}
{
  _id: '1 2 6 7',
  numbers: [ 1, 2, 6, 7 ],
  time: '6.91',
  solveRate: '95.1%',
  solutions: [ '(7-2-1)×6', '(7+6-1)×2', '(7+1)×6/2', '(7-1)×(6-2)' ],
  index: 398
}
{
  _id: '2 6 7 13',
  numbers: [ 2, 6, 7, 13 ],
  time: '6.91',
  solveRate: '96.6%',
  solutions: [ '13+7+6-2', '(13-7)×(6-2)', '(13-7-2)×6', '(13+6-7)×2' ],
  index: 399
}
{
  _id: '2 6 10 12',
  numbers: [ 2, 6, 10, 12 ],
  time: '6.91',
  solveRate: '95%',
  solutions: [
    '(10-6-2)×12',
    '(12-10)×6×2',
    '(6×2-10)×12',
    '(10+2)×12/6',
    '(12+2-10)×6',
    '(10-6)×12/2',
    '(10-12/2)×6',
    '(10×6-12)/2',
    '(12/6+10)×2'
  ],
  index: 400
}
{
  _id: '1 2 11 12',
  numbers: [ 1, 2, 11, 12 ],
  time: '6.92',
  solveRate: '97%',
  solutions: [ '12+11+2-1', '2/(1-11/12)' ],
  index: 401
}
{
  _id: '2 9 9 11',
  numbers: [ 2, 9, 9, 11 ],
  time: '6.92',
  solveRate: '87.2%',
  solutions: [ '(9/9+11)×2' ],
  index: 402
}
{
  _id: '3 6 6 12',
  numbers: [ 3, 6, 6, 12 ],
  time: '6.92',
  solveRate: '95.4%',
  solutions: [
    '6×3+12-6',
    '12×6/(6-3)',
    '6×6/3+12',
    '12×3-6-6',
    '(6+6)×3-12',
    '(3-6/6)×12',
    '(12-6)×3+6',
    '(12/6+6)×3'
  ],
  index: 403
}
{
  _id: '5 5 13 13',
  numbers: [ 5, 5, 13, 13 ],
  time: '6.92',
  solveRate: '85.7%',
  solutions: [ '5×5-13/13' ],
  index: 404
}
{
  _id: '8 8 9 11',
  numbers: [ 8, 8, 9, 11 ],
  time: '6.92',
  solveRate: '89.8%',
  solutions: [ '9×8/(11-8)', '(11-9)×8+8' ],
  index: 405
}
{
  _id: '1 2 4 10',
  numbers: [ 1, 2, 4, 10 ],
  time: '6.93',
  solveRate: '96.2%',
  solutions: [ '(10-2)×(4-1)', '(10×2+4)×1', '(10/2+1)×4' ],
  index: 406
}
{
  _id: '2 2 10 13',
  numbers: [ 2, 2, 10, 13 ],
  time: '6.93',
  solveRate: '90%',
  solutions: [ '2/2+13+10' ],
  index: 407
}
{
  _id: '4 4 4 12',
  numbers: [ 4, 4, 4, 12 ],
  time: '6.93',
  solveRate: '96.5%',
  solutions: [ '12+4+4+4', '(4+4)×12/4', '4×4+12-4' ],
  index: 408
}
{
  _id: '1 1 8 8',
  numbers: [ 1, 1, 8, 8 ],
  time: '6.94',
  solveRate: '89.6%',
  solutions: [ '(1+1)×8+8' ],
  index: 409
}
{
  _id: '1 8 8 10',
  numbers: [ 1, 8, 8, 10 ],
  time: '6.94',
  solveRate: '92.5%',
  solutions: [ '(10+1-8)×8' ],
  index: 410
}
{
  _id: '3 8 8 9',
  numbers: [ 3, 8, 8, 9 ],
  time: '6.94',
  solveRate: '95.6%',
  solutions: [ '(9-8)×8×3', '(9-8/8)×3' ],
  index: 411
}
{
  _id: '5 5 11 11',
  numbers: [ 5, 5, 11, 11 ],
  time: '6.94',
  solveRate: '86.3%',
  solutions: [ '5×5-11/11' ],
  index: 412
}
{
  _id: '1 7 7 9',
  numbers: [ 1, 7, 7, 9 ],
  time: '6.95',
  solveRate: '96.3%',
  solutions: [ '9+7+7+1' ],
  index: 413
}
{
  _id: '5 5 6 6',
  numbers: [ 5, 5, 6, 6 ],
  time: '6.95',
  solveRate: '93.2%',
  solutions: [ '(5+5-6)×6', '5×5-6/6', '(6-6/5)×5' ],
  index: 414
}
{
  _id: '5 5 10 13',
  numbers: [ 5, 5, 10, 13 ],
  time: '6.95',
  solveRate: '89.9%',
  solutions: [ '5/5+13+10', '(5-13/5)×10' ],
  index: 415
}
{
  _id: '8 8 12 13',
  numbers: [ 8, 8, 12, 13 ],
  time: '6.95',
  solveRate: '92.1%',
  solutions: [ '13+12-8/8' ],
  index: 416
}
{
  _id: '1 6 8 8',
  numbers: [ 1, 6, 8, 8 ],
  time: '6.96',
  solveRate: '93%',
  solutions: [ '(8+1-6)×8', '8/(8/6-1)' ],
  index: 417
}
{
  _id: '2 2 12 13',
  numbers: [ 2, 2, 12, 13 ],
  time: '6.96',
  solveRate: '92.2%',
  solutions: [ '13+12-2/2' ],
  index: 418
}
{
  _id: '11 11 12 13',
  numbers: [ 11, 11, 12, 13 ],
  time: '6.96',
  solveRate: '94.9%',
  solutions: [ '13+12-11/11', '(13+11)×(12-11)' ],
  index: 419
}
{
  _id: '6 7 10 13',
  numbers: [ 6, 7, 10, 13 ],
  time: '6.97',
  solveRate: '96.5%',
  solutions: [ '13+10+7-6', '(13-7)×(10-6)', '(10+7-13)×6' ],
  index: 420
}
{
  _id: '2 3 5 5',
  numbers: [ 2, 3, 5, 5 ],
  time: '6.98',
  solveRate: '96.3%',
  solutions: [ '5×5+2-3', '(5+5-2)×3', '(5+3)×(5-2)' ],
  index: 421
}
{
  _id: '3 5 5 6',
  numbers: [ 3, 5, 5, 6 ],
  time: '6.98',
  solveRate: '89.3%',
  solutions: [ '(5+5)×3-6', '(5/5+3)×6' ],
  index: 422
}
{
  _id: '3 6 9 9',
  numbers: [ 3, 6, 9, 9 ],
  time: '6.98',
  solveRate: '93.9%',
  solutions: [ '9×3+6-9', '(9-6)×9-3', '(9/9+3)×6' ],
  index: 423
}
{
  _id: '1 3 7 13',
  numbers: [ 1, 3, 7, 13 ],
  time: '6.99',
  solveRate: '96.7%',
  solutions: [ '13+7+3+1', '(13-7)×(3+1)' ],
  index: 424
}
{
  _id: '4 8 11 12',
  numbers: [ 4, 8, 11, 12 ],
  time: '6.99',
  solveRate: '93%',
  solutions: [ '(11+4-12)×8', '11×4-12-8', '(12-4)×(11-8)', '(11-8)×4+12' ],
  index: 425
}
{
  _id: '5 6 9 9',
  numbers: [ 5, 6, 9, 9 ],
  time: '6.99',
  solveRate: '90.8%',
  solutions: [ '(9-6)×5+9', '(5-9/9)×6' ],
  index: 426
}
{
  _id: '1 3 5 13',
  numbers: [ 1, 3, 5, 13 ],
  time: '7',
  solveRate: '94.3%',
  solutions: [ '(13-5)×3×1', '(13-1)×(5-3)' ],
  index: 427
}
{
  _id: '2 9 9 13',
  numbers: [ 2, 9, 9, 13 ],
  time: '7',
  solveRate: '88.8%',
  solutions: [ '(13-9/9)×2' ],
  index: 428
}
{
  _id: '3 7 12 13',
  numbers: [ 3, 7, 12, 13 ],
  time: '7',
  solveRate: '93.9%',
  solutions: [ '(13-7)×12/3', '12/3+13+7', '(13+7-12)×3' ],
  index: 429
}
{
  _id: '8 10 11 11',
  numbers: [ 8, 10, 11, 11 ],
  time: '7',
  solveRate: '94.8%',
  solutions: [ '11+11+10-8' ],
  index: 430
}
{
  _id: '2 3 3 13',
  numbers: [ 2, 3, 3, 13 ],
  time: '7.02',
  solveRate: '94%',
  solutions: [ '(13-3-2)×3', '(13+3)×3/2', '3×3+13+2', '(13-3/3)×2' ],
  index: 431
}
{
  _id: '3 3 4 4',
  numbers: [ 3, 3, 4, 4 ],
  time: '7.02',
  solveRate: '94.4%',
  solutions: [ '4×3+4×3', '(4×3-4)×3' ],
  index: 432
}
{
  _id: '1 7 10 12',
  numbers: [ 1, 7, 10, 12 ],
  time: '7.03',
  solveRate: '92.8%',
  solutions: [ '(10-7-1)×12', '10/(1-7/12)' ],
  index: 433
}
{
  _id: '2 6 7 12',
  numbers: [ 2, 6, 7, 12 ],
  time: '7.03',
  solveRate: '92%',
  solutions: [ '(7-6)×12×2' ],
  index: 434
}
{
  _id: '2 6 10 10',
  numbers: [ 2, 6, 10, 10 ],
  time: '7.04',
  solveRate: '95.7%',
  solutions: [ '10+10+6-2', '10×2+10-6' ],
  index: 435
}
{
  _id: '7 8 8 9',
  numbers: [ 7, 8, 8, 9 ],
  time: '7.04',
  solveRate: '87%',
  solutions: [ '(9-7)×8+8' ],
  index: 436
}
{
  _id: '10 10 12 13',
  numbers: [ 10, 10, 12, 13 ],
  time: '7.04',
  solveRate: '92.3%',
  solutions: [ '13+12-10/10' ],
  index: 437
}
{
  _id: '1 2 3 5',
  numbers: [ 1, 2, 3, 5 ],
  time: '7.05',
  solveRate: '95.5%',
  solutions: [ '(5+3)×(2+1)', '(5+2+1)×3', '(5-1)×3×2', '(3+2)×5-1' ],
  index: 438
}
{
  _id: '1 10 12 13',
  numbers: [ 1, 10, 12, 13 ],
  time: '7.05',
  solveRate: '94.2%',
  solutions: [ '(13-10-1)×12', '(13-1)×(12-10)' ],
  index: 439
}
{
  _id: '1 3 7 8',
  numbers: [ 1, 3, 7, 8 ],
  time: '7.06',
  solveRate: '89.4%',
  solutions: [ '(7-3-1)×8', '3/(1-7/8)' ],
  index: 440
}
{
  _id: '1 3 10 12',
  numbers: [ 1, 3, 10, 12 ],
  time: '7.06',
  solveRate: '96.4%',
  solutions: [ '12+10+3-1' ],
  index: 441
}
{
  _id: '2 2 7 13',
  numbers: [ 2, 2, 7, 13 ],
  time: '7.06',
  solveRate: '96.2%',
  solutions: [ '13+7+2+2', '(13-7)×(2+2)', '2×2+13+7', '(13-7)×2×2' ],
  index: 442
}
{
  _id: '2 5 9 12',
  numbers: [ 2, 5, 9, 12 ],
  time: '7.06',
  solveRate: '95.5%',
  solutions: [ '(9-5-2)×12', '12+9+5-2', '12/(5-9/2)', '(9-5)×12/2' ],
  index: 443
}
{
  _id: '1 3 9 11',
  numbers: [ 1, 3, 9, 11 ],
  time: '7.07',
  solveRate: '95.1%',
  solutions: [ '11+9+3+1', '(11×3-9)×1', '(11/3-1)×9' ],
  index: 444
}
{
  _id: '4 7 12 13',
  numbers: [ 4, 7, 12, 13 ],
  time: '7.07',
  solveRate: '92.4%',
  solutions: [ '(13-7-4)×12', '(12+7-13)×4' ],
  index: 445
}
{
  _id: '6 6 6 11',
  numbers: [ 6, 6, 6, 11 ],
  time: '7.07',
  solveRate: '88.8%',
  solutions: [ '(11-6)×6-6' ],
  index: 446
}
{
  _id: '1 2 2 13',
  numbers: [ 1, 2, 2, 13 ],
  time: '7.08',
  solveRate: '96.4%',
  solutions: [ '(13+1-2)×2', '(13×2-2)×1' ],
  index: 447
}
{
  _id: '1 5 6 9',
  numbers: [ 1, 5, 6, 9 ],
  time: '7.08',
  solveRate: '92%',
  solutions: [ '(9-5)×6×1' ],
  index: 448
}
{
  _id: '3 4 11 12',
  numbers: [ 3, 4, 11, 12 ],
  time: '7.08',
  solveRate: '95.1%',
  solutions: [ '12+11+4-3', '(11-3)×12/4', '(11-12/4)×3' ],
  index: 449
}
{
  _id: '4 6 6 8',
  numbers: [ 4, 6, 6, 8 ],
  time: '7.08',
  solveRate: '97.3%',
  solutions: [
    '8+6+6+4',
    '8×6-6×4',
    '8×6/(6-4)',
    '6×6-8-4',
    '(6+6)×8/4',
    '(6-8/4)×6',
    '(4-6/6)×8'
  ],
  index: 450
}
{
  _id: '2 8 8 8',
  numbers: [ 2, 8, 8, 8 ],
  time: '7.09',
  solveRate: '93.8%',
  solutions: [ '8×8/2-8', '(8+8)×2-8', '(8/8+2)×8' ],
  index: 451
}
{
  _id: '3 7 11 12',
  numbers: [ 3, 7, 11, 12 ],
  time: '7.09',
  solveRate: '90.6%',
  solutions: [ '(11+3)×12/7', '(12+7-11)×3', '(11-7)×3+12' ],
  index: 452
}
{
  _id: '1 3 4 11',
  numbers: [ 1, 3, 4, 11 ],
  time: '7.11',
  solveRate: '96%',
  solutions: [ '(11+1-4)×3', '(11-3)×(4-1)', '4×3+11+1' ],
  index: 453
}
{
  _id: '1 5 9 9',
  numbers: [ 1, 5, 9, 9 ],
  time: '7.11',
  solveRate: '94.3%',
  solutions: [ '9+9+5+1' ],
  index: 454
}
{
  _id: '1 12 12 13',
  numbers: [ 1, 12, 12, 13 ],
  time: '7.11',
  solveRate: '94.1%',
  solutions: [ '(13+1-12)×12' ],
  index: 455
}
{
  _id: '2 9 10 12',
  numbers: [ 2, 9, 10, 12 ],
  time: '7.11',
  solveRate: '93.9%',
  solutions: [ '(10-2)×(12-9)', '(10-9)×12×2' ],
  index: 456
}
{
  _id: '3 5 13 13',
  numbers: [ 3, 5, 13, 13 ],
  time: '7.13',
  solveRate: '94.4%',
  solutions: [ '13+13+3-5' ],
  index: 457
}
{
  _id: '3 6 11 12',
  numbers: [ 3, 6, 11, 12 ],
  time: '7.13',
  solveRate: '93.4%',
  solutions: [ '(11-6-3)×12', '(12+3-11)×6' ],
  index: 458
}
{
  _id: '3 8 8 12',
  numbers: [ 3, 8, 8, 12 ],
  time: '7.13',
  solveRate: '91.6%',
  solutions: [ '12×8/3-8', '(3-8/8)×12' ],
  index: 459
}
{
  _id: '6 6 12 13',
  numbers: [ 6, 6, 12, 13 ],
  time: '7.13',
  solveRate: '90.4%',
  solutions: [ '13+12-6/6' ],
  index: 460
}
{
  _id: '5 9 10 10',
  numbers: [ 5, 9, 10, 10 ],
  time: '7.14',
  solveRate: '92.8%',
  solutions: [ '10+10+9-5' ],
  index: 461
}
{
  _id: '2 6 7 9',
  numbers: [ 2, 6, 7, 9 ],
  time: '7.15',
  solveRate: '96.2%',
  solutions: [ '9+7+6+2', '(9-7)×6×2', '(9+2-7)×6', '7×6-9×2' ],
  index: 462
}
{
  _id: '2 7 7 13',
  numbers: [ 2, 7, 7, 13 ],
  time: '7.15',
  solveRate: '86%',
  solutions: [ '(13-7/7)×2' ],
  index: 463
}
{
  _id: '3 4 5 12',
  numbers: [ 3, 4, 5, 12 ],
  time: '7.15',
  solveRate: '97%',
  solutions: [
    '12+5+4+3',
    '(4+3-5)×12',
    '(5+3)×12/4',
    '12×4/(5-3)',
    '12×5/3+4',
    '5×4+12/3',
    '(5×4-12)×3',
    '(12/4+5)×3'
  ],
  index: 464
}
{
  _id: '5 6 11 13',
  numbers: [ 5, 6, 11, 13 ],
  time: '7.15',
  solveRate: '91.8%',
  solutions: [ '(13+11)×(6-5)', '(13-6)×5-11' ],
  index: 465
}
{
  _id: '4 5 11 13',
  numbers: [ 4, 5, 11, 13 ],
  time: '7.16',
  solveRate: '90.3%',
  solutions: [ '(13+11)×(5-4)' ],
  index: 466
}
{
  _id: '5 8 8 10',
  numbers: [ 5, 8, 8, 10 ],
  time: '7.16',
  solveRate: '91.5%',
  solutions: [ '(8+5-10)×8', '10×8/5+8' ],
  index: 467
}
{
  _id: '2 7 8 13',
  numbers: [ 2, 7, 8, 13 ],
  time: '7.17',
  solveRate: '94.1%',
  solutions: [ '(13-7)×8/2', '8/2+13+7', '(13+7-8)×2' ],
  index: 468
}
{
  _id: '3 4 8 10',
  numbers: [ 3, 4, 8, 10 ],
  time: '7.17',
  solveRate: '93.4%',
  solutions: [ '(10-4-3)×8', '(10-8)×4×3', '(10+8)×4/3', '(10-8/4)×3' ],
  index: 469
}
{
  _id: '3 7 7 9',
  numbers: [ 3, 7, 7, 9 ],
  time: '7.17',
  solveRate: '86.9%',
  solutions: [ '(9-7/7)×3' ],
  index: 470
}
{
  _id: '3 9 10 11',
  numbers: [ 3, 9, 10, 11 ],
  time: '7.17',
  solveRate: '93.1%',
  solutions: [ '9/3+11+10', '(10+9-11)×3' ],
  index: 471
}
{
  _id: '4 8 10 12',
  numbers: [ 4, 8, 10, 12 ],
  time: '7.17',
  solveRate: '95.8%',
  solutions: [
    '(8+4)×(12-10)',
    '(8+4-10)×12',
    '8/4+12+10',
    '(10-4)×(12-8)',
    '12×4/(10-8)',
    '(10+8-12)×4'
  ],
  index: 472
}
{
  _id: '1 3 4 5',
  numbers: [ 1, 3, 4, 5 ],
  time: '7.18',
  solveRate: '97.6%',
  solutions: [ '5×4+3+1', '(3+1)×5+4', '(5+4-1)×3', '(5+3)×(4-1)' ],
  index: 473
}
{
  _id: '1 6 6 9',
  numbers: [ 1, 6, 6, 9 ],
  time: '7.18',
  solveRate: '90.4%',
  solutions: [ '(9+1-6)×6' ],
  index: 474
}
{
  _id: '5 5 7 8',
  numbers: [ 5, 5, 7, 8 ],
  time: '7.19',
  solveRate: '92.5%',
  solutions: [ '(5+5-7)×8', '5×5+7-8' ],
  index: 475
}
{
  _id: '7 9 10 12',
  numbers: [ 7, 9, 10, 12 ],
  time: '7.19',
  solveRate: '94.1%',
  solutions: [ '12+10+9-7' ],
  index: 476
}
{
  _id: '1 7 9 13',
  numbers: [ 1, 7, 9, 13 ],
  time: '7.2',
  solveRate: '93.8%',
  solutions: [ '(7-1)×(13-9)', '(13-1)×(9-7)' ],
  index: 477
}
{
  _id: '1 8 11 12',
  numbers: [ 1, 8, 11, 12 ],
  time: '7.2',
  solveRate: '91.6%',
  solutions: [ '(11-8-1)×12' ],
  index: 478
}
{
  _id: '4 7 11 11',
  numbers: [ 4, 7, 11, 11 ],
  time: '7.2',
  solveRate: '86.5%',
  solutions: [ '(7-11/11)×4' ],
  index: 479
}
{
  _id: '1 8 9 11',
  numbers: [ 1, 8, 9, 11 ],
  time: '7.21',
  solveRate: '92.8%',
  solutions: [ '(11+1-9)×8', '(9-1)×(11-8)', '9/(11/8-1)' ],
  index: 480
}
{
  _id: '2 4 10 12',
  numbers: [ 2, 4, 10, 12 ],
  time: '7.21',
  solveRate: '96.6%',
  solutions: [
    '(10-4×2)×12',
    '12+10+4-2',
    '4/2+12+10',
    '(10-2)×12/4',
    '(10-4)×2+12',
    '12/(10/4-2)'
  ],
  index: 481
}
{
  _id: '5 10 11 11',
  numbers: [ 5, 10, 11, 11 ],
  time: '7.21',
  solveRate: '90.5%',
  solutions: [ '10/5+11+11' ],
  index: 482
}
{
  _id: '10 12 12 13',
  numbers: [ 10, 12, 12, 13 ],
  time: '7.21',
  solveRate: '90.2%',
  solutions: [ '12/12+13+10', '(13-10)×12-12' ],
  index: 483
}
{
  _id: '1 6 8 13',
  numbers: [ 1, 6, 8, 13 ],
  time: '7.22',
  solveRate: '94.3%',
  solutions: [ '(13-8-1)×6', '(13-1)×(8-6)' ],
  index: 484
}
{
  _id: '3 3 4 5',
  numbers: [ 3, 3, 4, 5 ],
  time: '7.22',
  solveRate: '94.1%',
  solutions: [ '(3/3+5)×4', '(5-3)×4×3', '(5+4)×3-3' ],
  index: 485
}
{
  _id: '5 5 9 9',
  numbers: [ 5, 5, 9, 9 ],
  time: '7.22',
  solveRate: '85.5%',
  solutions: [ '5×5-9/9' ],
  index: 486
}
{
  _id: '10 11 11 12',
  numbers: [ 10, 11, 11, 12 ],
  time: '7.23',
  solveRate: '96.8%',
  solutions: [ '12+11+11-10' ],
  index: 487
}
{
  _id: '1 1 6 8',
  numbers: [ 1, 1, 6, 8 ],
  time: '7.24',
  solveRate: '94.8%',
  solutions: [ '8×6/(1+1)' ],
  index: 488
}
{
  _id: '3 3 9 9',
  numbers: [ 3, 3, 9, 9 ],
  time: '7.24',
  solveRate: '95.8%',
  solutions: [ '9+9+3+3', '9×3-9/3', '(3-3/9)×9', '9×9/3-3' ],
  index: 489
}
{
  _id: '4 5 5 8',
  numbers: [ 4, 5, 5, 8 ],
  time: '7.24',
  solveRate: '88.2%',
  solutions: [ '(4-5/5)×8' ],
  index: 490
}
{
  _id: '7 10 12 12',
  numbers: [ 7, 10, 12, 12 ],
  time: '7.24',
  solveRate: '84.9%',
  solutions: [ '(10-7)×12-12', '12×10/(12-7)' ],
  index: 491
}
{
  _id: '2 5 6 8',
  numbers: [ 2, 5, 6, 8 ],
  time: '7.26',
  solveRate: '95.6%',
  solutions: [ '5×2+8+6', '(6+2-5)×8', '(6+2)×(8-5)', '6×5+2-8', '(8-2)×5-6' ],
  index: 492
}
{
  _id: '3 5 5 12',
  numbers: [ 3, 5, 5, 12 ],
  time: '7.26',
  solveRate: '89.1%',
  solutions: [ '(3-5/5)×12' ],
  index: 493
}
{
  _id: '5 8 12 12',
  numbers: [ 5, 8, 12, 12 ],
  time: '7.26',
  solveRate: '76%',
  solutions: [ '(8-5)×12-12' ],
  index: 494
}
{
  _id: '1 11 12 13',
  numbers: [ 1, 11, 12, 13 ],
  time: '7.27',
  solveRate: '93.9%',
  solutions: [ '(13-11)×12×1' ],
  index: 495
}
{
  _id: '2 2 3 9',
  numbers: [ 2, 2, 3, 9 ],
  time: '7.27',
  solveRate: '94.5%',
  solutions: [ '(9-3)×(2+2)', '(9-3)×2×2', '(9-2/2)×3', '9×2+3×2', '(2/3+2)×9' ],
  index: 496
}
{
  _id: '3 6 6 6',
  numbers: [ 3, 6, 6, 6 ],
  time: '7.27',
  solveRate: '94.5%',
  solutions: [ '(6-3)×6+6', '(6+6)×6/3', '(6-6/3)×6', '(6/6+3)×6' ],
  index: 497
}
{
  _id: '6 8 13 13',
  numbers: [ 6, 8, 13, 13 ],
  time: '7.27',
  solveRate: '93.3%',
  solutions: [ '13+13+6-8' ],
  index: 498
}
{
  _id: '1 8 9 13',
  numbers: [ 1, 8, 9, 13 ],
  time: '7.28',
  solveRate: '91.5%',
  solutions: [ '(13-9-1)×8' ],
  index: 499
}
{
  _id: '2 3 3 11',
  numbers: [ 2, 3, 3, 11 ],
  time: '7.29',
  solveRate: '89.3%',
  solutions: [ '(11-2)×3-3', '(3/3+11)×2' ],
  index: 500
}
{
  _id: '4 4 4 7',
  numbers: [ 4, 4, 4, 7 ],
  time: '7.29',
  solveRate: '91.3%',
  solutions: [ '(4+4)×(7-4)', '(7-4/4)×4' ],
  index: 501
}
{
  _id: '7 10 10 11',
  numbers: [ 7, 10, 10, 11 ],
  time: '7.29',
  solveRate: '93.5%',
  solutions: [ '11+10+10-7' ],
  index: 502
}
{
  _id: '5 5 10 11',
  numbers: [ 5, 5, 10, 11 ],
  time: '7.3',
  solveRate: '87.8%',
  solutions: [ '5×5+10-11' ],
  index: 503
}
{
  _id: '5 6 8 8',
  numbers: [ 5, 6, 8, 8 ],
  time: '7.3',
  solveRate: '92.1%',
  solutions: [ '(6+5-8)×8', '(5-8/8)×6' ],
  index: 504
}
{
  _id: '3 5 10 12',
  numbers: [ 3, 5, 10, 12 ],
  time: '7.31',
  solveRate: '94.9%',
  solutions: [ '(10-5-3)×12', '12+10+5-3' ],
  index: 505
}
{
  _id: '2 3 7 12',
  numbers: [ 2, 3, 7, 12 ],
  time: '7.32',
  solveRate: '94.8%',
  solutions: [ '12+7+3+2', '(7-3-2)×12', '12/(7/2-3)', '(7-3)×12/2' ],
  index: 506
}
{
  _id: '3 5 6 8',
  numbers: [ 3, 5, 6, 8 ],
  time: '7.32',
  solveRate: '93.4%',
  solutions: [ '8×6/(5-3)', '(5-6/3)×8', '(6-5)×8×3' ],
  index: 507
}
{
  _id: '3 9 11 11',
  numbers: [ 3, 9, 11, 11 ],
  time: '7.32',
  solveRate: '86%',
  solutions: [ '(3-9/11)×11', '(9-11/11)×3' ],
  index: 508
}
{
  _id: '3 9 13 13',
  numbers: [ 3, 9, 13, 13 ],
  time: '7.32',
  solveRate: '86.5%',
  solutions: [ '(9-13/13)×3' ],
  index: 509
}
{
  _id: '8 8 8 12',
  numbers: [ 8, 8, 8, 12 ],
  time: '7.32',
  solveRate: '88.5%',
  solutions: [ '(8+8)×12/8', '(12-8)×8-8' ],
  index: 510
}
{
  _id: '6 6 6 9',
  numbers: [ 6, 6, 6, 9 ],
  time: '7.33',
  solveRate: '89.4%',
  solutions: [ '6×6×6/9', '(9-6)×6+6' ],
  index: 511
}
{
  _id: '3 6 8 8',
  numbers: [ 3, 6, 8, 8 ],
  time: '7.34',
  solveRate: '92.8%',
  solutions: [ '8×6/3+8', '8×6-8×3', '(8/8+3)×6' ],
  index: 512
}
{
  _id: '4 4 5 8',
  numbers: [ 4, 4, 5, 8 ],
  time: '7.34',
  solveRate: '96%',
  solutions: [ '(4+4)×(8-5)', '(4+4-5)×8', '8×5-4×4', '5×4+8-4', '(8-4)×5+4' ],
  index: 513
}
{
  _id: '1 4 4 4',
  numbers: [ 1, 4, 4, 4 ],
  time: '7.35',
  solveRate: '95.7%',
  solutions: [ '(4+1)×4+4', '(4+4)×(4-1)' ],
  index: 514
}
{
  _id: '2 4 8 10',
  numbers: [ 2, 4, 8, 10 ],
  time: '7.36',
  solveRate: '97.7%',
  solutions: [
    '10+8+4+2',   '10×4-8×2',
    '(8×2-10)×4', '(10-4)×8/2',
    '(10-8/2)×4', '(10+2)×8/4',
    '10×2+8-4',   '8×4+2-10',
    '(10-2)×4-8', '(8/4+10)×2',
    '(10×4+8)/2'
  ],
  index: 515
}
{
  _id: '2 6 6 13',
  numbers: [ 2, 6, 6, 13 ],
  time: '7.38',
  solveRate: '85.2%',
  solutions: [ '(13-6/6)×2' ],
  index: 516
}
{
  _id: '2 6 9 11',
  numbers: [ 2, 6, 9, 11 ],
  time: '7.38',
  solveRate: '95.5%',
  solutions: [ '(11-9)×6×2', '11+9+6-2', '11×6/2-9', '(11+2-9)×6' ],
  index: 517
}
{
  _id: '2 10 10 11',
  numbers: [ 2, 10, 10, 11 ],
  time: '7.38',
  solveRate: '85.3%',
  solutions: [ '(10/10+11)×2' ],
  index: 518
}
{
  _id: '4 8 12 13',
  numbers: [ 4, 8, 12, 13 ],
  time: '7.38',
  solveRate: '92%',
  solutions: [ '(12+4-13)×8', '12/4+13+8' ],
  index: 519
}
{
  _id: '1 5 5 6',
  numbers: [ 1, 5, 5, 6 ],
  time: '7.39',
  solveRate: '94.9%',
  solutions: [ '6×5-5-1', '(5+1)×5-6' ],
  index: 520
}
{
  _id: '2 2 4 7',
  numbers: [ 2, 2, 4, 7 ],
  time: '7.39',
  solveRate: '95.3%',
  solutions: [
    '7×4-2-2',
    '(2+2)×7-4',
    '7×4-2×2',
    '7×2×2-4',
    '(7-2/2)×4',
    '(7+4)×2+2'
  ],
  index: 521
}
{
  _id: '2 6 6 6',
  numbers: [ 2, 6, 6, 6 ],
  time: '7.39',
  solveRate: '96%',
  solutions: [ '6×2+6+6', '6×6-6×2', '6×6/2+6' ],
  index: 522
}
{
  _id: '5 7 13 13',
  numbers: [ 5, 7, 13, 13 ],
  time: '7.39',
  solveRate: '94.2%',
  solutions: [ '13+13+5-7' ],
  index: 523
}
{
  _id: '1 2 3 9',
  numbers: [ 1, 2, 3, 9 ],
  time: '7.4',
  solveRate: '96.3%',
  solutions: [ '9×3-2-1', '(2+1)×9-3', '(9+3)×2×1', '(9+1-2)×3' ],
  index: 524
}
{
  _id: '3 3 5 5',
  numbers: [ 3, 3, 5, 5 ],
  time: '7.4',
  solveRate: '89.5%',
  solutions: [ '5×5-3/3' ],
  index: 525
}
{
  _id: '4 4 7 9',
  numbers: [ 4, 4, 7, 9 ],
  time: '7.4',
  solveRate: '93.3%',
  solutions: [ '9+7+4+4', '(9+4-7)×4' ],
  index: 526
}
{
  _id: '9 10 10 13',
  numbers: [ 9, 10, 10, 13 ],
  time: '7.4',
  solveRate: '95.1%',
  solutions: [ '13+10+10-9' ],
  index: 527
}
{
  _id: '1 7 9 9',
  numbers: [ 1, 7, 9, 9 ],
  time: '7.41',
  solveRate: '94.6%',
  solutions: [ '9+9+7-1' ],
  index: 528
}
{
  _id: '3 3 10 13',
  numbers: [ 3, 3, 10, 13 ],
  time: '7.41',
  solveRate: '89.4%',
  solutions: [ '3/3+13+10' ],
  index: 529
}
{
  _id: '3 7 9 10',
  numbers: [ 3, 7, 9, 10 ],
  time: '7.41',
  solveRate: '92.1%',
  solutions: [ '9×3+7-10', '(10+7-9)×3', '(10-7)×9-3' ],
  index: 530
}
{
  _id: '1 4 5 5',
  numbers: [ 1, 4, 5, 5 ],
  time: '7.42',
  solveRate: '95.9%',
  solutions: [ '5×4+5-1', '(5-1)×5+4' ],
  index: 531
}
{
  _id: '2 2 6 6',
  numbers: [ 2, 2, 6, 6 ],
  time: '7.42',
  solveRate: '95.8%',
  solutions: [ '(6+2)×6/2', '6×2+6×2' ],
  index: 532
}
{
  _id: '3 5 5 7',
  numbers: [ 3, 5, 5, 7 ],
  time: '7.42',
  solveRate: '89.9%',
  solutions: [ '(7+5)×(5-3)', '(5/5+7)×3' ],
  index: 533
}
{
  _id: '5 10 13 13',
  numbers: [ 5, 10, 13, 13 ],
  time: '7.42',
  solveRate: '92.6%',
  solutions: [ '10×5-13-13', '13+13-10/5', '(13-5)×(13-10)' ],
  index: 534
}
{
  _id: '1 2 3 7',
  numbers: [ 1, 2, 3, 7 ],
  time: '7.43',
  solveRate: '96.1%',
  solutions: [ '7×3+2+1', '(2+1)×7+3', '(7+2-1)×3' ],
  index: 535
}
{
  _id: '3 4 4 7',
  numbers: [ 3, 4, 4, 7 ],
  time: '7.44',
  solveRate: '90.4%',
  solutions: [ '(7+3-4)×4', '(4/4+7)×3' ],
  index: 536
}
{
  _id: '3 5 6 12',
  numbers: [ 3, 5, 6, 12 ],
  time: '7.44',
  solveRate: '93.4%',
  solutions: [ '(5+3-6)×12', '(12-5-3)×6', '(5-3)×6+12' ],
  index: 537
}
{
  _id: '6 7 11 13',
  numbers: [ 6, 7, 11, 13 ],
  time: '7.44',
  solveRate: '90%',
  solutions: [ '(13+11)×(7-6)' ],
  index: 538
}
{
  _id: '3 6 10 12',
  numbers: [ 3, 6, 10, 12 ],
  time: '7.45',
  solveRate: '93%',
  solutions: [
    '6/3+12+10',
    '10×3+6-12',
    '10×6-12×3',
    '(10×6+12)/3',
    '(12+6-10)×3',
    '(10-6)×3+12',
    '(10-12/6)×3'
  ],
  index: 539
}
{
  _id: '2 10 10 13',
  numbers: [ 2, 10, 10, 13 ],
  time: '7.46',
  solveRate: '90%',
  solutions: [ '(10-2)×(13-10)', '(13-10/10)×2' ],
  index: 540
}
{
  _id: '4 7 9 9',
  numbers: [ 4, 7, 9, 9 ],
  time: '7.47',
  solveRate: '86.6%',
  solutions: [ '(7-9/9)×4' ],
  index: 541
}
{
  _id: '1 2 2 4',
  numbers: [ 1, 2, 2, 4 ],
  time: '7.48',
  solveRate: '95.5%',
  solutions: [ '(2+1)×4×2' ],
  index: 542
}
{
  _id: '1 2 4 13',
  numbers: [ 1, 2, 4, 13 ],
  time: '7.48',
  solveRate: '93.6%',
  solutions: [ '(13+1)×2-4', '(13-1)×(4-2)', '(13-1)×4/2' ],
  index: 543
}
{
  _id: '2 4 4 13',
  numbers: [ 2, 4, 4, 13 ],
  time: '7.48',
  solveRate: '85.6%',
  solutions: [ '(13-4/4)×2', '(13×4-4)/2' ],
  index: 544
}
{
  _id: '2 7 8 8',
  numbers: [ 2, 7, 8, 8 ],
  time: '7.49',
  solveRate: '92.6%',
  solutions: [ '(8+2-7)×8', '(7-8/2)×8', '(8×7-8)/2' ],
  index: 545
}
{
  _id: '2 2 7 8',
  numbers: [ 2, 2, 7, 8 ],
  time: '7.5',
  solveRate: '93.5%',
  solutions: [ '(7-2-2)×8', '(7-2×2)×8', '7×2+8+2' ],
  index: 546
}
{
  _id: '2 8 12 13',
  numbers: [ 2, 8, 12, 13 ],
  time: '7.5',
  solveRate: '89.6%',
  solutions: [ '(13+2-12)×8' ],
  index: 547
}
{
  _id: '4 4 8 8',
  numbers: [ 4, 4, 8, 8 ],
  time: '7.5',
  solveRate: '95.5%',
  solutions: [ '8+8+4+4', '(8+4)×8/4', '(8-4)×4+8', '(8-8/4)×4' ],
  index: 548
}
{
  _id: '2 4 4 11',
  numbers: [ 2, 4, 4, 11 ],
  time: '7.51',
  solveRate: '84.5%',
  solutions: [ '(4/4+11)×2', '(11×4+4)/2' ],
  index: 549
}
{
  _id: '2 6 6 11',
  numbers: [ 2, 6, 6, 11 ],
  time: '7.51',
  solveRate: '83.2%',
  solutions: [ '(6/6+11)×2' ],
  index: 550
}
{
  _id: '2 4 5 13',
  numbers: [ 2, 4, 5, 13 ],
  time: '7.52',
  solveRate: '94.7%',
  solutions: [ '13+5+4+2', '(13-5-2)×4', '(13+4-5)×2' ],
  index: 551
}
{
  _id: '1 2 12 13',
  numbers: [ 1, 2, 12, 13 ],
  time: '7.53',
  solveRate: '95.9%',
  solutions: [ '13+12+1-2', '2/(13/12-1)' ],
  index: 552
}
{
  _id: '3 4 9 12',
  numbers: [ 3, 4, 9, 12 ],
  time: '7.54',
  solveRate: '94.6%',
  solutions: [
    '(9-4-3)×12',
    '9×4/3+12',
    '9×3-12/4',
    '(12+3-9)×4',
    '(12-4)×9/3',
    '12×9/4-3',
    '(3-4/12)×9'
  ],
  index: 553
}
{
  _id: '1 6 9 13',
  numbers: [ 1, 6, 9, 13 ],
  time: '7.55',
  solveRate: '90.6%',
  solutions: [ '(13-9)×6×1' ],
  index: 554
}
{
  _id: '2 2 4 10',
  numbers: [ 2, 2, 4, 10 ],
  time: '7.55',
  solveRate: '94.1%',
  solutions: [
    '(10-4)×(2+2)',
    '(10-2-2)×4',
    '(10-4)×2×2',
    '(10-2×2)×4',
    '(10+4-2)×2',
    '(10+2)×(4-2)',
    '(10+2)×4/2',
    '(4/2+10)×2'
  ],
  index: 555
}
{
  _id: '2 3 4 12',
  numbers: [ 2, 3, 4, 12 ],
  time: '7.55',
  solveRate: '94.2%',
  solutions: [
    '(3×2-4)×12',
    '(12-3×2)×4',
    '(12+4)×3/2',
    '(4+2)×12/3',
    '(4-3)×12×2',
    '(12/3+2)×4'
  ],
  index: 556
}
{
  _id: '2 6 8 11',
  numbers: [ 2, 6, 8, 11 ],
  time: '7.55',
  solveRate: '93.3%',
  solutions: [ '(6+2)×(11-8)', '(11-6-2)×8', '11×2+8-6', '(8-6)×11+2' ],
  index: 557
}
{
  _id: '3 9 12 12',
  numbers: [ 3, 9, 12, 12 ],
  time: '7.55',
  solveRate: '90.8%',
  solutions: [ '12×12/(9-3)', '12×9/3-12', '(9-12/12)×3' ],
  index: 558
}
{
  _id: '1 3 8 12',
  numbers: [ 1, 3, 8, 12 ],
  time: '7.56',
  solveRate: '96.6%',
  solutions: [ '12+8+3+1', '12×8/(3+1)', '(12/3-1)×8' ],
  index: 559
}
{
  _id: '3 4 4 12',
  numbers: [ 3, 4, 4, 12 ],
  time: '7.56',
  solveRate: '90.4%',
  solutions: [ '(3-4/4)×12', '(12/4+3)×4' ],
  index: 560
}
{
  _id: '5 6 10 10',
  numbers: [ 5, 6, 10, 10 ],
  time: '7.56',
  solveRate: '87%',
  solutions: [ '(10+10)×6/5', '(5-10/10)×6' ],
  index: 561
}
{
  _id: '2 3 5 6',
  numbers: [ 2, 3, 5, 6 ],
  time: '7.57',
  solveRate: '95%',
  solutions: [
    '6×5-3×2',
    '5×3×2-6',
    '(5+2-3)×6',
    '(5-3)×6×2',
    '(5+3)×6/2',
    '(6/2+5)×3'
  ],
  index: 562
}
{
  _id: '1 9 11 11',
  numbers: [ 1, 9, 11, 11 ],
  time: '7.58',
  solveRate: '89.7%',
  solutions: [ '(11+1)×(11-9)' ],
  index: 563
}
{
  _id: '2 6 11 13',
  numbers: [ 2, 6, 11, 13 ],
  time: '7.58',
  solveRate: '89.7%',
  solutions: [ '(13-11)×6×2', '(13+2-11)×6' ],
  index: 564
}
{
  _id: '9 11 13 13',
  numbers: [ 9, 11, 13, 13 ],
  time: '7.58',
  solveRate: '92%',
  solutions: [ '13+13+9-11' ],
  index: 565
}
{
  _id: '1 2 9 12',
  numbers: [ 1, 2, 9, 12 ],
  time: '7.59',
  solveRate: '92.5%',
  solutions: [ '12+9+2+1' ],
  index: 566
}
{
  _id: '1 4 9 12',
  numbers: [ 1, 4, 9, 12 ],
  time: '7.59',
  solveRate: '95.9%',
  solutions: [ '12+9+4-1', '(9-1)×12/4', '(9×4-12)×1' ],
  index: 567
}
{
  _id: '1 4 10 11',
  numbers: [ 1, 4, 10, 11 ],
  time: '7.59',
  solveRate: '95%',
  solutions: [ '11+10+4-1' ],
  index: 568
}
{
  _id: '4 8 10 11',
  numbers: [ 4, 8, 10, 11 ],
  time: '7.59',
  solveRate: '90.4%',
  solutions: [ '(10+4-11)×8' ],
  index: 569
}
{
  _id: '3 6 12 12',
  numbers: [ 3, 6, 12, 12 ],
  time: '7.6',
  solveRate: '93.1%',
  solutions: [ '(6-3)×12-12', '(12-6)×12/3', '(6-12/3)×12', '(12/12+3)×6' ],
  index: 570
}
{
  _id: '4 4 4 5',
  numbers: [ 4, 4, 4, 5 ],
  time: '7.62',
  solveRate: '84.9%',
  solutions: [ '(4/4+5)×4' ],
  index: 571
}
{
  _id: '6 6 7 10',
  numbers: [ 6, 6, 7, 10 ],
  time: '7.62',
  solveRate: '84.4%',
  solutions: [ '(10-7)×6+6' ],
  index: 572
}
{
  _id: '3 3 4 12',
  numbers: [ 3, 3, 4, 12 ],
  time: '7.63',
  solveRate: '95.1%',
  solutions: [ '(3+3-4)×12', '(12-3-3)×4', '4×3×3-12', '12×3-4×3', '(12/3+4)×3' ],
  index: 573
}
{
  _id: '5 6 7 8',
  numbers: [ 5, 6, 7, 8 ],
  time: '7.63',
  solveRate: '93.6%',
  solutions: [ '(7+5)×(8-6)', '(7+5-8)×6', '8×6/(7-5)' ],
  index: 574
}
{
  _id: '3 3 8 9',
  numbers: [ 3, 3, 8, 9 ],
  time: '7.64',
  solveRate: '89%',
  solutions: [ '(9-3-3)×8', '(8+3)×3-9', '(8-3)×3+9' ],
  index: 575
}
{
  _id: '4 5 7 8',
  numbers: [ 4, 5, 7, 8 ],
  time: '7.64',
  solveRate: '95.7%',
  solutions: [ '8+7+5+4', '(8+4)×(7-5)', '(7+5)×8/4', '(8+5-7)×4' ],
  index: 576
}
{
  _id: '6 6 9 12',
  numbers: [ 6, 6, 9, 12 ],
  time: '7.64',
  solveRate: '92.9%',
  solutions: [ '12×6/(9-6)', '12×9/6+6', '(12-9)×6+6' ],
  index: 577
}
{
  _id: '3 4 4 9',
  numbers: [ 3, 4, 4, 9 ],
  time: '7.65',
  solveRate: '91%',
  solutions: [ '9×4-4×3', '(4-4/3)×9', '(4+4)×9/3', '(9-4/4)×3' ],
  index: 578
}
{
  _id: '4 7 9 10',
  numbers: [ 4, 7, 9, 10 ],
  time: '7.65',
  solveRate: '90.5%',
  solutions: [ '10×4-9-7', '(9+7-10)×4', '(9-7)×10+4' ],
  index: 579
}
{
  _id: '1 5 6 10',
  numbers: [ 1, 5, 6, 10 ],
  time: '7.66',
  solveRate: '91.5%',
  solutions: [ '(5+1)×(10-6)', '(10-5-1)×6' ],
  index: 580
}
{
  _id: '3 5 8 11',
  numbers: [ 3, 5, 8, 11 ],
  time: '7.66',
  solveRate: '89.8%',
  solutions: [ '(5+3)×(11-8)', '(11-5-3)×8', '(11-3)×(8-5)', '(11+5-8)×3' ],
  index: 581
}
{
  _id: '6 6 10 12',
  numbers: [ 6, 6, 10, 12 ],
  time: '7.66',
  solveRate: '93.7%',
  solutions: [ '(6+6)×(12-10)', '(6+6-10)×12', '(10+6-12)×6', '(12-6)×(10-6)' ],
  index: 582
}
{
  _id: '8 11 12 12',
  numbers: [ 8, 11, 12, 12 ],
  time: '7.66',
  solveRate: '77.9%',
  solutions: [ '(11-8)×12-12' ],
  index: 583
}
{
  _id: '8 9 11 13',
  numbers: [ 8, 9, 11, 13 ],
  time: '7.67',
  solveRate: '90.5%',
  solutions: [ '(13+11)×(9-8)' ],
  index: 584
}
{
  _id: '2 2 2 10',
  numbers: [ 2, 2, 2, 10 ],
  time: '7.68',
  solveRate: '94.3%',
  solutions: [ '10×2+2+2', '10×2+2×2' ],
  index: 585
}
{
  _id: '3 6 6 9',
  numbers: [ 3, 6, 6, 9 ],
  time: '7.68',
  solveRate: '96.1%',
  solutions: [ '9+6+6+3', '9×6/3+6', '6×6-9-3', '(9-6/6)×3' ],
  index: 586
}
{
  _id: '2 5 5 11',
  numbers: [ 2, 5, 5, 11 ],
  time: '7.69',
  solveRate: '83.1%',
  solutions: [ '(5+2)×5-11', '(5/5+11)×2' ],
  index: 587
}
{
  _id: '3 3 4 7',
  numbers: [ 3, 3, 4, 7 ],
  time: '7.69',
  solveRate: '90.4%',
  solutions: [ '(7-3/3)×4', '(7+4-3)×3' ],
  index: 588
}
{
  _id: '5 6 6 6',
  numbers: [ 5, 6, 6, 6 ],
  time: '7.7',
  solveRate: '87.8%',
  solutions: [ '(5-6/6)×6' ],
  index: 589
}
{
  _id: '1 2 2 5',
  numbers: [ 1, 2, 2, 5 ],
  time: '7.71',
  solveRate: '94.3%',
  solutions: [ '(5+1)×(2+2)', '(5+1)×2×2' ],
  index: 590
}
{
  _id: '2 6 8 10',
  numbers: [ 2, 6, 8, 10 ],
  time: '7.71',
  solveRate: '93.3%',
  solutions: [
    '(10-8)×6×2',
    '(10+2-8)×6',
    '(8-2)×(10-6)',
    '(10+2)×(8-6)',
    '(10+8-6)×2',
    '(10+6)×2-8',
    '8/(2-10/6)'
  ],
  index: 591
}
{
  _id: '1 3 5 11',
  numbers: [ 1, 3, 5, 11 ],
  time: '7.74',
  solveRate: '93.2%',
  solutions: [ '(11-5)×(3+1)', '(11+1)×(5-3)' ],
  index: 592
}
{
  _id: '3 6 10 10',
  numbers: [ 3, 6, 10, 10 ],
  time: '7.74',
  solveRate: '85.4%',
  solutions: [ '(3-6/10)×10', '(10/10+3)×6' ],
  index: 593
}
{
  _id: '5 8 8 9',
  numbers: [ 5, 8, 8, 9 ],
  time: '7.74',
  solveRate: '87.2%',
  solutions: [ '9×8/(8-5)', '(9-5)×8-8' ],
  index: 594
}
{
  _id: '1 4 4 9',
  numbers: [ 1, 4, 4, 9 ],
  time: '7.75',
  solveRate: '94.2%',
  solutions: [ '(9+1-4)×4', '4×4+9-1' ],
  index: 595
}
{
  _id: '3 4 7 9',
  numbers: [ 3, 4, 7, 9 ],
  time: '7.75',
  solveRate: '93.2%',
  solutions: [ '(9-7)×4×3', '9×3+4-7', '(7+4)×3-9', '(7-4)×9-3' ],
  index: 596
}
{
  _id: '4 5 10 11',
  numbers: [ 4, 5, 10, 11 ],
  time: '7.75',
  solveRate: '88%',
  solutions: [ '10×4-11-5', '(11+5-10)×4' ],
  index: 597
}
{
  _id: '1 2 6 9',
  numbers: [ 1, 2, 6, 9 ],
  time: '7.76',
  solveRate: '94.3%',
  solutions: [ '(9-1)×6/2', '(9×2+6)×1' ],
  index: 598
}
{
  _id: '1 2 4 11',
  numbers: [ 1, 2, 4, 11 ],
  time: '7.77',
  solveRate: '92%',
  solutions: [ '(11+1)×(4-2)', '(11+1)×4/2', '(11-1)×2+4' ],
  index: 599
}
{
  _id: '1 4 4 10',
  numbers: [ 1, 4, 4, 10 ],
  time: '7.77',
  solveRate: '92%',
  solutions: [ '(10-4)×4×1' ],
  index: 600
}
{
  _id: '2 7 7 11',
  numbers: [ 2, 7, 7, 11 ],
  time: '7.77',
  solveRate: '86.7%',
  solutions: [ '(7-2)×7-11', '(7/7+11)×2' ],
  index: 601
}
{
  _id: '2 2 9 11',
  numbers: [ 2, 2, 9, 11 ],
  time: '7.78',
  solveRate: '91.4%',
  solutions: [ '11+9+2+2', '2×2+11+9' ],
  index: 602
}
{
  _id: '1 4 8 11',
  numbers: [ 1, 4, 8, 11 ],
  time: '7.79',
  solveRate: '95.6%',
  solutions: [ '11+8+4+1', '(11+1)×8/4' ],
  index: 603
}
{
  _id: '3 4 12 13',
  numbers: [ 3, 4, 12, 13 ],
  time: '7.79',
  solveRate: '93.2%',
  solutions: [ '13+12+3-4' ],
  index: 604
}
{
  _id: '3 6 7 9',
  numbers: [ 3, 6, 7, 9 ],
  time: '7.79',
  solveRate: '93%',
  solutions: [ '7×3+9-6', '(7-9/3)×6', '(9+6-7)×3', '(9-6)×7+3' ],
  index: 605
}
{
  _id: '3 9 10 10',
  numbers: [ 3, 9, 10, 10 ],
  time: '7.79',
  solveRate: '84.9%',
  solutions: [ '(9-10/10)×3' ],
  index: 606
}
{
  _id: '3 12 12 12',
  numbers: [ 3, 12, 12, 12 ],
  time: '7.79',
  solveRate: '91.1%',
  solutions: [ '(3-12/12)×12' ],
  index: 607
}
{
  _id: '3 7 12 12',
  numbers: [ 3, 7, 12, 12 ],
  time: '7.8',
  solveRate: '91.5%',
  solutions: [ '(12-7-3)×12', '(12×7-12)/3', '(12/12+7)×3' ],
  index: 608
}
{
  _id: '5 6 10 11',
  numbers: [ 5, 6, 10, 11 ],
  time: '7.8',
  solveRate: '90.4%',
  solutions: [ '(10+5-11)×6', '(11-5)×(10-6)' ],
  index: 609
}
{
  _id: '2 2 6 12',
  numbers: [ 2, 2, 6, 12 ],
  time: '7.81',
  solveRate: '94.2%',
  solutions: [
    '(12-6)×(2+2)',
    '(6-2-2)×12',
    '(12-6)×2×2',
    '(6-2×2)×12',
    '(6-2)×12/2',
    '(12/2-2)×6',
    '(12/2+6)×2'
  ],
  index: 610
}
{
  _id: '2 4 6 10',
  numbers: [ 2, 4, 6, 10 ],
  time: '7.81',
  solveRate: '94.1%',
  solutions: [
    '(4+2)×(10-6)',
    '(10-4-2)×6',
    '4×2+10+6',
    '(10+2-6)×4',
    '(10-4)×(6-2)',
    '(10+2)×(6-4)',
    '(10+6-4)×2'
  ],
  index: 611
}
{
  _id: '2 5 6 13',
  numbers: [ 2, 5, 6, 13 ],
  time: '7.81',
  solveRate: '91.7%',
  solutions: [ '(13-5)×6/2', '(13+5-6)×2' ],
  index: 612
}
{
  _id: '10 12 13 13',
  numbers: [ 10, 12, 13, 13 ],
  time: '7.82',
  solveRate: '94.2%',
  solutions: [ '13+13+10-12' ],
  index: 613
}
{
  _id: '2 2 4 8',
  numbers: [ 2, 2, 4, 8 ],
  time: '7.83',
  solveRate: '95.8%',
  solutions: [
    '(2+2)×4+8',
    '4×2×2+8',
    '(4-2/2)×8',
    '(4+2)×8/2',
    '8×2+4×2',
    '(8+2)×2+4',
    '(8×2-4)×2',
    '(8/2+2)×4'
  ],
  index: 614
}
{
  _id: '3 12 12 13',
  numbers: [ 3, 12, 12, 13 ],
  time: '7.83',
  solveRate: '92.6%',
  solutions: [ '(12+3-13)×12' ],
  index: 615
}
{
  _id: '4 5 8 9',
  numbers: [ 4, 5, 8, 9 ],
  time: '7.83',
  solveRate: '89%',
  solutions: [ '(9+5-8)×4', '(9-5)×4+8' ],
  index: 616
}
{
  _id: '4 8 9 10',
  numbers: [ 4, 8, 9, 10 ],
  time: '7.83',
  solveRate: '89%',
  solutions: [ '(9+4-10)×8' ],
  index: 617
}
{
  _id: '6 7 8 10',
  numbers: [ 6, 7, 8, 10 ],
  time: '7.83',
  solveRate: '91.7%',
  solutions: [ '(7+6-10)×8', '7×6-10-8', '(8-6)×7+10' ],
  index: 618
}
{
  _id: '3 4 5 5',
  numbers: [ 3, 4, 5, 5 ],
  time: '7.85',
  solveRate: '93.9%',
  solutions: [ '5×5+3-4', '5×3+5+4' ],
  index: 619
}
{
  _id: '8 10 13 13',
  numbers: [ 8, 10, 13, 13 ],
  time: '7.85',
  solveRate: '92.5%',
  solutions: [ '13+13+8-10' ],
  index: 620
}
{
  _id: '2 3 3 6',
  numbers: [ 2, 3, 3, 6 ],
  time: '7.86',
  solveRate: '96.2%',
  solutions: [ '6×3+3×2', '3×3×2+6', '(3+3-2)×6', '(3+3)×(6-2)', '(6+3+3)×2' ],
  index: 621
}
{
  _id: '5 8 8 13',
  numbers: [ 5, 8, 8, 13 ],
  time: '7.86',
  solveRate: '92.4%',
  solutions: [ '13+8+8-5' ],
  index: 622
}
{
  _id: '1 3 12 12',
  numbers: [ 1, 3, 12, 12 ],
  time: '7.88',
  solveRate: '85.8%',
  solutions: [ '(12×3-12)×1' ],
  index: 623
}
{
  _id: '2 3 5 11',
  numbers: [ 2, 3, 5, 11 ],
  time: '7.88',
  solveRate: '94.8%',
  solutions: [
    '(11+5)×3/2',
    '5×2+11+3',
    '(11+2-5)×3',
    '(11-3)×(5-2)',
    '11×2+5-3',
    '5×3+11-2',
    '(5-3)×11+2'
  ],
  index: 624
}
{
  _id: '3 9 12 13',
  numbers: [ 3, 9, 12, 13 ],
  time: '7.88',
  solveRate: '89.8%',
  solutions: [ '(12+9-13)×3', '(13-9)×3+12' ],
  index: 625
}
{
  _id: '4 10 12 12',
  numbers: [ 4, 10, 12, 12 ],
  time: '7.88',
  solveRate: '92.1%',
  solutions: [ '(10+4-12)×12', '12×12/(10-4)', '12×4/(12-10)' ],
  index: 626
}
{
  _id: '3 5 8 8',
  numbers: [ 3, 5, 8, 8 ],
  time: '7.89',
  solveRate: '92.2%',
  solutions: [ '8+8+5+3', '(5-3)×8+8' ],
  index: 627
}
{
  _id: '10 11 12 13',
  numbers: [ 10, 11, 12, 13 ],
  time: '7.89',
  solveRate: '95.9%',
  solutions: [ '13+12+10-11' ],
  index: 628
}
{
  _id: '2 7 8 11',
  numbers: [ 2, 7, 8, 11 ],
  time: '7.9',
  solveRate: '94.8%',
  solutions: [ '(7×2-11)×8', '11+8+7-2', '(8-2)×(11-7)', '(11+8-7)×2' ],
  index: 629
}
{
  _id: '3 4 10 12',
  numbers: [ 3, 4, 10, 12 ],
  time: '7.9',
  solveRate: '92.5%',
  solutions: [
    '(12-10)×4×3',
    '(4×3-10)×12',
    '(10-4)×12/3',
    '(10-12/3)×4',
    '12/(3-10/4)'
  ],
  index: 630
}
{
  _id: '7 8 11 13',
  numbers: [ 7, 8, 11, 13 ],
  time: '7.9',
  solveRate: '90%',
  solutions: [ '(13+11)×(8-7)', '(13-8)×7-11' ],
  index: 631
}
{
  _id: '1 2 5 9',
  numbers: [ 1, 2, 5, 9 ],
  time: '7.91',
  solveRate: '95.1%',
  solutions: [ '(2+1)×5+9', '9×2+5+1', '(9-1)×(5-2)' ],
  index: 632
}
{
  _id: '1 4 6 11',
  numbers: [ 1, 4, 6, 11 ],
  time: '7.91',
  solveRate: '92.7%',
  solutions: [ '(11+1-6)×4', '(11+1)×(6-4)' ],
  index: 633
}
{
  _id: '2 2 3 3',
  numbers: [ 2, 2, 3, 3 ],
  time: '7.92',
  solveRate: '93.2%',
  solutions: [ '(3+3)×(2+2)', '(3+3)×2×2', '(3×2+2)×3' ],
  index: 634
}
{
  _id: '8 10 10 12',
  numbers: [ 8, 10, 10, 12 ],
  time: '7.93',
  solveRate: '94.3%',
  solutions: [ '12+10+10-8' ],
  index: 635
}
{
  _id: '4 6 8 9',
  numbers: [ 4, 6, 8, 9 ],
  time: '7.94',
  solveRate: '93.2%',
  solutions: [ '(9-8)×6×4', '9×8/4+6', '(4-8/6)×9' ],
  index: 636
}
{
  _id: '4 4 6 12',
  numbers: [ 4, 4, 6, 12 ],
  time: '7.95',
  solveRate: '93.8%',
  solutions: [
    '(4+4-6)×12',
    '(12-4-4)×6',
    '(4×4-12)×6',
    '12×4-6×4',
    '12×4/(6-4)',
    '(12+4)×6/4',
    '(12/6+4)×4'
  ],
  index: 637
}
{
  _id: '1 1 7 10',
  numbers: [ 1, 1, 7, 10 ],
  time: '7.96',
  solveRate: '85.1%',
  solutions: [ '(1+1)×7+10' ],
  index: 638
}
{
  _id: '1 3 6 9',
  numbers: [ 1, 3, 6, 9 ],
  time: '7.96',
  solveRate: '93.2%',
  solutions: [ '(3-1)×9+6', '(6-1)×3+9', '(9+1)×3-6', '(9-1)×(6-3)', '(9/3+1)×6' ],
  index: 639
}
{
  _id: '1 5 9 10',
  numbers: [ 1, 5, 9, 10 ],
  time: '7.97',
  solveRate: '93.4%',
  solutions: [ '(10+9+5)×1' ],
  index: 640
}
{
  _id: '2 2 3 7',
  numbers: [ 2, 2, 3, 7 ],
  time: '7.97',
  solveRate: '88.4%',
  solutions: [ '(2/2+7)×3', '(7+3+2)×2' ],
  index: 641
}
{
  _id: '2 5 6 7',
  numbers: [ 2, 5, 6, 7 ],
  time: '7.97',
  solveRate: '92.4%',
  solutions: [ '(7+2-5)×6', '6×2+7+5', '(7-5)×6×2' ],
  index: 642
}
{
  _id: '3 7 10 11',
  numbers: [ 3, 7, 10, 11 ],
  time: '7.97',
  solveRate: '90.5%',
  solutions: [ '(11-3)×(10-7)', '(11+7-10)×3' ],
  index: 643
}
{
  _id: '2 8 8 9',
  numbers: [ 2, 8, 8, 9 ],
  time: '8',
  solveRate: '90.4%',
  solutions: [ '(9+2-8)×8' ],
  index: 644
}
{
  _id: '2 7 11 12',
  numbers: [ 2, 7, 11, 12 ],
  time: '8.01',
  solveRate: '91.7%',
  solutions: [ '(11-7-2)×12', '(11-7)×12/2', '12/2+11+7', '(11+7)×2-12' ],
  index: 645
}
{
  _id: '2 8 9 13',
  numbers: [ 2, 8, 9, 13 ],
  time: '8.01',
  solveRate: '90.1%',
  solutions: [ '(8-2)×(13-9)', '(13+8-9)×2', '9/(2-13/8)' ],
  index: 646
}
{
  _id: '4 8 8 9',
  numbers: [ 4, 8, 8, 9 ],
  time: '8.01',
  solveRate: '92.4%',
  solutions: [ '(8+4-9)×8' ],
  index: 647
}
{
  _id: '5 5 8 8',
  numbers: [ 5, 5, 8, 8 ],
  time: '8.01',
  solveRate: '84.9%',
  solutions: [ '5×5-8/8' ],
  index: 648
}
{
  _id: '2 3 4 8',
  numbers: [ 2, 3, 4, 8 ],
  time: '8.02',
  solveRate: '92.6%',
  solutions: [ '(8-4)×3×2', '(4+2-3)×8', '(8/2+4)×3' ],
  index: 649
}
{
  _id: '4 4 10 12',
  numbers: [ 4, 4, 10, 12 ],
  time: '8.02',
  solveRate: '90.8%',
  solutions: [ '(10-4-4)×12', '10×4-12-4', '(12+4-10)×4' ],
  index: 650
}
{
  _id: '1 4 5 11',
  numbers: [ 1, 4, 5, 11 ],
  time: '8.03',
  solveRate: '90.9%',
  solutions: [ '(11-5)×4×1' ],
  index: 651
}
{
  _id: '2 4 8 8',
  numbers: [ 2, 4, 8, 8 ],
  time: '8.04',
  solveRate: '93.8%',
  solutions: [ '4×2+8+8', '(4-2)×8+8', '8×4/2+8', '(8-2)×(8-4)', '(8+8-4)×2' ],
  index: 652
}
{
  _id: '2 4 8 12',
  numbers: [ 2, 4, 8, 12 ],
  time: '8.04',
  solveRate: '93.8%',
  solutions: [
    '(4+2)×(12-8)',
    '(8-4-2)×12',
    '8×2+12-4',
    '(12+2-8)×4',
    '(8-4)×12/2',
    '(12+4)×2-8',
    '(12-4)×2+8'
  ],
  index: 653
}
{
  _id: '1 3 4 13',
  numbers: [ 1, 3, 4, 13 ],
  time: '8.05',
  solveRate: '94.2%',
  solutions: [ '(13-4-1)×3', '4×3+13-1' ],
  index: 654
}
{
  _id: '2 4 9 13',
  numbers: [ 2, 4, 9, 13 ],
  time: '8.05',
  solveRate: '93.6%',
  solutions: [ '(4+2)×(13-9)', '13+9+4-2', '4/2+13+9', '(13+2-9)×4' ],
  index: 655
}
{
  _id: '3 6 9 10',
  numbers: [ 3, 6, 9, 10 ],
  time: '8.05',
  solveRate: '92.5%',
  solutions: [
    '(10+3-9)×6',
    '(9-3)×(10-6)',
    '10×9/3-6',
    '9×6-10×3',
    '(6-10/3)×9'
  ],
  index: 656
}
{
  _id: '3 7 8 12',
  numbers: [ 3, 7, 8, 12 ],
  time: '8.05',
  solveRate: '95%',
  solutions: [ '(7+3-8)×12', '12+8+7-3', '12×8/(7-3)', '(7-12/3)×8' ],
  index: 657
}
{
  _id: '4 5 9 10',
  numbers: [ 4, 5, 9, 10 ],
  time: '8.05',
  solveRate: '90.7%',
  solutions: [ '(10-4)×(9-5)', '(10+5-9)×4' ],
  index: 658
}
{
  _id: '3 4 9 11',
  numbers: [ 3, 4, 9, 11 ],
  time: '8.06',
  solveRate: '89.9%',
  solutions: [ '(11-9)×4×3', '(11×9-3)/4' ],
  index: 659
}
{
  _id: '4 7 9 12',
  numbers: [ 4, 7, 9, 12 ],
  time: '8.06',
  solveRate: '94.9%',
  solutions: [ '(7+4-9)×12', '12+9+7-4', '12×4/(9-7)' ],
  index: 660
}
{
  _id: '1 4 9 11',
  numbers: [ 1, 4, 9, 11 ],
  time: '8.07',
  solveRate: '94.4%',
  solutions: [ '(4-1)×11-9', '9×4-11-1', '(11+9+4)×1' ],
  index: 661
}
{
  _id: '2 7 9 10',
  numbers: [ 2, 7, 9, 10 ],
  time: '8.07',
  solveRate: '94%',
  solutions: [ '10+9+7-2', '(10+2)×(9-7)', '(10+9-7)×2' ],
  index: 662
}
{
  _id: '2 4 8 11',
  numbers: [ 2, 4, 8, 11 ],
  time: '8.08',
  solveRate: '92.8%',
  solutions: [ '(11-8)×4×2', '(11-4×2)×8', '11×2+8/4', '11×8/4+2' ],
  index: 663
}
{
  _id: '4 6 8 12',
  numbers: [ 4, 6, 8, 12 ],
  time: '8.08',
  solveRate: '94.3%',
  solutions: [
    '(6+4-8)×12',
    '8×6/4+12',
    '(8+4)×12/6',
    '(12-6)×(8-4)',
    '12×4/(8-6)',
    '(6-12/4)×8',
    '(8-12/6)×4'
  ],
  index: 664
}
{
  _id: '3 5 6 6',
  numbers: [ 3, 5, 6, 6 ],
  time: '8.09',
  solveRate: '92.2%',
  solutions: [ '(6+3-5)×6', '(6+6)×(5-3)' ],
  index: 665
}
{
  _id: '5 8 11 13',
  numbers: [ 5, 8, 11, 13 ],
  time: '8.09',
  solveRate: '88.9%',
  solutions: [ '(11+5-13)×8', '(13-5)×(11-8)' ],
  index: 666
}
{
  _id: '6 8 8 10',
  numbers: [ 6, 8, 8, 10 ],
  time: '8.09',
  solveRate: '91.1%',
  solutions: [ '8×6/(10-8)', '(10+8)×8/6', '(10-6)×8-8' ],
  index: 667
}
{
  _id: '9 10 12 13',
  numbers: [ 9, 10, 12, 13 ],
  time: '8.1',
  solveRate: '93.5%',
  solutions: [ '13+12+9-10' ],
  index: 668
}
{
  _id: '5 5 8 9',
  numbers: [ 5, 5, 8, 9 ],
  time: '8.12',
  solveRate: '89.6%',
  solutions: [ '5×5+8-9', '(8-5)×5+9' ],
  index: 669
}
{
  _id: '1 5 5 13',
  numbers: [ 1, 5, 5, 13 ],
  time: '8.13',
  solveRate: '93.4%',
  solutions: [ '13+5+5+1' ],
  index: 670
}
{
  _id: '2 2 6 10',
  numbers: [ 2, 2, 6, 10 ],
  time: '8.13',
  solveRate: '95.2%',
  solutions: [ '6×2+10+2', '10×2+6-2', '(10-2)×6/2' ],
  index: 671
}
{
  _id: '1 8 11 13',
  numbers: [ 1, 8, 11, 13 ],
  time: '8.15',
  solveRate: '88.1%',
  solutions: [ '(13+1-11)×8' ],
  index: 672
}
{
  _id: '2 2 4 11',
  numbers: [ 2, 2, 4, 11 ],
  time: '8.16',
  solveRate: '91.7%',
  solutions: [ '11×2+4-2', '(4-2)×11+2', '11×4/2+2', '11×2+4/2' ],
  index: 673
}
{
  _id: '3 4 5 10',
  numbers: [ 3, 4, 5, 10 ],
  time: '8.17',
  solveRate: '90.3%',
  solutions: [ '10×4×3/5', '(5-3)×10+4' ],
  index: 674
}
{
  _id: '5 8 9 11',
  numbers: [ 5, 8, 9, 11 ],
  time: '8.17',
  solveRate: '90.1%',
  solutions: [ '(8-5)×11-9', '(9+5-11)×8', '(11-8)×5+9' ],
  index: 675
}
{
  _id: '1 3 6 13',
  numbers: [ 1, 3, 6, 13 ],
  time: '8.18',
  solveRate: '92.1%',
  solutions: [ '(13+1-6)×3', '(13-1)×6/3' ],
  index: 676
}
{
  _id: '2 8 9 10',
  numbers: [ 2, 8, 9, 10 ],
  time: '8.18',
  solveRate: '89%',
  solutions: [ '(10+2-9)×8', '(9+8)×2-10' ],
  index: 677
}
{
  _id: '1 6 11 12',
  numbers: [ 1, 6, 11, 12 ],
  time: '8.19',
  solveRate: '89%',
  solutions: [ '(11+1)×12/6' ],
  index: 678
}
{
  _id: '4 4 4 9',
  numbers: [ 4, 4, 4, 9 ],
  time: '8.19',
  solveRate: '88.5%',
  solutions: [ '(9-4)×4+4' ],
  index: 679
}
{
  _id: '2 5 10 11',
  numbers: [ 2, 5, 10, 11 ],
  time: '8.21',
  solveRate: '94.2%',
  solutions: [ '11+10+5-2', '11×2+10/5', '11×10/5+2' ],
  index: 680
}
{
  _id: '3 4 7 10',
  numbers: [ 3, 4, 7, 10 ],
  time: '8.21',
  solveRate: '93.4%',
  solutions: [ '10+7+4+3', '(10+3-7)×4', '(10-4)×(7-3)' ],
  index: 681
}
{
  _id: '5 6 9 10',
  numbers: [ 5, 6, 9, 10 ],
  time: '8.21',
  solveRate: '91%',
  solutions: [ '(9+5-10)×6', '10×9/5+6' ],
  index: 682
}
{
  _id: '6 6 7 9',
  numbers: [ 6, 6, 7, 9 ],
  time: '8.21',
  solveRate: '90.8%',
  solutions: [ '(6+6)×(9-7)', '(7+6-9)×6' ],
  index: 683
}
{
  _id: '4 4 7 12',
  numbers: [ 4, 4, 7, 12 ],
  time: '8.22',
  solveRate: '89.5%',
  solutions: [ '(12-4)×(7-4)', '(7-4)×4+12', '(12-7)×4+4' ],
  index: 684
}
{
  _id: '5 7 8 8',
  numbers: [ 5, 7, 8, 8 ],
  time: '8.22',
  solveRate: '83.2%',
  solutions: [ '(7-5)×8+8', '(8+7)×8/5' ],
  index: 685
}
{
  _id: '1 3 4 9',
  numbers: [ 1, 3, 4, 9 ],
  time: '8.23',
  solveRate: '94.6%',
  solutions: [ '(4+1)×3+9', '(9-3)×4×1', '9×3+1-4', '(4-1)×9-3' ],
  index: 686
}
{
  _id: '1 2 8 9',
  numbers: [ 1, 2, 8, 9 ],
  time: '8.24',
  solveRate: '93.4%',
  solutions: [ '9×8/(2+1)', '8×2+9-1', '(9-1)×2+8' ],
  index: 687
}
{
  _id: '4 4 8 11',
  numbers: [ 4, 4, 8, 11 ],
  time: '8.24',
  solveRate: '87.1%',
  solutions: [ '(4+4)×(11-8)', '(11-4-4)×8' ],
  index: 688
}
{
  _id: '6 8 8 11',
  numbers: [ 6, 8, 8, 11 ],
  time: '8.24',
  solveRate: '87.9%',
  solutions: [ '(8+6-11)×8' ],
  index: 689
}
{
  _id: '2 9 10 11',
  numbers: [ 2, 9, 10, 11 ],
  time: '8.25',
  solveRate: '88.7%',
  solutions: [ '(10+2)×(11-9)', '(11+10-9)×2' ],
  index: 690
}
{
  _id: '2 4 4 4',
  numbers: [ 2, 4, 4, 4 ],
  time: '8.26',
  solveRate: '94.6%',
  solutions: [ '4×4+4×2', '(4+4-2)×4', '(4/2+4)×4', '(4+4+4)×2', '(4×4-4)×2' ],
  index: 691
}
{
  _id: '4 4 6 11',
  numbers: [ 4, 4, 6, 11 ],
  time: '8.26',
  solveRate: '86.5%',
  solutions: [ '(11-6)×4+4' ],
  index: 692
}
{
  _id: '1 6 12 13',
  numbers: [ 1, 6, 12, 13 ],
  time: '8.27',
  solveRate: '89.6%',
  solutions: [ '(13-1)×12/6' ],
  index: 693
}
{
  _id: '4 7 8 9',
  numbers: [ 4, 7, 8, 9 ],
  time: '8.27',
  solveRate: '92.2%',
  solutions: [ '9×8/(7-4)', '(8+4)×(9-7)', '(8+7-9)×4' ],
  index: 694
}
{
  _id: '2 4 7 10',
  numbers: [ 2, 4, 7, 10 ],
  time: '8.29',
  solveRate: '91.2%',
  solutions: [ '(10-7)×4×2', '(4-2)×7+10', '7×4/2+10', '(10-2)×(7-4)' ],
  index: 695
}
{
  _id: '6 6 8 9',
  numbers: [ 6, 6, 8, 9 ],
  time: '8.29',
  solveRate: '90.5%',
  solutions: [ '(6+6-9)×8', '(8-6)×9+6' ],
  index: 696
}
{
  _id: '2 2 3 13',
  numbers: [ 2, 2, 3, 13 ],
  time: '8.3',
  solveRate: '88%',
  solutions: [ '(13+2-3)×2' ],
  index: 697
}
{
  _id: '2 8 8 11',
  numbers: [ 2, 8, 8, 11 ],
  time: '8.3',
  solveRate: '84.3%',
  solutions: [ '(8/8+11)×2' ],
  index: 698
}
{
  _id: '3 3 7 11',
  numbers: [ 3, 3, 7, 11 ],
  time: '8.3',
  solveRate: '92.3%',
  solutions: [ '11+7+3+3', '(3+3)×(11-7)' ],
  index: 699
}
{
  _id: '6 8 10 13',
  numbers: [ 6, 8, 10, 13 ],
  time: '8.3',
  solveRate: '87%',
  solutions: [ '(10+6-13)×8' ],
  index: 700
}
{
  _id: '1 2 2 7',
  numbers: [ 1, 2, 2, 7 ],
  time: '8.32',
  solveRate: '91.8%',
  solutions: [ '(7-1)×(2+2)', '(7-1)×2×2' ],
  index: 701
}
{
  _id: '6 6 8 11',
  numbers: [ 6, 6, 8, 11 ],
  time: '8.32',
  solveRate: '83%',
  solutions: [ '(11-8)×6+6' ],
  index: 702
}
{
  _id: '2 9 12 13',
  numbers: [ 2, 9, 12, 13 ],
  time: '8.34',
  solveRate: '90.7%',
  solutions: [ '(13-9-2)×12', '(13-9)×12/2' ],
  index: 703
}
{
  _id: '1 2 6 13',
  numbers: [ 1, 2, 6, 13 ],
  time: '8.35',
  solveRate: '90.9%',
  solutions: [ '6×2+13-1' ],
  index: 704
}
{
  _id: '2 9 10 13',
  numbers: [ 2, 9, 10, 13 ],
  time: '8.35',
  solveRate: '90.3%',
  solutions: [ '10×2+13-9', '(13+9-10)×2' ],
  index: 705
}
{
  _id: '7 8 8 11',
  numbers: [ 7, 8, 8, 11 ],
  time: '8.35',
  solveRate: '80.6%',
  solutions: [ '(11-7)×8-8' ],
  index: 706
}
{
  _id: '1 3 4 10',
  numbers: [ 1, 3, 4, 10 ],
  time: '8.36',
  solveRate: '93%',
  solutions: [ '(10-4)×(3+1)', '(10-3-1)×4', '(3-1)×10+4' ],
  index: 707
}
{
  _id: '2 3 3 7',
  numbers: [ 2, 3, 3, 7 ],
  time: '8.36',
  solveRate: '92%',
  solutions: [ '(7-3)×3×2', '(7+3-2)×3', '(7+2)×3-3' ],
  index: 708
}
{
  _id: '6 6 9 11',
  numbers: [ 6, 6, 9, 11 ],
  time: '8.36',
  solveRate: '89.1%',
  solutions: [ '(6+6)×(11-9)', '(9+6-11)×6' ],
  index: 709
}
{
  _id: '4 4 4 11',
  numbers: [ 4, 4, 4, 11 ],
  time: '8.37',
  solveRate: '86%',
  solutions: [ '(11-4)×4-4' ],
  index: 710
}
{
  _id: '3 3 8 12',
  numbers: [ 3, 3, 8, 12 ],
  time: '8.38',
  solveRate: '91.7%',
  solutions: [ '(3+3)×(12-8)', '(8-3-3)×12', '(12-3×3)×8', '(12-3)×8/3' ],
  index: 711
}
{
  _id: '3 6 8 9',
  numbers: [ 3, 6, 8, 9 ],
  time: '8.38',
  solveRate: '93.8%',
  solutions: [ '9×8/(6-3)', '(9+3-8)×6', '(9+3)×(8-6)', '(6-9/3)×8' ],
  index: 712
}
{
  _id: '1 6 10 13',
  numbers: [ 1, 6, 10, 13 ],
  time: '8.39',
  solveRate: '87.6%',
  solutions: [ '(13+1-10)×6' ],
  index: 713
}
{
  _id: '1 11 13 13',
  numbers: [ 1, 11, 13, 13 ],
  time: '8.39',
  solveRate: '91.6%',
  solutions: [ '(13-1)×(13-11)', '(11/13+1)×13' ],
  index: 714
}
{
  _id: '1 2 7 8',
  numbers: [ 1, 2, 7, 8 ],
  time: '8.4',
  solveRate: '94.4%',
  solutions: [ '8×2+7+1', '(7+1)×2+8', '(7-1)×8/2' ],
  index: 715
}
{
  _id: '1 4 9 10',
  numbers: [ 1, 4, 9, 10 ],
  time: '8.4',
  solveRate: '93.3%',
  solutions: [ '10+9+4+1' ],
  index: 716
}
{
  _id: '2 10 11 13',
  numbers: [ 2, 10, 11, 13 ],
  time: '8.4',
  solveRate: '89.5%',
  solutions: [ '(10+2)×(13-11)', '(13+10-11)×2' ],
  index: 717
}
{
  _id: '1 4 6 7',
  numbers: [ 1, 4, 6, 7 ],
  time: '8.41',
  solveRate: '87.5%',
  solutions: [ '(7+1-4)×6', '4/(7/6-1)' ],
  index: 718
}
{
  _id: '5 6 10 13',
  numbers: [ 5, 6, 10, 13 ],
  time: '8.42',
  solveRate: '91.5%',
  solutions: [ '13+10+6-5' ],
  index: 719
}
{
  _id: '4 4 9 11',
  numbers: [ 4, 4, 9, 11 ],
  time: '8.43',
  solveRate: '82.7%',
  solutions: [ '(11+4-9)×4' ],
  index: 720
}
{
  _id: '4 5 9 13',
  numbers: [ 4, 5, 9, 13 ],
  time: '8.43',
  solveRate: '89.3%',
  solutions: [ '5×4+13-9', '(13-9)×5+4' ],
  index: 721
}
{
  _id: '2 8 11 12',
  numbers: [ 2, 8, 11, 12 ],
  time: '8.45',
  solveRate: '88.4%',
  solutions: [ '(12+2-11)×8' ],
  index: 722
}
{
  _id: '3 11 12 12',
  numbers: [ 3, 11, 12, 12 ],
  time: '8.45',
  solveRate: '90.9%',
  solutions: [ '(11+3-12)×12' ],
  index: 723
}
{
  _id: '4 5 6 7',
  numbers: [ 4, 5, 6, 7 ],
  time: '8.45',
  solveRate: '90.7%',
  solutions: [ '(7+5)×(6-4)', '(7+5-6)×4' ],
  index: 724
}
{
  _id: '2 4 6 6',
  numbers: [ 2, 4, 6, 6 ],
  time: '8.47',
  solveRate: '94.2%',
  solutions: [
    '(6+2-4)×6',
    '(6+6)×(4-2)',
    '(6+6)×4/2',
    '(6-4/2)×6',
    '(6-4)×6×2',
    '(6×2-6)×4'
  ],
  index: 725
}
{
  _id: '2 3 10 13',
  numbers: [ 2, 3, 10, 13 ],
  time: '8.48',
  solveRate: '93.5%',
  solutions: [ '13+10+3-2', '(13-10/2)×3' ],
  index: 726
}
{
  _id: '2 6 6 10',
  numbers: [ 2, 6, 6, 10 ],
  time: '8.48',
  solveRate: '94.2%',
  solutions: [ '10+6+6+2', '10×6/2-6', '6×6-10-2' ],
  index: 727
}
{
  _id: '3 6 7 12',
  numbers: [ 3, 6, 7, 12 ],
  time: '8.49',
  solveRate: '90.1%',
  solutions: [ '(6+3-7)×12', '(12-6)×(7-3)' ],
  index: 728
}
{
  _id: '2 4 6 9',
  numbers: [ 2, 4, 6, 9 ],
  time: '8.51',
  solveRate: '92%',
  solutions: [
    '(9-6)×4×2',
    '(4-2)×9+6',
    '9×4/2+6',
    '9×4-6×2',
    '(9-6/2)×4',
    '(4/6+2)×9',
    '6/(9/4-2)'
  ],
  index: 729
}
{
  _id: '2 4 9 9',
  numbers: [ 2, 4, 9, 9 ],
  time: '8.51',
  solveRate: '90%',
  solutions: [ '9+9+4+2' ],
  index: 730
}
{
  _id: '2 2 4 13',
  numbers: [ 2, 2, 4, 13 ],
  time: '8.53',
  solveRate: '91%',
  solutions: [ '13×2+2-4', '(4-2)×13-2', '13×4/2-2', '13×2-4/2' ],
  index: 731
}
{
  _id: '4 5 8 12',
  numbers: [ 4, 5, 8, 12 ],
  time: '8.53',
  solveRate: '93.3%',
  solutions: [
    '(12-5-4)×8',
    '5×4+12-8',
    '8×5-12-4',
    '(12-4)×(8-5)',
    '(8-5)×4+12',
    '(12-8)×5+4'
  ],
  index: 732
}
{
  _id: '4 6 10 12',
  numbers: [ 4, 6, 10, 12 ],
  time: '8.53',
  solveRate: '93.9%',
  solutions: [ '12+10+6-4', '(10-4)×6-12', '12×10/4-6', '12×10/6+4' ],
  index: 733
}
{
  _id: '3 7 7 13',
  numbers: [ 3, 7, 7, 13 ],
  time: '8.54',
  solveRate: '93.4%',
  solutions: [ '13+7+7-3', '(13-7)×(7-3)' ],
  index: 734
}
{
  _id: '6 8 9 13',
  numbers: [ 6, 8, 9, 13 ],
  time: '8.54',
  solveRate: '93.8%',
  solutions: [ '13+9+8-6', '(9+8-13)×6' ],
  index: 735
}
{
  _id: '1 2 3 11',
  numbers: [ 1, 2, 3, 11 ],
  time: '8.55',
  solveRate: '95.8%',
  solutions: [ '(11-3)×(2+1)', '(11-2-1)×3', '11×2+3-1', '(3-1)×11+2' ],
  index: 736
}
{
  _id: '1 2 9 13',
  numbers: [ 1, 2, 9, 13 ],
  time: '8.55',
  solveRate: '93.5%',
  solutions: [ '(13+9+2)×1' ],
  index: 737
}
{
  _id: '1 3 9 13',
  numbers: [ 1, 3, 9, 13 ],
  time: '8.55',
  solveRate: '93.6%',
  solutions: [ '13+9+3-1' ],
  index: 738
}
{
  _id: '2 4 7 11',
  numbers: [ 2, 4, 7, 11 ],
  time: '8.55',
  solveRate: '92.6%',
  solutions: [ '11+7+4+2', '(4+2)×(11-7)', '(11+2-7)×4' ],
  index: 739
}
{
  _id: '6 6 8 10',
  numbers: [ 6, 6, 8, 10 ],
  time: '8.55',
  solveRate: '90.2%',
  solutions: [ '(6+6)×(10-8)', '(8+6-10)×6' ],
  index: 740
}
{
  _id: '1 2 3 3',
  numbers: [ 1, 2, 3, 3 ],
  time: '8.56',
  solveRate: '95.5%',
  solutions: [ '(3+1)×3×2' ],
  index: 741
}
{
  _id: '1 2 5 13',
  numbers: [ 1, 2, 5, 13 ],
  time: '8.56',
  solveRate: '94.4%',
  solutions: [ '(13-5)×(2+1)', '5×2+13+1' ],
  index: 742
}
{
  _id: '2 9 11 11',
  numbers: [ 2, 9, 11, 11 ],
  time: '8.56',
  solveRate: '89.4%',
  solutions: [ '11×2+11-9', '(11-9)×11+2' ],
  index: 743
}
{
  _id: '2 2 8 10',
  numbers: [ 2, 2, 8, 10 ],
  time: '8.57',
  solveRate: '94.3%',
  solutions: [ '8×2+10-2', '10×2+8/2', '(10×2-8)×2', '(10-2)×2+8', '(10/2-2)×8' ],
  index: 744
}
{
  _id: '1 3 4 7',
  numbers: [ 1, 3, 4, 7 ],
  time: '8.58',
  solveRate: '95%',
  solutions: [ '7×4-3-1', '(3+1)×7-4', '7×3+4-1', '(4-1)×7+3' ],
  index: 745
}
{
  _id: '3 9 9 10',
  numbers: [ 3, 9, 9, 10 ],
  time: '8.59',
  solveRate: '86.9%',
  solutions: [ '(9+9-10)×3' ],
  index: 746
}
{
  _id: '2 8 9 11',
  numbers: [ 2, 8, 9, 11 ],
  time: '8.6',
  solveRate: '90.8%',
  solutions: [ '8/2+11+9', '(11+9-8)×2' ],
  index: 747
}
{
  _id: '3 7 10 13',
  numbers: [ 3, 7, 10, 13 ],
  time: '8.6',
  solveRate: '88.4%',
  solutions: [ '7×3+13-10', '10×3+7-13', '(13-10)×7+3' ],
  index: 748
}
{
  _id: '4 4 8 10',
  numbers: [ 4, 4, 8, 10 ],
  time: '8.62',
  solveRate: '91.5%',
  solutions: [ '(10+4-8)×4', '(10-4)×(8-4)', '10×8/4+4' ],
  index: 749
}
{
  _id: '6 6 8 13',
  numbers: [ 6, 6, 8, 13 ],
  time: '8.62',
  solveRate: '84.1%',
  solutions: [ '(13-8)×6-6' ],
  index: 750
}
{
  _id: '2 3 7 11',
  numbers: [ 2, 3, 7, 11 ],
  time: '8.63',
  solveRate: '91.8%',
  solutions: [ '(3+2)×7-11', '3×2+11+7', '(11-7)×3×2', '11×3-7-2' ],
  index: 751
}
{
  _id: '4 8 9 11',
  numbers: [ 4, 8, 9, 11 ],
  time: '8.64',
  solveRate: '93%',
  solutions: [ '(8+4)×(11-9)', '11+9+8-4', '(9+8-11)×4' ],
  index: 752
}
{
  _id: '5 5 9 10',
  numbers: [ 5, 5, 9, 10 ],
  time: '8.64',
  solveRate: '87%',
  solutions: [ '5×5+9-10' ],
  index: 753
}
{
  _id: '6 8 12 12',
  numbers: [ 6, 8, 12, 12 ],
  time: '8.64',
  solveRate: '91.6%',
  solutions: [
    '(8+6-12)×12',
    '8×6-12-12',
    '12×8-12×6',
    '(12-6)×(12-8)',
    '12×12/8+6'
  ],
  index: 754
}
{
  _id: '1 3 8 8',
  numbers: [ 1, 3, 8, 8 ],
  time: '8.65',
  solveRate: '86.6%',
  solutions: [ '(3+1)×8-8', '(3-1)×8+8', '(8+1)×8/3' ],
  index: 755
}
{
  _id: '2 3 5 9',
  numbers: [ 2, 3, 5, 9 ],
  time: '8.65',
  solveRate: '92.1%',
  solutions: [ '(9-5)×3×2', '9×3+2-5', '(5-2)×9-3', '(9×5+3)/2' ],
  index: 756
}
{
  _id: '2 4 10 13',
  numbers: [ 2, 4, 10, 13 ],
  time: '8.65',
  solveRate: '88.9%',
  solutions: [ '(13-10)×4×2', '(13+4)×2-10' ],
  index: 757
}
{
  _id: '1 2 6 11',
  numbers: [ 1, 2, 6, 11 ],
  time: '8.66',
  solveRate: '90.3%',
  solutions: [ '6×2+11+1' ],
  index: 758
}
{
  _id: '2 6 7 8',
  numbers: [ 2, 6, 7, 8 ],
  time: '8.66',
  solveRate: '89.6%',
  solutions: [ '(7+2-6)×8', '(8+7)×2-6' ],
  index: 759
}
{
  _id: '3 4 7 7',
  numbers: [ 3, 4, 7, 7 ],
  time: '8.68',
  solveRate: '94%',
  solutions: [ '7×3+7-4', '7×4+3-7', '(7-3)×7-4', '(7-4)×7+3' ],
  index: 760
}
{
  _id: '4 12 12 12',
  numbers: [ 4, 12, 12, 12 ],
  time: '8.68',
  solveRate: '86%',
  solutions: [ '12×4-12-12', '12×12/4-12' ],
  index: 761
}
{
  _id: '4 11 12 13',
  numbers: [ 4, 11, 12, 13 ],
  time: '8.69',
  solveRate: '91.2%',
  solutions: [ '(11+4-13)×12', '12×4-13-11', '12×4/(13-11)' ],
  index: 762
}
{
  _id: '2 2 5 6',
  numbers: [ 2, 2, 5, 6 ],
  time: '8.73',
  solveRate: '88.7%',
  solutions: [ '(5-2/2)×6', '(6+2)×(5-2)', '(6+5)×2+2' ],
  index: 763
}
{
  _id: '4 8 8 12',
  numbers: [ 4, 8, 8, 12 ],
  time: '8.73',
  solveRate: '94.5%',
  solutions: [ '12+8+8-4', '12×8/(8-4)', '(12-8)×4+8' ],
  index: 764
}
{
  _id: '9 10 11 13',
  numbers: [ 9, 10, 11, 13 ],
  time: '8.73',
  solveRate: '89.9%',
  solutions: [ '(13+11)×(10-9)', '(13-10)×11-9' ],
  index: 765
}
{
  _id: '2 5 7 10',
  numbers: [ 2, 5, 7, 10 ],
  time: '8.74',
  solveRate: '92.3%',
  solutions: [ '10+7+5+2', '(10+2)×(7-5)', '(10+7-5)×2' ],
  index: 766
}
{
  _id: '3 10 11 12',
  numbers: [ 3, 10, 11, 12 ],
  time: '8.74',
  solveRate: '89.5%',
  solutions: [ '(10+3-11)×12' ],
  index: 767
}
{
  _id: '1 4 5 10',
  numbers: [ 1, 4, 5, 10 ],
  time: '8.76',
  solveRate: '91.3%',
  solutions: [ '(10+1-5)×4', '(10-4)×(5-1)' ],
  index: 768
}
{
  _id: '4 5 8 8',
  numbers: [ 4, 5, 8, 8 ],
  time: '8.76',
  solveRate: '86.5%',
  solutions: [ '(5-8/4)×8', '(8/8+5)×4' ],
  index: 769
}
{
  _id: '4 4 8 13',
  numbers: [ 4, 4, 8, 13 ],
  time: '8.77',
  solveRate: '86.8%',
  solutions: [ '(4×4-13)×8', '(13-8)×4+4' ],
  index: 770
}
{
  _id: '5 6 6 10',
  numbers: [ 5, 6, 6, 10 ],
  time: '8.77',
  solveRate: '89.1%',
  solutions: [ '(10-5)×6-6', '(6+6)×10/5', '(6-10/5)×6' ],
  index: 771
}
{
  _id: '1 2 4 5',
  numbers: [ 1, 2, 4, 5 ],
  time: '8.79',
  solveRate: '90.6%',
  solutions: [ '(5+2-1)×4', '(4+2)×(5-1)' ],
  index: 772
}
{
  _id: '2 3 4 13',
  numbers: [ 2, 3, 4, 13 ],
  time: '8.79',
  solveRate: '90.9%',
  solutions: [ '4×2+13+3', '(13+3-4)×2', '(13-3)×2+4' ],
  index: 773
}
{
  _id: '1 1 3 10',
  numbers: [ 1, 1, 3, 10 ],
  time: '8.8',
  solveRate: '88%',
  solutions: [ '(10-1-1)×3' ],
  index: 774
}
{
  _id: '3 4 4 5',
  numbers: [ 3, 4, 4, 5 ],
  time: '8.8',
  solveRate: '91.2%',
  solutions: [ '(5+4-3)×4', '4×4+5+3' ],
  index: 775
}
{
  _id: '3 5 9 12',
  numbers: [ 3, 5, 9, 12 ],
  time: '8.8',
  solveRate: '90%',
  solutions: [ '(5+3)×(12-9)', '(5-9/3)×12', '(12+5-9)×3', '(9-5)×3+12' ],
  index: 776
}
{
  _id: '2 5 8 13',
  numbers: [ 2, 5, 8, 13 ],
  time: '8.81',
  solveRate: '93%',
  solutions: [ '(13-5×2)×8', '13+8+5-2', '8×2+13-5', '(13+2)×8/5', '(13-5)×2+8' ],
  index: 777
}
{
  _id: '6 6 6 12',
  numbers: [ 6, 6, 6, 12 ],
  time: '8.81',
  solveRate: '89.5%',
  solutions: [ '(6+6)×12/6', '(6-12/6)×6' ],
  index: 778
}
{
  _id: '4 4 5 10',
  numbers: [ 4, 4, 5, 10 ],
  time: '8.82',
  solveRate: '86.6%',
  solutions: [ '(10-5)×4+4', '(10/5+4)×4' ],
  index: 779
}
{
  _id: '1 3 3 10',
  numbers: [ 1, 3, 3, 10 ],
  time: '8.84',
  solveRate: '89.8%',
  solutions: [ '(10+1-3)×3', '(10-1)×3-3' ],
  index: 780
}
{
  _id: '3 9 10 12',
  numbers: [ 3, 9, 10, 12 ],
  time: '8.84',
  solveRate: '90.1%',
  solutions: [ '(9+3)×(12-10)', '(9+3-10)×12' ],
  index: 781
}
{
  _id: '7 8 10 13',
  numbers: [ 7, 8, 10, 13 ],
  time: '8.84',
  solveRate: '92.1%',
  solutions: [ '13+10+8-7' ],
  index: 782
}
{
  _id: '2 2 5 7',
  numbers: [ 2, 2, 5, 7 ],
  time: '8.86',
  solveRate: '88.9%',
  solutions: [ '7×2+5×2' ],
  index: 783
}
{
  _id: '3 5 6 9',
  numbers: [ 3, 5, 6, 9 ],
  time: '8.86',
  solveRate: '92.5%',
  solutions: [
    '(5+3)×(9-6)',
    '(5-3)×9+6',
    '(6-3)×5+9',
    '6×5+3-9',
    '(9-3)×5-6',
    '(6+5)×3-9',
    '(9+5-6)×3'
  ],
  index: 784
}
{
  _id: '1 2 4 9',
  numbers: [ 1, 2, 4, 9 ],
  time: '8.87',
  solveRate: '90.9%',
  solutions: [ '(9-2-1)×4', '(9+4-1)×2', '(9+1)×2+4' ],
  index: 785
}
{
  _id: '1 4 6 9',
  numbers: [ 1, 4, 6, 9 ],
  time: '8.87',
  solveRate: '86.3%',
  solutions: [ '(9-4-1)×6' ],
  index: 786
}
{
  _id: '1 5 5 9',
  numbers: [ 1, 5, 5, 9 ],
  time: '8.87',
  solveRate: '88.7%',
  solutions: [ '(5+1)×(9-5)' ],
  index: 787
}
{
  _id: '3 4 7 11',
  numbers: [ 3, 4, 7, 11 ],
  time: '8.87',
  solveRate: '87.3%',
  solutions: [ '(11+7)×4/3', '(11-3)×(7-4)', '(11+4-7)×3' ],
  index: 788
}
{
  _id: '8 8 9 13',
  numbers: [ 8, 8, 9, 13 ],
  time: '8.87',
  solveRate: '81.4%',
  solutions: [ '(13-9)×8-8' ],
  index: 789
}
{
  _id: '3 6 12 13',
  numbers: [ 3, 6, 12, 13 ],
  time: '8.88',
  solveRate: '86.5%',
  solutions: [ '(13+3-12)×6' ],
  index: 790
}
{
  _id: '1 3 5 10',
  numbers: [ 1, 3, 5, 10 ],
  time: '8.89',
  solveRate: '93.3%',
  solutions: [ '10×3-5-1', '5×3+10-1' ],
  index: 791
}
{
  _id: '2 10 11 11',
  numbers: [ 2, 10, 11, 11 ],
  time: '8.9',
  solveRate: '86.5%',
  solutions: [ '(11+11-10)×2' ],
  index: 792
}
{
  _id: '4 5 5 9',
  numbers: [ 4, 5, 5, 9 ],
  time: '8.9',
  solveRate: '91.4%',
  solutions: [ '5×4+9-5', '(9-5)×5+4' ],
  index: 793
}
{
  _id: '6 8 11 13',
  numbers: [ 6, 8, 11, 13 ],
  time: '8.91',
  solveRate: '86.5%',
  solutions: [ '8×6-13-11', '8×6/(13-11)' ],
  index: 794
}
{
  _id: '5 5 6 7',
  numbers: [ 5, 5, 6, 7 ],
  time: '8.92',
  solveRate: '90.8%',
  solutions: [ '5×5+6-7', '7×5-6-5' ],
  index: 795
}
{
  _id: '2 3 9 9',
  numbers: [ 2, 3, 9, 9 ],
  time: '8.93',
  solveRate: '90.5%',
  solutions: [ '3×2+9+9', '(9+2)×3-9', '9×2+9-3', '(9/3+9)×2' ],
  index: 796
}
{
  _id: '2 11 12 13',
  numbers: [ 2, 11, 12, 13 ],
  time: '8.93',
  solveRate: '90%',
  solutions: [ '(13+11-12)×2', '(13+11)/2+12' ],
  index: 797
}
{
  _id: '2 2 3 6',
  numbers: [ 2, 2, 3, 6 ],
  time: '8.95',
  solveRate: '91.8%',
  solutions: [ '(2/2+3)×6', '(6-2)×3×2', '(3×2-2)×6', '(3×2+6)×2' ],
  index: 798
}
{
  _id: '2 3 4 11',
  numbers: [ 2, 3, 4, 11 ],
  time: '8.96',
  solveRate: '88.8%',
  solutions: [ '(11-3-2)×4', '(11+4-3)×2', '(11+3)×2-4' ],
  index: 799
}
{
  _id: '3 5 6 7',
  numbers: [ 3, 5, 6, 7 ],
  time: '8.97',
  solveRate: '89.6%',
  solutions: [ '(7+5)×6/3', '(7+6-5)×3' ],
  index: 800
}
{
  _id: '4 7 10 10',
  numbers: [ 4, 7, 10, 10 ],
  time: '8.97',
  solveRate: '84%',
  solutions: [ '(7-10/10)×4' ],
  index: 801
}
{
  _id: '2 5 8 9',
  numbers: [ 2, 5, 8, 9 ],
  time: '8.99',
  solveRate: '92.6%',
  solutions: [ '9+8+5+2', '9×8/(5-2)', '(8-2)×(9-5)', '(9+8-5)×2' ],
  index: 802
}
{
  _id: '1 5 9 11',
  numbers: [ 1, 5, 9, 11 ],
  time: '9',
  solveRate: '93%',
  solutions: [ '11+9+5-1' ],
  index: 803
}
{
  _id: '5 10 10 12',
  numbers: [ 5, 10, 10, 12 ],
  time: '9',
  solveRate: '86.8%',
  solutions: [ '12×10/(10-5)', '10/5+12+10' ],
  index: 804
}
{
  _id: '7 12 12 13',
  numbers: [ 7, 12, 12, 13 ],
  time: '9',
  solveRate: '82.5%',
  solutions: [ '12×12/(13-7)', '(13×12+12)/7' ],
  index: 805
}
{
  _id: '1 5 6 8',
  numbers: [ 1, 5, 6, 8 ],
  time: '9.03',
  solveRate: '90.1%',
  solutions: [ '(8+1-5)×6' ],
  index: 806
}
{
  _id: '2 2 3 11',
  numbers: [ 2, 2, 3, 11 ],
  time: '9.03',
  solveRate: '86.5%',
  solutions: [ '(11+3-2)×2' ],
  index: 807
}
{
  _id: '3 5 5 9',
  numbers: [ 3, 5, 5, 9 ],
  time: '9.04',
  solveRate: '83.4%',
  solutions: [ '(9-5/5)×3', '(9/5+3)×5' ],
  index: 808
}
{
  _id: '1 3 5 7',
  numbers: [ 1, 3, 5, 7 ],
  time: '9.05',
  solveRate: '89.9%',
  solutions: [ '(7+5)×(3-1)', '(5+1)×(7-3)' ],
  index: 809
}
{
  _id: '2 3 6 10',
  numbers: [ 2, 3, 6, 10 ],
  time: '9.05',
  solveRate: '92.3%',
  solutions: [
    '(10-6)×3×2',
    '(10-3×2)×6',
    '(10+6)×3/2',
    '(10+2)×6/3',
    '(10-2)×(6-3)',
    '(6/3+10)×2'
  ],
  index: 810
}
{
  _id: '1 5 10 13',
  numbers: [ 1, 5, 10, 13 ],
  time: '9.06',
  solveRate: '88.8%',
  solutions: [ '(13-1)×10/5' ],
  index: 811
}
{
  _id: '2 2 5 11',
  numbers: [ 2, 2, 5, 11 ],
  time: '9.06',
  solveRate: '87.5%',
  solutions: [ '(11-5)×(2+2)', '(11-5)×2×2' ],
  index: 812
}
{
  _id: '4 7 7 11',
  numbers: [ 4, 7, 7, 11 ],
  time: '9.07',
  solveRate: '87.6%',
  solutions: [ '7×4+7-11', '(11-7)×7-4' ],
  index: 813
}
{
  _id: '5 11 12 12',
  numbers: [ 5, 11, 12, 12 ],
  time: '9.07',
  solveRate: '83%',
  solutions: [ '12×12/(11-5)', '(12×11-12)/5' ],
  index: 814
}
{
  _id: '8 8 8 13',
  numbers: [ 8, 8, 8, 13 ],
  time: '9.08',
  solveRate: '84.9%',
  solutions: [ '(8+8-13)×8' ],
  index: 815
}
{
  _id: '3 3 6 11',
  numbers: [ 3, 3, 6, 11 ],
  time: '9.11',
  solveRate: '90.3%',
  solutions: [ '11×3-6-3', '(11+3-6)×3', '(11-3)×(6-3)' ],
  index: 816
}
{
  _id: '3 4 5 9',
  numbers: [ 3, 4, 5, 9 ],
  time: '9.11',
  solveRate: '85.1%',
  solutions: [ '(5×3-9)×4', '(9+4-5)×3' ],
  index: 817
}
{
  _id: '1 2 7 9',
  numbers: [ 1, 2, 7, 9 ],
  time: '9.13',
  solveRate: '93.4%',
  solutions: [ '9×2+7-1', '7×2+9+1' ],
  index: 818
}
{
  _id: '2 3 8 12',
  numbers: [ 2, 3, 8, 12 ],
  time: '9.13',
  solveRate: '93.3%',
  solutions: [
    '(12-8)×3×2',
    '(8-3×2)×12',
    '8×3/2+12',
    '(8-2)×12/3',
    '(12-8/2)×3',
    '(12/2-3)×8',
    '(8×3-12)×2',
    '(12/3+8)×2'
  ],
  index: 819
}
{
  _id: '5 7 8 9',
  numbers: [ 5, 7, 8, 9 ],
  time: '9.13',
  solveRate: '88.9%',
  solutions: [ '(7+5-9)×8', '8×5-9-7' ],
  index: 820
}
{
  _id: '1 1 4 10',
  numbers: [ 1, 1, 4, 10 ],
  time: '9.14',
  solveRate: '85.7%',
  solutions: [ '(1+1)×10+4' ],
  index: 821
}
{
  _id: '3 7 8 9',
  numbers: [ 3, 7, 8, 9 ],
  time: '9.14',
  solveRate: '87.1%',
  solutions: [ '(9+7-8)×3' ],
  index: 822
}
{
  _id: '1 7 12 12',
  numbers: [ 1, 7, 12, 12 ],
  time: '9.16',
  solveRate: '80.8%',
  solutions: [ '12×12/(7-1)' ],
  index: 823
}
{
  _id: '1 9 11 13',
  numbers: [ 1, 9, 11, 13 ],
  time: '9.18',
  solveRate: '87.9%',
  solutions: [ '(13-1)×(11-9)' ],
  index: 824
}
{
  _id: '2 8 8 10',
  numbers: [ 2, 8, 8, 10 ],
  time: '9.18',
  solveRate: '92.8%',
  solutions: [ '10+8+8-2', '(8-10/2)×8' ],
  index: 825
}
{
  _id: '3 3 3 9',
  numbers: [ 3, 3, 3, 9 ],
  time: '9.18',
  solveRate: '84.7%',
  solutions: [ '(9-3/3)×3' ],
  index: 826
}
{
  _id: '5 6 7 12',
  numbers: [ 5, 6, 7, 12 ],
  time: '9.18',
  solveRate: '84.8%',
  solutions: [ '(7+5)×12/6', '(7-5)×6+12' ],
  index: 827
}
{
  _id: '3 4 6 10',
  numbers: [ 3, 4, 6, 10 ],
  time: '9.19',
  solveRate: '89.9%',
  solutions: [ '6×3+10-4', '10×6/3+4', '(10+4-6)×3', '(10-4)×3+6' ],
  index: 828
}
{
  _id: '2 2 6 8',
  numbers: [ 2, 2, 6, 8 ],
  time: '9.21',
  solveRate: '95.5%',
  solutions: [
    '(8-2-2)×6',
    '(8-2×2)×6',
    '8×2+6+2',
    '(6+2)×2+8',
    '(8+6-2)×2',
    '(8-2)×(6-2)'
  ],
  index: 829
}
{
  _id: '2 3 4 4',
  numbers: [ 2, 3, 4, 4 ],
  time: '9.21',
  solveRate: '93.8%',
  solutions: [ '(3+2)×4+4', '4×4×3/2', '(4-2)×4×3' ],
  index: 830
}
{
  _id: '3 7 7 10',
  numbers: [ 3, 7, 7, 10 ],
  time: '9.22',
  solveRate: '89.1%',
  solutions: [ '7×3+10-7', '(10-7)×7+3' ],
  index: 831
}
{
  _id: '4 5 10 13',
  numbers: [ 4, 5, 10, 13 ],
  time: '9.26',
  solveRate: '91.1%',
  solutions: [ '13+10+5-4' ],
  index: 832
}
{
  _id: '5 8 9 12',
  numbers: [ 5, 8, 9, 12 ],
  time: '9.26',
  solveRate: '92.2%',
  solutions: [ '12+9+8-5', '12×8/(9-5)' ],
  index: 833
}
{
  _id: '2 3 3 9',
  numbers: [ 2, 3, 3, 9 ],
  time: '9.27',
  solveRate: '93.1%',
  solutions: [ '(3+2)×3+9', '(9+2-3)×3', '9×2+3+3', '(9-2)×3+3' ],
  index: 834
}
{
  _id: '2 7 9 13',
  numbers: [ 2, 7, 9, 13 ],
  time: '9.27',
  solveRate: '87.4%',
  solutions: [ '9×2+13-7', '13×2+7-9', '(9-7)×13-2' ],
  index: 835
}
{
  _id: '3 3 4 9',
  numbers: [ 3, 3, 4, 9 ],
  time: '9.3',
  solveRate: '92.2%',
  solutions: [ '4×3+9+3', '(9+3-4)×3', '(9/3+3)×4' ],
  index: 836
}
{
  _id: '3 4 6 12',
  numbers: [ 3, 4, 6, 12 ],
  time: '9.3',
  solveRate: '93.3%',
  solutions: [
    '12×4×3/6',
    '(12+6)×4/3',
    '(6+3)×4-12',
    '(6×3-12)×4',
    '(12-4)×(6-3)',
    '(6-3)×4+12',
    '(4-6/3)×12'
  ],
  index: 837
}
{
  _id: '2 4 4 7',
  numbers: [ 2, 4, 4, 7 ],
  time: '9.31',
  solveRate: '89.4%',
  solutions: [ '(7-4)×4×2', '(7-2)×4+4' ],
  index: 838
}
{
  _id: '2 5 6 10',
  numbers: [ 2, 5, 6, 10 ],
  time: '9.31',
  solveRate: '88.2%',
  solutions: [ '(5-2)×10-6', '10×6×2/5', '(10+5)×2-6', '(10/5+2)×6' ],
  index: 839
}
{
  _id: '2 3 6 11',
  numbers: [ 2, 3, 6, 11 ],
  time: '9.32',
  solveRate: '90.4%',
  solutions: [ '(11-3)×6/2', '(11-6/2)×3', '11×2+6/3', '11×6/3+2' ],
  index: 840
}
{
  _id: '4 5 5 7',
  numbers: [ 4, 5, 5, 7 ],
  time: '9.32',
  solveRate: '82.5%',
  solutions: [ '(7-5/5)×4' ],
  index: 841
}
{
  _id: '4 5 7 12',
  numbers: [ 4, 5, 7, 12 ],
  time: '9.32',
  solveRate: '87.7%',
  solutions: [ '(5+4-7)×12', '12×4/(7-5)' ],
  index: 842
}
{
  _id: '3 9 11 12',
  numbers: [ 3, 9, 11, 12 ],
  time: '9.33',
  solveRate: '90%',
  solutions: [ '(11-3)×(12-9)', '12/3+11+9', '(11+9-12)×3' ],
  index: 843
}
{
  _id: '3 8 9 12',
  numbers: [ 3, 8, 9, 12 ],
  time: '9.34',
  solveRate: '90.2%',
  solutions: [ '(8+3-9)×12', '(9-3)×(12-8)' ],
  index: 844
}
{
  _id: '6 6 6 8',
  numbers: [ 6, 6, 6, 8 ],
  time: '9.35',
  solveRate: '91.3%',
  solutions: [ '(6+6)×(8-6)', '(6+6-8)×6' ],
  index: 845
}
{
  _id: '4 5 7 11',
  numbers: [ 4, 5, 7, 11 ],
  time: '9.36',
  solveRate: '87.5%',
  solutions: [ '5×4+11-7', '(11-7)×5+4' ],
  index: 846
}
{
  _id: '5 9 9 11',
  numbers: [ 5, 9, 9, 11 ],
  time: '9.36',
  solveRate: '89.3%',
  solutions: [ '11+9+9-5' ],
  index: 847
}
{
  _id: '1 6 9 10',
  numbers: [ 1, 6, 9, 10 ],
  time: '9.39',
  solveRate: '91.9%',
  solutions: [ '10+9+6-1', '(10/6+1)×9' ],
  index: 848
}
{
  _id: '2 4 5 9',
  numbers: [ 2, 4, 5, 9 ],
  time: '9.39',
  solveRate: '86.6%',
  solutions: [ '(4+2)×(9-5)', '(9+2-5)×4', '(9+5)×2-4' ],
  index: 849
}
{
  _id: '4 7 11 12',
  numbers: [ 4, 7, 11, 12 ],
  time: '9.39',
  solveRate: '86.5%',
  solutions: [ '(11+7-12)×4' ],
  index: 850
}
{
  _id: '6 6 8 12',
  numbers: [ 6, 6, 8, 12 ],
  time: '9.42',
  solveRate: '90.8%',
  solutions: [ '8×6×6/12', '12×6-8×6', '(8-6)×6+12', '(12+6)×8/6' ],
  index: 851
}
{
  _id: '2 2 4 9',
  numbers: [ 2, 2, 4, 9 ],
  time: '9.45',
  solveRate: '90.6%',
  solutions: [ '9×2+4+2', '(9+4)×2-2' ],
  index: 852
}
{
  _id: '2 3 8 11',
  numbers: [ 2, 3, 8, 11 ],
  time: '9.45',
  solveRate: '92.8%',
  solutions: [ '11+8+3+2', '8×2+11-3', '(11-2)×8/3', '(11-3)×2+8' ],
  index: 853
}
{
  _id: '4 9 12 12',
  numbers: [ 4, 9, 12, 12 ],
  time: '9.45',
  solveRate: '89.5%',
  solutions: [ '(12-4)×(12-9)', '12/4+12+9', '(12×9-12)/4', '(12-9)×4+12' ],
  index: 854
}
{
  _id: '2 6 8 8',
  numbers: [ 2, 6, 8, 8 ],
  time: '9.46',
  solveRate: '92.7%',
  solutions: [ '8+8+6+2', '(6-2)×8-8', '(8-8/2)×6' ],
  index: 855
}
{
  _id: '4 4 5 7',
  numbers: [ 4, 4, 5, 7 ],
  time: '9.47',
  solveRate: '85.3%',
  solutions: [ '(7+4-5)×4' ],
  index: 856
}
{
  _id: '5 6 8 9',
  numbers: [ 5, 6, 8, 9 ],
  time: '9.48',
  solveRate: '90%',
  solutions: [ '(8+5-9)×6', '(9+6)×8/5' ],
  index: 857
}
{
  _id: '1 5 5 11',
  numbers: [ 1, 5, 5, 11 ],
  time: '9.49',
  solveRate: '88%',
  solutions: [ '(11-5)×(5-1)' ],
  index: 858
}
{
  _id: '3 5 9 13',
  numbers: [ 3, 5, 9, 13 ],
  time: '9.49',
  solveRate: '91.4%',
  solutions: [ '13+9+5-3', '(13-5)×9/3', '(13×9+3)/5' ],
  index: 859
}
{
  _id: '6 7 9 12',
  numbers: [ 6, 7, 9, 12 ],
  time: '9.49',
  solveRate: '86.7%',
  solutions: [ '(9+7-12)×6', '(9-7)×6+12' ],
  index: 860
}
{
  _id: '3 3 5 9',
  numbers: [ 3, 3, 5, 9 ],
  time: '9.5',
  solveRate: '87%',
  solutions: [ '(3+3)×(9-5)', '(5+3)×9/3', '(9+3)×(5-3)', '(9/3+5)×3' ],
  index: 861
}
{
  _id: '4 7 8 13',
  numbers: [ 4, 7, 8, 13 ],
  time: '9.5',
  solveRate: '90.7%',
  solutions: [ '13+8+7-4', '(13-7)×(8-4)' ],
  index: 862
}
{
  _id: '3 7 8 13',
  numbers: [ 3, 7, 8, 13 ],
  time: '9.51',
  solveRate: '84.2%',
  solutions: [ '(13-7-3)×8', '13×3-8-7' ],
  index: 863
}
{
  _id: '3 3 6 9',
  numbers: [ 3, 3, 6, 9 ],
  time: '9.55',
  solveRate: '94.2%',
  solutions: [
    '3×3+9+6',
    '6×3+9-3',
    '9×3+3-6',
    '(6-3)×9-3',
    '(9+3)×6/3',
    '(9-3)×3+6'
  ],
  index: 864
}
{
  _id: '2 4 6 13',
  numbers: [ 2, 4, 6, 13 ],
  time: '9.57',
  solveRate: '87.4%',
  solutions: [ '13×2+4-6', '(6-4)×13-2', '(13-4)×2+6', '4/(13/6-2)' ],
  index: 865
}
{
  _id: '1 5 6 13',
  numbers: [ 1, 5, 6, 13 ],
  time: '9.62',
  solveRate: '90.2%',
  solutions: [ '(13+6+5)×1' ],
  index: 866
}
{
  _id: '6 6 8 8',
  numbers: [ 6, 6, 8, 8 ],
  time: '9.62',
  solveRate: '86.1%',
  solutions: [ '8×6/(8-6)' ],
  index: 867
}
{
  _id: '2 3 4 10',
  numbers: [ 2, 3, 4, 10 ],
  time: '9.63',
  solveRate: '92%',
  solutions: [ '10×3-4-2', '(10+2-4)×3', '(10-4/2)×3', '4×3+10+2', '(4+3)×2+10' ],
  index: 868
}
{
  _id: '3 8 8 11',
  numbers: [ 3, 8, 8, 11 ],
  time: '9.63',
  solveRate: '89.4%',
  solutions: [ '11+8+8-3' ],
  index: 869
}
{
  _id: '4 9 9 10',
  numbers: [ 4, 9, 9, 10 ],
  time: '9.64',
  solveRate: '90.2%',
  solutions: [ '10+9+9-4' ],
  index: 870
}
{
  _id: '3 3 3 5',
  numbers: [ 3, 3, 3, 5 ],
  time: '9.65',
  solveRate: '85.8%',
  solutions: [ '5×3+3×3' ],
  index: 871
}
{
  _id: '3 3 7 9',
  numbers: [ 3, 3, 7, 9 ],
  time: '9.66',
  solveRate: '90.6%',
  solutions: [ '7×3+9/3', '(9-3)×(7-3)', '9×7/3+3' ],
  index: 872
}
{
  _id: '2 3 9 13',
  numbers: [ 2, 3, 9, 13 ],
  time: '9.69',
  solveRate: '87.4%',
  solutions: [ '(13-9)×3×2', '(13-2)×3-9', '(13×3+9)/2' ],
  index: 873
}
{
  _id: '2 2 2 5',
  numbers: [ 2, 2, 2, 5 ],
  time: '9.7',
  solveRate: '78.9%',
  solutions: [ '(5×2+2)×2' ],
  index: 874
}
{
  _id: '5 6 9 12',
  numbers: [ 5, 6, 9, 12 ],
  time: '9.72',
  solveRate: '87.4%',
  solutions: [ '(6+5-9)×12', '(12-6)×(9-5)' ],
  index: 875
}
{
  _id: '3 6 9 11',
  numbers: [ 3, 6, 9, 11 ],
  time: '9.74',
  solveRate: '86.9%',
  solutions: [ '(6-3)×11-9', '(11-3)×(9-6)', '(11+6-9)×3', '(11-6)×3+9' ],
  index: 876
}
{
  _id: '6 9 10 11',
  numbers: [ 6, 9, 10, 11 ],
  time: '9.75',
  solveRate: '91.4%',
  solutions: [ '11+10+9-6', '10×9-11×6' ],
  index: 877
}
{
  _id: '2 6 12 12',
  numbers: [ 2, 6, 12, 12 ],
  time: '9.76',
  solveRate: '89.3%',
  solutions: [ '12×6/2-12', '12/2+12+6', '(12+6)×2-12', '(12-6)×2+12' ],
  index: 878
}
{
  _id: '6 12 13 13',
  numbers: [ 6, 12, 13, 13 ],
  time: '9.76',
  solveRate: '87.4%',
  solutions: [ '13+13-12/6' ],
  index: 879
}
{
  _id: '1 2 5 10',
  numbers: [ 1, 2, 5, 10 ],
  time: '9.77',
  solveRate: '91.8%',
  solutions: [ '10×2+5-1', '10×5/2-1' ],
  index: 880
}
{
  _id: '1 7 9 10',
  numbers: [ 1, 7, 9, 10 ],
  time: '9.77',
  solveRate: '86.8%',
  solutions: [ '(9-1)×(10-7)' ],
  index: 881
}
{
  _id: '2 4 5 11',
  numbers: [ 2, 4, 5, 11 ],
  time: '9.78',
  solveRate: '87.4%',
  solutions: [ '4×2+11+5', '(11+5-4)×2' ],
  index: 882
}
{
  _id: '3 3 6 13',
  numbers: [ 3, 3, 6, 13 ],
  time: '9.78',
  solveRate: '86.6%',
  solutions: [ '(13-3×3)×6', '(13-3)×3-6', '(13-6)×3+3' ],
  index: 883
}
{
  _id: '4 4 6 13',
  numbers: [ 4, 4, 6, 13 ],
  time: '9.78',
  solveRate: '82.9%',
  solutions: [ '(13-6)×4-4' ],
  index: 884
}
{
  _id: '6 11 11 12',
  numbers: [ 6, 11, 11, 12 ],
  time: '9.79',
  solveRate: '86.3%',
  solutions: [ '12/6+11+11' ],
  index: 885
}
{
  _id: '3 3 6 10',
  numbers: [ 3, 3, 6, 10 ],
  time: '9.8',
  solveRate: '86.5%',
  solutions: [ '(3+3)×(10-6)', '(10-3-3)×6', '(6×3-10)×3', '(10-6/3)×3' ],
  index: 886
}
{
  _id: '3 4 8 11',
  numbers: [ 3, 4, 8, 11 ],
  time: '9.8',
  solveRate: '87.4%',
  solutions: [ '(11+3-8)×4', '8×4+3-11', '(11-3)×4-8', '8/(4-11/3)' ],
  index: 887
}
{
  _id: '4 6 7 10',
  numbers: [ 4, 6, 7, 10 ],
  time: '9.84',
  solveRate: '86.6%',
  solutions: [ '(6-4)×7+10', '7×4+6-10', '(7-4)×10-6', '(10-6)×7-4' ],
  index: 888
}
{
  _id: '6 10 12 12',
  numbers: [ 6, 10, 12, 12 ],
  time: '9.85',
  solveRate: '88.9%',
  solutions: [ '12/6+12+10', '(12-10)×6+12' ],
  index: 889
}
{
  _id: '4 9 11 12',
  numbers: [ 4, 9, 11, 12 ],
  time: '9.86',
  solveRate: '89%',
  solutions: [ '(9+4-11)×12', '12×11/4-9', '12×4/(11-9)' ],
  index: 890
}
{
  _id: '7 8 9 13',
  numbers: [ 7, 8, 9, 13 ],
  time: '9.86',
  solveRate: '84%',
  solutions: [ '(9+7-13)×8' ],
  index: 891
}
{
  _id: '5 7 9 13',
  numbers: [ 5, 7, 9, 13 ],
  time: '9.87',
  solveRate: '91%',
  solutions: [ '13+9+7-5', '(13-7)×(9-5)' ],
  index: 892
}
{
  _id: '6 8 9 11',
  numbers: [ 6, 8, 9, 11 ],
  time: '9.87',
  solveRate: '84.6%',
  solutions: [ '8×6/(11-9)' ],
  index: 893
}
{
  _id: '3 3 7 12',
  numbers: [ 3, 3, 7, 12 ],
  time: '9.88',
  solveRate: '84.5%',
  solutions: [ '(3×3-7)×12', '(12+3-7)×3', '(7-3)×3+12' ],
  index: 894
}
{
  _id: '1 11 11 13',
  numbers: [ 1, 11, 11, 13 ],
  time: '9.89',
  solveRate: '87.9%',
  solutions: [ '(11+1)×(13-11)', '(13/11+1)×11' ],
  index: 895
}
{
  _id: '2 4 12 12',
  numbers: [ 2, 4, 12, 12 ],
  time: '9.89',
  solveRate: '85.4%',
  solutions: [ '12×12/(4+2)', '12×4-12×2', '(12/2-4)×12', '(12-12/2)×4' ],
  index: 896
}
{
  _id: '5 5 6 11',
  numbers: [ 5, 5, 6, 11 ],
  time: '9.89',
  solveRate: '87.4%',
  solutions: [ '6×5+5-11', '(11-5)×5-6' ],
  index: 897
}
{
  _id: '6 8 9 9',
  numbers: [ 6, 8, 9, 9 ],
  time: '9.89',
  solveRate: '86.3%',
  solutions: [ '(9+9)×8/6', '9×8/(9-6)' ],
  index: 898
}
{
  _id: '3 4 5 6',
  numbers: [ 3, 4, 5, 6 ],
  time: '9.9',
  solveRate: '84.2%',
  solutions: [ '(5+3-4)×6' ],
  index: 899
}
{
  _id: '5 5 5 9',
  numbers: [ 5, 5, 5, 9 ],
  time: '9.92',
  solveRate: '87.7%',
  solutions: [ '9+5+5+5' ],
  index: 900
}
{
  _id: '1 2 4 7',
  numbers: [ 1, 2, 4, 7 ],
  time: '9.94',
  solveRate: '89.4%',
  solutions: [ '(7+1-2)×4', '(7+4+1)×2' ],
  index: 901
}
{
  _id: '3 4 4 13',
  numbers: [ 3, 4, 4, 13 ],
  time: '9.95',
  solveRate: '89%',
  solutions: [ '13+4+4+3', '(13-4-3)×4' ],
  index: 902
}
{
  _id: '4 5 6 10',
  numbers: [ 4, 5, 6, 10 ],
  time: '9.95',
  solveRate: '90.5%',
  solutions: [ '5×4+10-6', '6×5+4-10', '(10-4)×5-6', '(10-6)×5+4' ],
  index: 903
}
{
  _id: '4 6 6 9',
  numbers: [ 4, 6, 6, 9 ],
  time: '9.95',
  solveRate: '88%',
  solutions: [ '(6-4)×9+6', '9×4-6-6', '(9-4)×6-6' ],
  index: 904
}
{
  _id: '6 7 8 9',
  numbers: [ 6, 7, 8, 9 ],
  time: '9.96',
  solveRate: '84.7%',
  solutions: [ '8×6/(9-7)' ],
  index: 905
}
{
  _id: '2 5 8 11',
  numbers: [ 2, 5, 8, 11 ],
  time: '9.97',
  solveRate: '86%',
  solutions: [ '(11-5)×8/2', '(11+5)×2-8' ],
  index: 906
}
{
  _id: '1 4 4 8',
  numbers: [ 1, 4, 4, 8 ],
  time: '9.98',
  solveRate: '89.6%',
  solutions: [ '(8-1)×4-4', '(4×4+8)×1' ],
  index: 907
}
{
  _id: '4 5 7 9',
  numbers: [ 4, 5, 7, 9 ],
  time: '9.99',
  solveRate: '86.9%',
  solutions: [ '7×4+5-9', '(7-4)×5+9', '9×4-7-5', '(9-5)×7-4' ],
  index: 908
}
{
  _id: '1 3 3 11',
  numbers: [ 1, 3, 3, 11 ],
  time: '10',
  solveRate: '88.2%',
  solutions: [ '(11-3)×3×1' ],
  index: 909
}
{
  _id: '1 3 5 9',
  numbers: [ 1, 3, 5, 9 ],
  time: '10.01',
  solveRate: '90.5%',
  solutions: [ '(9-3)×(5-1)', '(5×3+9)×1', '(5/3+1)×9' ],
  index: 910
}
{
  _id: '1 5 10 11',
  numbers: [ 1, 5, 10, 11 ],
  time: '10.03',
  solveRate: '86.5%',
  solutions: [ '(11+1)×10/5' ],
  index: 911
}
{
  _id: '1 8 10 11',
  numbers: [ 1, 8, 10, 11 ],
  time: '10.04',
  solveRate: '87%',
  solutions: [ '(11+1)×(10-8)' ],
  index: 912
}
{
  _id: '2 4 8 9',
  numbers: [ 2, 4, 8, 9 ],
  time: '10.04',
  solveRate: '84.2%',
  solutions: [ '(9-4-2)×8' ],
  index: 913
}
{
  _id: '2 3 6 9',
  numbers: [ 2, 3, 6, 9 ],
  time: '10.05',
  solveRate: '93.2%',
  solutions: [
    '(9-3-2)×6',
    '(6+2)×9/3',
    '6×2+9+3',
    '(9-3)×(6-2)',
    '(3-2/6)×9',
    '9×6/2-3',
    '9×3-6/2',
    '(9+6-3)×2'
  ],
  index: 914
}
{
  _id: '1 4 5 13',
  numbers: [ 1, 4, 5, 13 ],
  time: '10.06',
  solveRate: '88%',
  solutions: [ '(13-5)×(4-1)' ],
  index: 915
}
{
  _id: '2 2 7 12',
  numbers: [ 2, 2, 7, 12 ],
  time: '10.06',
  solveRate: '83.1%',
  solutions: [ '7×2+12-2' ],
  index: 916
}
{
  _id: '1 5 9 13',
  numbers: [ 1, 5, 9, 13 ],
  time: '10.07',
  solveRate: '85.1%',
  solutions: [ '(5+1)×(13-9)' ],
  index: 917
}
{
  _id: '6 7 8 11',
  numbers: [ 6, 7, 8, 11 ],
  time: '10.08',
  solveRate: '84.3%',
  solutions: [ '(11+7)×8/6', '(8+7-11)×6' ],
  index: 918
}
{
  _id: '3 4 6 11',
  numbers: [ 3, 4, 6, 11 ],
  time: '10.09',
  solveRate: '89%',
  solutions: [ '11+6+4+3', '(11-4-3)×6', '6/(3-11/4)' ],
  index: 919
}
{
  _id: '5 6 7 13',
  numbers: [ 5, 6, 7, 13 ],
  time: '10.1',
  solveRate: '86.7%',
  solutions: [ '6×5+7-13', '(13+7)×6/5', '7×6-13-5', '(13-7)×5-6' ],
  index: 920
}
{
  _id: '2 4 6 12',
  numbers: [ 2, 4, 6, 12 ],
  time: '10.11',
  solveRate: '94.7%',
  solutions: [
    '12+6+4+2',   '(4+2)×6-12',
    '(4×2-6)×12', '(12-4×2)×6',
    '(4-2)×6+12', '6×4/2+12',
    '(6+2)×12/4', '(12-4)×6/2',
    '(6×4-12)×2', '12/(2-6/4)'
  ],
  index: 921
}
{
  _id: '1 2 8 13',
  numbers: [ 1, 2, 8, 13 ],
  time: '10.13',
  solveRate: '91.4%',
  solutions: [ '13+8+2+1' ],
  index: 922
}
{
  _id: '3 3 6 7',
  numbers: [ 3, 3, 6, 7 ],
  time: '10.13',
  solveRate: '88.7%',
  solutions: [ '7×3+6-3', '(6-3)×7+3', '(7+3)×3-6' ],
  index: 923
}
{
  _id: '6 6 7 12',
  numbers: [ 6, 6, 7, 12 ],
  time: '10.13',
  solveRate: '84%',
  solutions: [ '7×6-12-6', '(12-7)×6-6' ],
  index: 924
}
{
  _id: '2 4 6 7',
  numbers: [ 2, 4, 6, 7 ],
  time: '10.15',
  solveRate: '90.1%',
  solutions: [ '(6+2)×(7-4)', '7×4+2-6', '(6-2)×7-4', '7×2+6+4', '6/(2-7/4)' ],
  index: 925
}
{
  _id: '7 9 9 13',
  numbers: [ 7, 9, 9, 13 ],
  time: '10.15',
  solveRate: '88.2%',
  solutions: [ '13+9+9-7' ],
  index: 926
}
{
  _id: '5 5 8 10',
  numbers: [ 5, 5, 8, 10 ],
  time: '10.16',
  solveRate: '81.3%',
  solutions: [ '(10+5)×8/5', '(5-10/5)×8' ],
  index: 927
}
{
  _id: '5 6 8 12',
  numbers: [ 5, 6, 8, 12 ],
  time: '10.16',
  solveRate: '88.3%',
  solutions: [ '(12+8)×6/5', '12×6/(8-5)', '(5-12/6)×8' ],
  index: 928
}
{
  _id: '4 7 9 13',
  numbers: [ 4, 7, 9, 13 ],
  time: '10.17',
  solveRate: '84.4%',
  solutions: [ '7×4+9-13', '(13-9)×7-4' ],
  index: 929
}
{
  _id: '6 9 9 11',
  numbers: [ 6, 9, 9, 11 ],
  time: '10.2',
  solveRate: '82.5%',
  solutions: [ '(9-6)×11-9', '(11-9)×9+6' ],
  index: 930
}
{
  _id: '6 9 12 13',
  numbers: [ 6, 9, 12, 13 ],
  time: '10.2',
  solveRate: '88.2%',
  solutions: [ '(9+6-13)×12', '(12-6)×(13-9)', '12/6+13+9' ],
  index: 931
}
{
  _id: '5 8 11 12',
  numbers: [ 5, 8, 11, 12 ],
  time: '10.21',
  solveRate: '87.1%',
  solutions: [ '(8+5-11)×12', '(11+5)×12/8', '(11-5)×(12-8)' ],
  index: 932
}
{
  _id: '3 6 9 12',
  numbers: [ 3, 6, 9, 12 ],
  time: '10.22',
  solveRate: '92.7%',
  solutions: [ '12×6×3/9', '12+9+6-3', '(9+3)×12/6', '(9-3)×6-12' ],
  index: 933
}
{
  _id: '5 6 8 10',
  numbers: [ 5, 6, 8, 10 ],
  time: '10.23',
  solveRate: '87%',
  solutions: [ '8×6×5/10', '8×5-10-6', '(8-5)×10-6' ],
  index: 934
}
{
  _id: '2 7 12 13',
  numbers: [ 2, 7, 12, 13 ],
  time: '10.24',
  solveRate: '80.7%',
  solutions: [ '12/(7-13/2)', '(13-7)×2+12' ],
  index: 935
}
{
  _id: '2 5 10 10',
  numbers: [ 2, 5, 10, 10 ],
  time: '10.3',
  solveRate: '78.3%',
  solutions: [ '(10+2)×10/5', '(10/5+10)×2' ],
  index: 936
}
{
  _id: '6 11 12 13',
  numbers: [ 6, 11, 12, 13 ],
  time: '10.3',
  solveRate: '80.2%',
  solutions: [ '(13-11)×6+12' ],
  index: 937
}
{
  _id: '3 4 9 13',
  numbers: [ 3, 4, 9, 13 ],
  time: '10.32',
  solveRate: '79.7%',
  solutions: [ '(13+4-9)×3' ],
  index: 938
}
{
  _id: '1 6 6 6',
  numbers: [ 1, 6, 6, 6 ],
  time: '10.33',
  solveRate: '85.7%',
  solutions: [ '(6-1)×6-6' ],
  index: 939
}
{
  _id: '2 2 8 8',
  numbers: [ 2, 2, 8, 8 ],
  time: '10.33',
  solveRate: '91.5%',
  solutions: [ '(2+2)×8-8', '8×2×2-8', '(8-2)×8/2', '(8/2+8)×2' ],
  index: 940
}
{
  _id: '2 6 8 12',
  numbers: [ 2, 6, 8, 12 ],
  time: '10.33',
  solveRate: '94%',
  solutions: [
    '12+8+6-2',
    '12×8/(6-2)',
    '(8×2-12)×6',
    '(8-2)×6-12',
    '(12-6)×8/2',
    '(6-8/2)×12',
    '8×6-12×2'
  ],
  index: 941
}
{
  _id: '6 10 12 13',
  numbers: [ 6, 10, 12, 13 ],
  time: '10.34',
  solveRate: '82.8%',
  solutions: [ '12×6/(13-10)' ],
  index: 942
}
{
  _id: '1 2 7 11',
  numbers: [ 1, 2, 7, 11 ],
  time: '10.39',
  solveRate: '88.1%',
  solutions: [ '7×2+11-1' ],
  index: 943
}
{
  _id: '1 3 9 9',
  numbers: [ 1, 3, 9, 9 ],
  time: '10.39',
  solveRate: '85.4%',
  solutions: [ '(9-1)×9/3' ],
  index: 944
}
{
  _id: '2 3 9 10',
  numbers: [ 2, 3, 9, 10 ],
  time: '10.43',
  solveRate: '90%',
  solutions: [ '10+9+3+2', '10×3/2+9', '(9×2-10)×3', '(10-2)×9/3' ],
  index: 945
}
{
  _id: '1 4 4 11',
  numbers: [ 1, 4, 4, 11 ],
  time: '10.44',
  solveRate: '86.7%',
  solutions: [ '(11-4-1)×4' ],
  index: 946
}
{
  _id: '4 5 10 12',
  numbers: [ 4, 5, 10, 12 ],
  time: '10.44',
  solveRate: '86.3%',
  solutions: [ '12×5×4/10', '(4-10/5)×12' ],
  index: 947
}
{
  _id: '8 8 10 12',
  numbers: [ 8, 8, 10, 12 ],
  time: '10.44',
  solveRate: '78.8%',
  solutions: [ '(12-10)×8+8' ],
  index: 948
}
{
  _id: '4 5 6 8',
  numbers: [ 4, 5, 6, 8 ],
  time: '10.49',
  solveRate: '87.6%',
  solutions: [ '(5+4-6)×8' ],
  index: 949
}
{
  _id: '6 7 10 12',
  numbers: [ 6, 7, 10, 12 ],
  time: '10.49',
  solveRate: '85.4%',
  solutions: [ '12×7/6+10', '12×7-10×6', '12×6/(10-7)' ],
  index: 950
}
{
  _id: '1 2 3 13',
  numbers: [ 1, 2, 3, 13 ],
  time: '10.5',
  solveRate: '91.9%',
  solutions: [ '13×2+1-3', '(3-1)×13-2' ],
  index: 951
}
{
  _id: '7 8 8 12',
  numbers: [ 7, 8, 8, 12 ],
  time: '10.5',
  solveRate: '83.9%',
  solutions: [ '(8+7-12)×8' ],
  index: 952
}
{
  _id: '2 3 6 6',
  numbers: [ 2, 3, 6, 6 ],
  time: '10.51',
  solveRate: '91.9%',
  solutions: [
    '(3+2)×6-6',
    '6×6×2/3',
    '(6+2)×(6-3)',
    '(6+3)×2+6',
    '(6×3-6)×2',
    '(6/3+2)×6'
  ],
  index: 953
}
{
  _id: '1 3 6 11',
  numbers: [ 1, 3, 6, 11 ],
  time: '10.52',
  solveRate: '88.2%',
  solutions: [ '(11+1)×6/3', '(11-1)×3-6' ],
  index: 954
}
{
  _id: '1 2 2 9',
  numbers: [ 1, 2, 2, 9 ],
  time: '10.53',
  solveRate: '82.6%',
  solutions: [ '(9+2+1)×2' ],
  index: 955
}
{
  _id: '2 6 8 13',
  numbers: [ 2, 6, 8, 13 ],
  time: '10.55',
  solveRate: '87.2%',
  solutions: [ '6/2+13+8', '13×2+6-8', '(8-6)×13-2' ],
  index: 956
}
{
  _id: '1 3 8 13',
  numbers: [ 1, 3, 8, 13 ],
  time: '10.57',
  solveRate: '90.5%',
  solutions: [ '(13+8+3)×1' ],
  index: 957
}
{
  _id: '4 4 7 10',
  numbers: [ 4, 4, 7, 10 ],
  time: '10.6',
  solveRate: '75.4%',
  solutions: [ '(4+4)×(10-7)' ],
  index: 958
}
{
  _id: '5 10 12 13',
  numbers: [ 5, 10, 12, 13 ],
  time: '10.6',
  solveRate: '83.5%',
  solutions: [ '(10+5-13)×12' ],
  index: 959
}
{
  _id: '2 2 5 12',
  numbers: [ 2, 2, 5, 12 ],
  time: '10.62',
  solveRate: '85%',
  solutions: [ '5×2+12+2', '12/(5/2-2)' ],
  index: 960
}
{
  _id: '1 7 10 13',
  numbers: [ 1, 7, 10, 13 ],
  time: '10.63',
  solveRate: '83.9%',
  solutions: [ '(7+1)×(13-10)' ],
  index: 961
}
{
  _id: '2 3 6 13',
  numbers: [ 2, 3, 6, 13 ],
  time: '10.63',
  solveRate: '90.2%',
  solutions: [ '13+6+3+2', '13×2-6/3', '13×6/3-2' ],
  index: 962
}
{
  _id: '3 4 6 8',
  numbers: [ 3, 4, 6, 8 ],
  time: '10.63',
  solveRate: '90.9%',
  solutions: [ '(8-6)×4×3', '(4×3-8)×6', '(8+4)×6/3', '(8-6/3)×4', '(8/4+6)×3' ],
  index: 963
}
{
  _id: '3 9 10 13',
  numbers: [ 3, 9, 10, 13 ],
  time: '10.64',
  solveRate: '83.2%',
  solutions: [ '9×3+10-13', '(13-10)×9-3' ],
  index: 964
}
{
  _id: '3 3 4 11',
  numbers: [ 3, 3, 4, 11 ],
  time: '10.67',
  solveRate: '88.7%',
  solutions: [ '3×3+11+4', '(11-4)×3+3' ],
  index: 965
}
{
  _id: '1 7 9 11',
  numbers: [ 1, 7, 9, 11 ],
  time: '10.68',
  solveRate: '85.2%',
  solutions: [ '(11+1)×(9-7)' ],
  index: 966
}
{
  _id: '1 9 10 13',
  numbers: [ 1, 9, 10, 13 ],
  time: '10.69',
  solveRate: '83.2%',
  solutions: [ '(9-1)×(13-10)' ],
  index: 967
}
{
  _id: '2 5 7 7',
  numbers: [ 2, 5, 7, 7 ],
  time: '10.7',
  solveRate: '82.9%',
  solutions: [ '5×2+7+7' ],
  index: 968
}
{
  _id: '1 2 6 10',
  numbers: [ 1, 2, 6, 10 ],
  time: '10.73',
  solveRate: '87%',
  solutions: [ '(2+1)×10-6', '(6+1)×2+10', '(10-1)×2+6', '(10/2-1)×6' ],
  index: 969
}
{
  _id: '1 5 12 12',
  numbers: [ 1, 5, 12, 12 ],
  time: '10.73',
  solveRate: '81.5%',
  solutions: [ '12×12/(5+1)' ],
  index: 970
}
{
  _id: '4 4 8 12',
  numbers: [ 4, 4, 8, 12 ],
  time: '10.75',
  solveRate: '92%',
  solutions: [ '12×4×4/8', '8×4+4-12', '(4-8/4)×12', '(12-4)×4-8' ],
  index: 971
}
{
  _id: '7 7 8 11',
  numbers: [ 7, 7, 8, 11 ],
  time: '10.8',
  solveRate: '80.6%',
  solutions: [ '(7+7-11)×8' ],
  index: 972
}
{
  _id: '1 3 7 10',
  numbers: [ 1, 3, 7, 10 ],
  time: '10.81',
  solveRate: '86.5%',
  solutions: [ '(3-1)×7+10', '10×3+1-7' ],
  index: 973
}
{
  _id: '5 6 6 8',
  numbers: [ 5, 6, 6, 8 ],
  time: '10.81',
  solveRate: '81.6%',
  solutions: [ '(8-5)×6+6' ],
  index: 974
}
{
  _id: '2 3 4 7',
  numbers: [ 2, 3, 4, 7 ],
  time: '10.83',
  solveRate: '86.9%',
  solutions: [ '(7+2-3)×4', '(4+2)×(7-3)', '(7+3)×2+4' ],
  index: 975
}
{
  _id: '3 3 9 12',
  numbers: [ 3, 3, 9, 12 ],
  time: '10.88',
  solveRate: '87%',
  solutions: [ '12×3-9-3', '(9+3)×3-12', '(9-3)×12/3' ],
  index: 976
}
{
  _id: '3 5 7 10',
  numbers: [ 3, 5, 7, 10 ],
  time: '10.88',
  solveRate: '84.9%',
  solutions: [ '(5+3)×(10-7)', '(5-3)×7+10', '(10+5-7)×3' ],
  index: 977
}
{
  _id: '3 4 6 6',
  numbers: [ 3, 4, 6, 6 ],
  time: '10.89',
  solveRate: '90.6%',
  solutions: [ '4×3+6+6', '6×6-4×3', '(6+4)×3-6', '(6+6-4)×3' ],
  index: 978
}
{
  _id: '6 8 8 12',
  numbers: [ 6, 8, 8, 12 ],
  time: '10.89',
  solveRate: '88.3%',
  solutions: [ '12×8/6+8', '(8+8-12)×6' ],
  index: 979
}
{
  _id: '2 3 10 12',
  numbers: [ 2, 3, 10, 12 ],
  time: '10.92',
  solveRate: '86.4%',
  solutions: [
    '12×10/(3+2)',
    '12×3-10-2',
    '(10+2)×3-12',
    '10×2+12/3',
    '(10×2-12)×3',
    '(10/2-3)×12',
    '10×3-12/2'
  ],
  index: 980
}
{
  _id: '2 6 7 11',
  numbers: [ 2, 6, 7, 11 ],
  time: '10.93',
  solveRate: '82.8%',
  solutions: [ '(11+7-6)×2' ],
  index: 981
}
{
  _id: '1 2 7 12',
  numbers: [ 1, 2, 7, 12 ],
  time: '10.94',
  solveRate: '77.8%',
  solutions: [ '(7-1)×2+12' ],
  index: 982
}
{
  _id: '4 10 12 13',
  numbers: [ 4, 10, 12, 13 ],
  time: '10.97',
  solveRate: '81.4%',
  solutions: [ '(12-4)×(13-10)', '(13-10)×4+12' ],
  index: 983
}
{
  _id: '5 8 8 8',
  numbers: [ 5, 8, 8, 8 ],
  time: '10.97',
  solveRate: '80.3%',
  solutions: [ '8×5-8-8', '8×8-8×5' ],
  index: 984
}
{
  _id: '3 4 8 12',
  numbers: [ 3, 4, 8, 12 ],
  time: '10.98',
  solveRate: '88.2%',
  solutions: [
    '12×4/3+8',
    '12×4-8×3',
    '12×3-8-4',
    '(8+4)×3-12',
    '(12+4-8)×3',
    '(8-4)×3+12'
  ],
  index: 985
}
{
  _id: '5 9 12 12',
  numbers: [ 5, 9, 12, 12 ],
  time: '10.98',
  solveRate: '83.1%',
  solutions: [ '(9+5-12)×12', '(12×9+12)/5' ],
  index: 986
}
{
  _id: '2 3 3 10',
  numbers: [ 2, 3, 3, 10 ],
  time: '10.99',
  solveRate: '84.8%',
  solutions: [ '10×3-3×2', '(10/2+3)×3' ],
  index: 987
}
{
  _id: '2 3 4 9',
  numbers: [ 2, 3, 4, 9 ],
  time: '11.01',
  solveRate: '88.4%',
  solutions: [ '9×4×2/3', '(9+3)×(4-2)', '(9+3)×4/2' ],
  index: 988
}
{
  _id: '2 5 6 6',
  numbers: [ 2, 5, 6, 6 ],
  time: '11.02',
  solveRate: '78.2%',
  solutions: [ '(5×2-6)×6', '(5-2)×6+6' ],
  index: 989
}
{
  _id: '5 5 8 13',
  numbers: [ 5, 5, 8, 13 ],
  time: '11.03',
  solveRate: '80.8%',
  solutions: [ '(13-5-5)×8', '(13-5)×(8-5)' ],
  index: 990
}
{
  _id: '2 2 8 9',
  numbers: [ 2, 2, 8, 9 ],
  time: '11.04',
  solveRate: '87.3%',
  solutions: [ '9×2+8-2' ],
  index: 991
}
{
  _id: '2 4 5 6',
  numbers: [ 2, 4, 5, 6 ],
  time: '11.06',
  solveRate: '91.1%',
  solutions: [ '6×5-4-2', '(4+2)×5-6', '5×4+6-2', '(6-2)×5+4', '(5+4)×2+6' ],
  index: 992
}
{
  _id: '2 4 6 11',
  numbers: [ 2, 4, 6, 11 ],
  time: '11.06',
  solveRate: '85.1%',
  solutions: [ '11×2+6-4', '(6-4)×11+2', '(11+4)×2-6', '4/(2-11/6)' ],
  index: 993
}
{
  _id: '4 4 9 12',
  numbers: [ 4, 4, 9, 12 ],
  time: '11.11',
  solveRate: '78.3%',
  solutions: [ '(4+4)×(12-9)', '(9-12/4)×4' ],
  index: 994
}
{
  _id: '1 5 6 7',
  numbers: [ 1, 5, 6, 7 ],
  time: '11.12',
  solveRate: '88.8%',
  solutions: [ '6×5+1-7', '(7-1)×5-6' ],
  index: 995
}
{
  _id: '3 4 6 9',
  numbers: [ 3, 4, 6, 9 ],
  time: '11.14',
  solveRate: '82.8%',
  solutions: [ '(9+3-6)×4', '(9+3)×(6-4)' ],
  index: 996
}
{
  _id: '4 8 11 13',
  numbers: [ 4, 8, 11, 13 ],
  time: '11.15',
  solveRate: '82.7%',
  solutions: [ '(8+4)×(13-11)', '(11+8-13)×4' ],
  index: 997
}
{
  _id: '5 8 10 11',
  numbers: [ 5, 8, 10, 11 ],
  time: '11.15',
  solveRate: '87.1%',
  solutions: [ '11+10+8-5' ],
  index: 998
}
{
  _id: '7 8 10 10',
  numbers: [ 7, 8, 10, 10 ],
  time: '11.18',
  solveRate: '79.3%',
  solutions: [ '(10-8)×7+10' ],
  index: 999
}
{
  _id: '3 3 5 12',
  numbers: [ 3, 3, 5, 12 ],
  time: '11.21',
  solveRate: '86.8%',
  solutions: [ '5×3+12-3', '(12-5)×3+3' ],
  index: 1000
}
{
  _id: '4 9 10 13',
  numbers: [ 4, 9, 10, 13 ],
  time: '11.21',
  solveRate: '82.6%',
  solutions: [ '(10-4)×(13-9)', '(10+9-13)×4' ],
  index: 1001
}
{
  _id: '2 3 4 5',
  numbers: [ 2, 3, 4, 5 ],
  time: '11.22',
  solveRate: '84.6%',
  solutions: [ '(5+3-2)×4', '(5+4+3)×2' ],
  index: 1002
}
{
  _id: '3 6 7 13',
  numbers: [ 3, 6, 7, 13 ],
  time: '11.22',
  solveRate: '82.6%',
  solutions: [ '6×3+13-7', '(13-7)×3+6' ],
  index: 1003
}
{
  _id: '2 4 4 6',
  numbers: [ 2, 4, 4, 6 ],
  time: '11.23',
  solveRate: '90.1%',
  solutions: [ '(4×2-4)×6', '4×4+6+2', '(4+4)×6/2', '(6+4)×2+4' ],
  index: 1004
}
{
  _id: '2 4 9 12',
  numbers: [ 2, 4, 9, 12 ],
  time: '11.23',
  solveRate: '87.3%',
  solutions: [
    '(12-9)×4×2',
    '(9×2-12)×4',
    '12/(9/2-4)',
    '(9×4+12)/2',
    '(12/4+9)×2'
  ],
  index: 1005
}
{
  _id: '4 8 9 13',
  numbers: [ 4, 8, 9, 13 ],
  time: '11.23',
  solveRate: '82.9%',
  solutions: [ '8/4+13+9', '(13-9)×4+8' ],
  index: 1006
}
{
  _id: '4 4 5 11',
  numbers: [ 4, 4, 5, 11 ],
  time: '11.26',
  solveRate: '84.9%',
  solutions: [ '11+5+4+4', '11×4-5×4' ],
  index: 1007
}
{
  _id: '3 7 8 11',
  numbers: [ 3, 7, 8, 11 ],
  time: '11.28',
  solveRate: '83.1%',
  solutions: [ '7×3+11-8', '(8-3)×7-11', '(11-8)×7+3' ],
  index: 1008
}
{
  _id: '6 7 9 9',
  numbers: [ 6, 7, 9, 9 ],
  time: '11.28',
  solveRate: '80.8%',
  solutions: [ '7×6-9-9', '(9+7)×9/6', '(9-7)×9+6' ],
  index: 1009
}
{
  _id: '2 4 6 8',
  numbers: [ 2, 4, 6, 8 ],
  time: '11.29',
  solveRate: '93.2%',
  solutions: [
    '8×6/(4-2)',
    '8×6×2/4',
    '8×4-6-2',
    '(6+2)×4-8',
    '6×2+8+4',
    '(6-2)×4+8',
    '(8/4+2)×6',
    '(8+6)×2-4'
  ],
  index: 1010
}
{
  _id: '3 3 6 12',
  numbers: [ 3, 3, 6, 12 ],
  time: '11.32',
  solveRate: '87%',
  solutions: [ '12+6+3+3', '(3+3)×6-12' ],
  index: 1011
}
{
  _id: '1 3 4 8',
  numbers: [ 1, 3, 4, 8 ],
  time: '11.33',
  solveRate: '89.6%',
  solutions: [ '(3+1)×4+8', '(8+1-3)×4', '(8+4)×(3-1)', '8/(4/3-1)' ],
  index: 1012
}
{
  _id: '8 9 9 12',
  numbers: [ 8, 9, 9, 12 ],
  time: '11.34',
  solveRate: '82.6%',
  solutions: [ '9×8/(12-9)' ],
  index: 1013
}
{
  _id: '3 3 5 13',
  numbers: [ 3, 3, 5, 13 ],
  time: '11.36',
  solveRate: '85%',
  solutions: [ '13+5+3+3', '13×3-5×3' ],
  index: 1014
}
{
  _id: '4 5 6 13',
  numbers: [ 4, 5, 6, 13 ],
  time: '11.37',
  solveRate: '78.1%',
  solutions: [ '(13-5-4)×6' ],
  index: 1015
}
{
  _id: '1 4 7 7',
  numbers: [ 1, 4, 7, 7 ],
  time: '11.38',
  solveRate: '85.5%',
  solutions: [ '(7+1)×(7-4)' ],
  index: 1016
}
{
  _id: '4 6 7 12',
  numbers: [ 4, 6, 7, 12 ],
  time: '11.47',
  solveRate: '81.4%',
  solutions: [ '12×6/(7-4)', '(7-12/4)×6' ],
  index: 1017
}
{
  _id: '4 6 8 13',
  numbers: [ 4, 6, 8, 13 ],
  time: '11.48',
  solveRate: '81.1%',
  solutions: [ '(13-6-4)×8' ],
  index: 1018
}
{
  _id: '3 7 9 12',
  numbers: [ 3, 7, 9, 12 ],
  time: '11.49',
  solveRate: '85.9%',
  solutions: [ '7×3+12-9', '(7-3)×9-12', '(12-7)×3+9', '(12-9)×7+3' ],
  index: 1019
}
{
  _id: '1 6 7 9',
  numbers: [ 1, 6, 7, 9 ],
  time: '11.51',
  solveRate: '84.4%',
  solutions: [ '(7+1)×(9-6)' ],
  index: 1020
}
{
  _id: '1 4 8 9',
  numbers: [ 1, 4, 8, 9 ],
  time: '11.53',
  solveRate: '89.1%',
  solutions: [ '9×8/(4-1)', '8×4+1-9', '(9-1)×4-8' ],
  index: 1021
}
{
  _id: '2 3 5 7',
  numbers: [ 2, 3, 5, 7 ],
  time: '11.53',
  solveRate: '88.9%',
  solutions: [ '7×3+5-2', '(5-2)×7+3', '5×3+7+2' ],
  index: 1022
}
{
  _id: '1 3 7 7',
  numbers: [ 1, 3, 7, 7 ],
  time: '11.54',
  solveRate: '85.4%',
  solutions: [ '(7-1)×(7-3)' ],
  index: 1023
}
{
  _id: '2 7 9 11',
  numbers: [ 2, 7, 9, 11 ],
  time: '11.54',
  solveRate: '83.3%',
  solutions: [ '11×2+9-7', '(9-7)×11+2' ],
  index: 1024
}
{
  _id: '3 5 7 9',
  numbers: [ 3, 5, 7, 9 ],
  time: '11.54',
  solveRate: '86.2%',
  solutions: [ '9+7+5+3', '9×5-7×3', '(5-7/3)×9', '(9+3)×(7-5)' ],
  index: 1025
}
{
  _id: '6 8 9 12',
  numbers: [ 6, 8, 9, 12 ],
  time: '11.55',
  solveRate: '86.6%',
  solutions: [ '9×8/6+12', '(9+6-12)×8' ],
  index: 1026
}
{
  _id: '4 8 8 10',
  numbers: [ 4, 8, 8, 10 ],
  time: '11.58',
  solveRate: '85.7%',
  solutions: [ '(8+4)×(10-8)', '10×4-8-8', '8×8-10×4', '(8+8-10)×4' ],
  index: 1027
}
{
  _id: '2 5 11 12',
  numbers: [ 2, 5, 11, 12 ],
  time: '11.6',
  solveRate: '77.3%',
  solutions: [ '12/(11/2-5)', '(11-5)×2+12' ],
  index: 1028
}
{
  _id: '2 6 10 13',
  numbers: [ 2, 6, 10, 13 ],
  time: '11.6',
  solveRate: '84.8%',
  solutions: [ '(6+2)×(13-10)', '10/2+13+6', '(13-6)×2+10' ],
  index: 1029
}
{
  _id: '3 7 9 11',
  numbers: [ 3, 7, 9, 11 ],
  time: '11.6',
  solveRate: '88%',
  solutions: [ '11+9+7-3', '(9-3)×(11-7)' ],
  index: 1030
}
{
  _id: '1 3 7 12',
  numbers: [ 1, 3, 7, 12 ],
  time: '11.61',
  solveRate: '85.5%',
  solutions: [ '(7-1)×12/3' ],
  index: 1031
}
{
  _id: '2 9 11 13',
  numbers: [ 2, 9, 11, 13 ],
  time: '11.62',
  solveRate: '82.4%',
  solutions: [ '13×2+9-11', '(11-9)×13-2' ],
  index: 1032
}
{
  _id: '2 3 7 13',
  numbers: [ 2, 3, 7, 13 ],
  time: '11.64',
  solveRate: '86.3%',
  solutions: [ '7×2+13-3', '(13+2-7)×3' ],
  index: 1033
}
{
  _id: '1 5 7 9',
  numbers: [ 1, 5, 7, 9 ],
  time: '11.68',
  solveRate: '84.5%',
  solutions: [ '(7-1)×(9-5)' ],
  index: 1034
}
{
  _id: '3 5 6 10',
  numbers: [ 3, 5, 6, 10 ],
  time: '11.7',
  solveRate: '85.7%',
  solutions: [ '10+6+5+3', '(10/5+6)×3' ],
  index: 1035
}
{
  _id: '3 3 3 11',
  numbers: [ 3, 3, 3, 11 ],
  time: '11.74',
  solveRate: '78%',
  solutions: [ '11×3-3×3' ],
  index: 1036
}
{
  _id: '3 5 10 13',
  numbers: [ 3, 5, 10, 13 ],
  time: '11.76',
  solveRate: '82.7%',
  solutions: [ '(5+3)×(13-10)', '13×3-10-5', '(13+5-10)×3' ],
  index: 1037
}
{
  _id: '4 6 6 12',
  numbers: [ 4, 6, 6, 12 ],
  time: '11.76',
  solveRate: '86%',
  solutions: [ '(6-4)×6+12', '12×6/4+6' ],
  index: 1038
}
{
  _id: '7 8 9 10',
  numbers: [ 7, 8, 9, 10 ],
  time: '11.79',
  solveRate: '79.9%',
  solutions: [ '9×8/(10-7)' ],
  index: 1039
}
{
  _id: '5 8 10 12',
  numbers: [ 5, 8, 10, 12 ],
  time: '11.83',
  solveRate: '84.3%',
  solutions: [ '(10+5-12)×8' ],
  index: 1040
}
{
  _id: '2 5 8 10',
  numbers: [ 2, 5, 8, 10 ],
  time: '11.85',
  solveRate: '82.8%',
  solutions: [ '(10-5-2)×8', '(10-2)×(8-5)' ],
  index: 1041
}
{
  _id: '5 5 8 12',
  numbers: [ 5, 5, 8, 12 ],
  time: '11.85',
  solveRate: '79.8%',
  solutions: [ '(5+5-8)×12' ],
  index: 1042
}
{
  _id: '4 5 5 10',
  numbers: [ 4, 5, 5, 10 ],
  time: '11.86',
  solveRate: '81.2%',
  solutions: [ '10+5+5+4' ],
  index: 1043
}
{
  _id: '1 3 3 6',
  numbers: [ 1, 3, 3, 6 ],
  time: '11.88',
  solveRate: '87.2%',
  solutions: [ '(6+3-1)×3', '(6+1)×3+3' ],
  index: 1044
}
{
  _id: '2 5 7 13',
  numbers: [ 2, 5, 7, 13 ],
  time: '11.93',
  solveRate: '83.7%',
  solutions: [ '13×2+5-7', '7×5+2-13', '(7×5+13)/2', '(7-5)×13-2' ],
  index: 1045
}
{
  _id: '3 4 8 9',
  numbers: [ 3, 4, 8, 9 ],
  time: '11.96',
  solveRate: '88.2%',
  solutions: [ '9+8+4+3', '(4×3-9)×8', '(9+3)×8/4', '(9-3)×(8-4)' ],
  index: 1046
}
{
  _id: '4 9 10 11',
  numbers: [ 4, 9, 10, 11 ],
  time: '11.99',
  solveRate: '77.4%',
  solutions: [ '(11-9)×10+4' ],
  index: 1047
}
{
  _id: '2 3 5 13',
  numbers: [ 2, 3, 5, 13 ],
  time: '12.01',
  solveRate: '85.6%',
  solutions: [ '3×2+13+5', '13×2+3-5', '(5-3)×13-2' ],
  index: 1048
}
{
  _id: '1 5 8 11',
  numbers: [ 1, 5, 8, 11 ],
  time: '12.05',
  solveRate: '89%',
  solutions: [ '(8-1)×5-11', '(11+8+5)×1' ],
  index: 1049
}
{
  _id: '2 5 5 7',
  numbers: [ 2, 5, 5, 7 ],
  time: '12.05',
  solveRate: '82%',
  solutions: [ '7×2+5+5' ],
  index: 1050
}
{
  _id: '2 5 7 11',
  numbers: [ 2, 5, 7, 11 ],
  time: '12.05',
  solveRate: '82.6%',
  solutions: [ '11×2+7-5', '(7-5)×11+2', '(11×5-7)/2' ],
  index: 1051
}
{
  _id: '4 10 11 13',
  numbers: [ 4, 10, 11, 13 ],
  time: '12.09',
  solveRate: '76.4%',
  solutions: [ '(13-11)×10+4' ],
  index: 1052
}
{
  _id: '6 9 9 12',
  numbers: [ 6, 9, 9, 12 ],
  time: '12.1',
  solveRate: '87.3%',
  solutions: [ '12+9+9-6' ],
  index: 1053
}
{
  _id: '7 10 10 12',
  numbers: [ 7, 10, 10, 12 ],
  time: '12.1',
  solveRate: '78%',
  solutions: [ '(12-10)×7+10' ],
  index: 1054
}
{
  _id: '2 6 6 7',
  numbers: [ 2, 6, 6, 7 ],
  time: '12.11',
  solveRate: '78.6%',
  solutions: [ '(7-6/2)×6', '(7-2)×6-6', '(7×6+6)/2' ],
  index: 1055
}
{
  _id: '6 9 10 12',
  numbers: [ 6, 9, 10, 12 ],
  time: '12.12',
  solveRate: '80.6%',
  solutions: [ '(10-6)×9-12', '(12-9)×10-6', '(12-10)×9+6' ],
  index: 1056
}
{
  _id: '2 3 6 12',
  numbers: [ 2, 3, 6, 12 ],
  time: '12.15',
  solveRate: '91.1%',
  solutions: [
    '3×2+12+6',   '6×3×2-12',
    '12×3/2+6',   '12×3-6×2',
    '(12+2-6)×3', '(6-2)×3+12',
    '(12-2)×3-6', '6×3+12/2',
    '(12+3)×2-6', '(12-3)×2+6'
  ],
  index: 1057
}
{
  _id: '4 4 6 9',
  numbers: [ 4, 4, 6, 9 ],
  time: '12.15',
  solveRate: '77.3%',
  solutions: [ '(4+4)×(9-6)', '9×4×4/6' ],
  index: 1058
}
{
  _id: '3 3 6 8',
  numbers: [ 3, 3, 6, 8 ],
  time: '12.16',
  solveRate: '75%',
  solutions: [ '(3×3-6)×8', '(6+3)×8/3' ],
  index: 1059
}
{
  _id: '2 4 4 5',
  numbers: [ 2, 4, 4, 5 ],
  time: '12.17',
  solveRate: '82.1%',
  solutions: [ '(5+2)×4-4', '(5×2-4)×4', '(4+4)×(5-2)' ],
  index: 1060
}
{
  _id: '7 9 10 11',
  numbers: [ 7, 9, 10, 11 ],
  time: '12.19',
  solveRate: '77.4%',
  solutions: [ '(10-7)×11-9', '(11-9)×7+10' ],
  index: 1061
}
{
  _id: '2 2 2 7',
  numbers: [ 2, 2, 2, 7 ],
  time: '12.22',
  solveRate: '73.5%',
  solutions: [ '(7×2-2)×2' ],
  index: 1062
}
{
  _id: '2 4 4 10',
  numbers: [ 2, 4, 4, 10 ],
  time: '12.24',
  solveRate: '89.7%',
  solutions: [ '(4-2)×10+4', '10×4/2+4', '4×4+10-2', '(10+4)×2-4' ],
  index: 1063
}
{
  _id: '3 3 3 4',
  numbers: [ 3, 3, 3, 4 ],
  time: '12.24',
  solveRate: '82.6%',
  solutions: [ '(3×3-3)×4', '(4+3)×3+3' ],
  index: 1064
}
{
  _id: '1 4 5 7',
  numbers: [ 1, 4, 5, 7 ],
  time: '12.25',
  solveRate: '88.1%',
  solutions: [ '7×4+1-5', '(5-1)×7-4' ],
  index: 1065
}
{
  _id: '3 4 9 9',
  numbers: [ 3, 4, 9, 9 ],
  time: '12.31',
  solveRate: '84.3%',
  solutions: [ '(9+9)×4/3', '9×4-9-3', '(9-9/3)×4', '(9-4)×3+9' ],
  index: 1066
}
{
  _id: '5 7 11 13',
  numbers: [ 5, 7, 11, 13 ],
  time: '12.41',
  solveRate: '71.1%',
  solutions: [ '(7+5)×(13-11)' ],
  index: 1067
}
{
  _id: '3 5 11 12',
  numbers: [ 3, 5, 11, 12 ],
  time: '12.44',
  solveRate: '80.2%',
  solutions: [ '(11-5)×12/3' ],
  index: 1068
}
{
  _id: '6 9 11 13',
  numbers: [ 6, 9, 11, 13 ],
  time: '12.45',
  solveRate: '72.8%',
  solutions: [ '(13-11)×9+6' ],
  index: 1069
}
{
  _id: '4 4 7 8',
  numbers: [ 4, 4, 7, 8 ],
  time: '12.47',
  solveRate: '84%',
  solutions: [ '7×4+4-8', '(8-4)×7-4' ],
  index: 1070
}
{
  _id: '3 3 9 13',
  numbers: [ 3, 3, 9, 13 ],
  time: '12.48',
  solveRate: '74.8%',
  solutions: [ '(3+3)×(13-9)' ],
  index: 1071
}
{
  _id: '3 5 6 11',
  numbers: [ 3, 5, 6, 11 ],
  time: '12.48',
  solveRate: '82.5%',
  solutions: [ '(5×3-11)×6', '6×3+11-5', '(11-5)×3+6' ],
  index: 1072
}
{
  _id: '4 6 9 13',
  numbers: [ 4, 6, 9, 13 ],
  time: '12.49',
  solveRate: '85.5%',
  solutions: [ '13+9+6-4' ],
  index: 1073
}
{
  _id: '1 5 8 13',
  numbers: [ 1, 5, 8, 13 ],
  time: '12.5',
  solveRate: '80%',
  solutions: [ '(13-8)×5-1' ],
  index: 1074
}
{
  _id: '4 4 6 8',
  numbers: [ 4, 4, 6, 8 ],
  time: '12.5',
  solveRate: '84.2%',
  solutions: [ '(8+4-6)×4', '(8+4)×(6-4)' ],
  index: 1075
}
{
  _id: '2 4 5 7',
  numbers: [ 2, 4, 5, 7 ],
  time: '12.56',
  solveRate: '78.5%',
  solutions: [ '(7+5)×(4-2)', '(7+5)×4/2' ],
  index: 1076
}
{
  _id: '4 4 6 10',
  numbers: [ 4, 4, 6, 10 ],
  time: '12.57',
  solveRate: '87.4%',
  solutions: [ '10+6+4+4', '(6-4)×10+4' ],
  index: 1077
}
{
  _id: '4 5 8 13',
  numbers: [ 4, 5, 8, 13 ],
  time: '12.57',
  solveRate: '78.2%',
  solutions: [ '8×4+5-13', '(13-5)×4-8' ],
  index: 1078
}
{
  _id: '7 7 9 10',
  numbers: [ 7, 7, 9, 10 ],
  time: '12.57',
  solveRate: '75.8%',
  solutions: [ '(9-7)×7+10' ],
  index: 1079
}
{
  _id: '2 4 8 13',
  numbers: [ 2, 4, 8, 13 ],
  time: '12.59',
  solveRate: '82.3%',
  solutions: [ '13×2-8/4', '13×8/4-2' ],
  index: 1080
}
{
  _id: '1 4 5 9',
  numbers: [ 1, 4, 5, 9 ],
  time: '12.62',
  solveRate: '82.2%',
  solutions: [ '(4-1)×5+9', '(9-4)×5-1' ],
  index: 1081
}
{
  _id: '5 6 10 12',
  numbers: [ 5, 6, 10, 12 ],
  time: '12.65',
  solveRate: '75.9%',
  solutions: [ '10×6/5+12', '(6-12/10)×5' ],
  index: 1082
}
{
  _id: '5 7 7 9',
  numbers: [ 5, 7, 7, 9 ],
  time: '12.69',
  solveRate: '74.2%',
  solutions: [ '(7+5)×(9-7)' ],
  index: 1083
}
{
  _id: '2 3 3 3',
  numbers: [ 2, 3, 3, 3 ],
  time: '12.7',
  solveRate: '82.4%',
  solutions: [ '(3+3+2)×3', '(3×3+3)×2' ],
  index: 1084
}
{
  _id: '4 7 10 12',
  numbers: [ 4, 7, 10, 12 ],
  time: '12.71',
  solveRate: '79.6%',
  solutions: [ '(10+4)×12/7', '(12-4)×(10-7)', '(10-7)×4+12' ],
  index: 1085
}
{
  _id: '1 4 6 6',
  numbers: [ 1, 4, 6, 6 ],
  time: '12.72',
  solveRate: '80.2%',
  solutions: [ '(4+1)×6-6', '(4-1)×6+6' ],
  index: 1086
}
{
  _id: '1 4 7 9',
  numbers: [ 1, 4, 7, 9 ],
  time: '12.72',
  solveRate: '82.3%',
  solutions: [ '(9-1)×(7-4)' ],
  index: 1087
}
{
  _id: '2 5 10 13',
  numbers: [ 2, 5, 10, 13 ],
  time: '12.74',
  solveRate: '82.1%',
  solutions: [ '10×5-13×2', '13×2-10/5', '13×10/5-2' ],
  index: 1088
}
{
  _id: '3 3 5 10',
  numbers: [ 3, 3, 5, 10 ],
  time: '12.74',
  solveRate: '83.1%',
  solutions: [ '3×3+10+5', '(10+3-5)×3', '(3-3/5)×10' ],
  index: 1089
}
{
  _id: '2 3 8 8',
  numbers: [ 2, 3, 8, 8 ],
  time: '12.77',
  solveRate: '80.7%',
  solutions: [ '(8-3-2)×8', '(8+8)×3/2', '(8×2-8)×3' ],
  index: 1090
}
{
  _id: '4 4 5 12',
  numbers: [ 4, 4, 5, 12 ],
  time: '12.82',
  solveRate: '79.2%',
  solutions: [ '(5+4)×4-12', '(12-5)×4-4' ],
  index: 1091
}
{
  _id: '4 8 12 12',
  numbers: [ 4, 8, 12, 12 ],
  time: '12.84',
  solveRate: '85.8%',
  solutions: [ '(12+4)×12/8', '(4-12/12)×8' ],
  index: 1092
}
{
  _id: '1 1 6 9',
  numbers: [ 1, 1, 6, 9 ],
  time: '12.87',
  solveRate: '80.8%',
  solutions: [ '(1+1)×9+6' ],
  index: 1093
}
{
  _id: '6 9 11 12',
  numbers: [ 6, 9, 11, 12 ],
  time: '12.87',
  solveRate: '76%',
  solutions: [ '(11-9)×6+12' ],
  index: 1094
}
{
  _id: '2 2 2 9',
  numbers: [ 2, 2, 2, 9 ],
  time: '12.91',
  solveRate: '76.8%',
  solutions: [ '(9+2)×2+2' ],
  index: 1095
}
{
  _id: '3 5 6 13',
  numbers: [ 3, 5, 6, 13 ],
  time: '12.93',
  solveRate: '76.2%',
  solutions: [ '(13-5)×(6-3)' ],
  index: 1096
}
{
  _id: '1 5 6 11',
  numbers: [ 1, 5, 6, 11 ],
  time: '12.95',
  solveRate: '81.3%',
  solutions: [ '(6+1)×5-11', '(11-6)×5-1' ],
  index: 1097
}
{
  _id: '5 9 10 13',
  numbers: [ 5, 9, 10, 13 ],
  time: '12.97',
  solveRate: '78.2%',
  solutions: [ '10/5+13+9', '(13-10)×5+9' ],
  index: 1098
}
{
  _id: '1 4 5 8',
  numbers: [ 1, 4, 5, 8 ],
  time: '12.98',
  solveRate: '83.1%',
  solutions: [ '(5+1)×(8-4)', '(5-1)×4+8' ],
  index: 1099
}
{
  _id: '5 7 10 10',
  numbers: [ 5, 7, 10, 10 ],
  time: '13.02',
  solveRate: '77%',
  solutions: [ '10×7/5+10' ],
  index: 1100
}
{
  _id: '6 7 7 10',
  numbers: [ 6, 7, 7, 10 ],
  time: '13.02',
  solveRate: '73.2%',
  solutions: [ '(7+7-10)×6' ],
  index: 1101
}
{
  _id: '5 5 7 10',
  numbers: [ 5, 5, 7, 10 ],
  time: '13.07',
  solveRate: '73.8%',
  solutions: [ '(7+5)×10/5' ],
  index: 1102
}
{
  _id: '2 7 10 11',
  numbers: [ 2, 7, 10, 11 ],
  time: '13.13',
  solveRate: '79.3%',
  solutions: [ '10×7/2-11', '10×2+11-7' ],
  index: 1103
}
{
  _id: '2 8 10 13',
  numbers: [ 2, 8, 10, 13 ],
  time: '13.18',
  solveRate: '81.1%',
  solutions: [ '13×2+8-10', '(10-8)×13-2' ],
  index: 1104
}
{
  _id: '3 5 7 8',
  numbers: [ 3, 5, 7, 8 ],
  time: '13.19',
  solveRate: '85.8%',
  solutions: [ '7×3+8-5', '7×5-8-3', '(8-5)×7+3' ],
  index: 1105
}
{
  _id: '4 10 10 12',
  numbers: [ 4, 10, 10, 12 ],
  time: '13.2',
  solveRate: '78.7%',
  solutions: [ '(12-10)×10+4' ],
  index: 1106
}
{
  _id: '2 3 5 10',
  numbers: [ 2, 3, 5, 10 ],
  time: '13.23',
  solveRate: '80.3%',
  solutions: [ '(10+2)×(5-3)', '(10+5-3)×2' ],
  index: 1107
}
{
  _id: '1 3 6 10',
  numbers: [ 1, 3, 6, 10 ],
  time: '13.26',
  solveRate: '82.2%',
  solutions: [ '(10×3-6)×1' ],
  index: 1108
}
{
  _id: '6 8 11 12',
  numbers: [ 6, 8, 11, 12 ],
  time: '13.26',
  solveRate: '77.9%',
  solutions: [ '12×6/(11-8)' ],
  index: 1109
}
{
  _id: '4 5 8 10',
  numbers: [ 4, 5, 8, 10 ],
  time: '13.33',
  solveRate: '76%',
  solutions: [ '(8+4)×10/5', '(4-8/5)×10', '(8-10/5)×4', '(8/10+4)×5' ],
  index: 1110
}
{
  _id: '7 10 11 13',
  numbers: [ 7, 10, 11, 13 ],
  time: '13.33',
  solveRate: '73.6%',
  solutions: [ '(13-11)×7+10' ],
  index: 1111
}
{
  _id: '3 8 9 11',
  numbers: [ 3, 8, 9, 11 ],
  time: '13.37',
  solveRate: '80.3%',
  solutions: [ '9×3+8-11', '(11-8)×9-3' ],
  index: 1112
}
{
  _id: '6 12 12 12',
  numbers: [ 6, 12, 12, 12 ],
  time: '13.47',
  solveRate: '76.9%',
  solutions: [ '12×12/(12-6)' ],
  index: 1113
}
{
  _id: '6 7 10 10',
  numbers: [ 6, 7, 10, 10 ],
  time: '13.51',
  solveRate: '71.4%',
  solutions: [ '(10-7)×10-6' ],
  index: 1114
}
{
  _id: '2 3 7 8',
  numbers: [ 2, 3, 7, 8 ],
  time: '13.61',
  solveRate: '80.6%',
  solutions: [ '(7+2)×8/3', '(8-2)×(7-3)', '(8+7-3)×2', '8/(7/3-2)' ],
  index: 1115
}
{
  _id: '2 10 12 13',
  numbers: [ 2, 10, 12, 13 ],
  time: '13.63',
  solveRate: '81.5%',
  solutions: [ '13×2+10-12', '(12+10)/2+13', '(12-10)×13-2' ],
  index: 1116
}
{
  _id: '2 2 5 9',
  numbers: [ 2, 2, 5, 9 ],
  time: '13.75',
  solveRate: '74.5%',
  solutions: [ '(9+5-2)×2' ],
  index: 1117
}
{
  _id: '2 3 8 9',
  numbers: [ 2, 3, 8, 9 ],
  time: '13.78',
  solveRate: '81.4%',
  solutions: [ '(9-3×2)×8', '(9-3)×8/2' ],
  index: 1118
}
{
  _id: '2 4 7 9',
  numbers: [ 2, 4, 7, 9 ],
  time: '13.84',
  solveRate: '80.7%',
  solutions: [ '4×2+9+7', '(9+7-4)×2' ],
  index: 1119
}
{
  _id: '3 5 9 9',
  numbers: [ 3, 5, 9, 9 ],
  time: '13.87',
  solveRate: '79.4%',
  solutions: [ '9×5/3+9', '(9-3)×(9-5)' ],
  index: 1120
}
{
  _id: '3 3 9 11',
  numbers: [ 3, 3, 9, 11 ],
  time: '14.06',
  solveRate: '79.2%',
  solutions: [ '(11-3)×9/3', '(11-9/3)×3' ],
  index: 1121
}
{
  _id: '4 5 8 11',
  numbers: [ 4, 5, 8, 11 ],
  time: '14.06',
  solveRate: '74.1%',
  solutions: [ '(11-5)×(8-4)', '(11+4)×8/5' ],
  index: 1122
}
{
  _id: '3 6 11 13',
  numbers: [ 3, 6, 11, 13 ],
  time: '14.11',
  solveRate: '73.3%',
  solutions: [ '(13+6-11)×3' ],
  index: 1123
}
{
  _id: '3 5 12 12',
  numbers: [ 3, 5, 12, 12 ],
  time: '14.12',
  solveRate: '67.1%',
  solutions: [ '12×5-12×3', '(12×5+12)/3' ],
  index: 1124
}
{
  _id: '5 7 9 11',
  numbers: [ 5, 7, 9, 11 ],
  time: '14.12',
  solveRate: '71%',
  solutions: [ '(7+5)×(11-9)' ],
  index: 1125
}
{
  _id: '1 3 7 9',
  numbers: [ 1, 3, 7, 9 ],
  time: '14.16',
  solveRate: '80.3%',
  solutions: [ '(7+1)×9/3' ],
  index: 1126
}
{
  _id: '4 4 5 13',
  numbers: [ 4, 4, 5, 13 ],
  time: '14.17',
  solveRate: '73.5%',
  solutions: [ '4×4+13-5' ],
  index: 1127
}
{
  _id: '3 4 4 11',
  numbers: [ 3, 4, 4, 11 ],
  time: '14.19',
  solveRate: '76.6%',
  solutions: [ '4×4+11-3' ],
  index: 1128
}
{
  _id: '3 3 4 13',
  numbers: [ 3, 3, 4, 13 ],
  time: '14.2',
  solveRate: '77%',
  solutions: [ '(13-4)×3-3' ],
  index: 1129
}
{
  _id: '2 4 9 10',
  numbers: [ 2, 4, 9, 10 ],
  time: '14.24',
  solveRate: '79.2%',
  solutions: [ '9×2+10-4', '9×4-10-2' ],
  index: 1130
}
{
  _id: '3 5 5 11',
  numbers: [ 3, 5, 5, 11 ],
  time: '14.25',
  solveRate: '79.1%',
  solutions: [ '11+5+5+3' ],
  index: 1131
}
{
  _id: '5 5 9 11',
  numbers: [ 5, 5, 9, 11 ],
  time: '14.26',
  solveRate: '71.3%',
  solutions: [ '(11-5)×(9-5)' ],
  index: 1132
}
{
  _id: '6 10 10 13',
  numbers: [ 6, 10, 10, 13 ],
  time: '14.3',
  solveRate: '69.6%',
  solutions: [ '(13-10)×10-6' ],
  index: 1133
}
{
  _id: '3 3 8 10',
  numbers: [ 3, 3, 8, 10 ],
  time: '14.31',
  solveRate: '80.2%',
  solutions: [ '10+8+3+3', '8/(10/3-3)' ],
  index: 1134
}
{
  _id: '3 4 4 10',
  numbers: [ 3, 4, 4, 10 ],
  time: '14.33',
  solveRate: '77.2%',
  solutions: [ '(10-3)×4-4' ],
  index: 1135
}
{
  _id: '2 6 9 12',
  numbers: [ 2, 6, 9, 12 ],
  time: '14.35',
  solveRate: '82.8%',
  solutions: [
    '(6+2)×(12-9)',
    '(6-2)×9-12',
    '6/2+12+9',
    '9×2+12-6',
    '12/(2-9/6)'
  ],
  index: 1136
}
{
  _id: '2 6 12 13',
  numbers: [ 2, 6, 12, 13 ],
  time: '14.38',
  solveRate: '78.9%',
  solutions: [ '13×2-12/6', '12/(13/2-6)', '13×12/6-2' ],
  index: 1137
}
{
  _id: '4 6 9 12',
  numbers: [ 4, 6, 9, 12 ],
  time: '14.39',
  solveRate: '77.7%',
  solutions: [ '(12+4)×9/6', '(12-4)×(9-6)', '(9-6)×4+12' ],
  index: 1138
}
{
  _id: '2 5 9 10',
  numbers: [ 2, 5, 9, 10 ],
  time: '14.45',
  solveRate: '78.5%',
  solutions: [ '10×2+9-5' ],
  index: 1139
}
{
  _id: '5 9 9 12',
  numbers: [ 5, 9, 9, 12 ],
  time: '14.45',
  solveRate: '75.9%',
  solutions: [ '9×5-12-9', '(9-5)×9-12', '(12-9)×5+9' ],
  index: 1140
}
{
  _id: '1 3 5 6',
  numbers: [ 1, 3, 5, 6 ],
  time: '14.46',
  solveRate: '86.3%',
  solutions: [ '6×3+5+1', '(5+1)×3+6' ],
  index: 1141
}
{
  _id: '2 5 9 11',
  numbers: [ 2, 5, 9, 11 ],
  time: '14.5',
  solveRate: '76.7%',
  solutions: [ '(5-2)×11-9', '9×2+11-5', '(9-2)×5-11' ],
  index: 1142
}
{
  _id: '1 5 11 12',
  numbers: [ 1, 5, 11, 12 ],
  time: '14.51',
  solveRate: '71.5%',
  solutions: [ '(11-1)×12/5' ],
  index: 1143
}
{
  _id: '3 4 7 12',
  numbers: [ 3, 4, 7, 12 ],
  time: '14.56',
  solveRate: '82.5%',
  solutions: [ '7×3+12/4', '12×7/3-4', '7×4-12/3', '12×7/4+3' ],
  index: 1144
}
{
  _id: '5 6 6 12',
  numbers: [ 5, 6, 6, 12 ],
  time: '14.61',
  solveRate: '80.9%',
  solutions: [ '6×5+6-12', '12×5-6×6', '(12-6)×5-6' ],
  index: 1145
}
{
  _id: '2 2 7 7',
  numbers: [ 2, 2, 7, 7 ],
  time: '14.67',
  solveRate: '70.1%',
  solutions: [ '(7+7-2)×2' ],
  index: 1146
}
{
  _id: '4 4 4 10',
  numbers: [ 4, 4, 4, 10 ],
  time: '14.67',
  solveRate: '76.8%',
  solutions: [ '10×4-4×4', '(4×4-10)×4' ],
  index: 1147
}
{
  _id: '3 4 10 10',
  numbers: [ 3, 4, 10, 10 ],
  time: '14.73',
  solveRate: '75.6%',
  solutions: [ '10×3+4-10' ],
  index: 1148
}
{
  _id: '4 7 8 12',
  numbers: [ 4, 7, 8, 12 ],
  time: '14.73',
  solveRate: '79.6%',
  solutions: [ '7×4+8-12', '(12-8)×7-4' ],
  index: 1149
}
{
  _id: '2 2 5 10',
  numbers: [ 2, 2, 5, 10 ],
  time: '14.76',
  solveRate: '78.5%',
  solutions: [ '(5+2)×2+10', '(10-2)×(5-2)', '(2/5+2)×10', '(10×5-2)/2' ],
  index: 1150
}
{
  _id: '4 6 8 10',
  numbers: [ 4, 6, 8, 10 ],
  time: '14.81',
  solveRate: '76.9%',
  solutions: [ '(8-6)×10+4', '(10-6)×4+8' ],
  index: 1151
}
{
  _id: '3 3 9 10',
  numbers: [ 3, 3, 9, 10 ],
  time: '14.83',
  solveRate: '78.1%',
  solutions: [ '10×3+3-9' ],
  index: 1152
}
{
  _id: '7 9 12 12',
  numbers: [ 7, 9, 12, 12 ],
  time: '14.83',
  solveRate: '64.2%',
  solutions: [ '12×9-12×7' ],
  index: 1153
}
{
  _id: '2 2 3 4',
  numbers: [ 2, 2, 3, 4 ],
  time: '14.86',
  solveRate: '77.5%',
  solutions: [ '(4+2+2)×3', '(2×2+4)×3' ],
  index: 1154
}
{
  _id: '5 7 8 10',
  numbers: [ 5, 7, 8, 10 ],
  time: '14.91',
  solveRate: '71.3%',
  solutions: [ '(7+5)×(10-8)' ],
  index: 1155
}
{
  _id: '3 6 8 12',
  numbers: [ 3, 6, 8, 12 ],
  time: '14.97',
  solveRate: '80.5%',
  solutions: [ '(12-6-3)×8', '(8-12/3)×6' ],
  index: 1156
}
{
  _id: '3 6 8 13',
  numbers: [ 3, 6, 8, 13 ],
  time: '14.97',
  solveRate: '81.1%',
  solutions: [ '13+8+6-3' ],
  index: 1157
}
{
  _id: '7 7 7 12',
  numbers: [ 7, 7, 7, 12 ],
  time: '15.04',
  solveRate: '65.6%',
  solutions: [ '(7+7)×12/7' ],
  index: 1158
}
{
  _id: '2 4 10 11',
  numbers: [ 2, 4, 10, 11 ],
  time: '15.1',
  solveRate: '79.3%',
  solutions: [ '11×4-10×2', '(11-10/2)×4', '(11-4)×2+10' ],
  index: 1159
}
{
  _id: '3 6 6 13',
  numbers: [ 3, 6, 6, 13 ],
  time: '15.17',
  solveRate: '72.8%',
  solutions: [ '(13-6-3)×6', '(13×6-6)/3' ],
  index: 1160
}
{
  _id: '5 5 5 12',
  numbers: [ 5, 5, 5, 12 ],
  time: '15.17',
  solveRate: '67.7%',
  solutions: [ '(5+5)×12/5' ],
  index: 1161
}
{
  _id: '1 4 4 6',
  numbers: [ 1, 4, 4, 6 ],
  time: '15.24',
  solveRate: '79.5%',
  solutions: [ '(6+1)×4-4', '(6-1)×4+4' ],
  index: 1162
}
{
  _id: '2 6 11 12',
  numbers: [ 2, 6, 11, 12 ],
  time: '15.27',
  solveRate: '78.4%',
  solutions: [ '11×2+12/6', '12/(6-11/2)', '12×11/6+2' ],
  index: 1163
}
{
  _id: '2 5 8 8',
  numbers: [ 2, 5, 8, 8 ],
  time: '15.33',
  solveRate: '70.8%',
  solutions: [ '8×5-8×2', '(8×5+8)/2' ],
  index: 1164
}
{
  _id: '1 5 5 10',
  numbers: [ 1, 5, 5, 10 ],
  time: '15.41',
  solveRate: '71.2%',
  solutions: [ '(10-5)×5-1' ],
  index: 1165
}
{
  _id: '4 7 8 11',
  numbers: [ 4, 7, 8, 11 ],
  time: '15.45',
  solveRate: '69.7%',
  solutions: [ '(11-7)×4+8' ],
  index: 1166
}
{
  _id: '4 5 7 13',
  numbers: [ 4, 5, 7, 13 ],
  time: '15.47',
  solveRate: '72.7%',
  solutions: [ '(13-5)×(7-4)', '(13×7+5)/4' ],
  index: 1167
}
{
  _id: '2 3 8 10',
  numbers: [ 2, 3, 8, 10 ],
  time: '15.48',
  solveRate: '82.1%',
  solutions: [ '3×2+10+8', '10×3+2-8' ],
  index: 1168
}
{
  _id: '2 5 5 9',
  numbers: [ 2, 5, 5, 9 ],
  time: '15.66',
  solveRate: '78.2%',
  solutions: [ '5×2+9+5', '(5-2)×5+9' ],
  index: 1169
}
{
  _id: '5 7 12 12',
  numbers: [ 5, 7, 12, 12 ],
  time: '15.69',
  solveRate: '65.8%',
  solutions: [ '12×7-12×5' ],
  index: 1170
}
{
  _id: '1 3 12 13',
  numbers: [ 1, 3, 12, 13 ],
  time: '15.72',
  solveRate: '75.7%',
  solutions: [ '12×3+1-13', '(13-1)×3-12' ],
  index: 1171
}
{
  _id: '1 3 8 10',
  numbers: [ 1, 3, 8, 10 ],
  time: '15.77',
  solveRate: '71.2%',
  solutions: [ '(10-1)×8/3' ],
  index: 1172
}
{
  _id: '3 3 8 13',
  numbers: [ 3, 3, 8, 13 ],
  time: '15.79',
  solveRate: '69.7%',
  solutions: [ '(13+3-8)×3' ],
  index: 1173
}
{
  _id: '2 3 6 7',
  numbers: [ 2, 3, 6, 7 ],
  time: '16.01',
  solveRate: '80.8%',
  solutions: [ '7×6/2+3', '7×3+6/2', '(7×2-6)×3' ],
  index: 1174
}
{
  _id: '2 2 6 7',
  numbers: [ 2, 2, 6, 7 ],
  time: '16.08',
  solveRate: '72.8%',
  solutions: [ '(7+2)×2+6', '(7+6)×2-2' ],
  index: 1175
}
{
  _id: '6 10 11 12',
  numbers: [ 6, 10, 11, 12 ],
  time: '16.08',
  solveRate: '69.7%',
  solutions: [ '12×10/(11-6)' ],
  index: 1176
}
{
  _id: '5 6 9 13',
  numbers: [ 5, 6, 9, 13 ],
  time: '16.1',
  solveRate: '69.1%',
  solutions: [ '(13-5)×(9-6)' ],
  index: 1177
}
{
  _id: '6 8 9 10',
  numbers: [ 6, 8, 9, 10 ],
  time: '16.1',
  solveRate: '71.6%',
  solutions: [ '(10-8)×9+6' ],
  index: 1178
}
{
  _id: '2 6 6 9',
  numbers: [ 2, 6, 6, 9 ],
  time: '16.14',
  solveRate: '73.2%',
  solutions: [ '(6+2)×(9-6)', '(9+6)×2-6', '(9×6-6)/2' ],
  index: 1179
}
{
  _id: '1 3 11 12',
  numbers: [ 1, 3, 11, 12 ],
  time: '16.2',
  solveRate: '75.9%',
  solutions: [ '12×3-11-1', '(11+1)×3-12' ],
  index: 1180
}
{
  _id: '4 9 9 12',
  numbers: [ 4, 9, 9, 12 ],
  time: '16.3',
  solveRate: '71.8%',
  solutions: [ '(9+9-12)×4', '(4-12/9)×9' ],
  index: 1181
}
{
  _id: '3 10 11 13',
  numbers: [ 3, 10, 11, 13 ],
  time: '16.44',
  solveRate: '71.4%',
  solutions: [ '(11-3)×(13-10)', '(11+10-13)×3' ],
  index: 1182
}
{
  _id: '1 4 10 12',
  numbers: [ 1, 4, 10, 12 ],
  time: '16.53',
  solveRate: '71.8%',
  solutions: [ '12×10/(4+1)', '(10-1)×4-12', '4/(1-10/12)' ],
  index: 1183
}
{
  _id: '5 5 6 8',
  numbers: [ 5, 5, 6, 8 ],
  time: '16.53',
  solveRate: '78%',
  solutions: [ '8+6+5+5' ],
  index: 1184
}
{
  _id: '2 4 4 9',
  numbers: [ 2, 4, 4, 9 ],
  time: '16.54',
  solveRate: '73.4%',
  solutions: [ '(9-2)×4-4' ],
  index: 1185
}
{
  _id: '3 9 9 13',
  numbers: [ 3, 9, 9, 13 ],
  time: '16.58',
  solveRate: '67.1%',
  solutions: [ '(9-3)×(13-9)' ],
  index: 1186
}
{
  _id: '8 8 8 11',
  numbers: [ 8, 8, 8, 11 ],
  time: '16.62',
  solveRate: '63.6%',
  solutions: [ '11×8-8×8' ],
  index: 1187
}
{
  _id: '6 6 6 10',
  numbers: [ 6, 6, 6, 10 ],
  time: '16.75',
  solveRate: '66.3%',
  solutions: [ '10×6-6×6' ],
  index: 1188
}
{
  _id: '2 6 10 11',
  numbers: [ 2, 6, 10, 11 ],
  time: '16.79',
  solveRate: '72.8%',
  solutions: [ '6/2+11+10', '(11+6)×2-10' ],
  index: 1189
}
{
  _id: '6 6 9 10',
  numbers: [ 6, 6, 9, 10 ],
  time: '16.81',
  solveRate: '69.9%',
  solutions: [ '(9-6)×10-6', '(10+6)×9/6' ],
  index: 1190
}
{
  _id: '10 12 12 12',
  numbers: [ 10, 12, 12, 12 ],
  time: '16.84',
  solveRate: '64%',
  solutions: [ '12×12-12×10' ],
  index: 1191
}
{
  _id: '2 3 7 10',
  numbers: [ 2, 3, 7, 10 ],
  time: '16.89',
  solveRate: '77.1%',
  solutions: [ '10×2+7-3', '(10×7+2)/3' ],
  index: 1192
}
{
  _id: '2 7 10 10',
  numbers: [ 2, 7, 10, 10 ],
  time: '16.91',
  solveRate: '68.3%',
  solutions: [ '(10-2)×(10-7)', '(10+7)×2-10' ],
  index: 1193
}
{
  _id: '2 3 7 7',
  numbers: [ 2, 3, 7, 7 ],
  time: '17.14',
  solveRate: '76.3%',
  solutions: [ '7×2+7+3' ],
  index: 1194
}
{
  _id: '2 2 9 12',
  numbers: [ 2, 2, 9, 12 ],
  time: '17.16',
  solveRate: '73.2%',
  solutions: [ '(2+2)×9-12', '9×2×2-12', '9×2+12/2' ],
  index: 1195
}
{
  _id: '5 7 7 10',
  numbers: [ 5, 7, 7, 10 ],
  time: '17.16',
  solveRate: '68%',
  solutions: [ '(7-5)×7+10' ],
  index: 1196
}
{
  _id: '3 5 7 12',
  numbers: [ 3, 5, 7, 12 ],
  time: '17.2',
  solveRate: '71.1%',
  solutions: [ '(7+3)×12/5', '12×3-7-5', '(7+5)×3-12' ],
  index: 1197
}
{
  _id: '9 9 9 12',
  numbers: [ 9, 9, 9, 12 ],
  time: '17.21',
  solveRate: '64.3%',
  solutions: [ '(9+9)×12/9' ],
  index: 1198
}
{
  _id: '3 5 8 9',
  numbers: [ 3, 5, 8, 9 ],
  time: '17.35',
  solveRate: '75.9%',
  solutions: [ '9×3+5-8', '(8-5)×9-3' ],
  index: 1199
}
{
  _id: '3 6 8 10',
  numbers: [ 3, 6, 8, 10 ],
  time: '17.35',
  solveRate: '67%',
  solutions: [ '(10+6-8)×3' ],
  index: 1200
}
{
  _id: '3 9 9 11',
  numbers: [ 3, 9, 9, 11 ],
  time: '17.46',
  solveRate: '70.5%',
  solutions: [ '(9+3)×(11-9)', '11×9/3-9' ],
  index: 1201
}
{
  _id: '2 8 10 12',
  numbers: [ 2, 8, 10, 12 ],
  time: '17.6',
  solveRate: '79.8%',
  solutions: [ '10×2+12-8', '12/2+10+8', '(10+8)×2-12' ],
  index: 1202
}
{
  _id: '3 8 9 13',
  numbers: [ 3, 8, 9, 13 ],
  time: '17.7',
  solveRate: '73.4%',
  solutions: [ '9/3+13+8', '(13-8)×3+9' ],
  index: 1203
}
{
  _id: '2 6 7 10',
  numbers: [ 2, 6, 7, 10 ],
  time: '17.76',
  solveRate: '70.1%',
  solutions: [ '(6+2)×(10-7)', '(7×2-10)×6' ],
  index: 1204
}
{
  _id: '3 4 8 13',
  numbers: [ 3, 4, 8, 13 ],
  time: '17.82',
  solveRate: '70.3%',
  solutions: [ '(13-4)×8/3', '8/(13/3-4)' ],
  index: 1205
}
{
  _id: '8 10 12 13',
  numbers: [ 8, 10, 12, 13 ],
  time: '17.99',
  solveRate: '67.6%',
  solutions: [ '12×10/(13-8)' ],
  index: 1206
}
{
  _id: '2 6 9 10',
  numbers: [ 2, 6, 9, 10 ],
  time: '18.27',
  solveRate: '69.9%',
  solutions: [ '(10-2)×(9-6)', '(9-10/2)×6' ],
  index: 1207
}
{
  _id: '3 5 12 13',
  numbers: [ 3, 5, 12, 13 ],
  time: '18.29',
  solveRate: '68.3%',
  solutions: [ '(5×3-13)×12', '(13-3)×12/5' ],
  index: 1208
}
{
  _id: '2 6 8 9',
  numbers: [ 2, 6, 8, 9 ],
  time: '18.53',
  solveRate: '72.3%',
  solutions: [ '(6×2-9)×8', '9×8×2/6' ],
  index: 1209
}
{
  _id: '4 5 6 9',
  numbers: [ 4, 5, 6, 9 ],
  time: '18.53',
  solveRate: '75.2%',
  solutions: [ '9+6+5+4' ],
  index: 1210
}
{
  _id: '3 5 9 10',
  numbers: [ 3, 5, 9, 10 ],
  time: '18.61',
  solveRate: '68.3%',
  solutions: [ '(9+3)×10/5', '(10-5)×3+9' ],
  index: 1211
}
{
  _id: '2 4 7 8',
  numbers: [ 2, 4, 7, 8 ],
  time: '18.86',
  solveRate: '76.4%',
  solutions: [ '(7×2-8)×4', '8×7/2-4', '7×4-8/2' ],
  index: 1212
}
{
  _id: '4 8 9 12',
  numbers: [ 4, 8, 9, 12 ],
  time: '18.96',
  solveRate: '72.5%',
  solutions: [ '9×8×4/12', '(8-4)×9-12', '9×8-12×4' ],
  index: 1213
}
{
  _id: '1 3 3 8',
  numbers: [ 1, 3, 3, 8 ],
  time: '19.08',
  solveRate: '74.4%',
  solutions: [ '(8+1)×3-3', '(8-1)×3+3' ],
  index: 1214
}
{
  _id: '2 2 4 12',
  numbers: [ 2, 2, 4, 12 ],
  time: '19.08',
  solveRate: '75.1%',
  solutions: [ '(4+2)×2+12', '(12+2)×2-4', '(12-2)×2+4' ],
  index: 1215
}
{
  _id: '2 2 9 10',
  numbers: [ 2, 2, 9, 10 ],
  time: '19.15',
  solveRate: '65.5%',
  solutions: [ '(9-2)×2+10' ],
  index: 1216
}
{
  _id: '2 3 10 10',
  numbers: [ 2, 3, 10, 10 ],
  time: '19.28',
  solveRate: '69.3%',
  solutions: [ '(10-3)×2+10' ],
  index: 1217
}
{
  _id: '2 3 11 11',
  numbers: [ 2, 3, 11, 11 ],
  time: '19.28',
  solveRate: '68.7%',
  solutions: [ '11×3+2-11' ],
  index: 1218
}
{
  _id: '2 2 4 4',
  numbers: [ 2, 2, 4, 4 ],
  time: '19.34',
  solveRate: '72.2%',
  solutions: [ '(4×2-2)×4', '(4×2+4)×2' ],
  index: 1219
}
{
  _id: '6 8 8 9',
  numbers: [ 6, 8, 8, 9 ],
  time: '19.46',
  solveRate: '63.1%',
  solutions: [ '9×8-8×6', '(8+8)×9/6' ],
  index: 1220
}
{
  _id: '2 7 10 12',
  numbers: [ 2, 7, 10, 12 ],
  time: '19.48',
  solveRate: '70.2%',
  solutions: [ '12×10/(7-2)', '10/2+12+7', '(7-10/2)×12' ],
  index: 1221
}
{
  _id: '8 10 12 12',
  numbers: [ 8, 10, 12, 12 ],
  time: '19.64',
  solveRate: '63.5%',
  solutions: [ '(12+8)×12/10', '12×10-12×8' ],
  index: 1222
}
{
  _id: '6 8 10 11',
  numbers: [ 6, 8, 10, 11 ],
  time: '19.67',
  solveRate: '64.9%',
  solutions: [ '(11-8)×10-6' ],
  index: 1223
}
{
  _id: '2 3 9 12',
  numbers: [ 2, 3, 9, 12 ],
  time: '19.72',
  solveRate: '67.6%',
  solutions: [ '(9-3)×2+12' ],
  index: 1224
}
{
  _id: '7 8 8 10',
  numbers: [ 7, 8, 8, 10 ],
  time: '19.79',
  solveRate: '61.2%',
  solutions: [ '10×8-8×7' ],
  index: 1225
}
{
  _id: '10 10 10 12',
  numbers: [ 10, 10, 10, 12 ],
  time: '19.84',
  solveRate: '61.6%',
  solutions: [ '(10+10)×12/10' ],
  index: 1226
}
{
  _id: '3 5 10 11',
  numbers: [ 3, 5, 10, 11 ],
  time: '20.2',
  solveRate: '69.8%',
  solutions: [ '10×3+5-11', '(10-3)×5-11' ],
  index: 1227
}
{
  _id: '1 5 7 10',
  numbers: [ 1, 5, 7, 10 ],
  time: '20.41',
  solveRate: '69.2%',
  solutions: [ '7×5-10-1', '(7/5+1)×10' ],
  index: 1228
}
{
  _id: '5 9 12 13',
  numbers: [ 5, 9, 12, 13 ],
  time: '20.41',
  solveRate: '64.5%',
  solutions: [ '(13+5)×12/9', '(13-5)×(12-9)' ],
  index: 1229
}
{
  _id: '1 2 8 10',
  numbers: [ 1, 2, 8, 10 ],
  time: '20.52',
  solveRate: '67.9%',
  solutions: [ '(8-1)×2+10' ],
  index: 1230
}
{
  _id: '1 3 8 11',
  numbers: [ 1, 3, 8, 11 ],
  time: '20.52',
  solveRate: '73.4%',
  solutions: [ '11×3-8-1' ],
  index: 1231
}
{
  _id: '2 7 12 12',
  numbers: [ 2, 7, 12, 12 ],
  time: '20.6',
  solveRate: '62.9%',
  solutions: [ '(7×2-12)×12', '(12+2)×12/7' ],
  index: 1232
}
{
  _id: '2 3 3 5',
  numbers: [ 2, 3, 3, 5 ],
  time: '20.79',
  solveRate: '69.6%',
  solutions: [ '(5+2)×3+3', '(5×3-3)×2' ],
  index: 1233
}
{
  _id: '9 11 12 12',
  numbers: [ 9, 11, 12, 12 ],
  time: '20.79',
  solveRate: '59.6%',
  solutions: [ '12×11-12×9' ],
  index: 1234
}
{
  _id: '1 6 10 12',
  numbers: [ 1, 6, 10, 12 ],
  time: '20.88',
  solveRate: '66.1%',
  solutions: [ '12×10/(6-1)' ],
  index: 1235
}
{
  _id: '3 5 7 11',
  numbers: [ 3, 5, 7, 11 ],
  time: '20.91',
  solveRate: '64.3%',
  solutions: [ '(11-5)×(7-3)', '(11×7-5)/3' ],
  index: 1236
}
{
  _id: '3 6 9 13',
  numbers: [ 3, 6, 9, 13 ],
  time: '20.93',
  solveRate: '69%',
  solutions: [ '6/3+13+9', '(13+3)×9/6', '13×3-9-6' ],
  index: 1237
}
{
  _id: '4 4 8 9',
  numbers: [ 4, 4, 8, 9 ],
  time: '20.96',
  solveRate: '69.6%',
  solutions: [ '9×4-8-4' ],
  index: 1238
}
{
  _id: '2 3 5 8',
  numbers: [ 2, 3, 5, 8 ],
  time: '21.14',
  solveRate: '72.9%',
  solutions: [ '8×2+5+3', '(5+3)×2+8', '8/(2-5/3)' ],
  index: 1239
}
{
  _id: '3 3 7 8',
  numbers: [ 3, 3, 7, 8 ],
  time: '21.25',
  solveRate: '68.4%',
  solutions: [ '3×3+8+7' ],
  index: 1240
}
{
  _id: '4 5 7 10',
  numbers: [ 4, 5, 7, 10 ],
  time: '21.59',
  solveRate: '63.8%',
  solutions: [ '(7-5)×10+4' ],
  index: 1241
}
{
  _id: '5 7 10 13',
  numbers: [ 5, 7, 10, 13 ],
  time: '22.37',
  solveRate: '61.6%',
  solutions: [ '(13-5)×(10-7)' ],
  index: 1242
}
{
  _id: '2 9 10 10',
  numbers: [ 2, 9, 10, 10 ],
  time: '22.54',
  solveRate: '60.5%',
  solutions: [ '10/2+10+9' ],
  index: 1243
}
{
  _id: '2 4 5 10',
  numbers: [ 2, 4, 5, 10 ],
  time: '22.81',
  solveRate: '67.3%',
  solutions: [ '5×2+10+4' ],
  index: 1244
}
{
  _id: '2 3 6 8',
  numbers: [ 2, 3, 6, 8 ],
  time: '22.87',
  solveRate: '75.3%',
  solutions: [ '(8+2)×3-6', '6×3+8-2', '(8-2)×3+6' ],
  index: 1245
}
{
  _id: '3 4 5 13',
  numbers: [ 3, 4, 5, 13 ],
  time: '23.16',
  solveRate: '66.1%',
  solutions: [ '(13+5)×4/3', '5×3+13-4' ],
  index: 1246
}
{
  _id: '5 9 11 13',
  numbers: [ 5, 9, 11, 13 ],
  time: '23.2',
  solveRate: '61.2%',
  solutions: [ '(11-5)×(13-9)' ],
  index: 1247
}
{
  _id: '1 5 9 12',
  numbers: [ 1, 5, 9, 12 ],
  time: '23.59',
  solveRate: '62.8%',
  solutions: [ '(5-1)×9-12', '(9+1)×12/5' ],
  index: 1248
}
{
  _id: '2 5 10 12',
  numbers: [ 2, 5, 10, 12 ],
  time: '24.26',
  solveRate: '64.1%',
  solutions: [ '(12+5)×2-10', '(12-5)×2+10' ],
  index: 1249
}
{
  _id: '2 4 5 5',
  numbers: [ 2, 4, 5, 5 ],
  time: '24.29',
  solveRate: '60.6%',
  solutions: [ '(5+5)×2+4' ],
  index: 1250
}
{
  _id: '3 4 4 4',
  numbers: [ 3, 4, 4, 4 ],
  time: '24.31',
  solveRate: '67.3%',
  solutions: [ '(4+3)×4-4' ],
  index: 1251
}
{
  _id: '2 2 5 8',
  numbers: [ 2, 2, 5, 8 ],
  time: '24.34',
  solveRate: '63.8%',
  solutions: [ '(8+5)×2-2' ],
  index: 1252
}
{
  _id: '6 6 7 11',
  numbers: [ 6, 6, 7, 11 ],
  time: '24.39',
  solveRate: '58%',
  solutions: [ '11×6-7×6' ],
  index: 1253
}
{
  _id: '5 6 6 9',
  numbers: [ 5, 6, 6, 9 ],
  time: '24.4',
  solveRate: '59.2%',
  solutions: [ '9×6-6×5' ],
  index: 1254
}
{
  _id: '3 4 7 8',
  numbers: [ 3, 4, 7, 8 ],
  time: '24.43',
  solveRate: '61.6%',
  solutions: [ '(7-3)×4+8' ],
  index: 1255
}
{
  _id: '5 7 9 10',
  numbers: [ 5, 7, 9, 10 ],
  time: '24.45',
  solveRate: '61.6%',
  solutions: [ '(10-7)×5+9' ],
  index: 1256
}
{
  _id: '4 10 11 12',
  numbers: [ 4, 10, 11, 12 ],
  time: '24.59',
  solveRate: '63%',
  solutions: [ '12/4+11+10' ],
  index: 1257
}
{
  _id: '3 5 10 10',
  numbers: [ 3, 5, 10, 10 ],
  time: '24.86',
  solveRate: '54.5%',
  solutions: [ '(10-10/5)×3' ],
  index: 1258
}
{
  _id: '8 8 9 12',
  numbers: [ 8, 8, 9, 12 ],
  time: '24.96',
  solveRate: '56.7%',
  solutions: [ '12×8-9×8' ],
  index: 1259
}
{
  _id: '8 9 11 11',
  numbers: [ 8, 9, 11, 11 ],
  time: '25',
  solveRate: '58.4%',
  solutions: [ '(11-8)×11-9' ],
  index: 1260
}
{
  _id: '4 9 10 12',
  numbers: [ 4, 9, 10, 12 ],
  time: '25.03',
  solveRate: '62.2%',
  solutions: [ '12×10/(9-4)' ],
  index: 1261
}
{
  _id: '2 2 6 11',
  numbers: [ 2, 2, 6, 11 ],
  time: '25.15',
  solveRate: '62.2%',
  solutions: [ '(11-2)×2+6' ],
  index: 1262
}
{
  _id: '4 7 8 10',
  numbers: [ 4, 7, 8, 10 ],
  time: '25.94',
  solveRate: '63%',
  solutions: [ '8×7/4+10' ],
  index: 1263
}
{
  _id: '5 6 7 9',
  numbers: [ 5, 6, 7, 9 ],
  time: '26.21',
  solveRate: '60.3%',
  solutions: [ '(7-5)×9+6' ],
  index: 1264
}
{
  _id: '3 9 11 13',
  numbers: [ 3, 9, 11, 13 ],
  time: '26.33',
  solveRate: '57.4%',
  solutions: [ '(9+3)×(13-11)' ],
  index: 1265
}
{
  _id: '2 6 9 9',
  numbers: [ 2, 6, 9, 9 ],
  time: '26.37',
  solveRate: '58.1%',
  solutions: [ '(9+9-6)×2', '(6/9+2)×9' ],
  index: 1266
}
{
  _id: '2 3 13 13',
  numbers: [ 2, 3, 13, 13 ],
  time: '26.81',
  solveRate: '58.3%',
  solutions: [ '13×3-13-2' ],
  index: 1267
}
{
  _id: '1 7 12 13',
  numbers: [ 1, 7, 12, 13 ],
  time: '26.97',
  solveRate: '56.8%',
  solutions: [ '(13+1)×12/7' ],
  index: 1268
}
{
  _id: '4 10 10 11',
  numbers: [ 4, 10, 10, 11 ],
  time: '27.48',
  solveRate: '54.8%',
  solutions: [ '11×4-10-10' ],
  index: 1269
}
{
  _id: '1 4 9 13',
  numbers: [ 1, 4, 9, 13 ],
  time: '27.53',
  solveRate: '61.1%',
  solutions: [ '9×4+1-13' ],
  index: 1270
}
{
  _id: '3 4 5 11',
  numbers: [ 3, 4, 5, 11 ],
  time: '27.94',
  solveRate: '63.2%',
  solutions: [ '(4+3)×5-11', '11×3-5-4' ],
  index: 1271
}
{
  _id: '3 3 6 6',
  numbers: [ 3, 3, 6, 6 ],
  time: '28.01',
  solveRate: '58.5%',
  solutions: [ '(6/3+6)×3' ],
  index: 1272
}
{
  _id: '6 6 9 13',
  numbers: [ 6, 6, 9, 13 ],
  time: '28.5',
  solveRate: '54%',
  solutions: [ '13×6-9×6' ],
  index: 1273
}
{
  _id: '4 5 9 12',
  numbers: [ 4, 5, 9, 12 ],
  time: '29.07',
  solveRate: '60.9%',
  solutions: [ '12×5/4+9', '12×5-9×4' ],
  index: 1274
}
{
  _id: '2 2 7 10',
  numbers: [ 2, 2, 7, 10 ],
  time: '30.48',
  solveRate: '53.4%',
  solutions: [ '(10/2+7)×2' ],
  index: 1275
}
{
  _id: '4 4 7 13',
  numbers: [ 4, 4, 7, 13 ],
  time: '30.52',
  solveRate: '53.9%',
  solutions: [ '13×4-7×4' ],
  index: 1276
}
{
  _id: '2 3 7 9',
  numbers: [ 2, 3, 7, 9 ],
  time: '30.53',
  solveRate: '57.4%',
  solutions: [ '(9+7)×3/2', '(7-2)×3+9', '(7×3-9)×2' ],
  index: 1277
}
{
  _id: '1 4 6 10',
  numbers: [ 1, 4, 6, 10 ],
  time: '30.96',
  solveRate: '56.5%',
  solutions: [ '(4-1)×10-6' ],
  index: 1278
}
{
  _id: '2 5 12 13',
  numbers: [ 2, 5, 12, 13 ],
  time: '31.05',
  solveRate: '57.9%',
  solutions: [ '12/2+13+5', '(13+5)×2-12' ],
  index: 1279
}
{
  _id: '3 6 7 10',
  numbers: [ 3, 6, 7, 10 ],
  time: '32.35',
  solveRate: '57.3%',
  solutions: [ '7×6/3+10' ],
  index: 1280
}
{
  _id: '2 5 8 12',
  numbers: [ 2, 5, 8, 12 ],
  time: '32.56',
  solveRate: '54.8%',
  solutions: [ '(5×2-8)×12', '(8+2)×12/5' ],
  index: 1281
}
{
  _id: '1 2 7 7',
  numbers: [ 1, 2, 7, 7 ],
  time: '32.59',
  solveRate: '55.3%',
  solutions: [ '(7×7-1)/2' ],
  index: 1282
}
{
  _id: '2 2 3 10',
  numbers: [ 2, 2, 3, 10 ],
  time: '34.44',
  solveRate: '55.5%',
  solutions: [ '(10+3)×2-2' ],
  index: 1283
}
{
  _id: '3 8 10 12',
  numbers: [ 3, 8, 10, 12 ],
  time: '34.45',
  solveRate: '53.4%',
  solutions: [ '12×10/(8-3)' ],
  index: 1284
}
{
  _id: '6 7 11 11',
  numbers: [ 6, 7, 11, 11 ],
  time: '34.91',
  solveRate: '46.4%',
  solutions: [ '(11-6)×7-11' ],
  index: 1285
}
{
  _id: '2 5 7 9',
  numbers: [ 2, 5, 7, 9 ],
  time: '35.16',
  solveRate: '52.9%',
  solutions: [ '7×5-9-2' ],
  index: 1286
}
{
  _id: '7 9 11 12',
  numbers: [ 7, 9, 11, 12 ],
  time: '35.3',
  solveRate: '50.1%',
  solutions: [ '(11+7)×12/9', '(11-7)×9-12' ],
  index: 1287
}
{
  _id: '2 4 7 7',
  numbers: [ 2, 4, 7, 7 ],
  time: '35.36',
  solveRate: '50.9%',
  solutions: [ '(7+7)×2-4' ],
  index: 1288
}
{
  _id: '2 2 6 9',
  numbers: [ 2, 2, 6, 9 ],
  time: '35.86',
  solveRate: '52.2%',
  solutions: [ '(6/2+9)×2', '(9×2-6)×2' ],
  index: 1289
}
{
  _id: '4 7 9 11',
  numbers: [ 4, 7, 9, 11 ],
  time: '37.4',
  solveRate: '51.4%',
  solutions: [ '(7-4)×11-9', '(9-4)×7-11' ],
  index: 1290
}
{
  _id: '2 2 3 5',
  numbers: [ 2, 2, 3, 5 ],
  time: '37.71',
  solveRate: '51.8%',
  solutions: [ '(5×2-2)×3' ],
  index: 1291
}
{
  _id: '3 6 6 10',
  numbers: [ 3, 6, 6, 10 ],
  time: '38.42',
  solveRate: '50.4%',
  solutions: [ '(6-3)×10-6' ],
  index: 1292
}
{
  _id: '5 5 8 11',
  numbers: [ 5, 5, 8, 11 ],
  time: '38.62',
  solveRate: '45.8%',
  solutions: [ '8×5-11-5' ],
  index: 1293
}
{
  _id: '5 10 10 11',
  numbers: [ 5, 10, 10, 11 ],
  time: '39.89',
  solveRate: '41.9%',
  solutions: [ '(11×10+10)/5' ],
  index: 1294
}
{
  _id: '7 8 9 12',
  numbers: [ 7, 8, 9, 12 ],
  time: '40.48',
  solveRate: '48.7%',
  solutions: [ '(12+9)×8/7', '(9+7)×12/8' ],
  index: 1295
}
{
  _id: '1 5 11 11',
  numbers: [ 1, 5, 11, 11 ],
  time: '41.18',
  solveRate: '43.4%',
  solutions: [ '(11×11-1)/5' ],
  index: 1296
}
{
  _id: '1 2 9 11',
  numbers: [ 1, 2, 9, 11 ],
  time: '44.7',
  solveRate: '45.2%',
  solutions: [ '(2+1)×11-9' ],
  index: 1297
}
{
  _id: '1 5 5 5',
  numbers: [ 1, 5, 5, 5 ],
  time: '44.95',
  solveRate: '43.7%',
  solutions: [ '(5-1/5)×5' ],
  index: 1298
}
{
  _id: '4 9 11 11',
  numbers: [ 4, 9, 11, 11 ],
  time: '45.73',
  solveRate: '43.4%',
  solutions: [ '11×4-11-9' ],
  index: 1299
}
{
  _id: '1 7 13 13',
  numbers: [ 1, 7, 13, 13 ],
  time: '46.57',
  solveRate: '41.9%',
  solutions: [ '(13×13-1)/7' ],
  index: 1300
}
{
  _id: '5 9 10 11',
  numbers: [ 5, 9, 10, 11 ],
  time: '46.96',
  solveRate: '42.8%',
  solutions: [ '9×5-11-10' ],
  index: 1301
}
{
  _id: '3 3 7 7',
  numbers: [ 3, 3, 7, 7 ],
  time: '47.05',
  solveRate: '41.3%',
  solutions: [ '(3/7+3)×7' ],
  index: 1302
}
{
  _id: '5 10 10 13',
  numbers: [ 5, 10, 10, 13 ],
  time: '47.29',
  solveRate: '38.8%',
  solutions: [ '(13×10-10)/5' ],
  index: 1303
}
{
  _id: '6 7 7 11',
  numbers: [ 6, 7, 7, 11 ],
  time: '48.5',
  solveRate: '42.2%',
  solutions: [ '7×6-11-7' ],
  index: 1304
}
{
  _id: '3 5 8 13',
  numbers: [ 3, 5, 8, 13 ],
  time: '50.08',
  solveRate: '41.6%',
  solutions: [ '8×5-13-3' ],
  index: 1305
}
{
  _id: '8 9 10 12',
  numbers: [ 8, 9, 10, 12 ],
  time: '50.75',
  solveRate: '42.7%',
  solutions: [ '(10+8)×12/9', '12×10/8+9' ],
  index: 1306
}
{
  _id: '2 5 6 9',
  numbers: [ 2, 5, 6, 9 ],
  time: '52.24',
  solveRate: '44.2%',
  solutions: [ '6×5/2+9' ],
  index: 1307
}
{
  _id: '1 6 11 13',
  numbers: [ 1, 6, 11, 13 ],
  time: '53.47',
  solveRate: '38.5%',
  solutions: [ '(13×11+1)/6' ],
  index: 1308
}
{
  _id: '4 4 7 7',
  numbers: [ 4, 4, 7, 7 ],
  time: '54.4',
  solveRate: '39.4%',
  solutions: [ '(4-4/7)×7' ],
  index: 1309
}
{
  _id: '1 3 9 10',
  numbers: [ 1, 3, 9, 10 ],
  time: '54.42',
  solveRate: '40.9%',
  solutions: [ '(10+1)×3-9' ],
  index: 1310
}
{
  _id: '4 6 6 10',
  numbers: [ 4, 6, 6, 10 ],
  time: '55.51',
  solveRate: '40.3%',
  solutions: [ '(10+6)×6/4' ],
  index: 1311
}
{
  _id: '6 12 12 13',
  numbers: [ 6, 12, 12, 13 ],
  time: '55.85',
  solveRate: '38.2%',
  solutions: [ '(13×12-12)/6' ],
  index: 1312
}
{
  _id: '5 7 9 12',
  numbers: [ 5, 7, 9, 12 ],
  time: '56.29',
  solveRate: '40%',
  solutions: [ '(9+5)×12/7' ],
  index: 1313
}
{
  _id: '2 2 11 11',
  numbers: [ 2, 2, 11, 11 ],
  time: '56.32',
  solveRate: '40.3%',
  solutions: [ '(2/11+2)×11' ],
  index: 1314
}
{
  _id: '4 6 7 9',
  numbers: [ 4, 6, 7, 9 ],
  time: '56.9',
  solveRate: '42.4%',
  solutions: [ '(9+7)×6/4' ],
  index: 1315
}
{
  _id: '4 5 6 12',
  numbers: [ 4, 5, 6, 12 ],
  time: '57.54',
  solveRate: '44.2%',
  solutions: [ '(6+4)×12/5' ],
  index: 1316
}
{
  _id: '4 4 10 10',
  numbers: [ 4, 4, 10, 10 ],
  time: '58',
  solveRate: '39.9%',
  solutions: [ '(10×10-4)/4' ],
  index: 1317
}
{
  _id: '4 5 6 11',
  numbers: [ 4, 5, 6, 11 ],
  time: '60.01',
  solveRate: '38%',
  solutions: [ '(11+5)×6/4' ],
  index: 1318
}
{
  _id: '4 7 11 13',
  numbers: [ 4, 7, 11, 13 ],
  time: '60.88',
  solveRate: '37.1%',
  solutions: [ '11×4-13-7' ],
  index: 1319
}
{
  _id: '3 5 8 12',
  numbers: [ 3, 5, 8, 12 ],
  time: '61.29',
  solveRate: '38.3%',
  solutions: [ '(5×3-12)×8', '(12+3)×8/5' ],
  index: 1320
}
{
  _id: '3 4 6 13',
  numbers: [ 3, 4, 6, 13 ],
  time: '62.93',
  solveRate: '40.4%',
  solutions: [ '(13+3)×6/4', '6/(13/4-3)' ],
  index: 1321
}
{
  _id: '6 7 8 12',
  numbers: [ 6, 7, 8, 12 ],
  time: '63.12',
  solveRate: '40.7%',
  solutions: [ '(8+6)×12/7' ],
  index: 1322
}
{
  _id: '2 4 11 12',
  numbers: [ 2, 4, 11, 12 ],
  time: '63.23',
  solveRate: '39.4%',
  solutions: [ '(11-2)×4-12' ],
  index: 1323
}
{
  _id: '6 11 12 12',
  numbers: [ 6, 11, 12, 12 ],
  time: '63.38',
  solveRate: '36.6%',
  solutions: [ '(12×11+12)/6' ],
  index: 1324
}
{
  _id: '2 2 13 13',
  numbers: [ 2, 2, 13, 13 ],
  time: '63.54',
  solveRate: '37.4%',
  solutions: [ '(2-2/13)×13' ],
  index: 1325
}
{
  _id: '5 7 10 11',
  numbers: [ 5, 7, 10, 11 ],
  time: '63.65',
  solveRate: '35.5%',
  solutions: [ '(10-5)×7-11' ],
  index: 1326
}
{
  _id: '5 8 9 13',
  numbers: [ 5, 8, 9, 13 ],
  time: '64.28',
  solveRate: '35.1%',
  solutions: [ '9×5-13-8' ],
  index: 1327
}
{
  _id: '2 7 8 9',
  numbers: [ 2, 7, 8, 9 ],
  time: '66.52',
  solveRate: '40.2%',
  solutions: [ '(9+7)×2-8' ],
  index: 1328
}
{
  _id: '5 6 8 13',
  numbers: [ 5, 6, 8, 13 ],
  time: '66.77',
  solveRate: '36.7%',
  solutions: [ '(13+5)×8/6' ],
  index: 1329
}
{
  _id: '7 10 12 13',
  numbers: [ 7, 10, 12, 13 ],
  time: '67.34',
  solveRate: '37.6%',
  solutions: [ '(13+7)×12/10' ],
  index: 1330
}
{
  _id: '2 2 6 13',
  numbers: [ 2, 2, 6, 13 ],
  time: '70.35',
  solveRate: '33.4%',
  solutions: [ '(13+2)×2-6' ],
  index: 1331
}
{
  _id: '5 6 9 11',
  numbers: [ 5, 6, 9, 11 ],
  time: '71.11',
  solveRate: '33.3%',
  solutions: [ '(11+9)×6/5', '(11+5)×9/6' ],
  index: 1332
}
{
  _id: '1 4 7 11',
  numbers: [ 1, 4, 7, 11 ],
  time: '71.9',
  solveRate: '35.6%',
  solutions: [ '(4+1)×7-11' ],
  index: 1333
}
{
  _id: '6 9 9 10',
  numbers: [ 6, 9, 9, 10 ],
  time: '79.85',
  solveRate: '31.5%',
  solutions: [ '10×9/6+9' ],
  index: 1334
}
{
  _id: '2 5 7 8',
  numbers: [ 2, 5, 7, 8 ],
  time: '83.59',
  solveRate: '32.9%',
  solutions: [ '(5×2-7)×8' ],
  index: 1335
}
{
  _id: '7 8 8 13',
  numbers: [ 7, 8, 8, 13 ],
  time: '84.03',
  solveRate: '29.5%',
  solutions: [ '(13+8)×8/7' ],
  index: 1336
}
{
  _id: '5 7 7 11',
  numbers: [ 5, 7, 7, 11 ],
  time: '85.06',
  solveRate: '27.5%',
  solutions: [ '(5-11/7)×7' ],
  index: 1337
}
{
  _id: '4 8 8 11',
  numbers: [ 4, 8, 8, 11 ],
  time: '85.75',
  solveRate: '30.1%',
  solutions: [ '(11×8+8)/4' ],
  index: 1338
}
{
  _id: '4 8 8 13',
  numbers: [ 4, 8, 8, 13 ],
  time: '87.46',
  solveRate: '29.3%',
  solutions: [ '(13×8-8)/4' ],
  index: 1339
}
{
  _id: '3 3 7 13',
  numbers: [ 3, 3, 7, 13 ],
  time: '88.18',
  solveRate: '27.6%',
  solutions: [ '(7×3-13)×3' ],
  index: 1340
}
{
  _id: '3 8 8 10',
  numbers: [ 3, 8, 8, 10 ],
  time: '88.8',
  solveRate: '29.2%',
  solutions: [ '(10×8-8)/3' ],
  index: 1341
}
{
  _id: '7 8 10 11',
  numbers: [ 7, 8, 10, 11 ],
  time: '89.48',
  solveRate: '30%',
  solutions: [ '(11+10)×8/7' ],
  index: 1342
}
{
  _id: '2 7 7 10',
  numbers: [ 2, 7, 7, 10 ],
  time: '89.87',
  solveRate: '27%',
  solutions: [ '(10/7+2)×7' ],
  index: 1343
}
{
  _id: '2 3 8 13',
  numbers: [ 2, 3, 8, 13 ],
  time: '89.92',
  solveRate: '31.9%',
  solutions: [ '(13+3)×2-8' ],
  index: 1344
}
{
  _id: '5 5 7 11',
  numbers: [ 5, 5, 7, 11 ],
  time: '91.1',
  solveRate: '26.3%',
  solutions: [ '(7-11/5)×5' ],
  index: 1345
}
{
  _id: '2 2 10 11',
  numbers: [ 2, 2, 10, 11 ],
  time: '95.34',
  solveRate: '30.3%',
  solutions: [ '(11×2-10)×2' ],
  index: 1346
}
{
  _id: '3 3 8 8',
  numbers: [ 3, 3, 8, 8 ],
  time: '98.33',
  solveRate: '31.2%',
  solutions: [ '8/(3-8/3)' ],
  index: 1347
}
{
  _id: '1 6 6 8',
  numbers: [ 1, 6, 6, 8 ],
  time: '98.77',
  solveRate: '29.8%',
  solutions: [ '6/(1-6/8)' ],
  index: 1348
}
{
  _id: '9 11 12 13',
  numbers: [ 9, 11, 12, 13 ],
  time: '99.38',
  solveRate: '27.8%',
  solutions: [ '(13+9)×12/11' ],
  index: 1349
}
{
  _id: '3 3 5 7',
  numbers: [ 3, 3, 5, 7 ],
  time: '100.98',
  solveRate: '29.2%',
  solutions: [ '(5×3-7)×3' ],
  index: 1350
}
{
  _id: '1 8 12 12',
  numbers: [ 1, 8, 12, 12 ],
  time: '102.88',
  solveRate: '29.1%',
  solutions: [ '12/(12/8-1)' ],
  index: 1351
}
{
  _id: '3 6 6 11',
  numbers: [ 3, 6, 6, 11 ],
  time: '105.44',
  solveRate: '27.3%',
  solutions: [ '(11×6+6)/3' ],
  index: 1352
}
{
  _id: '2 9 13 13',
  numbers: [ 2, 9, 13, 13 ],
  time: '106.8',
  solveRate: '25%',
  solutions: [ '(13+9)/2+13' ],
  index: 1353
}
{
  _id: '2 4 7 12',
  numbers: [ 2, 4, 7, 12 ],
  time: '107.68',
  solveRate: '28.2%',
  solutions: [ '(7+2)×4-12', '12/(4-7/2)' ],
  index: 1354
}
{
  _id: '2 4 10 10',
  numbers: [ 2, 4, 10, 10 ],
  time: '109.74',
  solveRate: '25.8%',
  solutions: [ '(4/10+2)×10' ],
  index: 1355
}
{
  _id: '3 7 9 13',
  numbers: [ 3, 7, 9, 13 ],
  time: '110.45',
  solveRate: '25.9%',
  solutions: [ '9×7-13×3', '(7-13/3)×9' ],
  index: 1356
}
{
  _id: '3 5 7 13',
  numbers: [ 3, 5, 7, 13 ],
  time: '119.96',
  solveRate: '23.9%',
  solutions: [ '(13×5+7)/3' ],
  index: 1357
}
{
  _id: '2 5 5 10',
  numbers: [ 2, 5, 5, 10 ],
  time: '188.06',
  solveRate: '21.9%',
  solutions: [ '(5-2/10)×5' ],
  index: 1358
}
{
  _id: '1 4 5 6',
  numbers: [ 1, 4, 5, 6 ],
  time: '197.72',
  solveRate: '28.5%',
  solutions: [ '6/(5/4-1)', '4/(1-5/6)' ],
  index: 1359
}
{
  _id: '1 3 4 6',
  numbers: [ 1, 3, 4, 6 ],
  time: '200.56',
  solveRate: '26.9%',
  solutions: [ '6/(1-3/4)' ],
  index: 1360
}
{
  _id: '2 3 5 12',
  numbers: [ 2, 3, 5, 12 ],
  time: '208.38',
  solveRate: '20.5%',
  solutions: [ '12/(3-5/2)' ],
  index: 1361
}
]

module.exports = { allQuestions };
