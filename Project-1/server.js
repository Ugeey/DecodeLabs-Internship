const express = require("express");
const app = express();
const userRoutes = require("./src/routes/userRoutes");

// middleware to handle json payloads
app.use(express.json());

// use the routes
app.use("/api/users", userRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // log the error stack trace for debugging
  res.status(500).json({
    error: "Internal Server Error",
    message: "An unexpected error occurred. Please try again later.",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
