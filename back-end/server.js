import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';
import toDoSchema from './toDoSchema.js';
const app = express();
const port = process.env.PORT || 8001;
const mongo_uri =
  process.env.MONGO_URI ||
  'mongodb+srv://federico333:federico@nodeexpress.zmaq3.mongodb.net/toDoPortfolioBack?retryWrites=true&w=majority';

mongoose.connect(mongo_uri);

app.use(Cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ToDo Portfolio app');
});

app.get('/api/toDo', (req, res) => {
  toDoSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/toDo', (req, res) => {
  const toDoData = req.body;
  toDoSchema.create(toDoData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.delete('/api/toDo/:id', (req, res) => {
  toDoSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202).send(data);
    }
  });
});

app.delete('/api/toDo', (req, res) => {
  toDoSchema.deleteMany(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(205).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
