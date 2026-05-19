/**
 * @swagger
 * /api/card/validate:
 *   post:
 *     summary: Valida cartão
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
 *     responses:
 *       200:
 *         description: Cartão validado
 */