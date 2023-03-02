import express from 'express'
import mongoose from 'mongoose'
import { bodyParser } from "body-parser"
import { addUser } from './routes/addUser';
import { userLogin } from './routes/loginAuthorization';
const app = express()
const port = 3001;
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
app.use(bodyParser.json());
app.use('/', addUser)
app.use('/', userLogin)
mongoose.connect('mongodb://localhost:3001/database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Error connecting to database:', error));
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});