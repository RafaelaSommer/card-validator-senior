const express = require("express");
const router = express.Router();
const { validateCard } = require("../services/card.service");

router.post("/validate", (req, res) => {
  const { cardNumber } = req.body;

  if (!cardNumber) {
    return res.status(400).json({ error: "Card number required" });
  }

  const result = validateCard(cardNumber);
  res.json(result);
});

module.exports = router;