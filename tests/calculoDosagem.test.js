const { calcularDosagemTotal } = require("../src/calculoDosagem");

describe("calcularDosagemTotal", () => {
  test("calcula corretamente com valores válidos", () => {
    const resultado = calcularDosagemTotal(10, 5);
    expect(resultado).toBe(50);
  });

  test("lança erro quando área é negativa ou zero", () => {
    expect(() => calcularDosagemTotal(-1, 5)).toThrow();
  });

  test("lança erro quando dose é negativa ou zero", () => {
    expect(() => calcularDosagemTotal(10, 0)).toThrow();
  });

  test("lança erro quando dose é uma string", () => {
    expect(() => calcularDosagemTotal(10, "2")).toThrow();
  });

  test("lança erro quando a área é uma string", () => {
    expect(() => calcularDosagemTotal("10", 2)).toThrow();
  });
});