function validateLuhn(number) {
  const digits = number.replace(/\D/g, "");
  let sum = 0;
  let toggle = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i]);

    if (toggle) {
      n *= 2;
      if (n > 9) n -= 9;
    }

    sum += n;
    toggle = !toggle;
  }

  return sum % 10 === 0;
}

module.exports = validateLuhn;