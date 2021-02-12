const averageStatus = require("./averageStatus");

/**
 * Teste unitário da função averageStatus
 *
 * Comportamento esperado - > Retornar uma média simples dos valores inseridos
 *
 * IMPORTANTE - Um teste bem feito deve verificar todos os limites especificados nos requisitos!
 *
 *  - repproved caso a média seja maior ou igual que 0 menor que 5
 *  - final exam caso a média seja maior ou igual a 5 e menor que 6
 *  - approved caso a média seja maior ou igual a 6 e menor que 10
 *  - perfect grade caso a média seja menor igual a 10
 *
 */

// Descrição do cenário a ser testado.
test("average grade 10.1 to be grade out of range", () => {
  expect(averageStatus(10.1)).toBe("grade out of range");
});

test("average grade -0.1 to be grade out of range", () => {
  expect(averageStatus(-0.1)).toBe("grade out of range");
});

test("average grade 10 to be perfect grade", () => {
  expect(averageStatus(10)).toBe("perfect grade");
});

test("average grade 9.9 to be approved", () => {
  expect(averageStatus(9.9)).toBe("approved");
});

test("average grade 6 to be approved", () => {
  expect(averageStatus(6)).toBe("approved");
});

test("average grade 5.9 to be final exam", () => {
  expect(averageStatus(5.9)).toBe("final exam");
});

test("average grade 5 to be final exam", () => {
  expect(averageStatus(5)).toBe("final exam");
});

test("average grade 4.9 to be repproved", () => {
  expect(averageStatus(4.9)).toBe("repproved");
});

test("average grade 0 to be repproved", () => {
  expect(averageStatus(0)).toBe("repproved");
});
