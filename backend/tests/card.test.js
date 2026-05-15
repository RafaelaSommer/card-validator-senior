const { validateCard } = require("../src/services/card.service");

describe("Card Validator", () => {

  test("Deve validar Visa corretamente", () => {
    const result = validateCard("4111111111111111");

    expect(result.flag).toBe("Visa");
    expect(result.isValid).toBe(true);
  });

  test("Deve validar MasterCard corretamente", () => {
    const result = validateCard("5500000000000004");

    expect(result.flag).toBe("MasterCard");
    expect(result.isValid).toBe(true);
  });

  test("Deve retornar cartão inválido", () => {
    const result = validateCard("123456789");

    expect(result.isValid).toBe(false);
  });

});