const express = require("express");
const router = express.Router();

const { investmentGraph } = require("../graph/investmentGraph");

router.post("/analyze", async (req, res) => {
  try {
    const { company } = req.body;

    const result = await investmentGraph.invoke({
      company,
    });

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Analysis failed",
    });
  }
});

module.exports = router;