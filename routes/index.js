const express = require('express');
const { getQuestions } = require('../utils/questions/questions');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('main route');
});

router.post('/questions', async (req, res) => {
  try {
    const { date } = req.body;
    const index = Number(date);

    const questions = await getQuestions(index);
    console.log('routes - questions: ', questions);

    res.send(questions);
  } catch(err) {
    console.error(err);
    return res.send('failure');
  }
});

module.exports = router;
