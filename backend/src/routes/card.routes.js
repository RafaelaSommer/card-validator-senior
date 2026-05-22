const express = require("express");

const router = express.Router();

const {
  validateCard
} = require("../services/card.service");

/**
 * @swagger
 * /api/card/validate:
 *   post:
 *     summary: Valida um cartão de crédito
 *     tags:
 *       - Cards
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cardNumber:
 *                 type: string
 *                 example: "4111111111111111"
 *     responses:
 *       200:
 *         description: Cartão validado com sucesso
 */
router.post("/validate", (req, res) => {

  const { cardNumber } = req.body;

  if (!cardNumber) {

    return res.status(400).json({
      error: "Número do cartão obrigatório"
    });
  }

  const result = validateCard(cardNumber);

  return res.status(200).json(result);
});

module.exports = router;