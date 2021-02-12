const studentStatus = require("./studentStatus");
//Mock do módulo gradesAverage
jest.mock("./gradesAverage");
const gradesAverage = require("./gradesAverage");
//Mock do módulo averageStatus
jest.mock("./averageStatus");
const averageStatus = require("./averageStatus");

/**
 * Teste unitário da função studentStatus - sua verificação independe
 * dos módulos importadas por ele (nesse caso averageStatus e gradesAverage), verificando
 * o comportamento individual apenas da própria função studentStatus.
 *
 * Comportamento esperado   - > Chamada das funções averageStatus e grades Average
 *                          - > Retornar os valores formatado no padrão Grade: "Média" / Status: "Status"
 */

// Descrição do cenário a ser testado
test("um aluno com notas 8 e 5 seja aprovado e tenha média 6.5", () => {
  // Mock da implementação, gradesAverage irá retornar o valor: 6.5,
  // independente da função estar funcionando corretamente ou não.
  gradesAverage.mockImplementation(() => 6.5);

  // Mock da implementação, averageStatus irá retornar o valor: approved,
  // independente da função estar funcionando corretamente ou não.
  averageStatus.mockImplementation(() => "approved");

  //     resultado obtido             resultado esperado
  expect(studentStatus([8, 5])).toBe("Grade: 6.5 / Status: approved");

  expect(gradesAverage).toBeCalledTimes(1);
  expect(averageStatus).toBeCalledTimes(1);

  // Sobre .toBeCalledTimes
  // estrutura - > expect(módulo a ser chamado pela função testada).toBeCalledTimes(número de vezes esperado que a função seja chamada);
  // é identificado automáticamente quantas vezes a função foi chamada.
});
