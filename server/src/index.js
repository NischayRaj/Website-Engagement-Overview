const express = require("express");
const mongoose = require("mongoose");
const metricsRouter = require("./routes/metricsRouter");

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = "mongodb://localhost:27017/websiteEngagement"; // Change this to your MongoDB URI

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Middleware
app.use(express.json());

// Routes
app.use("/api/metrics", metricsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
