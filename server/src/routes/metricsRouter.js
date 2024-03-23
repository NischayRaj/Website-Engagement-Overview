// routes/metricsRouter.js

const express = require("express");
const router = express.Router();
const metricsController = require("../controllers/metricsController");

router.get("/", metricsController.getAllMetrics);
router.post("/", metricsController.addMetric);
router.put("/:id", metricsController.updateMetric);
router.delete("/:id", metricsController.deleteMetric);

module.exports = router;
