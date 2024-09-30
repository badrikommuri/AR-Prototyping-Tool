// backend/server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/ar_prototyping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contextSchema = new mongoose.Schema({
  name: String,
  layout: Array,
});

const Context = mongoose.model('Context', contextSchema);

app.post('/save-context', async (req, res) => {
  const newContext = new Context(req.body);
  await newContext.save();
  res.send({ message: 'Context Saved' });
});

app.get('/get-contexts', async (req, res) => {
  const contexts = await Context.find();
  res.send(contexts);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
