const express = require("express");
const router = express.Router();

// POST route to create a new resource
router.post("/", (req, res) => {
  const userData = req.body;
  res.status(201).json({ message: "User created", data: userData });
});

// GET route to retrieve all resources
const users = [
  { id: 1, name: "Alice", email: "alice@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
];
router.get("/", (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users,
  });
});

module.exports = router;
