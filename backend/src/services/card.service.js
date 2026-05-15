const validateLuhn = require("../utils/luhn");

function detectFlag(number) {
  const cleaned = number.replace(/\D/g, "");

  const patterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    
    MasterCard:
      /^(5[1-5][0-9]{14})$/,

    AmericanExpress:
      /^3[47][0-9]{13}$/,

    Discover:
      /^6(?:011|5[0-9]{2})[0-9]{12}$/,

    Elo:
      /^(4011|4312|4389|4514|4576|5041|5067|5090|6277|6363)/,

    Hipercard:
      /^(6062)/
  };

  for (let brand in patterns) {
    if (patterns[brand].test(cleaned)) {
      return brand;
    }
  }

  return "Desconhecida";
}

function validateCard(number) {
  return {
    cardNumber: number,
    flag: detectFlag(number),
    isValid: validateLuhn(number)
  };
}

module.exports = {
  validateCard
};