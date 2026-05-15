const validateLuhn = require("../utils/luhn");

function detectFlag(number) {
  const cleaned = number.replace(/\D/g, "");

  const patterns = {
    Visa: /^4/,
    MasterCard: /^5[1-5]/,
    Amex: /^3[47]/,
    Elo: /^(4011|4312|4389)/,
  };

  for (let brand in patterns) {
    if (patterns[brand].test(cleaned)) return brand;
  }

  return "Unknown";
}

function validateCard(number) {
  return {
    flag: detectFlag(number),
    isValid: validateLuhn(number)
  };
}

module.exports = { validateCard };