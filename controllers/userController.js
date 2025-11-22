
const users = require('../models/User');

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json({ message: "User created", data: newUser });
};

exports.getUsers = (req, res) => {
  res.json(users);
};
