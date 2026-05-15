const { validateCard } = require("../src/services/card.service");

test("valid Visa card", () => {
  const result = validateCard("4111111111111111");
  expect(result.isValid).toBe(true);
  expect(result.flag).toBe("Visa");
});