const gradesAverage = require("./gradesAverage");

/**
 * Teste unitário da função gradesAverage
 *
 * Comportamento esperado - > Retornar o status de acordo com a média passada
 */

// Descrição do cenário a ser testado.
test("average between 10 and 2 to be 6", () => {
  expect(gradesAverage([10, 2])).toBe(6);
});

test("average between 20 and 10 to be 15", () => {
  expect(gradesAverage([10, 20])).toBe(15);
});
