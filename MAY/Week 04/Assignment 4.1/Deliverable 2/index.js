// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let users = []; // In-memory data storage

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  users.push(user);
  res.status(201).json(user);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age || user.age;

  res.json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
