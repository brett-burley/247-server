const cluster = require('cluster');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const connectDB = require('./lib/db/');

const app = express();
const port = process.env.PORT || 3333;

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('common'));

app.use('/', require('./routes/'));

app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});



// Code to run if we're in the master process
/*
if (cluster.isMaster && process.env.NODE_ENV === 'production') {

    // Count the machine's CPUs
    const cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }


    // Listen for terminating workers
    cluster.on('exit', function (worker) {

      // Replace the terminated workers
      console.log('Worker ' + worker.id + ' died :(');
      cluster.fork();

    });

// Code to run if we're in a worker process
} else {
*/

