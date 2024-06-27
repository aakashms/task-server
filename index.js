const express = require('express');
const connectDb = require('./db');
const app = express();

const newTask = require('./routes/new_task')
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

connectDb();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/', newTask )



app.listen(port, ()=>console.log('Server running Successfully at',port));