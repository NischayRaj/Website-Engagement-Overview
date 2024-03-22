// models/Metric.js

const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema({
  // Define your schema fields here
  // Example:
  pageViews: {
    type: Number,
    required: true,
  },
  bounceRate: {
    type: Number,
    required: true,
  },
  averageSessionDuration: {
    type: Number,
    required: true,
  },
});

const Metric = mongoose.model("Metric", metricSchema);

module.exports = Metric;
