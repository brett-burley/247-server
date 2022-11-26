const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

async function connectDB()
{
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: '247',
    })

    console.log('Database Connected');
  } catch(err) {
    console.error(err.message)
    process.exit(1)
  }
}



module.exports = connectDB;

/*
async function addQuestions()
{
  await Questions.insertMany(allQuestions);
  console.log('Qustions Added');
}
*/
