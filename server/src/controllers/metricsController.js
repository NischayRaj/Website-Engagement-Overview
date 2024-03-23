// controllers/metricsController.js

const Metric = require('../models/Metric');

// Get all metrics
exports.getAllMetrics = async (req, res) => {
    try {
      const metrics = await Metric.find();
      res.setHeader('Content-Type', 'application/json'); // Set content type to JSON
      res.json(metrics);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Add a new metric
exports.addMetric = async (req, res) => {
  try {
    const newMetric = new Metric(req.body);
    await newMetric.save();
    res.json(newMetric);
  } catch (error) {
    console.error('Error adding metric:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a metric
exports.updateMetric = async (req, res) => {
  try {
    const { id } = req.params;
    await Metric.findByIdAndUpdate(id, req.body);
    res.json({ message: 'Metric updated successfully' });
  } catch (error) {
    console.error('Error updating metric:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a metric
exports.deleteMetric = async (req, res) => {
  try {
    const { id } = req.params;
    await Metric.findByIdAndDelete(id);
    res.json({ message: 'Metric deleted successfully' });
  } catch (error) {
    console.error('Error deleting metric:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
