const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect')
require('dotenv').config()

// middlewares
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager app');
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port,  console.log(`Server is listening on http://localhost:${port}`));
  } catch (error) {
    console.error(error);
  }
}

start();